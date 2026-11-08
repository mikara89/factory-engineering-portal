/* Static media controls only. No Factory API calls or stored execution data. */
(function () {
  "use strict";
  var current = null;
  function init() {
    var root = document.querySelector(".fe-showcase");
    if (current && current.root === root) return;
    if (current) { current.destroy(); current = null; }
    if (!root) return;
    var hero = root.querySelector("[data-showcase-hero]");
    if (!hero) return;
    var media = hero.querySelector(".fe-showcase-media");
    var video = hero.querySelector("video");
    var poster = hero.querySelector("picture img");
    var button = hero.querySelector(".fe-showcase-playback");
    var status = hero.querySelector(".fe-showcase-media-status");
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    var small = window.matchMedia("(max-width: 599px)");
    var tablet = window.matchMedia("(max-width: 839px)");
    var base = new URL(hero.dataset.assetBase, document.baseURI);
    var userPaused = false, inView = false, choice = "", token = 0, dead = false;
    video.muted = true;
    function name() {
      var theme = document.body.dataset.mdColorScheme === "slate" ? "dark" : "light";
      return { theme: theme, width: small.matches ? 358 : tablet.matches ? 688 : 840 };
    }
    function label() { button.textContent = video.paused ? "Play illustration" : "Pause illustration"; }
    function stop() { token++; video.pause(); label(); }
    function update() {
      if (dead) return;
      button.hidden = reduced.matches;
      if (reduced.matches) {
        stop(); media.classList.remove("has-video");
        video.removeAttribute("src"); video.load();
        status.textContent = "Reduced motion: static illustration.";
        return;
      }
      if (!status.textContent.startsWith("Animation unavailable")) status.textContent = "";
      if (userPaused || !inView || document.hidden) { stop(); return; }
      var active = name(), selected = active.theme + "-" + active.width;
      var expected = new URL(selected + "-loop.mp4", base).href;
      var request = ++token;
      var ready = poster.decode ? poster.decode().catch(function () {}) : Promise.resolve();
      ready.then(function () {
        if (dead || request !== token || reduced.matches || userPaused || !inView || document.hidden) return;
        if (video.src !== expected) { media.classList.remove("has-video"); video.src = expected; }
        var play = video.play();
        if (play) play.then(function () { if (!dead && request === token) { media.classList.add("has-video"); label(); } })
          .catch(function () { if (!dead && request === token) { userPaused = true; label(); } });
      });
    }
    function select() {
      if (dead) return;
      var active = name(), selected = active.theme + "-" + active.width;
      if (selected !== choice) {
        choice = selected; stop(); media.classList.remove("has-video");
        root.querySelectorAll("[data-showcase-picture]").forEach(function (picture) {
          var kind = picture.dataset.showcasePicture;
          var file = kind === "hero" ? selected + "-poster.png" : kind + "-" + active.theme + "-" + (small.matches ? 358 : 560) + ".png";
          var url = new URL(file, base).href;
          picture.querySelectorAll("source").forEach(function (source) { source.srcset = url; });
          picture.querySelector("img").src = url;
        });
      }
      update();
    }
    function toggle() { userPaused = !video.paused; update(); }
    function failed() {
      if (dead || !video.getAttribute("src")) return;
      stop(); userPaused = true; media.classList.remove("has-video");
      status.textContent = "Animation unavailable. The illustration remains visible.";
    }
    button.addEventListener("click", toggle);
    video.addEventListener("error", failed);
    video.addEventListener("pause", label);
    video.addEventListener("playing", label);
    reduced.addEventListener("change", select);
    small.addEventListener("change", select);
    tablet.addEventListener("change", select);
    document.addEventListener("visibilitychange", update);
    var observer = new IntersectionObserver(function (entries) { inView = entries[0].isIntersecting; update(); }, {threshold:0.15});
    observer.observe(media);
    var themeObserver = new MutationObserver(select);
    themeObserver.observe(document.body, {attributes:true, attributeFilter:["data-md-color-scheme"]});
    current = {root:root, destroy:function () {
      dead = true; stop(); observer.disconnect(); themeObserver.disconnect();
      button.removeEventListener("click", toggle);
      video.removeEventListener("error", failed);
      video.removeEventListener("pause", label);
      video.removeEventListener("playing", label);
      reduced.removeEventListener("change", select);
      small.removeEventListener("change", select);
      tablet.removeEventListener("change", select);
      document.removeEventListener("visibilitychange", update);
    }};
    select();
  }
  if (typeof document$ !== "undefined") document$.subscribe(init);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, {once:true});
  else init();
}());
