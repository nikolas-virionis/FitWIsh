export function resultTime() {
  let interval = setInterval(() => {
    if (timeGaps > 1500000) clearInterval(interval);
    if (timeGaps == 100) {
      idBar.style.display = "none";
      finalResultH3Id.style.display = "block";
      finalResultH3Id.innerHTML = resultBeginning;
      finalResultH3Id.innerHTML += `${getName()}</big>, ${setBodyTypeAdvice()}`;
    }
    timeGaps += 1;
    if (timeGaps == 1500)
      finalResultH3Id.innerHTML += `${getBodyTypeAdvantageAdvice()}${setGoalDistance()}<br><br>`;
    if (timeGaps == 2000)
      finalResultH3Id.innerHTML += `${setAgeAdvice()}<br><br>`;
    if (timeGaps == 3000)
      finalResultH3Id.innerHTML += `${finalIdealWeightMsg}<br><br>`;
    if (timeGaps == 4000)
      finalResultH3Id.innerHTML += `${setExerciseAdvice()}<br><br>`;
    if (timeGaps == 5000)
      finalResultH3Id.innerHTML += `${setGoalAdvices()[0]}<br><br>`;
    if (timeGaps == 6000)
      finalResultH3Id.innerHTML += `${setHealthyAdvice()}<br><br>`;
    if (timeGaps == 7000)
      finalResultH3Id.innerHTML += `${setCheatAdvice()}<br><br>`;
    if (timeGaps == 8000)
      finalResultH3Id.innerHTML += `${setMealsAdvice()}<br><br>${
        setGoalAdvices()[1]
      }<br><br>`;
    if (timeGaps == 10000 && getEmotion() == "yes")
      finalResultH3Id.innerHTML += `${emotionAnswer}<br><br>`;
    if (timeGaps == 11000)
      finalResultH3Id.innerHTML += `${setCalorieIntake()}<br><br><br>`;
    if (timeGaps == 12000) {
      finalResultH4Id.innerHTML = "";
      finalResultH4Id.style.display = "block";
      import("./modules/result/links.js").then(
        ({ setLinks }) =>
          (finalResultH4Id.innerHTML += `<i>${setLinks()[0]}<br><br>${
            setLinks()[1]
          }<br><br>${setLinks()[2]}<br><br>${setLinks()[3]}</i><br><br><br>`)
      );
    }
    if (timeGaps == 13000) finalResultH2Id.style.display = "block";
    if (timeGaps == 14000) {
      idFooter.style.position = "relative";
      idFooter.style.marginBottom = "0";
      idFooter.style.display = "block";
    }
  }, 1);
}
