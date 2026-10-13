/*
 * Expandable Mermaid diagrams.
 *
 * Material renders each diagram into a closed shadow root at the width of the
 * content column, so wide diagrams can become hard to read. This script keeps
 * the diagram source and adds an "Expand" control that re-renders the same
 * source at natural size in a scrollable full-screen dialog.
 *
 * The script reads only page content. It sends nothing and stores nothing.
 */
(function () {
  "use strict";

  var dialog = null;
  var counter = 0;

  function ensureDialog() {
    if (dialog) return dialog;
    dialog = document.createElement("dialog");
    dialog.className = "fe-diagram-dialog";
    dialog.setAttribute("aria-label", "Expanded diagram");
    dialog.innerHTML =
      '<div class="fe-diagram-dialog__bar">' +
      '<span class="fe-diagram-dialog__hint">Scroll to pan. Press Esc to close.</span>' +
      '<button type="button" class="fe-diagram-dialog__close" aria-label="Close diagram">Close</button>' +
      "</div>" +
      '<div class="fe-diagram-dialog__body"></div>';
    dialog.querySelector(".fe-diagram-dialog__close").addEventListener("click", function () {
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) dialog.close();
    });
    dialog.addEventListener("close", function () {
      dialog.querySelector(".fe-diagram-dialog__body").innerHTML = "";
    });
    document.body.appendChild(dialog);
    return dialog;
  }

  function withNaturalWidth(source) {
    if (/%%\{/.test(source)) return source;
    var directive =
      '%%{init: {"flowchart": {"useMaxWidth": false}, "sequence": {"useMaxWidth": false}, "c4": {"useMaxWidth": false}}}%%\n';
    // A front-matter block (title, config) must stay first in the source.
    var frontMatter = /^\s*---\r?\n[\s\S]*?\r?\n---\r?\n/.exec(source);
    if (frontMatter) {
      return frontMatter[0] + directive + source.slice(frontMatter[0].length);
    }
    return directive + source;
  }

  function open(source) {
    var view = ensureDialog();
    var body = view.querySelector(".fe-diagram-dialog__body");
    body.textContent = "Rendering diagram…";
    view.showModal();
    if (!window.mermaid || typeof window.mermaid.render !== "function") {
      body.textContent = "The diagram renderer is not loaded yet. Try again in a moment.";
      return;
    }
    counter += 1;
    Promise.resolve(window.mermaid.render("fe-diagram-expanded-" + counter, withNaturalWidth(source)))
      .then(function (result) {
        body.innerHTML = typeof result === "string" ? result : result.svg;
      })
      .catch(function () {
        body.textContent = "The diagram could not be expanded.";
      });
  }

  function enhance() {
    // Material removes the "mermaid" class while the renderer loads, so also
    // match the bare <pre><code> that only Mermaid fences produce. Highlighted
    // code blocks always sit inside a ".highlight" wrapper.
    var blocks = document.querySelectorAll(".md-typeset pre");
    Array.prototype.forEach.call(blocks, function (pre) {
      var isDiagram =
        pre.classList.contains("mermaid") ||
        (!pre.closest(".highlight") && pre.firstElementChild && pre.firstElementChild.tagName === "CODE");
      if (!isDiagram) return;
      if (pre.parentElement && pre.parentElement.classList.contains("fe-diagram")) return;
      var source = pre.textContent;
      var wrapper = document.createElement("div");
      wrapper.className = "fe-diagram";
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);

      var button = document.createElement("button");
      button.type = "button";
      button.className = "fe-diagram__expand";
      button.setAttribute("aria-label", "Expand diagram to full size");
      button.title = "Expand diagram";
      button.innerHTML =
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 21v-2H6.41l4.5-4.5-1.41-1.41-4.5 4.5V14H3v7zm4.5-10.09 4.5-4.5V10h2V3h-7v2h3.59l-4.5 4.5z"/></svg>' +
        "<span>Expand</span>";
      button.addEventListener("click", function () {
        open(source);
      });
      wrapper.appendChild(button);
    });
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(enhance);
  } else {
    document.addEventListener("DOMContentLoaded", enhance);
  }
})();
