const { getEmotion, getName } = await import("../global/fieldGetter.js");
let { resultBeginning } = await import("../../result.js");
let { emotionAnswer } = await import("../../result.js");
let advices = import("./advices.js");
const { setBodyTypeAdvice } = await advices;
const { setAgeAdvice } = await advices;
const { getBodyTypeAdvantageAdvice } = await advices;
const { setCalorieIntake } = await advices;
const { setExerciseAdvice } = await advices;
const { setHealthyAdvice } = await advices;
const { setCheatAdvice } = await advices;
const { setMealsAdvice } = await advices;
const { setGoalDistance } = await advices;
const { setGoalAdvices } = await advices;
export async function printResult() {
  let bodyTypeAdvice;
  await getBodyTypeAdvantageAdvice().then(
    (advice) => (bodyTypeAdvice = advice)
  );

  idBar.style.display = "none";
  finalResultH3Id.style.display = "block";
  await setCalorieIntake().then(
    async (calorieAdv) =>
      await import("./idealWeight.js").then(
        ({ finalIdealWeightMsg }) =>
          (finalResultH3Id.innerHTML = `${resultBeginning + getName()}</big>, ${
            setBodyTypeAdvice() + bodyTypeAdvice + setGoalDistance()
          }<br><br>${setAgeAdvice()}<br><br>${finalIdealWeightMsg}<br><br>${setExerciseAdvice()}<br><br>${
            setGoalAdvices()[0]
          }<br><br>${setHealthyAdvice()}<br><br>${setCheatAdvice()}<br><br>${setMealsAdvice()}<br><br>${
            setGoalAdvices()[1]
          }<br><br>${
            getEmotion() == "yes" ? `${emotionAnswer}<br><br>` : ""
          }${calorieAdv}<br><br><br>`)
      )
  );

  finalResultH4Id.style.display = "block";
  import("./links.js").then(({ setLinks }) =>
    setLinks().then(
      (links) =>
        (finalResultH4Id.innerHTML = `<i>${links[0]}<br><br>${links[1]}<br><br>${links[2]}<br><br>${links[3]}</i><br><br><br>`)
    )
  );

  finalResultH2Id.style.display = "block";

  idFooter.style.position = "relative";
  idFooter.style.marginBottom = "0";
  idFooter.style.display = "block";
}
