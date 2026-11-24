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
  var logo = document.querySelector("header nav .logo");
  if (logo) {
    var brand = document.createElement("div");
    brand.className = "brand";
    logo.parentNode.insertBefore(brand, logo);
    brand.appendChild(logo);
    brand.appendChild(btn);
    var git = document.createElement("a");
    git.className = "get-in-touch";
    git.href = "#contact";
    git.textContent = "Get in Touch";
    brand.appendChild(git);
  } else {
    document.body.appendChild(btn);
  }
})();
