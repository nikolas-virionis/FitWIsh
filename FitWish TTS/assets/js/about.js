function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "40%";
  idAboutH2.innerHTML = "Who are we?";
  idAboutTxtLeft.innerHTML =
    "Well, we are FitWish, a new startup with the goal to, as our Name says, fulfill your wish in the fitness sector, we don't charge for your first diagnosis because we believe that wellness shouldn't have more hurdles than it already does. Therefore by committing to this quick quiz you will have a sort of guidance towards achieving your goal in this fitness field.";
  idAboutTxtRight.innerHTML =
    "We at FitWish acknowledge the effort put into getting your body the way you want it to be, and because of that, we appreciate your valuable decision to stand your ground and act upon what you should, your health.";
  idAboutHeading.innerHTML = "About";
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
