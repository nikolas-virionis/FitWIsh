function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  idHowToH2.innerHTML = "What you will do";
  idHowToH3.innerHTML = "What we will do";
  idHowToTxt1.innerHTML =
    "First, if you haven't already, check the theme and language that you prefer in the three bar button on the left. Then answer the test... candidly, yes, I know, its harsh but this is crucial for this to be as helpful as it can to you, then in some time from now you can repeat this test and compare the numbers.";
  idHowToTxt2.innerHTML =
    "Well, we are going to evaluate you in a comprehensive way and tell you the distance to your goals in your path to them, then you can come back to this very site and redo the test, having up to two previous test results stored locally and safely in your computer.";
  idHowToHeading.innerHTML = "How it Works";
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
