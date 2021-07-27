function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  resultBeginning2 =
    'Welcome back <big style="font-family: Kaushan Script, cursive;">';
  resultBeginning = 'Well <big style="font-family: Kaushan Script, cursive;">';
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  resultBeginning2 =
    'Bem vindo de Volta <big style="font-family: Kaushan Script, cursive;">';
  resultBeginning = 'Bem <big style="font-family: Kaushan Script, cursive;">';
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
  resultBeginning2 =
    'Content de te revoir <big style="font-family: Kaushan Script, cursive;">';
  resultBeginning = 'Bien <big style="font-family: Kaushan Script, cursive;">';
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
  resultBeginning2 =
    'Bienvenido de nuevo <big style="font-family: Kaushan Script, cursive;">';
  resultBeginning =
    '¡Bueno! <big style="font-family: Kaushan Script, cursive;">';
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
}
