function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  weightMetric.placeholder = "Example: 80.5";
  heightMetric.placeholder = "Example: 1.85";
  weightImperial.placeholder = "Example: 200.5";
  heightImperial.placeholder = "Example: 70";
  defaultUnit = " - Default -";
  headingTextInputIdWeightMetric.innerHTML = "Weight";
  headingTextInputIdHeightMetric.innerHTML = "Height";
  headingTextInputIdWeightImperial.innerHTML = "Weight";
  headingTextInputIdHeightImperial.innerHTML = "Height";
  metricDefault = "Metric - Default -";
  metricNoDefault = "Metric";
  imperialDefault = "Imperial";
}
function português() {
  import("./script").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  weightMetric.placeholder = "Exemplo: 80.5";
  heightMetric.placeholder = "Exemplo: 1.85";
  weightImperial.placeholder = "Exemplo: 200.5";
  heightImperial.placeholder = "Exemplo: 70";
  defaultUnit = " - Padrão -";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
  metricDefault = "Métrico - Padrão -";
  metricNoDefault = "Métrico";
  imperialDefault = "Imperial";
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
  weightMetric.placeholder = "Exemple: 80.5";
  heightMetric.placeholder = "Exemple: 1.85";
  weightImperial.placeholder = "Exemple: 200.5";
  heightImperial.placeholder = "Exemple: 70";
  headingTextInputIdWeightMetric.innerHTML = "Poids";
  headingTextInputIdHeightMetric.innerHTML = "Hauteur";
  headingTextInputIdWeightImperial.innerHTML = "Poids";
  headingTextInputIdHeightImperial.innerHTML = "Hauteur";
  defaultUnit = " - Défaut -";
  metricDefault = "Métrique - Défaut -";
  metricNoDefault = "Métrique";
  imperialDefault = "Impérial";
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
  weightMetric.placeholder = "Ejemplo: 80.5";
  heightMetric.placeholder = "Ejemplo: 1.85";
  weightImperial.placeholder = "Ejemplo: 200.5";
  heightImperial.placeholder = "Ejemplo: 70";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
  defaultUnit = " - Defecto -";
  metricDefault = "Métrico - Defecto -";
  metricNoDefault = "Métrico";
  imperialDefault = "Imperial";
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
  headingTextInputIdWeightMetric.style.color = "#1F3B4D";
  headingTextInputIdHeightMetric.style.color = "#1F3B4D";
  headingTextInputIdWeightImperial.style.color = "#1F3B4D";
  headingTextInputIdHeightImperial.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
  headingTextInputIdWeightMetric.style.color = "#DDD";
  headingTextInputIdHeightMetric.style.color = "#DDD";
  headingTextInputIdWeightImperial.style.color = "#DDD";
  headingTextInputIdHeightImperial.style.color = "#DDD";
}
