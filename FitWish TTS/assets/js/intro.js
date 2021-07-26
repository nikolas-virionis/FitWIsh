function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  let introTxt = document.querySelector(".planTxt");
  for (let element of introTxt) element.style.fontSize = "2.2vw";
  planId.style.marginLeft = "43%";
  planId.style.marginRight = "auto";
  planId.innerHTML = "Our Plan:";
  idBadHabits.innerHTML =
    "You might be struggling with your current health state, disliking the situation but not entirely committed to change it";
  idPlanMsg.innerHTML =
    "But now you started a path in which you take ownership of yourself, and I am going to help you out";
  idGoodHabits.innerHTML =
    "Sooner than you'd expect, you'll be used to looking just as good as you want, and healthier too!";
  introPageId.innerHTML = "Introduction";
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
