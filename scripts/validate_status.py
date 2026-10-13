"""Validate the published status snapshot before the portal is built.

The product repository validates the same file before export. This check runs
in the portal so a manual edit cannot publish malformed status data.
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

from jsonschema import Draft202012Validator, FormatChecker

ROOT = Path(__file__).resolve().parents[1]
STATUS = ROOT / "docs" / "data" / "status.json"
SCHEMA = ROOT / "docs" / "data" / "status.schema.json"


def _unique_object(pairs: list[tuple[str, object]]) -> dict[str, object]:
    result: dict[str, object] = {}
    for key, value in pairs:
        if key in result:
            raise ValueError(f"duplicate JSON field: {key}")
        result[key] = value
    return result


def _load(path: Path) -> object:
    return json.loads(path.read_text(encoding="utf-8"), object_pairs_hook=_unique_object)


def find_errors(status: object, schema: dict) -> list[str]:
    validator = Draft202012Validator(schema, format_checker=FormatChecker())
    errors = [
        f"{'/'.join(str(part) for part in error.absolute_path) or '<root>'}: {error.message}"
        for error in sorted(validator.iter_errors(status), key=lambda e: list(e.absolute_path))
    ]
    if errors or not isinstance(status, dict):
        return errors

    ids = [milestone["id"] for milestone in status["milestones"]]
    duplicates = sorted({identifier for identifier in ids if ids.count(identifier) > 1})
    if duplicates:
        errors.append("milestones: duplicate id " + ", ".join(duplicates))

    current_id = status["current_milestone_id"]
    phase = status["current_development_phase"]
    if current_id not in ids:
        errors.append(f"current_milestone_id: {current_id} is not a listed milestone")
    if not current_id.startswith(f"phase-{phase}"):
        errors.append(
            f"current_milestone_id: {current_id} does not match current_development_phase {phase}"
        )
    return errors


def main() -> int:
    try:
        status = _load(STATUS)
        schema = _load(SCHEMA)
    except (OSError, ValueError) as error:
        print(f"status validation failed: {error}", file=sys.stderr)
        return 1
    Draft202012Validator.check_schema(schema)
    errors = find_errors(status, schema)
    for error in errors:
        print(f"status validation failed: {error}", file=sys.stderr)
    if errors:
        return 1
    print(f"validated {STATUS.relative_to(ROOT).as_posix()} against {SCHEMA.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
