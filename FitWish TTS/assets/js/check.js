function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
}

const hoverOutColorChangeFunc = (hoveredOutId) =>
  (document.getElementById(hoveredOutId).style.backgroundColor = "teal");
