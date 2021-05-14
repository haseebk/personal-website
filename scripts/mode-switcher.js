/**
 * Script obtained from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
 */

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem("theme");

if (systemInitiatedDark.matches) {
  document.getElementById("theme-toggle").lastChild.class = "far fa-sun fa-2x";
} else {
  document.getElementById("theme-toggle").lastChild.class = "far fa-moon fa-2x";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-toggle").lastChild.class =
      "far fa-sun fa-2x";
    sessionStorage.setItem("theme", "");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("theme-toggle").lastChild.class =
      "far fa-moon fa-2x";

    sessionStorage.setItem("theme", "");
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
  let theme = sessionStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    document.getElementById("theme-toggle").lastChild.class =
      "far fa-moon fa-2x";
  } else if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    document.getElementById("theme-toggle").lastChild.class =
      "far fa-sun fa-2x";
  } else if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute("data-theme", "light");
    sessionStorage.setItem("theme", "light");
    document.getElementById("theme-toggle").lastChild.class =
      "far fa-moon fa-2x";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    sessionStorage.setItem("theme", "dark");
    document.getElementById("theme-toggle").lastChild.class =
      "far fa-sun fa-2x";
  }
}

if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  sessionStorage.setItem("theme", "dark");
  document.getElementById("theme-toggle").lastChild.class = "far fa-sun fa-2x";
} else if (theme === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  sessionStorage.setItem("theme", "light");
  document.getElementById("theme-toggle").lastChild.class = "far fa-moon fa-2x";
}
