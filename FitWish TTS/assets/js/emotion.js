function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Emotion-based Overeating<h3>(When experiencing sadness, happiness, boredom, loneliness, stress, dissapointment, concern, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Yes";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("buttonResult").value = "Result";
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
//1 func about emotional overeating
const emoFunc = (binary) => (emotion = binary);

function checkAllAnswers() {
  let email = emailInputted ? email : true;
  let answers =
    gender &&
    unit &&
    userName &&
    age &&
    email &&
    height &&
    weight &&
    bodyType &&
    cheat &&
    meals &&
    healthy &&
    exercise &&
    goal &&
    emotion &&
    imgBody &&
    imgGoal;
  if (answers) window.location.href = "check.html";
}
