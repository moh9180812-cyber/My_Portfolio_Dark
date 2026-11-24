(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", saved);
  var btn = document.createElement("button");
  btn.className = "theme-toggle";
  btn.setAttribute("aria-label", "Toggle light / dark mode");
  function paint() {
    btn.textContent = root.getAttribute("data-theme") === "dark" ? "\u2600" : "\u263E";
  }
  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    paint();
  });
  paint();
  document.body.appendChild(btn);
})();
