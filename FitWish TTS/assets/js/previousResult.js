function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  resultBeginning2 =
    'Welcome back <big style="font-family: Kaushan Script, cursive;">';
  resultBeginning = 'Well <big style="font-family: Kaushan Script, cursive;">';
  weightManagementProgramFinalResult =
    "Fitness_Management_Program_Final_Result.html";
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
