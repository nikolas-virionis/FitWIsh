export async function downloadData() {
  let { weightManagementProgramFinalResult } = await import("../../result.js");
  let element = document.createElement("a");
  await setDownloadableFileData().then((data) =>
    element.setAttribute(
      "href",
      "data:text/html;charset=utf-8," + encodeURIComponent(data)
    )
  );

  element.setAttribute("download", weightManagementProgramFinalResult);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
export async function setDownloadableFileData() {
  let { backgroundColorDownload, colorDownload } = await import(
    "../../result.js"
  );
  const { getName, getEmotion } = await import("../global/fieldGetter.js");
  const {
    setBodyTypeAdvice,
    setGoalAdvices,
    setHealthyAdvice,
    getBodyTypeAdvantageAdvice,
    setGoalDistance,
    setCheatAdvice,
    setAgeAdvice,
    setMealsAdvice,
    setExerciseAdvice,
    setCalorieIntake,
  } = await import("./advices.js");
  let { finalIdealWeightMsg } = await import("./idealWeight.js");
  let { emotionAnswer } = await import("../../result.js");
  const { setLinks } = await import("../result/links.js");
  let downloadResult = "";
  await setLinks().then(async (links) => {
    await getBodyTypeAdvantageAdvice().then(async (advice) => {
      await setCalorieIntake().then((calorieAdv) => {
        if (language == "english")
          downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; text-align: center; margin-left: 37.5%"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: black; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Well <big style="font-family: Kaushan Script, cursive;">`;
        else if (language == "português")
          downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex;  text-align: center; margin-left: 37.5%"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: black; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bem <big style="font-family: Kaushan Script, cursive;">`;
        else if (language == "français")
          downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex;  text-align: center; margin-left: 37.5%"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: black; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bien <big style="font-family: Kaushan Script, cursive;">`;
        else if (language == "español")
          downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex;  text-align: center; margin-left: 37.5%"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: black; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">¡Bueno! <big style="font-family: Kaushan Script, cursive;">`;
        downloadResult += `${getName()}</big>, ${setBodyTypeAdvice()}${advice}${setGoalDistance()}</h3><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setAgeAdvice()}</h3><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${finalIdealWeightMsg}</h3><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setExerciseAdvice()}</h3><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${
          setGoalAdvices()[0]
        }</h3><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setHealthyAdvice()}</h3><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setCheatAdvice()}</h3><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setMealsAdvice()}.<br><br>${
          setGoalAdvices()[1]
        }</h3>${
          getEmotion() == "yes"
            ? `<h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${emotionAnswer}</h3>`
            : ""
        }<h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${calorieAdv}</h3><br><h4><i>${
          links[0]
        }</i></h4><h4><i>${links[1]}</i></h4><h4><i>${
          links[2]
        }</i></h4><h4><i>${links[3]}</i></h4></span>`;
      });
    });
  });
  return downloadResult;
}
