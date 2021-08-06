let bmi_state = window.bmi_state;
export { bmi_state };
export function metric() {
  weight = parseFloat(getWeight());
  height = parseFloat(getHeight());
  bmi = weight / height ** 2;
  import("./variableSetters.js").then(
    ({ getBMIstate }) => (bmi_state = getBMIstate(bmi))
  );
  import("./idealWeight.js").then(({ idealWeight }) =>
    idealWeight("kg", 1, weight, height)
  );
}
export function imperial() {
  weight = parseFloat((getWeight() / 2.205).toFixed(2));
  height = parseFloat((getHeight() / 39.37).toFixed(2));
  bmi = weight / height ** 2;
  import("./variableSetters.js").then(
    ({ getBMIstate }) => (bmi_state = getBMIstate(bmi))
  );
  import("./idealWeight.js").then(({ idealWeight }) =>
    idealWeight("lbs", 2.205, weight, height)
  );
}
