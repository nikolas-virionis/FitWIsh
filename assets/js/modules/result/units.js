let bmi_state, weight, height, bmi;
const { getWeight, getHeight } = await import("../global/fieldGetter.js");
export { bmi_state, weight, height };
export function metric() {
  weight = parseFloat(getWeight());
  height = parseFloat(getHeight());
  bmi = weight / height ** 2;
  import("./variableSetters.js").then(({ getBMIstate }) =>
    getBMIstate(bmi).then((bmistate) => (bmi_state = bmistate))
  );
  import("./idealWeight.js").then(({ setIdealWeight }) =>
    setIdealWeight("kg", 1, weight, height)
  );
}
export function imperial() {
  weight = parseFloat((getWeight() / 2.205).toFixed(2));
  height = parseFloat((getHeight() / 39.37).toFixed(2));
  bmi = weight / height ** 2;
  import("./variableSetters.js").then(
    ({ getBMIstate }) => (bmi_state = getBMIstate(bmi))
  );
  import("./idealWeight.js").then(({ setIdealWeight }) =>
    setIdealWeight("lbs", 2.205, weight, height)
  );
}
