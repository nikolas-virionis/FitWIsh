function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  weightMetric.placeholder = "Example: 80.5";
  heightMetric.placeholder = "Example: 1.85";
  weightImperial.placeholder = "Example: 200.5";
  heightImperial.placeholder = "Example: 70";
  dataPageId.innerHTML = "Weight/Height";
  defaultUnit = " - Default -";
  headingTextInputIdWeightMetric.innerHTML = "Weight";
  headingTextInputIdHeightMetric.innerHTML = "Height";
  headingTextInputIdWeightImperial.innerHTML = "Weight";
  headingTextInputIdHeightImperial.innerHTML = "Height";
  metricDefault = "Metric - Default -";
  metricNoDefault = "Metric";
  imperialDefault = "Imperial";
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
