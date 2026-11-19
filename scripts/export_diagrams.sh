#!/usr/bin/env bash
# Exports each draw.io source in diagrams/ to docs/assets/diagrams/<name>.svg.
# The SVG keeps the diagram source, so draw.io can open the exported file.
# The Pages workflow runs this script before the MkDocs build. The generated
# SVG files are not committed.
set -euo pipefail

src_dir="diagrams"
out_dir="docs/assets/diagrams"
mkdir -p "$out_dir"

shopt -s nullglob
sources=("$src_dir"/*.drawio)
if [ "${#sources[@]}" -eq 0 ]; then
  echo "No draw.io sources in $src_dir" >&2
  exit 1
fi

for src in "${sources[@]}"; do
  name="$(basename "$src" .drawio)"
  out="$out_dir/$name.svg"
  rm -f "$out"
  # draw.io desktop is an Electron application. In CI it needs a virtual
  # display and no Chromium sandbox.
  # --svg-theme light keeps the fixed colors. The default theme adds an
  # automatic dark variant with a near-black background.
  xvfb-run --auto-servernum drawio --export --format svg --svg-theme light --embed-diagram \
    --output "$out" "$src" --no-sandbox --disable-gpu
  if ! grep -q "<svg" "$out" 2>/dev/null; then
    echo "draw.io did not export $src" >&2
    exit 1
  fi
  echo "Exported $src -> $out"
done
