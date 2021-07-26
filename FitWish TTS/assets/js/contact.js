function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  idContactH2.style.marginLeft = "37.5%";
  idContactH2.innerHTML = "How to Contact Us";
  idContactIntro.innerHTML =
    "We would love to hear from our users about possible feedback about what you experienced while using our service. To contact Us directly access the link to our CTO's email below, and to have more information on us access his LinkedIn link below.";
  idContactHeading.innerHTML = "Contact";
}
function portugûes() {
  import("./script").then(({ portugûes: defaultPortugûes }) =>
    defaultPortugûes()
  );
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
}
