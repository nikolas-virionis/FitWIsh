var btype,
  buttonQuerySelector = document.querySelectorAll(".button"),
  resultBeginning,
  contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [],
  idUser,
  exercise,
  healthy,
  cheat,
  meals,
  resultBeginning2,
  day,
  dd,
  mm,
  yyyy,
  triesMade,
  tryNumber,
  counter = 0,
  timeInterval,
  metricDefault,
  metricVerify = 0,
  imperialDefault,
  metricNoDefault,
  rpossibilities,
  defaultUnit,
  colorDownload = "#1F3B4D",
  backgroundColorDownload = "#12232A",
  done,
  processing,
  diagnosis,
  langleftnav,
  alreadyInPage,
  local,
  differentPage = 0,
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Select a gender to see the reference Image',
  weightManagementProgramFinalResult,
  language,
  theme,
  emailLinkFunc,
  downloadLinkFunc,
  emotionans,
  emotionreturn,
  emotion,
  idealweight1,
  idealweight2,
  idealweight0,
  weightstring,
  weight,
  heightstring,
  height,
  unit,
  deltapp,
  bodyy,
  aaa,
  aaaa,
  heightfeetstring,
  heightinchstring,
  heightfeet,
  heightinch,
  weightfloat,
  weight1,
  weight2,
  bbgwp,
  bbgw0,
  bodyreturn,
  emailaddrreturn,
  genderreturn,
  unitreturn,
  goalreturn,
  bodyimgreturn,
  goalimgreturn,
  xercisereturn,
  healthyreturn,
  cheatreturn,
  mealsreturn,
  confirmWriteEmail,
  cbody,
  cbodyc,
  ccbody,
  bodycc,
  ccbodycc,
  bodyc,
  c,
  bmr,
  bmrl,
  bmrll,
  bmrlll,
  bbgw1,
  bbgw2,
  element,
  addup1,
  addup2,
  addup3,
  addup4,
  addup5,
  addup6,
  emailaddrreturnfinal,
  inputName,
  age,
  ageAdvice,
  languageValue = 1,
  fullresult = "",
  timeGaps = 0,
  firstAlert =
    "DISCLAIMER: This is not a medical nor nutritionist advice and not only does not exclude a medical consultation, but also, me as this code creator, encourage and support YOU to get to see your doctor for anything YOU think YOU should improve in YOUR health life. Peace!",
  bmi_state = "",
  gender = "",
  goal = "",
  bodyp = 0,
  bodyps = parseFloat(bodyp),
  bodypt = "",
  bodytp = "",
  bodytype = "",
  idealweight = "",
  idealWeight00 = 0,
  idealweight10 = parseFloat(idealweight1),
  idealweight20 = parseFloat(idealweight2),
  idealWeight000 = parseFloat(idealWeight00),
  deltap = 0,
  bmi = 0,
  currentBody = 0,
  goalBody = 0,
  goalBodyDistance = 0,
  bbgw3 = 0,
  bbgw4 = 0,
  bbgw00 = 0,
  bbgw0p = 0,
  noEmailNeeded = 0,
  wrongEmailCount = 0,
  bodyresult = "",
  goalDistance = "",
  bbgw = "";
unitSystem("metric");
english();
document.addEventListener("keypress", (event) =>
  event.key === "Enter" &&
  idDataSubmit.style.display === "none" &&
  idLoginSubmit.style.display === "none"
    ? nextPageInterpreter()
    : true
);
buttonQuerySelector.forEach((item) => {
  item.addEventListener("keypress", (event) =>
    event.key === "Enter" &&
    idDataSubmit.style.display === "none" &&
    idLoginSubmit.style.display === "none"
      ? nextPageInterpreter()
      : true
  );
});
if (contentArray.length == 0) {
  if (navigator.language[0] == "e" && navigator.language[1] == "n") english();
  else if (navigator.language[0] == "p" && navigator.language[1] == "t")
    português();
  else if (navigator.language[0] == "f" && navigator.language[1] == "r")
    français();
  else if (navigator.language[0] == "e" && navigator.language[1] == "s")
    español();
  themeTypeDark();
} else if (contentArray.length == 1) {
  firstPageH1.style.display = "none";
  firstPageH12nd.style.display = "block";
  firstPageBtnStart.style.display = "none";
  firstPageBtnDifferent.style.display = "block";
  firstPageBtnOverwrite.style.display = "block";
  firstPageBtnSeePrev.style.display = "block";
  firstPageBtnDelete.style.display = "block";
  triesMade = 1;
  if (contentArray[0].language == "english" || contentArray[0].language == null)
    english();
  else if (contentArray[0].language == "português") português();
  else if (contentArray[0].language == "français") français();
  else if (contentArray[0].language == "español") español();
  if (contentArray[0].theme == "dark" || contentArray[0].theme == null)
    themeTypeDark();
  else if (contentArray[0].theme == "light") themeTypeLight();
} else if (contentArray.length == 2) {
  triesMade = 2;
  firstPageH1.style.display = "none";
  firstPageH13rd.style.display = "block";
  firstPageBtnStart.style.display = "none";
  firstPageBtnOverwrite.style.display = "block";
  firstPageBtnSeeAll.style.display = "block";
  firstPageBtnDelete.style.display = "block";
  if (
    contentArray[1].language == "english" ||
    contentArray[1].language == null ||
    (navigator.language[0] == "e" && navigator.language[1] == "n")
  ) {
    english();
    if (
      !(
        contentArray[0].inputName.toLowerCase() == contentArray[1].inputName.toLowerCase()
      )
    ) {
      firstPageH13rd.innerHTML = `We detected that you have already tried our test twice, once as ${contentArray[0].inputName} made in ${contentArray[0].day}, and once as ${contentArray[1].inputName} made in ${contentArray[1].day}. Choose what you would like to do below`;
      firstPageBtn1stTry.value = `See the test made by ${contentArray[0].inputName}`;
      firstPageBtn2ndTry.value = `See the test made by ${contentArray[1].inputName}`;
      firstPageBtn1stTryOverwrite.value = `Overwrite test made by ${contentArray[0].inputName}`;
      firstPageBtn2ndTryOverwrite.value = `Overwrite test made by ${contentArray[1].inputName}`;
    } else {
      firstPageH13rd.innerHTML = `We detected that you have already tried our test twice as ${contentArray[0].inputName}, once made in ${contentArray[0].day}, and once made in ${contentArray[1].day}. Choose what you would like to do below`;
      firstPageBtn1stTry.value = `See the test made in ${contentArray[0].day}`;
      firstPageBtn2ndTry.value = `See the test made in ${contentArray[1].day}`;
      firstPageBtn1stTryOverwrite.value = `Overwrite test made in ${contentArray[0].day}`;
      firstPageBtn2ndTryOverwrite.value = `Overwrite test made in ${contentArray[1].day}`;
    }
  } else if (
    contentArray[1].language == "português" ||
    (navigator.language[0] == "p" && navigator.language[1] == "t")
  ) {
    português();
    if (
      !(
        contentArray[0].inputName.toLowerCase() == contentArray[1].inputName.toLowerCase()
      )
    ) {
      firstPageH13rd.innerHTML = `Detectamos que você já tentou nosso teste duas vezes, uma vez como ${contentArray[0].inputName} feito em ${contentArray[0].day}, e uma vez como ${contentArray[1].inputName} feito em ${contentArray[1].day}. Escolha o que você gostaria de fazer abaixo`;
      firstPageBtn1stTry.value = `Ver o teste feito por ${contentArray[0].inputName}`;
      firstPageBtn2ndTry.value = `Ver o teste feito por ${contentArray[1].inputName}`;
      firstPageBtn1stTryOverwrite.value = `Sobrescrever o teste de ${contentArray[0].inputName}`;
      firstPageBtn2ndTryOverwrite.value = `Sobrescrever o teste de ${contentArray[1].inputName}`;
    } else {
      firstPageH13rd.innerHTML = `Detectamos que você já tentou nosso teste duas vezes como ${contentArray[0].inputName}, uma vez feito em ${contentArray[0].day}, e uma vez feito em ${contentArray[1].day}. Escolha o que você gostaria de fazer abaixo`;
      firstPageBtn1stTry.value = `Ver o teste feito em ${contentArray[0].day}`;
      firstPageBtn2ndTry.value = `Ver o teste feito em ${contentArray[1].day}`;
      firstPageBtn1stTryOverwrite.value = `Sobrescrever o teste de ${contentArray[0].day}`;
      firstPageBtn2ndTryOverwrite.value = `Sobrescrever o teste de ${contentArray[1].day}`;
    }
  } else if (
    contentArray[1].language == "français" ||
    (navigator.language[0] == "f" && navigator.language[1] == "r")
  ) {
    français();
    if (
      !(
        contentArray?.[0]?.inputName?.toLowerCase() ==
        contentArray?.[1]?.inputName?.toLowerCase()
      )
    ) {
      firstPageH13rd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test deux fois, une fois comme ${contentArray[0].inputName} fabriqué en ${contentArray[0].day}, et une fois comme ${contentArray[1].inputName} fabriqué en ${contentArray[1].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
      firstPageBtn1stTry.value = `Voir le test ${contentArray[0].inputName}`;
      firstPageBtn2ndTry.value = `Voir le test ${contentArray[1].inputName}`;
      firstPageBtn1stTryOverwrite.value = `Écraser le test ${contentArray[0].inputName}`;
      firstPageBtn2ndTryOverwrite.value = `Écraser le test ${contentArray[1].inputName}`;
    } else {
      firstPageH13rd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test deux fois plus ${contentArray[0].inputName}, une fois fait en ${contentArray[0].day}, et une fois fait en ${contentArray[1].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
      firstPageBtn1stTry.value = `Voir le test réalisé en ${contentArray[0].day}`;
      firstPageBtn2ndTry.value = `Voir le test réalisé en ${contentArray[1].day}`;
      firstPageBtn1stTryOverwrite.value = `Écraser le test dans ${contentArray[0].day}`;
      firstPageBtn2ndTryOverwrite.value = `Écraser le test dans ${contentArray[1].day}`;
    }
  } else if (
    contentArray[1].language == "español" ||
    (navigator.language[0] == "e" && navigator.language[1] == "s")
  ) {
    español();
    if (
      !(
        contentArray[0].inputName.toLowerCase() == contentArray[1].inputName.toLowerCase()
      )
    ) {
      firstPageH13rd.innerHTML = `Detectamos que ya ha realizado nuestra prueba dos veces, una vez como ${contentArray[0].inputName} hecho en ${contentArray[0].day}, y una vez como ${contentArray[1].inputName} hecho en ${contentArray[1].day}. Elija lo que le gustaría hacer a continuación`;
      firstPageBtn1stTry.value = `Ver la prueba de ${contentArray[0].inputName}`;
      firstPageBtn2ndTry.value = `Ver la prueba de ${contentArray[1].inputName}`;
      firstPageBtn1stTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[0].inputName}`;
      firstPageBtn2ndTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[1].inputName}`;
    } else {
      firstPageH13rd.innerHTML = `Detectamos que ya ha realizado nuestra prueba dos veces más ${contentArray[0].inputName}, una vez hecho en ${contentArray[0].day}, y una vez hecho en ${contentArray[1].day}. Elija lo que le gustaría hacer a continuación`;
      firstPageBtn1stTry.value = `Ver la prueba de ${contentArray[0].day}`;
      firstPageBtn2ndTry.value = `Ver la prueba de ${contentArray[1].day}`;
      firstPageBtn1stTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[0].day}`;
      firstPageBtn2ndTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[1].day}`;
    }
  }
  if (contentArray[1].theme == "dark" || contentArray[1].theme == null)
    themeTypeDark();
  else if (contentArray[1].theme == "light") themeTypeLight();
}
const enterFuncMid = (event, blur, focus) => {
  if (event.key === "Enter") {
    document.getElementById(blur).blur();
    document.getElementById(focus).focus();
  }
};
const enterFunc = (event) => {
  if (event.key === "Enter") nextPageInterpreter();
};
function numberBtnsOverwriteEn() {
  if (
    !(contentArray[0].inputName.toLowerCase() == contentArray[1].inputName.toLowerCase())
  ) {
    firstPageH13rd.innerHTML = `We detected that you have already tried our test twice, once as ${contentArray[0].inputName} made in ${contentArray[0].day}, and once as ${contentArray[1].inputName} made in ${contentArray[1].day}. Choose what you would like to do below`;
    firstPageBtn1stTry.value = `See the test made by ${contentArray[0].inputName}`;
    firstPageBtn2ndTry.value = `See the test made by ${contentArray[1].inputName}`;
    firstPageBtn1stTryOverwrite.value = `Overwrite test made by ${contentArray[0].inputName}`;
    firstPageBtn2ndTryOverwrite.value = `Overwrite test made by ${contentArray[1].inputName}`;
  } else {
    firstPageH13rd.innerHTML = `We detected that you have already tried our test twice as ${contentArray[0].inputName}, once made in ${contentArray[0].day}, and once made in ${contentArray[1].day}. Choose what you would like to do below`;
    firstPageBtn1stTry.value = `See the test made in ${contentArray[0].day}`;
    firstPageBtn2ndTry.value = `See the test made in ${contentArray[1].day}`;
    firstPageBtn1stTryOverwrite.value = `Overwrite test made in ${contentArray[0].day}`;
    firstPageBtn2ndTryOverwrite.value = `Overwrite test made in ${contentArray[1].day}`;
  }
}
function numberBtnsOverwritePt() {
  if (
    !(contentArray[0].inputName.toLowerCase() == contentArray[1].inputName.toLowerCase())
  ) {
    firstPageH13rd.innerHTML = `Detectamos que você já tentou nosso teste duas vezes, uma vez como ${contentArray[0].inputName} feito em ${contentArray[0].day}, e uma vez como ${contentArray[1].inputName} feito em ${contentArray[1].day}. Escolha o que você gostaria de fazer abaixo`;
    firstPageBtn1stTry.value = `Ver o teste feito por ${contentArray[0].inputName}`;
    firstPageBtn2ndTry.value = `Ver o teste feito por ${contentArray[1].inputName}`;
    firstPageBtn1stTryOverwrite.value = `Sobrescrever o teste de ${contentArray[0].inputName}`;
    firstPageBtn2ndTryOverwrite.value = `Sobrescrever o teste de ${contentArray[1].inputName}`;
  } else {
    firstPageH13rd.innerHTML = `Detectamos que você já tentou nosso teste duas vezes como ${contentArray[0].inputName}, uma vez feito em ${contentArray[0].day}, e uma vez feito em ${contentArray[1].day}. Escolha o que você gostaria de fazer abaixo`;
    firstPageBtn1stTry.value = `Ver o teste feito em ${contentArray[0].day}`;
    firstPageBtn2ndTry.value = `Ver o teste feito em ${contentArray[1].day}`;
    firstPageBtn1stTryOverwrite.value = `Sobrescrever o teste de ${contentArray[0].day}`;
    firstPageBtn2ndTryOverwrite.value = `Sobrescrever o teste de ${contentArray[1].day}`;
  }
}
function numberBtnsOverwriteFr() {
  if (
    !(contentArray[0].inputName.toLowerCase() == contentArray[1].inputName.toLowerCase())
  ) {
    firstPageH13rd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test deux fois, une fois comme ${contentArray[0].inputName} fabriqué en ${contentArray[0].day}, et une fois comme ${contentArray[1].inputName} fabriqué en ${contentArray[1].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
    firstPageBtn1stTry.value = `Voir le test ${contentArray[0].inputName}`;
    firstPageBtn2ndTry.value = `Voir le test ${contentArray[1].inputName}`;
    firstPageBtn1stTryOverwrite.value = `Écraser le test ${contentArray[0].inputName}`;
    firstPageBtn2ndTryOverwrite.value = `Écraser le test ${contentArray[1].inputName}`;
  } else {
    firstPageH13rd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test deux fois plus ${contentArray[0].inputName}, une fois fait en ${contentArray[0].day}, et une fois fait en ${contentArray[1].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
    firstPageBtn1stTry.value = `Voir le test réalisé en ${contentArray[0].day}`;
    firstPageBtn2ndTry.value = `Voir le test réalisé en ${contentArray[1].day}`;
    firstPageBtn1stTryOverwrite.value = `Écraser le test dans ${contentArray[0].day}`;
    firstPageBtn2ndTryOverwrite.value = `Écraser le test dans ${contentArray[1].day}`;
  }
}
function numberBtnsOverwriteEs() {
  if (
    !(contentArray[0].inputName.toLowerCase() == contentArray[1].inputName.toLowerCase())
  ) {
    firstPageH13rd.innerHTML = `Detectamos que ya ha realizado nuestra prueba dos veces, una vez como ${contentArray[0].inputName} hecho en ${contentArray[0].day}, y una vez como ${contentArray[1].inputName} hecho en ${contentArray[1].day}. Elija lo que le gustaría hacer a continuación`;
    firstPageBtn1stTry.value = `Ver la prueba de ${contentArray[0].inputName}`;
    firstPageBtn2ndTry.value = `Ver la prueba de ${contentArray[1].inputName}`;
    firstPageBtn1stTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[0].inputName}`;
    firstPageBtn2ndTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[1].inputName}`;
  } else {
    firstPageH13rd.innerHTML = `Detectamos que ya ha realizado nuestra prueba dos veces más ${contentArray[0].inputName}, una vez hecho en ${contentArray[0].day}, y una vez hecho en ${contentArray[1].day}. Elija lo que le gustaría hacer a continuación`;
    firstPageBtn1stTry.value = `Ver la prueba de ${contentArray[0].day}`;
    firstPageBtn2ndTry.value = `Ver la prueba de ${contentArray[1].day}`;
    firstPageBtn1stTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[0].day}`;
    firstPageBtn2ndTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[1].day}`;
  }
}
function english() {
  if (contentArray.length == 2) numberBtnsOverwriteEn();
  language = "english";
  languageValue = 1;
  linkTitle.title = "FitWish Home Page";
  firstPageBtnSeePrev.innerHTML = "Hide Previous Test";
  idHowToH2.innerHTML = "What you will do";
  idHowToH3.innerHTML = "What we will do";
  idHowToTxt1.innerHTML =
    "First, if you haven't already, check the theme and language that you prefer in the three bar button on the left. Then answer the test... candidly, yes, I know, its harsh but this is crucial for this to be as helpful as it can to you, then in some time from now you can repeat this test and compare the numbers.";
  idHowToTxt2.innerHTML =
    "Well, we are going to evaluate you in a comprehensive way and tell you the distance to your goals in your path to them, then you can come back to this very site and redo the test, having up to two previous test results stored locally and safely in your computer.";
  firstPageH1.innerHTML =
    "We are glad you gave us a chance to help you achieve the body of your dreams, press start to continue";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `We detected that you have already tried our test once as ${contentArray[0].inputName}, made in ${contentArray[0].day}. Choose what you would like to do below`;
  firstPageBtnStart.value = `Start`;
  firstPageBtnDifferent.value = `Do a Different Test`;
  firstPageBtnOverwrite.value = `Overwrite one Previous Test`;
  firstPageBtnDelete.value = `Delete All Previous Tests Made`;
  firstPageBtnSeeAll.value = `See All Previous Tests`;
  firstPageBtnSeePrev.value = `See the Previous Test Result`;
  firstPageBtnHideAll.value = `Hide All Previous Tests`;
  resultBeginning2 =
    'Welcome back <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Attempt's Menu";
  howItWorksId.innerHTML = "How it Works";
  idHowToHeading.innerHTML = "How it Works";
  idAboutTxtLeft.style.fontSize = "1em";
  resultBeginning = 'Well <big style="font-family: Kaushan Script, cursive;">';
  idAboutH2.style.marginLeft = "40%";
  idContactH2.style.marginLeft = "37.5%";
  idContactH2.innerHTML = "How to Contact Us";
  idContactIntro.innerHTML =
    "We would love to hear from our users about possible feedback about what you experienced while using our service. To contact Us directly access the link to our CTO's email below, and to have more information on us access his LinkedIn link below.";
  idAboutH2.innerHTML = "Who are we?";
  idAboutTxtLeft.innerHTML =
    "Well, we are FitWish, a new startup with the goal to, as our Name says, fulfill your wish in the fitness sector, we don't charge for your first diagnosis because we believe that wellness shouldn't have more hurdles than it already does. Therefore by committing to this quick quiz you will have a sort of guidance towards achieving your goal in this fitness field.";
  idAboutTxtRight.innerHTML =
    "We at FitWish acknowledge the effort put into getting your body the way you want it to be, and because of that, we appreciate your valuable decision to stand your ground and act upon what you should, your health.";
  buttonAbout.value = "About";
  buttonHome.value = "Home Page";
  buttonContact.value = "Contact";
  idAboutHeading.innerHTML = "About";
  idContactHeading.innerHTML = "Contact";
  idBadHabits.style.fontSize = "2.2vw";
  idPlanMsg.style.fontSize = "2.2vw";
  idGoodHabits.style.fontSize = "2.2vw";
  aboutId.innerHTML = "About";
  contactId.innerHTML = "Contact";
  planId.style.marginLeft = "43%";
  planId.style.marginRight = "auto";
  introPageId.style.fontSize = "2.355vw";
  loginPageId.style.fontSize = "2.355vw";
  genderUnitPageId.style.fontSize = "2.355vw";
  dataPageId.style.fontSize = "2.355vw";
  goalPageId.style.fontSize = "2.355vw";
  bodyTypePageId.style.fontSize = "2.355vw";
  bodyImagePageId.style.fontSize = "2.355vw";
  xercisePageId.style.fontSize = "2.355vw";
  healthyPageId.style.fontSize = "2.355vw";
  cheatPageId.style.fontSize = "2.355vw";
  mealsPageId.style.fontSize = "2.355vw";
  emotionPageId.style.fontSize = "2.355vw";
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
  checkImgId.style.marginLeft = "23%";
  pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  languageInput.innerHTML = "Language:";
  h4Config.innerHTML = "Processing";
  processing = "Processing";
  diagnosis = "Finishing Diagnosis";
  rpossibilities = "Loading Result Possibilities";
  done = "Done!";
  alreadyInPage = "Already in page";
  pageId.innerHTML = "Pages:";
  planId.innerHTML = "Our Plan:";
  idBadHabits.innerHTML =
    "You might be struggling with your current health state, disliking the situation but not entirely committed to change it";
  idPlanMsg.innerHTML =
    "But now you started a path in which you take ownership of yourself, and I am going to help you out";
  idGoodHabits.innerHTML =
    "Sooner than you'd expect, you'll be used to looking just as good as you want, and healthier too!";
  introPageId.innerHTML = "Introduction";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Gender/Unit";
  goalPageId.innerHTML = "Goal";
  bodyTypePageId.innerHTML = "Body Type";
  bodyImagePageId.innerHTML = "Body Fat Evaluation";
  xercisePageId.innerHTML = "Exercise Evaluation";
  healthyPageId.innerHTML = "Healthy Meals";
  cheatPageId.innerHTML = "Cheat Meals";
  mealsPageId.innerHTML = "Meals/Day";
  emotionPageId.innerHTML = "Emotion-based Overeating";
  buttonNext.value = "Next";
  buttonPrev.value = "Previous";
  showImgBtn.innerHTML = "&#9776; Show Image";
  referenceImgTxt.innerHTML = "Reference Image:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Select a gender to see the reference Image';
  weightManagementProgramFinalResult =
    "Fitness_Management_Program_Final_Result.html";
  document.getElementById("lightThemeButton").innerHTML = "Light Theme";
  document.getElementById("darkThemeButton").innerHTML = "Dark Theme (default)";
  emailLinkColor.innerHTML =
    "<big>Want to have a email sent to you with the main result data? Click here!!</big>";
  downloadLinkColor.innerHTML =
    "<big>Want to have a new document with all this last pages data? Click here!!</big>";
  emotionans =
    'For this emotional overeating issue you should try some ways to reduce it like: try to answer the question, am i really hungry or am i trying to eat my emotions?; aside from that you should try to calm yourself down with some breathing techniques, meditation or yoga to reduce stress; try to fight the boredom finding a new hobby, or something that "awakens" the  will do get up in the morning; don\'t discard the possibility of seeing a therapist to help you out in more areas than you can imagine; And to fight temptation, reward yourself periodically with a dose of a food you like, maybe every 15%-25% of the whole path completed, this way you will learn to moderate the amout you eat and thus make it easier for you to maintain your body in shape when you reach your goal.';
  document.getElementById("disclaimerId").innerHTML = "DISCLAIMER";
  firstAlert =
    "DISCLAIMER: This is not a medical nor nutritionist advice and not only does not exclude a medical consultation, but also, me as this code creator, encourage and support YOU to get to see your doctor for anything YOU think YOU should improve in YOUR health life. Peace!";
  document.getElementById("name").placeholder = "Name Example: Nick";
  document.getElementById("age").placeholder = "Age Example: 24";
  document.getElementById("email").placeholder =
    "Example: name.lastname@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Name:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Age:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Gender";
  document.getElementById("colorChangeIdMale").value = "Male";
  document.getElementById("colorChangeIdFemale").value = "Female";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Emotion-based Overeating<h3>(When experiencing sadness, happiness, boredom, loneliness, stress, dissapointment, concern, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Yes";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unit";
  document.getElementById("colorChangeIdMetric").value = `Metric${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Goal";
  document.getElementById("colorChangeIdBulk").value = "Bulking";
  document.getElementById("colorChangeIdCut").value = "Cutting";
  document.getElementById("colorChangeIdSurp").value = "Get rid of fat surplus";
  document.getElementById("colorChangeIdMuscle").value =
    "Gaining Weight and Muscle";
  document.getElementById("headingObjInputIdBodyType").innerHTML = "Body Type";
  document.getElementById("colorChangeIdNoIdea").value = "No idea";
  document.getElementById("colorChangeIdEcto").value = "Ectomorph";
  document.getElementById("colorChangeIdMeso").value = "Mesomorph";
  document.getElementById("colorChangeIdEndo").value = "Endomorph";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Which one of these you think represent you the most?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Which one of these you think represent your goal the most?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "High intensity exercise frequency:";
  document.getElementById("colorChangeIdNoneXercise").value = "None";
  document.getElementById("colorChangeIdLowXercise").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidXercise").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 or more times a week";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Good and healthy meal days frequency:";
  document.getElementById("colorChangeIdNoneHealthy").value = "None";
  document.getElementById("colorChangeIdLowHealthy").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidHealthy").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 or more times a week";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Cheat meals days frequency:";
  document.getElementById("colorChangeIdNoneCheat").value = "None";
  document.getElementById("colorChangeIdLowCheat").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidCheat").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 or more times a week";
  document.getElementById("headingObjInputIdMeals").innerHTML = "Meals a day:";
  document.getElementById("colorChangeId2Meals").value = "2 meals a day";
  document.getElementById("colorChangeId3Meals").value = "3 meals a day";
  document.getElementById("colorChangeId4Meals").value = "4 meals a day";
  document.getElementById("colorChangeId5Meals").value = "5 or 6 meals a day";
  document.getElementById("buttonResult").value = "Result";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML = "All Rights Reserved";
  returnUpdatedValues();
}
function português() {
  if (contentArray.length == 2) numberBtnsOverwritePt();
  language = "português";
  languageValue = 2;
  linkTitle.title = "Página inicial do FitWish";
  firstPageBtnSeePrev.innerHTML = "Ocultar Teste Anterior";
  idHowToH2.innerHTML = "O que você vai fazer";
  idHowToH3.innerHTML = "O que nós vamos fazer";
  idHowToTxt1.innerHTML =
    "Primeiro, se ainda não o fez, verifique o tema e o idioma de sua preferência no botão de três barras à esquerda. Então responda o teste ... francamente, sim, eu sei, é duro, mas isso é crucial para ser o mais útil possível para você, então em algum tempo você pode repetir este teste e comparar os números.";
  idHowToTxt2.innerHTML =
    "Bem, vamos avaliá-lo de uma forma compreensiva e dizer-lhe a distância de seus objetivos em seu caminho até eles, então você pode voltar a este mesmo site e refazer o teste, tendo até dois resultados de testes anteriores armazenados localmente e com segurança em seu computador.";
  firstPageH1.innerHTML =
    "Estamos felizes por você ter nos dado a chance de ajudá-lo a alcançar o corpo dos seus sonhos, pressione iniciar para continuar";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `Detectamos que você já tentou nosso teste uma vez como ${contentArray[0].name}, feito em ${contentArray[0].day}. Escolha o que você gostaria de fazer abaixo`;
  firstPageBtnStart.value = `Iniciar`;
  firstPageBtnDifferent.value = `Fazer um novo Teste`;
  firstPageBtnOverwrite.value = `Sobrescrever um Teste Anterior`;
  firstPageBtnDelete.value = `Deletar Todos os Testes Feitos Anteriormente`;
  firstPageBtnSeeAll.value = `Ver Todos os Testes Anteriores`;
  firstPageBtnSeePrev.value = `Ver o Resultado do Teste Anterior`;
  firstPageBtnHideAll.value = `Ocultar Testes Anteriores`;
  resultBeginning2 =
    'Bem vindo de Volta <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Menu de Tentativas";
  howItWorksId.innerHTML = "Como Funciona";
  idHowToHeading.innerHTML = "Como Funciona";
  resultBeginning = 'Bem <big style="font-family: Kaushan Script, cursive;">';
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "37%";
  idContactH2.style.marginLeft = "30.5%";
  idContactH2.innerHTML = "Como entrar em contato conosco";
  idContactIntro.innerHTML =
    "Gostaríamos muito de ouvir de nossos usuários sobre possíveis comentários sobre o que você experimentou ao usar nosso serviço. Para entrar em contato conosco diretamente, acesse o link para o e-mail de nosso CTO abaixo, e para obter mais informações sobre nós acesse seu link do LinkedIn abaixo.";
  idAboutH2.innerHTML = "Quem somos nós?";
  idAboutTxtLeft.innerHTML =
    "Pois bem, somos a FitWish, uma nova startup com o objetivo de, como nosso nome diz, cumprir o seu desejo no setor fitness Não cobramos pelo seu primeiro diagnóstico porque acreditamos que o bem-estar não deve ter mais obstáculos do que já tem. Portanto, ao se comprometer com este teste rápido, você terá uma espécie de orientação para atingir seu objetivo neste campo fitness.";
  idAboutTxtRight.innerHTML =
    "Nós da FitWish reconhecemos o esforço feito para deixar seu corpo do jeito que você deseja e, por isso, apreciamos sua valiosa decisão de defender sua posição e agir de acordo com o que você deve, sua saúde.";
  buttonAbout.value = "Sobre";
  buttonHome.value = "Página Inicial";
  buttonContact.value = "Contato";
  idAboutHeading.innerHTML = "Sobre";
  idContactHeading.innerHTML = "Contato";
  idBadHabits.style.fontSize = "2.1vw";
  idPlanMsg.style.fontSize = "2.1vw";
  idGoodHabits.style.fontSize = "2.1vw";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contato";
  planId.style.marginLeft = "41.5%";
  planId.style.marginRight = "auto";
  introPageId.style.fontSize = "2.105vw";
  loginPageId.style.fontSize = "2.105vw";
  genderUnitPageId.style.fontSize = "2.105vw";
  dataPageId.style.fontSize = "2.105vw";
  goalPageId.style.fontSize = "2.105vw";
  bodyTypePageId.style.fontSize = "2.105vw";
  bodyImagePageId.style.fontSize = "2.105vw";
  xercisePageId.style.fontSize = "2.105vw";
  healthyPageId.style.fontSize = "2.105vw";
  cheatPageId.style.fontSize = "2.105vw";
  mealsPageId.style.fontSize = "2.105vw";
  emotionPageId.style.fontSize = "2.105vw";
  weightMetric.placeholder = "Exemplo: 80.5";
  heightMetric.placeholder = "Exemplo: 1.85";
  weightImperial.placeholder = "Exemplo: 200.5";
  heightImperial.placeholder = "Exemplo: 70";
  dataPageId.innerHTML = "Peso/Altura";
  defaultUnit = " - Padrão -";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
  metricDefault = "Métrico - Padrão -";
  metricNoDefault = "Métrico";
  imperialDefault = "Imperial";
  checkImgId.style.marginLeft = "19.1%";
  pagesNavId.innerHTML = "Páginas/Seções(&sect;)";
  languageInput.innerHTML = "Idioma:";
  h4Config.innerHTML = "Processando";
  processing = "Processando";
  diagnosis = "Terminando Diagnóstico";
  rpossibilities = "Carregando Possibilidades de Resultado";
  done = "Pronto!";
  alreadyInPage = "Já nessa página";
  pageId.innerHTML = "Páginas:";
  planId.innerHTML = "Nosso Plano:";
  idBadHabits.innerHTML =
    "Você pode estar tendo dificuldades e decepções com seu atual estado de saúde, não gostando da situação mas não completamente comprometido a mudar";
  idPlanMsg.innerHTML =
    "Mas agora você começou um caminho no qual você tomou responsabilidade sobre você mesmo, e eu vou te ajudar";
  idGoodHabits.innerHTML =
    "Antes do que você pode esperar, você já estará aconstumado a ter a aparência que você quiser, e também mais saudável!";
  introPageId.innerHTML = "Introdução";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Gênero/Unidade";
  goalPageId.innerHTML = "Objetivo";
  bodyTypePageId.innerHTML = "Tipo Corporal";
  bodyImagePageId.innerHTML = "Avaliação da Gordura Corporal";
  xercisePageId.innerHTML = "Avaliação de Exercícios";
  healthyPageId.innerHTML = "Refeições Saudáveis";
  cheatPageId.innerHTML = "Refeições não Saudáveis";
  mealsPageId.innerHTML = "Refeições/Dia";
  emotionPageId.innerHTML = "Comer demais por conta de emoções";
  buttonNext.value = "Próximo";
  buttonPrev.value = "Anterior";
  showImgBtn.innerHTML = "&#9776; Exibir Imagem";
  referenceImgTxt.innerHTML = "Imagem de Referência:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Escolha um gênero para ver a imagem de referência';
  weightManagementProgramFinalResult =
    "Resultado_final_do_programa_de_controle_de_peso.html";
  document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
  document.getElementById("darkThemeButton").innerHTML = "Tema Escuro (padrão)";
  emailLinkColor.innerHTML =
    "<big>Deseja receber um e-mail com os principais dados do resultado? Clique aqui!!</big>";
  downloadLinkColor.innerHTML =
    "<big>Quer ter um novo documento com todos esses dados da última página? Clique aqui!!</big>";
  emotionans =
    'Para esse problema de comer demais emocionalmente, você deve tentar algumas maneiras de reduzi-lo, como: tente responder à pergunta, estou realmente com fome ou estou tentando comer minhas emoções ?; além disso, você deve tentar se acalmar com algumas técnicas de respiração, meditação ou ioga para reduzir o estresse; tente lutar contra o tédio encontrando um novo hobby, ou algo que "desperte" a vontade o faça de se levantar de manhã; não descarte a possibilidade de ver um terapeuta para ajudá-lo em mais áreas do que você pode imaginar; E para lutar contra a tentação, recompense-se periodicamente com uma dose de um alimento que você goste, talvez a cada 15% -25% de todo o caminho percorrido, assim você aprenderá a moderar a quantidade que ingere e assim tornar mais fácil para você manter seu corpo em forma quando você atingir seu objetivo.';
  document.getElementById("disclaimerId").innerHTML = "AVISO LEGAL";
  firstAlert =
    "AVISO LEGAL: Este não é um conselho médico ou nutricionista e não só não exclui uma consulta médica, como também, eu, como criador deste código, encorajo e apoio VOCÊ a procurar seu médico para qualquer coisa que você acha que deveria melhorar em sua vida saudável.";
  document.getElementById("name").placeholder = "Exemplo de Nome: Nick";
  document.getElementById("age").placeholder = "Exemplo de idade: 24";
  document.getElementById("email").placeholder =
    "Exemplo: nome.sobrenome@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nome:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Idade:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Gênero";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Feminino";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer demais por conta de emoções<h3>(Ao experimentar tristeza, felicidade, tédio, solidão, estresse, desapontamento, preocupação, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Sim";
  document.getElementById("colorChangeIdEmoNo").value = "Não";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidade";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrico${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objetivo";
  document.getElementById("colorChangeIdBulk").value = "Ganhar Massa";
  document.getElementById("colorChangeIdCut").value = "Secar";
  document.getElementById("colorChangeIdSurp").value = "Emagrecer";
  document.getElementById("colorChangeIdMuscle").value = "Ganhar peso";
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Tipo Corporal";
  document.getElementById("colorChangeIdNoIdea").value = "Sem ideia";
  document.getElementById("colorChangeIdEcto").value = "Ectomorfo";
  document.getElementById("colorChangeIdMeso").value = "Mesomorfo";
  document.getElementById("colorChangeIdEndo").value = "Endomorfo";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Qual dessas imagens representa melhor seu estado atual?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Qual dessas imagens representa melhor seu objetivo corporal?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Frequência de exercício de alta intensidade:";
  document.getElementById("colorChangeIdNoneXercise").value = "Nenhuma";
  document.getElementById("colorChangeIdLowXercise").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidXercise").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 ou mais vezes por semana";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Frequencia de dias com alimentação saudável:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Nenhuma";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 ou mais vezes por semana";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Frequência de dias com comidas não saudáveis:";
  document.getElementById("colorChangeIdNoneCheat").value = "Nenhuma";
  document.getElementById("colorChangeIdLowCheat").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidCheat").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 ou mais vezes por semana";
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Refeições por dias:";
  document.getElementById("colorChangeId2Meals").value = "2 refeições por dia";
  document.getElementById("colorChangeId3Meals").value = "3 refeições por dia";
  document.getElementById("colorChangeId4Meals").value = "4 refeições por dia";
  document.getElementById("colorChangeId5Meals").value =
    "5 ou 6 refeições por dia";
  document.getElementById("buttonResult").value = "Resultado";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML = "Todos direitos reservados";
  returnUpdatedValues();
}
function français() {
  if (contentArray.length == 2) numberBtnsOverwriteFr();
  language = "français";
  languageValue = 3;
  linkTitle.title = "Page d'accueil FitWish";
  firstPageBtnSeePrev.innerHTML = "Masquer le test précédent";
  idHowToH2.innerHTML = "Que vas tu faire";
  idHowToH3.innerHTML = "Qu'allons nous faire";
  idHowToTxt1.innerHTML =
    "Tout d'abord, si vous ne l'avez pas déjà fait, vérifiez le thème et la langue que vous préférez dans le bouton à trois barres sur la gauche. Alors répondez au test ... franchement, oui, je sais, c'est dur, mais c'est crucial pour que cela vous soit aussi utile que possible, puis dans un certain temps, vous pourrez répéter ce test et comparer les chiffres.";
  idHowToTxt2.innerHTML =
    "Eh bien, nous allons vous évaluer de manière complète et vous indiquer la distance qui vous sépare de vos objectifs sur votre chemin vers eux, puis vous pouvez revenir sur ce site même et refaire le test, en ayant jusqu'à deux résultats de test précédents stockés localement et en toute sécurité dans votre ordinateur.";
  firstPageH1.innerHTML =
    "Nous sommes heureux que vous nous ayez donné une chance de vous aider à réaliser le corps de vos rêves, appuyez sur Début pour continuer";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test une fois car ${contentArray[0].inputName}, fabriqué en ${contentArray[0].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
  firstPageBtnStart.value = `Début`;
  firstPageBtnDifferent.value = `Faites un nouveau test`;
  firstPageBtnOverwrite.value = `Écraser un test précédent`;
  firstPageBtnDelete.value = `Supprimer tous les tests précédents effectués`;
  firstPageBtnSeeAll.value = `Voir tous les tests précédents`;
  firstPageBtnSeePrev.value = `Voir le résultat du test précédent`;
  firstPageBtnHideAll.value = `Masquer tous les tests précédents`;
  resultBeginning2 =
    'Content de te revoir <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Menu des tentatives";
  howItWorksId.innerHTML = "Comment ça fonctionne";
  idHowToHeading.innerHTML = "Comment ça fonctionne";
  resultBeginning = 'Bien <big style="font-family: Kaushan Script, cursive;">';
  idAboutTxtLeft.style.fontSize = "0.9em";
  idAboutH2.style.marginLeft = "38.75%";
  idContactH2.style.marginLeft = "34.5%";
  idContactH2.innerHTML = "Comment nous contacter";
  idContactIntro.innerHTML =
    "Nous serions ravis d'entendre nos utilisateurs sur d'éventuels commentaires sur ce que vous avez vécu lors de l'utilisation de notre service. Pour nous contacter, accédez directement au lien vers l'e-mail de notre CTO ci-dessous, et pour avoir plus d'informations sur nous, accédez à son lien LinkedIn ci-dessous.";
  idAboutH2.innerHTML = "Qui sommes nous?";
  idAboutTxtLeft.innerHTML =
    "Eh bien, nous sommes FitWish, une nouvelle startup avec pour objectif, comme notre nom l'indique, de réaliser votre souhait dans le secteur du fitness, nous ne facturons pas votre premier diagnostic car nous pensons que le bien-être ne devrait pas avoir plus d'obstacles qu'il ne le fait déjà. Est-ce que. Par conséquent, en vous engageant à ce quiz rapide, vous aurez une sorte de conseils pour atteindre votre objectif dans ce domaine du fitness.";
  idAboutTxtRight.innerHTML =
    "Chez FitWish, nous reconnaissons l'effort déployé pour que votre corps soit tel que vous le souhaitez, et pour cette raison, nous apprécions votre précieuse décision de défendre votre position et d'agir en fonction de ce que vous devriez, votre santé.";
  buttonAbout.value = "À propos";
  buttonHome.value = "Page d'accueil";
  buttonContact.value = "Contact";
  idAboutHeading.innerHTML = "À propos";
  idContactHeading.innerHTML = "Contact";
  idBadHabits.style.fontSize = "2.2vw";
  idPlanMsg.style.fontSize = "2.2vw";
  idGoodHabits.style.fontSize = "2.2vw";
  contactId.innerHTML = "Contact";
  aboutId.innerHTML = "À propos";
  planId.style.marginLeft = "41.75%";
  planId.style.marginRight = "auto";
  introPageId.style.fontSize = "2.2vw";
  loginPageId.style.fontSize = "2.2vw";
  genderUnitPageId.style.fontSize = "2.2vw";
  dataPageId.style.fontSize = "2.2vw";
  goalPageId.style.fontSize = "2.2vw";
  bodyTypePageId.style.fontSize = "2.2vw";
  bodyImagePageId.style.fontSize = "2.2vw";
  xercisePageId.style.fontSize = "2.2vw";
  healthyPageId.style.fontSize = "2.2vw";
  cheatPageId.style.fontSize = "2.2vw";
  mealsPageId.style.fontSize = "2.2vw";
  emotionPageId.style.fontSize = "2.2vw";
  weightMetric.placeholder = "Exemple: 80.5";
  heightMetric.placeholder = "Exemple: 1.85";
  weightImperial.placeholder = "Exemple: 200.5";
  heightImperial.placeholder = "Exemple: 70";
  dataPageId.innerHTML = "Poids/Hauteur";
  headingTextInputIdWeightMetric.innerHTML = "Poids";
  headingTextInputIdHeightMetric.innerHTML = "Hauteur";
  headingTextInputIdWeightImperial.innerHTML = "Poids";
  headingTextInputIdHeightImperial.innerHTML = "Hauteur";
  defaultUnit = " - Défaut -";
  metricDefault = "Métrique - Défaut -";
  metricNoDefault = "Métrique";
  imperialDefault = "Impérial";
  checkImgId.style.marginLeft = "21.05%";
  pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  languageInput.innerHTML = "Langue:";
  h4Config.innerHTML = "Traitement";
  processing = "Traitement";
  diagnosis = "Fin du diagnostic";
  rpossibilities = "Chargement des possibilités de résultat";
  done = "Fait!";
  alreadyInPage = "Déjà en page";
  pageId.innerHTML = "Pages:";
  planId.innerHTML = "Notre Plan:";
  idBadHabits.innerHTML =
    "Vous avez peut-être des difficultés avec votre état de santé actuel, vous n'aimez pas la situation, mais vous n'êtes pas entièrement déterminé à la changer";
  idPlanMsg.innerHTML =
    "Mais maintenant tu as commencé un chemin dans lequel tu prends possession de toi-même, et je vais t'aider";
  idGoodHabits.innerHTML =
    "Plus tôt que prévu, vous serez habitué à avoir l'air aussi beau que vous le souhaitez, et en meilleure santé aussi!";
  introPageId.innerHTML = "Introduction";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Genre / Unité";
  goalPageId.innerHTML = "Objectif";
  bodyTypePageId.innerHTML = "Type de corps";
  bodyImagePageId.innerHTML = "Évaluation de la graisse corporelle";
  xercisePageId.innerHTML = "Évaluation de l'exercice";
  healthyPageId.innerHTML = "Repas sains";
  cheatPageId.innerHTML = "Repas de triche";
  mealsPageId.innerHTML = "Repas / jour";
  emotionPageId.innerHTML = "Suralimentation basée sur les émotions";
  buttonNext.value = "Suivant";
  buttonPrev.value = "Précédent";
  showImgBtn.innerHTML = "&#9776; Afficher l'image";
  referenceImgTxt.innerHTML = "Image de référence:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Sélectionnez un sexe pour voir l\'image de référence';
  weightManagementProgramFinalResult =
    "Résultat_final_du_programme_de_gestion_du_poids.html";
  document.getElementById("lightThemeButton").innerHTML = "Thème léger";
  document.getElementById("darkThemeButton").innerHTML =
    "Thème sombre (par défaut)";
  emailLinkColor.innerHTML =
    "<big>Vous souhaitez recevoir un e-mail contenant les principales données de résultat? Cliquez ici!!</big>";
  downloadLinkColor.innerHTML =
    "<big>Vous voulez avoir un nouveau document avec toutes ces dernières pages de données? Cliquez ici!!</big>";
  emotionans =
    "Pour ce problème émotionnel de suralimentation, vous devriez essayer quelques moyens de le réduire comme: essayez de répondre à la question, ai-je vraiment faim ou est-ce que j'essaye de manger mes émotions ?; à part cela, vous devriez essayer de vous calmer avec des techniques de respiration, de méditation ou de yoga pour réduire le stress; essayez de lutter contre l'ennui en trouvant un nouveau passe-temps, ou quelque chose qui «réveille» la volonté de se lever le matin; ne pas écarter la possibilité de voir un thérapeute pour vous aider dans plus de domaines que vous ne pouvez l'imaginer; Et pour lutter contre la tentation, récompensez-vous périodiquement avec une dose d'un aliment que vous aimez, peut-être tous les 15% à 25% du chemin parcouru, de cette façon vous apprendrez à modérer la quantité que vous mangez et ainsi vous faciliterez le maintien. votre corps en forme lorsque vous atteignez votre objectif.";
  document.getElementById("disclaimerId").innerHTML =
    "AVIS DE NON-RESPONSABILITÉ";
  firstAlert =
    "AVIS DE NON-RESPONSABILITÉ: Ce n'est pas un conseil médical ou nutritionniste et non seulement n'exclut pas une consultation médicale, mais aussi, moi en tant que créateur de code, je vous encourage et vous soutenez à voir votre médecin pour tout ce que VOUS pensez que VOUS devriez améliorer dans VOTRE vie de santé . Paix!";
  document.getElementById("name").placeholder = "Exemple de nom: Nick";
  document.getElementById("age").placeholder = "Exemple d'âge: 24 ";
  document.getElementById("email").placeholder =
    "Exemple d'email: nom.nom@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nom:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Âge:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Genre";
  document.getElementById("colorChangeIdMale").value = "Mâle";
  document.getElementById("colorChangeIdFemale").value = "Femelle";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Suralimentation basée sur les émotions<h3>(Lorsque vous ressentez de la tristesse, du bonheur, de l'ennui, de la solitude, du stress, de la déception, de l'inquiétude, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Oui";
  document.getElementById("colorChangeIdEmoNo").value = "Non";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unité";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrique${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Impérial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objectif";
  document.getElementById("colorChangeIdBulk").value = "Gagner du muscle";
  document.getElementById("colorChangeIdCut").value = "Obtenez déchiqueté";
  document.getElementById("colorChangeIdSurp").value = "Perdre du poids";
  document.getElementById("colorChangeIdMuscle").value = "Gagner de poids";
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Type de corps";
  document.getElementById("colorChangeIdNoIdea").value = "Aucune idée";
  document.getElementById("colorChangeIdEcto").value = "Ectomorphe";
  document.getElementById("colorChangeIdMeso").value = "Mesomorphe";
  document.getElementById("colorChangeIdEndo").value = "Endomorphe";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Lequel de ceux-ci vous représente le plus?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Selon vous, lequel de ces éléments représente le plus votre objectif?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Fréquence d'exercice à haute intensité:";
  document.getElementById("colorChangeIdNoneXercise").value = "Aucun";
  document.getElementById("colorChangeIdLowXercise").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidXercise").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 fois ou plus par semaine";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Fréquence des jours de repas bons et sains:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Aucun";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 fois ou plus par semaine";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Fréquence des jours de repas non sains:";
  document.getElementById("colorChangeIdNoneCheat").value = "Aucun";
  document.getElementById("colorChangeIdLowCheat").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidCheat").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 fois ou plus par semaine";
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Repas par jour:";
  document.getElementById("colorChangeId2Meals").value = "2 repas par jour";
  document.getElementById("colorChangeId3Meals").value = "3 repas par jour";
  document.getElementById("colorChangeId4Meals").value = "4 repas par jour";
  document.getElementById("colorChangeId5Meals").value =
    "5 ou 6 repas par jour";
  document.getElementById("buttonResult").value = "Résultat";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML =
    "Tous les droits sont réservés";
  returnUpdatedValues();
}
function español() {
  if (contentArray.length == 2) numberBtnsOverwriteEs();
  language = "español";
  languageValue = 4;
  linkTitle.title = "Página de inicio de FitWish";
  firstPageBtnSeePrev.innerHTML = "Ocultar Prueba Anterior";
  idHowToH2.innerHTML = "Qué harás";
  idHowToH3.innerHTML = "Lo que haremos";
  idHowToTxt1.innerHTML =
    "Primero, si aún no lo ha hecho, marque el tema y el idioma que prefiera en el botón de tres barras a la izquierda. Luego responda la prueba ... con franqueza, sí, lo sé, es duro, pero esto es crucial para que esto sea lo más útil posible para usted, luego, en algún momento a partir de ahora, puede repetir esta prueba y comparar los números.";
  idHowToTxt2.innerHTML =
    "Bueno, lo evaluaremos de manera integral y le diremos la distancia a sus objetivos en su camino hacia ellos, luego puede regresar a este mismo sitio y rehacer la prueba, teniendo hasta dos resultados de pruebas anteriores almacenados localmente y de forma segura en su computadora.";
  firstPageH1.innerHTML =
    "Nos alegra que nos haya brindado la oportunidad de ayudarlo a lograr el cuerpo de sus sueños, presione comenzar para continuar";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `Detectamos que ya ha realizado nuestra prueba una vez como ${contentArray[0].inputName}, hecho en ${contentArray[0].day}. Elija lo que le gustaría hacer a continuación`;
  firstPageBtnStart.value = `Comienzo`;
  firstPageBtnDifferent.value = `Hacer una nueva prueba`;
  firstPageBtnOverwrite.value = `Sobrescribir una prueba anterior`;
  firstPageBtnDelete.value = `Eliminar todas las pruebas anteriores realizadas`;
  firstPageBtnSeeAll.value = `Ver todas las pruebas anteriores`;
  firstPageBtnSeePrev.value = `Ver el resultado de la prueba anterior`;
  firstPageBtnHideAll.value = `Ocultar todas las pruebas anteriores`;
  resultBeginning2 =
    'Bienvenido de nuevo <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Menú de intentos";
  howItWorksId.innerHTML = "Cómo funciona";
  idHowToHeading.innerHTML = "Cómo funciona";
  resultBeginning =
    '¡Bueno! <big style="font-family: Kaushan Script, cursive;">';
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "33.5%";
  idContactH2.style.marginLeft = "32.5%";
  idContactH2.innerHTML = "Como contactar con nosotros";
  idContactIntro.innerHTML =
    "Nos encantaría saber de nuestros usuarios sobre posibles comentarios sobre lo que experimentó al utilizar nuestro servicio. Para contactarnos acceda directamente al enlace al correo electrónico de nuestro CTO a continuación, y para tener más información sobre nosotros acceda a su enlace de LinkedIn a continuación.";
  idAboutH2.innerHTML = "Quienes somos nosotros?";
  idAboutTxtLeft.innerHTML =
    "Bueno, somos FitWish, una nueva startup con el objetivo de, como dice nuestro Nombre, cumplir tu deseo en el sector del fitness, no cobramos por tu primer diagnóstico porque creemos que el bienestar no debería tener más obstáculos de los que ya tiene. hace. Por lo tanto, al comprometerse con este cuestionario rápido, tendrá una especie de guía para lograr su objetivo en este campo del fitness.";
  idAboutTxtRight.innerHTML =
    "En FitWish reconocemos el esfuerzo realizado para lograr que su cuerpo esté de la manera que desea que sea, y por eso, apreciamos su valiosa decisión de defender su posición y actuar de acuerdo con lo que debe, su salud.";
  buttonAbout.value = "Sobre";
  buttonHome.value = "Pagina de Inicio";
  buttonContact.value = "Contacto";
  idAboutHeading.innerHTML = "Sobre";
  idContactHeading.innerHTML = "Contacto";
  idBadHabits.style.fontSize = "2.2vw";
  idPlanMsg.style.fontSize = "2.2vw";
  idGoodHabits.style.fontSize = "2.2vw";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contacto";
  planId.style.marginLeft = "41%";
  planId.style.marginRight = "2.55%";
  introPageId.style.fontSize = "2.025vw";
  loginPageId.style.fontSize = "2.025vw";
  genderUnitPageId.style.fontSize = "2.025vw";
  dataPageId.style.fontSize = "2.025vw";
  goalPageId.style.fontSize = "2.025vw";
  bodyTypePageId.style.fontSize = "2.025vw";
  bodyImagePageId.style.fontSize = "2.025vw";
  xercisePageId.style.fontSize = "2.025vw";
  healthyPageId.style.fontSize = "2.025vw";
  cheatPageId.style.fontSize = "2.025vw";
  mealsPageId.style.fontSize = "2.025vw";
  emotionPageId.style.fontSize = "2.025vw";
  weightMetric.placeholder = "Ejemplo: 80.5";
  heightMetric.placeholder = "Ejemplo: 1.85";
  weightImperial.placeholder = "Ejemplo: 200.5";
  heightImperial.placeholder = "Ejemplo: 70";
  dataPageId.innerHTML = "Peso/Altura";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
  defaultUnit = " - Defecto -";
  metricDefault = "Métrico - Defecto -";
  metricNoDefault = "Métrico";
  imperialDefault = "Imperial";
  checkImgId.style.marginLeft = "17.9%";
  pagesNavId.innerHTML = "Paginas/Secciones(&sect;)";
  languageInput.innerHTML = "Idioma:";
  h4Config.innerHTML = "Procesando";
  processing = "Procesando";
  diagnosis = "Diagnóstico final";
  rpossibilities = "Cargando Posibilidades de Resultados";
  done = "¡Hecho!";
  alreadyInPage = "Ya en la pagina";
  pageId.innerHTML = "Paginas:";
  planId.innerHTML = "Nuestro Plan:";
  idBadHabits.innerHTML =
    "Es posible que esté luchando con su estado de salud actual, no le guste la situación, pero no esté completamente comprometido a cambiarla.";
  idPlanMsg.innerHTML =
    "Pero ahora iniciaste un camino en el que te apropiaste de ti mismo, y yo te voy a ayudar";
  idGoodHabits.innerHTML =
    "¡Antes de lo que esperabas, estarás acostumbrado a verte tan bien como quieras y más saludable también!";
  introPageId.innerHTML = "Introducción";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Género / Unidad";
  goalPageId.innerHTML = "Objetivo";
  bodyTypePageId.innerHTML = "Tipo de cuerpo";
  bodyImagePageId.innerHTML = "Evaluación de la grasa corporal";
  xercisePageId.innerHTML = "Evaluación del ejercicio";
  healthyPageId.innerHTML = "Comidas saludables";
  cheatPageId.innerHTML = "Comidas no saludables";
  mealsPageId.innerHTML = "Comidas / Día";
  emotionPageId.innerHTML = "Comer en exceso basado en las emociones";
  buttonNext.value = "Próximo";
  buttonPrev.value = "Previo";
  showImgBtn.innerHTML = "&#9776; Mostrar imagen";
  referenceImgTxt.innerHTML = "Imagen de referencia:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Seleccione un género para ver la imagen de referencia';
  weightManagementProgramFinalResult =
    "Resultado_final_del_programa_de_control_de_peso.html";
  document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
  document.getElementById("darkThemeButton").innerHTML =
    "Tema oscuro (predeterminado)";
  emailLinkColor.innerHTML =
    "<big>¿Quiere que le envíen un correo electrónico con los principales datos de resultados? ¡¡Haga clic aquí!!</big>";
  downloadLinkColor.innerHTML =
    "<big>¿Quieres tener un nuevo documento con todos los datos de estas últimas páginas? ¡¡Haga clic aquí!!</big>";
  emotionans =
    'Para este problema emocional de comer en exceso, debe probar algunas formas de reducirlo, como: intente responder la pregunta, ¿tengo mucha hambre o estoy tratando de comerme mis emociones ?; aparte de eso, debes intentar calmarte con algunas técnicas de respiración, meditación o yoga para reducir el estrés; intenta luchar contra el aburrimiento encontrando un nuevo pasatiempo, o algo que  "despierte " la voluntad de levantarse por la mañana; no descarte la posibilidad de ver a un terapeuta para que le ayude en más áreas de las que pueda imaginar; Y para combatir la tentación, recompénsate periódicamente con una dosis de un alimento que te guste, tal vez cada 15% -25% de todo el camino recorrido, de esta forma aprenderás a moderar la cantidad que comes y así te será más fácil mantenerlo. tu cuerpo en forma cuando alcances tu objetivo.';
  document.getElementById("disclaimerId").innerHTML =
    "DESCARGO DE RESPONSABILIDAD";
  firstAlert =
    "DESCARGO DE RESPONSABILIDAD: Este no es un consejo médico ni nutricionista y no solo no excluye una consulta médica, sino que también, como creador de este código, lo animo y lo apoyo para que vea a su médico por cualquier cosa que usted crea que debe mejorar en su vida de salud. . ¡Paz!";
  document.getElementById("name").placeholder = "Ejemplo de nombre: Nick";
  document.getElementById("age").placeholder = "Ejemplo de edad: 24";
  document.getElementById("email").placeholder =
    "Ejemplo: nombre.apellido@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nombre:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Edad:";
  document.getElementById("headingTextInputIdEmail").innerHTML =
    "Correo electrónico:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Género";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Femenino";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer en exceso basado en las emociones<h3>(Al experimentar tristeza, felicidad, aburrimiento, soledad, estrés, desilusión, preocupación, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Si";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidad";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrico${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objetivo";
  document.getElementById("colorChangeIdBulk").value = "Ganar músculo";
  document.getElementById("colorChangeIdCut").value = "Hacerse Rasgado";
  document.getElementById("colorChangeIdSurp").value = "Perder peso";
  document.getElementById("colorChangeIdMuscle").value = "Ganar peso";
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Tipo de cuerpo";
  document.getElementById("colorChangeIdNoIdea").value = "Ni idea";
  document.getElementById("colorChangeIdEcto").value = "Ectomorfo";
  document.getElementById("colorChangeIdMeso").value = "Mesomorfo";
  document.getElementById("colorChangeIdEndo").value = "Endomorfo";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "¿Cuál de estos crees que te representa más?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "¿Cuál de estos crees que representa más tu objetivo?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Frecuencia de ejercicio de alta intensidad:";
  document.getElementById("colorChangeIdNoneXercise").value = "Ninguno";
  document.getElementById("colorChangeIdLowXercise").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidXercise").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 o más veces por semana";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Frecuencia de días de comidas buenas y saludables:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Ninguno";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 o más veces por semana";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Frecuencia de días de comidas no saludables:";
  document.getElementById("colorChangeIdNoneCheat").value = "Ninguno";
  document.getElementById("colorChangeIdLowCheat").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidCheat").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 o más veces por semana";
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Comidas al dia:";
  document.getElementById("colorChangeId2Meals").value = "2 comidas al dia";
  document.getElementById("colorChangeId3Meals").value = "3 comidas al dia";
  document.getElementById("colorChangeId4Meals").value = "4 comidas al dia";
  document.getElementById("colorChangeId5Meals").value = "5 o 6 comidas al dia";
  document.getElementById("buttonResult").value = "Resultado";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML =
    "Todos los derechos reservados";
  returnUpdatedValues();
}
function themeTypeLight() {
  theme = "light";
  leftsidebarButton.style.color = "black";
  rightsidebarButton.style.color = "black";
  planId.style.color = "blue";
  idBadHabits.style.color = "red";
  idPlanMsg.style.color = "blue";
  idGoodHabits.style.color = "darkgreen";
  colorDownload = "#1F3B4D";
  backgroundColorDownload = "white";
  divPushCircleId.style.backgroundColor = "white";
  finalResultH3Id.style.color = "#1F3B4D";
  headingTextInputIdWeightMetric.style.color = "#1F3B4D";
  headingTextInputIdHeightMetric.style.color = "#1F3B4D";
  headingTextInputIdWeightImperial.style.color = "#1F3B4D";
  headingTextInputIdHeightImperial.style.color = "#1F3B4D";
  idAboutHeading.style.color = "#1F3B4D";
  idContactHeading.style.color = "#1F3B4D";
  buttonAbout.classList.remove("aboutContactBtn");
  buttonContact.classList.remove("aboutContactBtn");
  buttonHome.classList.remove("aboutContactBtn");
  buttonFirst.classList.remove("aboutContactBtn");
  buttonAbout.classList.add("contactAboutBtn");
  buttonContact.classList.add("contactAboutBtn");
  buttonHome.classList.add("contactAboutBtn");
  buttonFirst.classList.add("contactAboutBtn");
  idAboutH2.style.color = "#1F3B4D";
  idAboutTxtRight.style.color = "#1F3B4D";
  idAboutTxtLeft.style.color = "#1F3B4D";
  idContactLinkedIn.style.color = "#1F3B4D";
  idContactGmail.style.color = "#1F3B4D";
  idContactH2.style.color = "#1F3B4D";
  idContactIntro.style.color = "#1F3B4D";
  firstPageH1.style.color = "#1F3B4D";
  firstPageH12nd.style.color = "#1F3B4D";
  firstPageH13rd.style.color = "#1F3B4D";
  idHowToHeading.style.color = "#1F3B4D";
  idHowToH2.style.color = "#1F3B4D";
  idHowToH3.style.color = "#1F3B4D";
  idHowToTxt1.style.color = "#1F3B4D";
  idHowToTxt2.style.color = "#1F3B4D";
  document.getElementById("bodyBgColorId").style.cssText =
    "background-color:white; color:#1F3B4D;";
  document.getElementById("headingTextInputIdName").style.cssText =
    "color: #1F3B4D;";
  document.getElementById("headingTextInputIdAge").style.cssText =
    "color: #1F3B4D;";
  document.getElementById("headingTextInputIdEmail").style.cssText =
    "color: #1F3B4D;";
  document.getElementById("headingObjInputIdHead").style.color = "black";
  document.getElementById("headingObjInputIdGender").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdUnit").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdGoal").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdBodyType").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdBodyImage").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdXercise").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdHealthy").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdCheat").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdMeals").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdGoalImage").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdEmotion").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("downloadLinkColor").style.color = "green";
  document.getElementById("emailLinkColor").style.color = "#E50278";
}
function themeTypeDark() {
  theme = "dark";
  leftsidebarButton.style.color = "aliceblue";
  rightsidebarButton.style.color = "aliceblue";
  planId.style.color = "cyan";
  idBadHabits.style.color = "white";
  idPlanMsg.style.color = "cyan";
  idGoodHabits.style.color = "gold";
  colorDownload = "azure";
  backgroundColorDownload = "#12232A";
  divPushCircleId.style.backgroundColor = "#12232A";
  finalResultH3Id.style.color = "azure";
  headingTextInputIdWeightMetric.style.color = "#DDD";
  headingTextInputIdHeightMetric.style.color = "#DDD";
  headingTextInputIdWeightImperial.style.color = "#DDD";
  headingTextInputIdHeightImperial.style.color = "#DDD";
  idAboutHeading.style.color = "azure";
  idContactHeading.style.color = "azure";
  buttonAbout.classList.add("aboutContactBtn");
  buttonContact.classList.add("aboutContactBtn");
  buttonHome.classList.add("aboutContactBtn");
  buttonFirst.classList.add("aboutContactBtn");
  buttonAbout.classList.remove("contactAboutBtn");
  buttonContact.classList.remove("contactAboutBtn");
  buttonHome.classList.remove("contactAboutBtn");
  buttonFirst.classList.remove("contactAboutBtn");
  idAboutH2.style.color = "azure";
  idAboutTxtRight.style.color = "azure";
  idAboutTxtLeft.style.color = "azure";
  idContactH2.style.color = "azure";
  idContactIntro.style.color = "azure";
  idContactLinkedIn.style.color = "azure";
  idContactGmail.style.color = "azure";
  firstPageH1.style.color = "azure";
  firstPageH12nd.style.color = "azure";
  firstPageH13rd.style.color = "azure";
  idHowToHeading.style.color = "azure";
  idHowToH2.style.color = "azure";
  idHowToH3.style.color = "azure";
  idHowToTxt1.style.color = "azure";
  idHowToTxt2.style.color = "azure";
  document.getElementById("bodyBgColorId").style.cssText =
    "background-color:#12232A; color:#1F3B4D;";
  document.getElementById("headingTextInputIdName").style.cssText =
    "color: #DDD;";
  document.getElementById("headingTextInputIdAge").style.cssText =
    "color: #DDD;";
  document.getElementById("headingTextInputIdEmail").style.cssText =
    "color: #DDD;";
  document.getElementById("headingObjInputIdHead").style.color = "aliceblue";
  document.getElementById("headingObjInputIdGender").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdUnit").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdGoal").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdBodyType").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdBodyImage").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdXercise").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdHealthy").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdCheat").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdMeals").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdGoalImage").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdEmotion").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("downloadLinkColor").style.color = "lightgreen";
  document.getElementById("emailLinkColor").style.color = "pink";
}
const setLocalData = (idParameter) => {
  idUser = idParameter;
  contentArray.push({
    idUser,
    inputName,
    emailaddrreturn,
    age,
    language,
    theme,
    genderreturn,
    resultBeginning2,
    btype,
    bodypt,
    goalDistance,
    ageAdvice,
    bodytp,
    cbody,
    ccbodycc,
    cbodyc,
    ccbody,
    bodycc,
    bodyc,
    emotionans,
    bmrl,
    bmrll,
    bmrlll,
    bmrllll,
    bmrlllll,
    day,
  });
  localStorage.setItem("contentArray", JSON.stringify(contentArray));
};
const storage = () => (tryNumber == 1 ? setLocalData(1) : setLocalData(2));
const showPrevTestResult = (resultTry) => {
  if (resultTry == 1) {
    clearScreen();
    idFooter.style.display = "none";
    buttonFirst.style.display = "block";
    finalResultH3Id.style.display = "block";
    finalResultH3Id.innerHTML = `${contentArray[0].resultBeginning2} ${contentArray[0].inputName}</big>, ${contentArray[0].btype} <br> ${contentArray[0].bodypt}${contentArray[0].goalDistance}<br><br>${contentArray[0].ageAdvice}<br><br>${contentArray[0].bodytp}<br><br>${contentArray[0].cbody}<br><br>${contentArray[0].ccbodycc}<br><br>${contentArray[0].cbodyc}<br><br>${contentArray[0].ccbody}<br><br>${contentArray[0].bodycc}<br><br>${contentArray[0].bodyc}<br><br>${contentArray[0].emotionans}<br><br>${contentArray[0].bmrl}<br><br><br>`;
    finalResultH4Id.style.display = "block";
    finalResultH4Id.innerHTML = `<i>${contentArray[0].bmrll}<br><br>${contentArray[0].bmrlll}<br><br>${contentArray[0].bmrllll}<br><br>${contentArray[0].bmrlllll}</i><br><br><br>`;
    idFooter.style.position = "relative";
    idFooter.style.marginBottom = "0";
    idFooter.style.display = "block";
  } else if (resultTry == 2) {
    clearScreen();
    idFooter.style.display = "none";
    buttonFirst.style.display = "block";
    finalResultH3Id.style.display = "block";
    finalResultH3Id.innerHTML = `${contentArray[1].resultBeginning2} ${contentArray[1].inputName}</big>, ${contentArray[1].btype} <br> ${contentArray[1].bodypt}${contentArray[1].goalDistance}<br><br>${contentArray[1].ageAdvice}<br><br>${contentArray[1].bodytp}<br><br>${contentArray[1].cbody}<br><br>${contentArray[1].ccbodycc}<br><br>${contentArray[1].cbodyc}<br><br>${contentArray[1].ccbody}<br><br>${contentArray[1].bodycc}<br><br>${contentArray[1].bodyc}<br><br>${contentArray[1].emotionans}<br><br>${contentArray[1].bmrl}<br><br><br>`;
    finalResultH4Id.style.display = "block";
    finalResultH4Id.innerHTML = `<i>${contentArray[1].bmrll}<br><br>${contentArray[1].bmrlll}<br><br>${contentArray[1].bmrllll}<br><br>${contentArray[1].bmrlllll}</i><br><br><br>`;
    idFooter.style.position = "relative";
    idFooter.style.marginBottom = "0";
    idFooter.style.display = "block";
  }
};
const startNewTry = (tryN) => {
  firstPage();
  titleMid();
  tryNumber = tryN;
};
const overwriteTest2 = (paramas) => {
  if (paramas == 1) {
    if (language == "english")
      var confirmOverwrite = confirm(
        `Are you sure you want to overwrite the test made as ${contentArray[0].inputName}? It will be forever destroyed.`
      );
    else if (language == "português")
      var confirmOverwrite = confirm(
        `Tem certeza que deseja sobrescrever o teste feito por ${contentArray[0].inputName}? Esse teste será destruido para sempre.`
      );
    else if (language == "français")
      var confirmOverwrite = confirm(
        `Voulez-vous vraiment remplacer le test effectué comme ${contentArray[0].inputName}? Il sera détruit à jamais.`
      );
    else if (language == "español")
      var confirmOverwrite = confirm(
        `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${contentArray[0].inputName}? Será destruido para siempre.`
      );
    if (confirmOverwrite == true) {
      contentArray.shift();
      localStorage.setItem("contentArray", JSON.stringify(contentArray));
      startNewTry(1);
      firstPageBtn1stTry.style.display = "none";
      firstPageBtn1stTryOverwrite.style.display = "none";
      firstPageBtn2ndTry.style.display = "none";
      firstPageBtn2ndTryOverwrite.style.display = "none";
      firstPageBtnOverwrite.style.display = "none";
      firstPageBtnSeeAll.style.display = "none";
      firstPageBtnDelete.style.display = "none";
      firstPageBtnStart.style.display = "none";
    }
  } else if (paramas == 2) {
    if (language == "english")
      var confirmOverwrite = confirm(
        `Are you sure you want to overwrite the test made as ${contentArray[1].inputName}? It will be forever destroyed.`
      );
    else if (language == "português")
      var confirmOverwrite = confirm(
        `Tem certeza que deseja sobrescrever o teste feito por ${contentArray[1].inputName}? Esse teste será destruido para sempre.`
      );
    else if (language == "français")
      var confirmOverwrite = confirm(
        `Voulez-vous vraiment remplacer le test effectué comme ${contentArray[1].inputName}? Il sera détruit à jamais.`
      );
    else if (language == "español")
      var confirmOverwrite = confirm(
        `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${contentArray[1].inputName}? Será destruido para siempre.`
      );
    if (confirmOverwrite == true) {
      contentArray.pop();
      localStorage.setItem("contentArray", JSON.stringify(contentArray));
      startNewTry(2);
    }
  }
};
function overwriteTest() {
  if (triesMade == 1) {
    if (language == "english")
      var confirmOverwrite = confirm(
        `Are you sure you want to overwrite the test made as ${contentArray[0].inputName}? It will be forever destroyed.`
      );
    else if (language == "português")
      var confirmOverwrite = confirm(
        `Tem certeza que deseja sobrescrever o teste feito por ${contentArray[0].inputName}? Esse teste será destruido para sempre.`
      );
    else if (language == "français")
      var confirmOverwrite = confirm(
        `Voulez-vous vraiment remplacer le test effectué comme ${contentArray[0].inputName}? Il sera détruit à jamais.`
      );
    else if (language == "español")
      var confirmOverwrite = confirm(
        `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${contentArray[0].inputName}? Será destruido para siempre.`
      );
    if (confirmOverwrite == true) {
      contentArray.shift();
      localStorage.setItem("contentArray", JSON.stringify(contentArray));
      startNewTry(1);
    }
  } else if (triesMade == 2) {
    seeAllTests();
    firstPageBtn1stTryOverwrite.style.display = "block";
    firstPageBtn2ndTryOverwrite.style.display = "block";
  } else firstPageBtnOverwrite.style.display = "none";
}
function deleteTests() {
  if (language == "english")
    var deletePrevTests = confirm(
      "Are you sure you want to delete all the tests?"
    );
  else if (language == "português")
    var deletePrevTests = confirm(
      "Tem certeza que deseja deletar todos os testes?"
    );
  else if (language == "français")
    var deletePrevTests = confirm(
      "Voulez-vous vraiment supprimer tous les tests?"
    );
  else if (language == "español")
    var deletePrevTests = confirm(
      "¿Estás seguro de que quieres eliminar todas las pruebas?"
    );
  if (deletePrevTests == true) {
    localStorage.removeItem("contentArray");
    window.location.reload();
  }
}
function hidePrevTests() {
  firstPageBtn1stTry.style.display = "none";
  firstPageBtnSeePrev.style.display = "block";
  firstPageBtnHidePrev.style.display = "none";
}
function seePrevTest() {
  firstPageBtn1stTry.style.display = "block";
  firstPageBtnSeePrev.style.display = "none";
  firstPageBtnHidePrev.style.display = "block";
  firstPageBtnDelete.style.display = "block";
}
function seeAllTests() {
  firstPageBtn1stTry.style.display = "block";
  firstPageBtn2ndTry.style.display = "block";
  firstPageBtnSeeAll.style.display = "none";
  firstPageBtnHideAll.style.display = "block";
  firstPageBtnDelete.style.display = "block";
}
function hideAllTests() {
  firstPageBtn1stTry.style.display = "none";
  firstPageBtn2ndTry.style.display = "none";
  firstPageBtnSeeAll.style.display = "block";
  firstPageBtnHideAll.style.display = "none";
  firstPageBtnDelete.style.display = "block";
}
function firstPageLogin() {
  clearScreen();
  titleMid();
  buttonFirst.style.display = "none";
  idFooter.style.display = "block";
  idFooter.style.position = "absolute";
  idFooter.style.bottom = "0";
  idFirstSubmit.style.display = "block";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
}
const firstPage = () => {
  if (differentPage != 1) {
    pageSwitcher(1);
    closeNav();
    closeRightNav();
    idHowToPage.style.display = "none";
    idHowToHeading.style.display = "none";
    idContactHeading.style.display = "none";
    idAboutHeading.style.display = "none";
    rightsidebarButton.style.display = "block";
    idFirstSubmit.style.display = "none";
    linkTitlea.href = "javascript:window.location.href = 'index.html';";
    titleLink.href = "javascript:window.location.href = 'index.html';";
    pagesNavId.onclick = rightNavInterpreter;
    pagesNavId.onclick();
    rightNavInterpreter();
  }
};
const clearScreen = () => {
  closeNav();
  closeRightNav();
  idFirstSubmit.style.display = "none";
  idIntroSubmit.style.display = "none";
  idLoginSubmit.style.display = "none";
  idGenderUnitSubmit.style.display = "none";
  idDataSubmit.style.display = "none";
  idGoalSubmit.style.display = "none";
  idBodyTypeSubmit.style.display = "none";
  idImageSubmit.style.display = "none";
  idXerciseSubmit.style.display = "none";
  idHealthySubmit.style.display = "none";
  idCheatSubmit.style.display = "none";
  idMealsSubmit.style.display = "none";
  idEmotionSubmit.style.display = "none";
  buttonNext.style.display = "none";
  buttonResult.style.display = "none";
  buttonPrev.style.display = "none";
  idAboutPage.style.display = "none";
  idContactPage.style.display = "none";
  idFirstSubmit.style.display = "none";
  idFirstSubmit.style.display = "none";
  finalResultH3Id.style.display = "none";
  finalResultH4Id.style.display = "none";
  finalResultH2Id.style.display = "none";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
  differentPage = 0;
};
function titleMid() {
  linkTitle.style.marginLeft = "40%";
  imageLogo.style.marginTop = "1.5vh";
  imageLogo.style.marginTop = "1.5vh";
  imageLogo.style.width = "4vw";
  imageLogo.style.height = "10vh";
  idAboutPage.style.display = "none";
  idContactPage.style.display = "none";
  headingObjInputIdHead.style.fontSize = "2.3em";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
}
function titleLeft() {
  linkTitle.style.marginLeft = "4vw";
  linkTitle.style.marginTop = "0";
  imageLogo.style.marginTop = "0";
  imageLogo.style.width = "3vw";
  imageLogo.style.height = "7vh";
  headingObjInputIdHead.style.fontSize = "1.35em";
  buttonsId.style.display = "block";
  buttonFirst.style.display = "block";
  aboutId.style.display = "block";
  contactId.style.display = "block";
  howItWorksId.style.display = "block";
}
function about() {
  clearScreen();
  titleLeft();
  aboutId.style.display = "none";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
  idContactPage.style.display = "none";
  idAboutPage.style.display = "block";
  buttonAbout.style.display = "none";
  buttonContact.style.display = "block";
  buttonHome.style.display = "block";
  idAboutHeading.style.display = "block";
  idFirstSubmit.style.display = "none";
}
function howTo() {
  clearScreen();
  titleLeft();
  howItWorksId.style.display = "none";
  idHowToPage.style.display = "block";
  idHowToHeading.style.display = "block";
  idContactPage.style.display = "none";
  idAboutPage.style.display = "none";
  buttonAbout.style.display = "block";
  buttonContact.style.display = "block";
  buttonHome.style.display = "block";
  idAboutHeading.style.display = "block";
  idFirstSubmit.style.display = "none";
}
function contact() {
  clearScreen();
  titleLeft();
  contactId.style.display = "none";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
  idAboutPage.style.display = "none";
  idContactPage.style.display = "block";
  buttonAbout.style.display = "block";
  buttonContact.style.display = "none";
  buttonHome.style.display = "block";
  idContactHeading.style.display = "block";
  idFirstSubmit.style.display = "none";
}
const metricUnit = () => (colorChangeIdMetric.value += ` (kg / m)`);
function metricUnitCloak() {
  if ((unit == "metric" && metricVerify >= 2) || unit == "imperial")
    colorChangeIdMetric.value = `${metricNoDefault}`;
  else colorChangeIdMetric.value = `${metricDefault}`;
}
const imperialUnit = () => (colorChangeIdImperial.value += ` (lbs / in)`);
const imperialUnitCloak = () =>
  (colorChangeIdImperial.value = ` ${imperialDefault}`);
function rightNavInterpreter() {
  if (myRightSidenav.style.width == "250px")
    document.getElementById("myRightSidenav").style.width = "0";
  else document.getElementById("myRightSidenav").style.width = "250px";
}
const openNav = () =>
  (document.getElementById("myLeftSidenav").style.width = "250px");
const closeNav = () =>
  (document.getElementById("myLeftSidenav").style.width = "0");
const closeRightNav = () =>
  (document.getElementById("myRightSidenav").style.width = "0");
function openGenderCenterNav() {
  document.getElementById("myGenderCenterNav").style.width = "70vw";
  document.getElementById("myGenderCenterNav").style.height = "70vh";
  if (gender != "male" && gender != "female")
    document.getElementById("backupReferenceImg").innerHTML = backupGenderImg;
}
function closeGenderCenterNav() {
  document.getElementById("myGenderCenterNav").style.width = "0";
  document.getElementById("myGenderCenterNav").style.height = "0";
  if (gender != "male" && gender != "female") backupReferenceImg.innerHTML = "";
}
function returnUpdatedValues() {
  if (gender == "male") returnGender("colorChangeIdMale");
  else if (gender == "female") returnGender("colorChangeIdFemale");
  if (bodytype == "ecto") {
    returnBody("colorChangeIdEcto");
    bodyType("ecto");
  } else if (bodytype == "meso") {
    returnBody("colorChangeIdMeso");
    bodyType("meso");
  } else if (bodytype == "endo") {
    returnBody("colorChangeIdEndo");
    bodyType("endo");
  }
  if (goal == "bulking") returnGoal("colorChangeIdBulk");
  else if (goal == "cutting") returnGoal("colorChangeIdCut");
  else if (goal == "surplus") returnGoal("colorChangeIdSurp");
  else if (goal == "muscle") returnGoal("colorChangeIdMuscle");
}
const pageSwitcher = (numpage) => {
  titleMid();
  if (differentPage == numpage) alert(alreadyInPage);
  else {
    if (numpage == 1) {
      idIntroSubmit.style.display = "block";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "none";
      differentPage = 1;
    } else if (numpage == 2) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "block";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 2;
    } else if (numpage == 3) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "block";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 3;
    } else if (numpage == 4) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "block";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 4;
    } else if (numpage == 5) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "block";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 5;
    } else if (numpage == 6) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "block";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 6;
    } else if (numpage == 7) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "block";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 7;
    } else if (numpage == 8) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "block";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 8;
    } else if (numpage == 9) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "block";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 9;
    } else if (numpage == 10) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "block";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 10;
    } else if (numpage == 11) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "block";
      idEmotionSubmit.style.display = "none";
      buttonNext.style.display = "block";
      buttonResult.style.display = "none";
      buttonPrev.style.display = "block";
      differentPage = 11;
    } else if (numpage == 12) {
      idIntroSubmit.style.display = "none";
      idLoginSubmit.style.display = "none";
      idGenderUnitSubmit.style.display = "none";
      idDataSubmit.style.display = "none";
      idGoalSubmit.style.display = "none";
      idBodyTypeSubmit.style.display = "none";
      idImageSubmit.style.display = "none";
      idXerciseSubmit.style.display = "none";
      idHealthySubmit.style.display = "none";
      idCheatSubmit.style.display = "none";
      idMealsSubmit.style.display = "none";
      idEmotionSubmit.style.display = "block";
      buttonNext.style.display = "none";
      buttonResult.style.display = "block";
      buttonPrev.style.display = "block";
      differentPage = 12;
    }
  }
  if (differentPage == 1) {
    buttonAbout.style.display = "block";
    buttonContact.style.display = "block";
    buttonHome.style.display = "none";
    if (triesMade > 0) buttonFirst.style.display = "block";
  } else {
    buttonAbout.style.display = "none";
    buttonContact.style.display = "none";
    buttonHome.style.display = "none";
    buttonFirst.style.display = "none";
  }
};
function nextPageInterpreter() {
  if (differentPage == 1) pageSwitcher(2);
  else if (differentPage == 2) pageSwitcher(3);
  else if (differentPage == 3) pageSwitcher(4);
  else if (differentPage == 4) pageSwitcher(5);
  else if (differentPage == 5) pageSwitcher(6);
  else if (differentPage == 6) pageSwitcher(7);
  else if (differentPage == 7) pageSwitcher(8);
  else if (differentPage == 8) pageSwitcher(9);
  else if (differentPage == 9) pageSwitcher(10);
  else if (differentPage == 10) pageSwitcher(11);
  else if (differentPage == 11) pageSwitcher(12);
}
function prevPageInterpreter() {
  if (differentPage == 2) pageSwitcher(1);
  else if (differentPage == 3) pageSwitcher(2);
  else if (differentPage == 4) pageSwitcher(3);
  else if (differentPage == 5) pageSwitcher(4);
  else if (differentPage == 6) pageSwitcher(5);
  else if (differentPage == 7) pageSwitcher(6);
  else if (differentPage == 8) pageSwitcher(7);
  else if (differentPage == 9) pageSwitcher(8);
  else if (differentPage == 10) pageSwitcher(9);
  else if (differentPage == 11) pageSwitcher(10);
  else if (differentPage == 12) pageSwitcher(11);
}
//disclaimer button callable function
const disclaimer = () => alert(firstAlert);
//functions that define the color change when the cursor is on or out of a button
const hoverColorChangeFunc = (hoveredId) =>
  (document.getElementById(hoveredId).style.backgroundColor = "#2ECC71");

function hoverOutColorChangeFunc(g, gg) {
  var g = document.getElementById(gg);
  g.style.backgroundColor = "teal";
  if (emotion == "yes") colorChangeIdEmoYes.style.backgroundColor = "#7395AE";
  else if (emotion == "no")
    colorChangeIdEmoNo.style.backgroundColor = "#7395AE";
  if (gender == "male") colorChangeIdMale.style.backgroundColor = "#7395AE";
  else if (gender == "female")
    colorChangeIdFemale.style.backgroundColor = "#7395AE";
  if (unit == "metric" && metricVerify >= 2)
    colorChangeIdMetric.style.backgroundColor = "#7395AE";
  else if (unit == "imperial")
    colorChangeIdImperial.style.backgroundColor = "#7395AE";
  if (goal == "bulking") colorChangeIdBulk.style.backgroundColor = "#7395AE";
  else if (goal == "cutting")
    colorChangeIdCut.style.backgroundColor = "#7395AE";
  else if (goal == "surplus")
    colorChangeIdSurp.style.backgroundColor = "#7395AE";
  else if (goal == "muscle")
    colorChangeIdMuscle.style.backgroundColor = "#7395AE";
  if (bodytype == "ecto") colorChangeIdEcto.style.backgroundColor = "#7395AE";
  else if (bodytype == "meso")
    colorChangeIdMeso.style.backgroundColor = "#7395AE";
  else if (bodytype == "endo")
    colorChangeIdEndo.style.backgroundColor = "#7395AE";
  if (currentBody == 1) colorChangeIdBody1.style.backgroundColor = "#7395AE";
  else if (currentBody == 2)
    colorChangeIdBody2.style.backgroundColor = "#7395AE";
  else if (currentBody == 3)
    colorChangeIdBody3.style.backgroundColor = "#7395AE";
  else if (currentBody == 4)
    colorChangeIdBody4.style.backgroundColor = "#7395AE";
  else if (currentBody == 5)
    colorChangeIdBody5.style.backgroundColor = "#7395AE";
  else if (currentBody == 6)
    colorChangeIdBody6.style.backgroundColor = "#7395AE";
  else if (currentBody == 7)
    colorChangeIdBody7.style.backgroundColor = "#7395AE";
  else if (currentBody == 8)
    colorChangeIdBody8.style.backgroundColor = "#7395AE";
  else if (currentBody == 9)
    colorChangeIdBody9.style.backgroundColor = "#7395AE";
  if (goalBody == 1) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal1.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal1.style.backgroundColor = "teal";
  } else if (goalBody == 2) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal2.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal2.style.backgroundColor = "teal";
  } else if (goalBody == 3) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal3.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal3.style.backgroundColor = "teal";
  } else if (goalBody == 4) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal4.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal4.style.backgroundColor = "teal";
  } else if (goalBody == 5) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal5.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal5.style.backgroundColor = "teal";
  } else if (goalBody == 6) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal6.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal6.style.backgroundColor = "teal";
  } else if (goalBody == 7) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal7.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal7.style.backgroundColor = "teal";
  } else if (goalBody == 8) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal8.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal8.style.backgroundColor = "teal";
  } else if (goalBody == 9) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal9.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal9.style.backgroundColor = "teal";
  }
  if (exercise == 1) colorChangeIdNoneXercise.style.backgroundColor = "#7395AE";
  else if (exercise == 2)
    colorChangeIdLowXercise.style.backgroundColor = "#7395AE";
  else if (exercise == 3)
    colorChangeIdMidXercise.style.backgroundColor = "#7395AE";
  else if (exercise == 4)
    colorChangeIdHighXercise.style.backgroundColor = "#7395AE";
  if (healthy == 1) colorChangeIdNoneHealthy.style.backgroundColor = "#7395AE";
  else if (healthy == 2)
    colorChangeIdLowHealthy.style.backgroundColor = "#7395AE";
  else if (healthy == 3)
    colorChangeIdMidHealthy.style.backgroundColor = "#7395AE";
  else if (healthy == 4)
    colorChangeIdHighHealthy.style.backgroundColor = "#7395AE";
  if (cheat == 1) colorChangeIdNoneCheat.style.backgroundColor = "#7395AE";
  else if (cheat == 2) colorChangeIdLowCheat.style.backgroundColor = "#7395AE";
  else if (cheat == 3) colorChangeIdMidCheat.style.backgroundColor = "#7395AE";
  else if (cheat == 4) colorChangeIdHighCheat.style.backgroundColor = "#7395AE";
  if (meals == 1) colorChangeId2Meals.style.backgroundColor = "#7395AE";
  else if (meals == 2) colorChangeId3Meals.style.backgroundColor = "#7395AE";
  else if (meals == 3) colorChangeId4Meals.style.backgroundColor = "#7395AE";
  else if (meals == 4) colorChangeId5Meals.style.backgroundColor = "#7395AE";
}
img = document.createElement("img");
//1 func about emotional overeating
const emoFunc = (binary) => (emotion = binary);
//2 functions about gender
function male() {
  gender = "male";
  setImg(
    "https://crossfitclandestine.files.wordpress.com/2019/05/xbody-fat-chart-men.png.pagespeed.ic_.57b54gdukq.jpg"
  );
}
function female() {
  gender = "female";
  setImg(
    "https://crossfitclandestine.files.wordpress.com/2019/05/body-fat-chart-women.png.pagespeed.ce_.9463kejyyr.png"
  );
}
function setImg(link) {
  img.src = link;
  img.setAttribute("width", "500");
  img.setAttribute("height", "400");
  src = document.getElementById("bodyImageId");
  src.appendChild(img);
}
const bodyGoalFunction = (bbtype) => (goal = bbtype);
//in case the person does not know their body type
function nop() {
  if (languageValue == 1)
    alert(
      "Copy the first link to a 10-minute video explaining it: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, or take a Google test on this link: https://www.bodybuilding.com/fun/becker3.htm. But basically ecto does not have much ease in gaining muscle nor fat, meso has ease in gaining muscle and losing fat and endo has ease to gain both. And btw you can click on the body type you are without having to rerun the code"
    );
  else if (languageValue == 2)
    alert(
      "Copie o primeiro link para um vídeo de 10 minutos explicando-o: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, ou faça um teste do Google neste link: https://www.bodybuilding.com/fun/becker3.htm. Mas basicamente o ecto não tem muita facilidade em ganhar músculo nem gordura, o meso tem facilidade em ganhar músculo e perder gordura e o endo tem facilidade em ganhar ambos. E inclusive você pode clicar no tipo de corpo que você é, sem ter que executar o código novamente"
    );
  else if (languageValue == 3)
    alert(
      "Copiez le premier lien vers une vidéo de 10 minutes expliquant: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, ou faites un test Google sur ce lien: https://www.bodybuilding.com/fun/becker3.htm. Mais fondamentalement, ecto n'a pas beaucoup de facilité à gagner du muscle ni de la graisse, le méso a la facilité de gagner du muscle et de perdre de la graisse et l'endo a la facilité de gagner les deux. Et au fait, vous pouvez cliquer sur le type de corps que vous êtes sans avoir à réexécuter le code"
    );
  else if (languageValue == 4)
    alert(
      "Copie el primer enlace a un video de 10 minutos que lo explique: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, o haz una prueba de Google en este enlace: https://www.bodybuilding.com/fun/becker3.htm. Pero básicamente ecto no tiene mucha facilidad para ganar músculo ni grasa, meso tiene facilidad para ganar músculo y perder grasa y endo tiene facilidad para ganar ambos. Y, por cierto, puede hacer clic en el tipo de cuerpo que tiene sin tener que volver a ejecutar el código."
    );
}
// body type
const bodyType = (bodytt) => {
  bodytype = bodytt;
  if (languageValue == 1) {
    if (bodytype == "ecto")
      btype =
        "since you are an ectomorph, you gotta have in mind that you naturally have a condition that makes you skinnier, having less fat but also less muscle.";
    else if (bodytype == "meso")
      btype =
        "since you are a mesomorph, you gain muscle with moderate ease and lose fat also with some ease, genetically wise, so you got it 'easier than others', right? Yeah but nahh really. It's not because it's a little bit easier that it's easy to get seriously in shape, so then when you get it done you'll appreciate yourself even more, and that's what matters!";
    else if (bodytype == "endo")
      btype =
        "since you are an endomorph, you gain both muscle and fat easily, makes bulking easy but makes it a lot more difficult to cut and get your body in shape.";
  } else if (languageValue == 2) {
    if (bodytype == "ecto")
      btype =
        "já que você é um ectomorfo, é preciso ter em mente que você tem naturalmente uma condição que o torna mais magro, tendo menos gordura, mas também menos músculos.";
    else if (bodytype == "meso")
      btype =
        "como você é um mesomorfo, você ganha músculo com moderada facilidade e perde gordura também com alguma facilidade, geneticamente sábio, então você entendeu 'mais fácil do que os outros', certo? Sim, mas nahh realmente. Não é porque é um pouco mais fácil que é fácil entrar em forma seriamente, então, quando terminar, você se apreciará ainda mais, e é isso que importa!";
    else if (bodytype == "endo")
      btype =
        "como você é um(a) endomorfo(a), você ganha músculo e gordura facilmente, torna mais fácil aumentar o volume, mas torna muito mais difícil secar e colocar seu corpo em forma.";
  } else if (languageValue == 3) {
    if (bodytype == "ecto")
      btype =
        "puisque vous êtes un ectomorphe, vous devez garder à l'esprit que vous avez naturellement une maladie qui vous rend plus maigre, avec moins de graisse mais aussi moins de muscle.";
    else if (bodytype == "meso")
      btype =
        "puisque vous êtes un mésomorphe, vous gagnez du muscle avec une facilité modérée et perdez de la graisse également avec une certaine facilité, génétiquement sage, donc vous l'avez plus facile que les autres '', non? Ouais mais nahh vraiment. Ce n'est pas parce que c'est un peu plus facile qu'il est facile de se mettre sérieusement en forme, alors quand vous aurez terminé, vous vous apprécierez encore plus et c'est ce qui compte!";
    else if (bodytype == "endo")
      btype =
        "puisque vous êtes un endomorphe, vous gagnez facilement du muscle et de la graisse, ce qui facilite le gonflement, mais il est beaucoup plus difficile de couper et de remettre votre corps en forme.";
  } else if (languageValue == 4) {
    if (bodytype == "ecto")
      btype =
        "como eres un ectomorfo, debes tener en cuenta que naturalmente tienes una condición que te hace más delgado, con menos grasa pero también con menos músculo.";
    else if (bodytype == "meso")
      btype =
        "como eres mesomorfo, ganas músculo con moderada facilidad y pierdes grasa también con cierta facilidad, genéticamente, así que lo conseguiste 'más fácil que otros', ¿verdad? Sí, pero realmente no. No es porque sea un poco más fácil que sea fácil ponerse en forma seriamente, así que cuando lo termines te apreciarás aún más, ¡y eso es lo que importa!";
    else if (bodytype == "endo")
      btype =
        "como eres un endomorfo, ganas músculo y grasa fácilmente, facilita el volumen pero hace que sea mucho más difícil secar y poner tu cuerpo en forma.";
  }
};
// unit system
function unitSystem(unitSys) {
  unit = unitSys;
  if (unit == "metric") {
    metricDataInputId.style.display = "block";
    imperialDataInputId.style.display = "none";
    metricVerify += 1;
  } else if (unit == "imperial") {
    metricDataInputId.style.display = "none";
    imperialDataInputId.style.display = "block";
  }
}
//ideal Weight Calculations
function idealWeight(lbs, lb) {
  if (gender == "male") {
    if (bodytype == "ecto") {
      idealweight1 = 18.5 * height ** 2;
      idealweight2 = 22 * height ** 2;
    } else if (bodytype == "meso") {
      idealweight1 = 20 * height ** 2;
      idealweight2 = 24 * height ** 2;
    } else if (bodytype == "endo") {
      idealweight1 = 22 * height ** 2;
      idealweight2 = 24.9 * height ** 2;
    }
  } else if (gender == "female") {
    if (bodytype == "ecto") {
      idealweight1 = 16.5 * height ** 2;
      idealweight2 = 22 * height ** 2;
    } else if (bodytype == "meso") {
      idealweight1 = 18.5 * height ** 2;
      idealweight2 = 22 * height ** 2;
    }
    if (bodytype == "endo") {
      idealweight1 = 20 * height ** 2;
      idealweight2 = 24 * height ** 2;
    }
  }
  if (goal == "bulking")
    idealWeight000 += ((3 * idealweight2 + idealweight1) / 4).toFixed(1);
  else if (goal == "cutting")
    idealWeight000 += ((2.5 * idealweight1 + idealweight2) / 3.5).toFixed(1);
  else if (goal == "surplus")
    idealWeight000 += ((idealweight1 + idealweight2) / 2).toFixed(1);
  else if (goal == "muscle")
    idealWeight000 += ((idealweight1 + 2 * idealweight2) / 3).toFixed(1);
  if (goal == "bulking" || goal == "cutting" || goal == "surplus")
    deltap += (weight - idealWeight000).toFixed(1);
  else if (goal == "muscle") deltap += (idealWeight000 - weight).toFixed(1);
  if (
    bmi_state == "underweight" ||
    bmi_state == "abaixo do peso" ||
    bmi_state == "poids insuffisant" ||
    bmi_state == "bajo peso"
  )
    deltapp += (18.5 * height ** 2 - weight).toFixed(1);
  else if (
    bmi_state == "normal/healthy" ||
    bmi_state == "overweight" ||
    bmi_state == "obese" ||
    bmi_state == "normal/saudável" ||
    bmi_state == "en surpoids" ||
    bmi_state == "obeso" ||
    bmi_state == "normal / sain" ||
    bmi_state == "sobrepeso" ||
    bmi_state == "obèse" ||
    bmi_state == "normal / saludable" ||
    bmi_state == "exceso de peso" ||
    bmi_state == "obeso"
  )
    deltapp += (weight - 24.9 * height ** 2).toFixed(1);
  if (
    bmi_state != "normal/healthy" &&
    bmi_state != "normal/saudável" &&
    bmi_state != "normal / sain" &&
    bmi_state != "normal / saludable"
  ) {
    if (languageValue == 1) {
      aaa = ", and ";
      aaaa = lbs + " distant from a normal&healthy state.";
      if (bmi_state == "underweight")
        deltapp = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "overweight" || bmi_state == "obese")
        deltapp = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if (languageValue == 2) {
      aaa = ", e ";
      aaaa = lbs + " distante de um estado normal e saudável .";
      if (
        bmi_state == "underweight" ||
        bmi_state == "abaixo do peso" ||
        bmi_state == "poids insuffisant" ||
        bmi_state == "bajo peso"
      )
        deltapp = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "sobrepeso" || bmi_state == "obeso")
        deltapp = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if (languageValue == 3) {
      aaa = ", et ";
      aaaa = lbs + " éloigné d'un état normal et sain.";
      if (bmi_state == "poids insuffisant")
        deltapp = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "en surpoids" || bmi_state == "obèse")
        deltapp = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if (languageValue == 4) {
      aaa = ", y ";
      aaaa = lbs + " distante de un estado normal y saludable.";
      if (bmi_state == "bajo peso")
        deltapp = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "exceso de peso" || bmi_state == "obeso")
        deltapp = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    }
  } else if (
    bmi_state == "normal/healthy" ||
    bmi_state == "normal/saudável" ||
    bmi_state == "normal / sain" ||
    bmi_state == "normal / saludable"
  ) {
    aaa = ".";
    aaaa = "";
    deltapp = "";
  }
  bodyy = (bbgw0p * idealWeight000).toFixed(1);
  if (languageValue == 1) {
    idealweight +=
      "Your ideal weight is, approximately, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealWeight000 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, being between the range of <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight1 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> and <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight2 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, and therefore you are <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (deltap * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> apart from your ideal body, which has <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bodyy * 10) / 1000) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> of fat, and therefore, your ideal body fat percentage is <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (bbgw0p * 10) / 10;
    idealweight +=
      "%</big>, as long as your current weight is <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (weight * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bbgwp * weight) / 100) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> of which equals fat, and thus, your body fat percentage, right now, is around <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bbgwp;
    idealweight +=
      "%</big>, and according to WHO's body mass index, you are currently <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bmi_state;
    idealweight += "</big>";
  } else if (languageValue == 2) {
    idealweight +=
      "Seu peso ideal é, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealWeight000 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, sendo entre <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight1 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> e <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight2 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, e assim você está <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (deltap * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> distante do seu corpo ideal, que tem <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bodyy * 10) / 1000) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> de gordura, e assim, seu percentual de gordura ideal é <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (bbgw0p * 10) / 10;
    idealweight +=
      "%</big>, já que seu peso atual é <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (weight * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bbgwp * weight) / 100) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> desse de gordura e dessa forma seu percentual de gordura, agora, é, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bbgwp;
    idealweight +=
      "%</big>, e de acordo com o indice de massa corporal da OMS você esta atualmente em <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bmi_state;
    idealweight += "</big>";
  } else if (languageValue == 3) {
    idealweight +=
      "Votre poids idéal est, environ, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealWeight000 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, se situant entre la gamme de <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight1 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> et <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight2 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, et donc tu es <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (deltap * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> en dehors de votre corps idéal, qui a  <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bodyy * 10) / 1000) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> de graisse, et par conséquent, votre pourcentage de graisse corporelle idéal est <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (bbgw0p * 10) / 10;
    idealweight +=
      "%</big>, tant que votre poids actuel est <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (weight * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bbgwp * weight) / 100) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> don't est égal à la graisse, et donc, votre pourcentage de graisse corporelle, actuellement, est d'environ <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bbgwp;
    idealweight +=
      "%</big>, et selon l'indice de masse corporelle de l'OMS, vous êtes actuellement <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bmi_state;
    idealweight += "</big>";
  } else if (languageValue == 4) {
    idealweight +=
      "Tu peso ideal es, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealWeight000 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, estar entre el rango de <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight1 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> y <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (idealweight2 * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, y por lo tanto eres <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (deltap * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> aparte de tu cuerpo ideal, que tiene <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bodyy * 10) / 1000) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> de grasa y, por lo tanto, su porcentaje ideal de grasa corporal es <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (bbgw0p * 10) / 10;
    idealweight +=
      "%</big>, siempre que su peso actual sea <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (weight * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big>, <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += (((bbgwp * weight) / 100) * lb).toFixed(1);
    idealweight += lbs;
    idealweight +=
      "</big> de los cuales es igual a grasa y, por lo tanto, su porcentaje de grasa corporal, en este momento, es de alrededor <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bbgwp;
    idealweight +=
      "%</big>, y según el índice de masa corporal de la OMS, actualmente <big style='font-family: Kaushan Script, cursive;' >";
    idealweight += bmi_state;
    idealweight += "</big>";
  }
  idealweight += aaa;
  idealweight += deltapp;
  idealweight += aaaa;
  bodytp += idealweight;
}
// function of color change at click - btw the number is of how many button per question
// and the 10 isnt really 10 buttons, its also 9 but the structures between them both are different
function changeColor2(clickedId, idleId) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId).style.backgroundColor = "teal";
}
function changeColor4(clickedId, idleId1, idleId2, idleId3) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId1).style.backgroundColor = "teal";
  document.getElementById(idleId2).style.backgroundColor = "teal";
  document.getElementById(idleId3).style.backgroundColor = "teal";
}
function changeColor9(
  clickedId,
  idleId1,
  idleId2,
  idleId3,
  idleId4,
  idleId5,
  idleId6,
  idleId7,
  idleId8
) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId1).style.backgroundColor = "teal";
  document.getElementById(idleId2).style.backgroundColor = "teal";
  document.getElementById(idleId3).style.backgroundColor = "teal";
  document.getElementById(idleId4).style.backgroundColor = "teal";
  document.getElementById(idleId5).style.backgroundColor = "teal";
  document.getElementById(idleId6).style.backgroundColor = "teal";
  document.getElementById(idleId7).style.backgroundColor = "teal";
  document.getElementById(idleId8).style.backgroundColor = "teal";
}
function changeColor10(
  clickedId,
  idleId1,
  idleId2,
  idleId3,
  idleId4,
  idleId5,
  idleId6,
  idleId7,
  idleId8
) {
  if (
    (age >= 15 && age <= 40) ||
    (age < 15 && age >= 10 && goalBody > 3) ||
    (age > 40 && age <= 50 && goalBody > 2) ||
    (age > 50 && age <= 60 && goalBody > 3) ||
    (age > 60 && goalBody > 4)
  ) {
    document.getElementById(clickedId).style.backgroundColor = "#7395AE";
    document.getElementById(idleId1).style.backgroundColor = "teal";
    document.getElementById(idleId2).style.backgroundColor = "teal";
    document.getElementById(idleId3).style.backgroundColor = "teal";
    document.getElementById(idleId4).style.backgroundColor = "teal";
    document.getElementById(idleId5).style.backgroundColor = "teal";
    document.getElementById(idleId6).style.backgroundColor = "teal";
    document.getElementById(idleId7).style.backgroundColor = "teal";
    document.getElementById(idleId8).style.backgroundColor = "teal";
  } else {
    for (let element of arguments)
      document.getElementById(element).style.backgroundColor = "teal";
  }
}
const setCurrentBody = (body) => (currentBody = body);
// age conditionals function
const setGoalBody = (goal) => {
  goalBody = goal;
  if (
    !(
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
  ) {
    if (languageValue == 1) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now and soon enough you'll be able to get to this body goal of yours as safe as it gets."
        );
      else if (age < 10)
        alert(
          "I wouldn't recommend you would try to get to fit by now, of course, you should be healthy but I cannot see a way you can use this coding advice in your way, being this young, since it's purpose is people long term body goal, and by this, I get that the changes can likely be extreme for a 9 y/o or younger"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "This won't be gladful to hear, it breaks my heart to say it too, because I appreciate your ferving will of getting in shape, however for your age it is not healthy to get this little body fat percentage, try a bit higher by now since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
    } else if (languageValue == 2) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Para a sua idade, não é saudável obter essa pequena porcentagem de gordura corporal, tente um pouco mais alto agora e em breve você será capaz de atingir esse seu objetivo corporal o mais seguro possível."
        );
      else if (age < 10)
        alert(
          "Eu não recomendaria que você tentasse entrar em forma agora, é claro, você deve estar saudável, mas não vejo uma maneira de usar este conselho de codificação do seu jeito, sendo tão jovem, já que seu propósito é o corpo das pessoas a longo prazo objetivo, e com isso, eu entendo que as mudanças podem provavelmente ser extremas para um jovem de 9 anos ou menos"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Não vou ficar feliz em ouvir isso, parte meu coração dizer isso também, porque eu aprecio sua fervorosa vontade de entrar em forma, porém para sua idade não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto até agora, uma vez que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
    } else if (languageValue == 3) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant et vous serez bientôt en mesure d'atteindre votre objectif corporel aussi sûr que possible."
        );
      else if (age < 10)
        alert(
          "Je ne vous recommanderais pas d'essayer de vous mettre en forme maintenant, bien sûr, vous devriez être en bonne santé, mais je ne vois pas comment vous pouvez utiliser ces conseils de codage à votre manière, étant aussi jeune, car son but est le corps à long terme des gens objectif, et par là, je comprends que les changements peuvent probablement être extrêmes pour un 9 ans ou moins"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Ce ne sera pas heureux d'entendre, cela me brise le cœur de le dire aussi, car j'apprécie votre fervente volonté de vous mettre en forme, mais pour votre âge, ce n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut en maintenant puisque la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
    } else if (languageValue == 4) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto ahora y muy pronto podrá alcanzar este objetivo corporal de la manera más segura posible."
        );
      else if (age < 10)
        alert(
          "No recomendaría que intentaras ponerte en forma a esta altura, por supuesto, deberías estar sano, pero no veo la manera en que puedas usar este consejo de codificación a tu manera, siendo tan joven, ya que su propósito es el cuerpo de las personas a largo plazo. objetivo, y con esto, entiendo que los cambios probablemente pueden ser extremos para un niño de 9 años o menos"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Esto no me alegrará escucharlo, me rompe el corazón decirlo también, porque agradezco tu ferviente voluntad de ponerte en forma, sin embargo para tu edad no es saludable obtener este pequeño porcentaje de grasa corporal, intenta un poco más alto ahora, dado que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
    }
  }
};
// return values of all the buttons
const returnBody = (idBody) =>
  (bodyreturn = document.getElementById(idBody).value);
const returnEmailAddr = () =>
  (emailaddrreturn = document.getElementById("email").value);
const returnEmailAddrFinal = () =>
  (emailaddrreturnfinal = document.getElementById("email").value);
const returnGender = (idGender) =>
  (genderreturn = document.getElementById(idGender).value);
const returnUnit = (idUnit) =>
  (unitreturn = document.getElementById(idUnit).value);
const returnGoal = (idGoal) =>
  (goalreturn = document.getElementById(idGoal).value);
const returnBodyImg = (idBodyimg) =>
  (bodyimgreturn = document.getElementById(idBodyimg).value);
const returnGoalImg = (idGoalImg) =>
  (goalimgreturn = document.getElementById(idGoalImg).value);
const returnXercise = (idXercise) =>
  (xercisereturn = document.getElementById(idXercise).value);
const returnHealthy = (idHealthy) =>
  (healthyreturn = document.getElementById(idHealthy).value);
const returnCheat = (idCheat) =>
  (cheatreturn = document.getElementById(idCheat).value);
const returnMeals = (idMeals) =>
  (mealsreturn = document.getElementById(idMeals).value);
const returnEmotion = (idEmotion) =>
  (emotionreturn = document.getElementById(idEmotion).value);
//email process functions
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
function validate() {
  if (noEmailNeeded === 0) {
    if (validateEmail(emailaddrreturn)) {
    } else {
      if (emailaddrreturn == "" || emailaddrreturn == undefined) {
        if (languageValue == 1) {
          alert("No Email Written in the Email Field");
          confirmWriteEmail = confirm(
            "Are you sure you don't want to write your email and receive a sum up later? If You Don't Just Click OK, and if you want to write your email Click Cancel!"
          );
        } else if (languageValue == 2) {
          alert("Nenhum email escrito no campo de email");
          confirmWriteEmail = confirm(
            "Tem certeza de que não deseja escrever seu e-mail e receber um resumo depois? Se você não clicar em OK e quiser escrever seu e-mail, clique em Cancelar!"
          );
        } else if (languageValue == 3) {
          alert("Aucun e-mail écrit dans le champ e-mail");
          confirmWriteEmail = confirm(
            "Êtes-vous sûr de ne pas vouloir écrire votre e-mail et recevoir un résumé plus tard? Si vous ne cliquez pas simplement sur OK, et si vous souhaitez écrire votre e-mail, cliquez sur Annuler!"
          );
        } else if (languageValue == 4) {
          alert(
            "No se ha escrito ningún correo electrónico en el campo de correo electrónico"
          );
          confirmWriteEmail = confirm(
            "¿Estás seguro de que no quieres escribir tu correo electrónico y recibir un resumen más tarde? Si no lo hace, simplemente haga clic en Aceptar, y si desea escribir su correo electrónico, haga clic en Cancelar."
          );
        }
        if (confirmWriteEmail == true) noEmailNeeded += 1;
      } else {
        if (languageValue == 1) alert(emailaddrreturn + " is not valid");
        else if (languageValue == 2) alert(emailaddrreturn + " não é válido");
        else if (languageValue == 3)
          alert(emailaddrreturn + " n'est pas valide");
        else if (languageValue == 4) alert(emailaddrreturn + " No es válido");
        wrongEmailCount += 1;
        if (wrongEmailCount >= 2) {
          if (languageValue == "english")
            confirmWriteEmail = confirm(
              "Are you sure you don't want to write your email and receive a sum up later? If You Don't Just Click OK, and if you want to write your email Click Cancel!"
            );
          else if (languageValue == "português")
            confirmWriteEmail = confirm(
              "Tem certeza de que não deseja escrever seu e-mail e receber uma quantia depois? Se você não clicar em OK e quiser escrever seu e-mail, clique em Cancelar!"
            );
          else if (languageValue == "français")
            confirmWriteEmail = confirm(
              "Êtes-vous sûr de ne pas vouloir écrire votre e-mail et recevoir un résumé plus tard? Si vous ne cliquez pas simplement sur OK, et si vous souhaitez écrire votre e-mail, cliquez sur Annuler!"
            );
          else if (languageValue == "español")
            confirmWriteEmail = confirm(
              "¿Estás seguro de que no quieres escribir tu correo electrónico y recibir un resumen más tarde? Si no lo hace, simplemente haga clic en Aceptar, y si desea escribir su correo electrónico, haga clic en Cancelar."
            );
          if (confirmWriteEmail == true) noEmailNeeded += 1;
        }
      }
    }
    return false;
  }
}
// functions about meals and workout
const setExecise = (workout) => (exercise = workout);
const setHealthy = (food) => (healthy = food);
const setCheat = (food) => (cheat = food);
const setMeals = (food) => (meals = food);
// file name according to the language
// functions to download file with result
function downloadData(filename, text) {
  element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/html;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function sendConfirm() {
  let redirectemail;
  if (languageValue == 1)
    redirectemail = confirm(
      "Are you sure you want to receive a main result email?"
    );
  else if (languageValue == 2)
    redirectemail = confirm(
      "Tem certeza de que deseja receber um e-mail de resultado principal?"
    );
  else if (languageValue == 3)
    redirectemail = confirm(
      "Voulez-vous vraiment recevoir un e-mail de résultat principal?"
    );
  else if (languageValue == 4)
    redirectemail = confirm(
      "¿Está seguro de que desea recibir un correo electrónico con el resultado principal?"
    );
  if (redirectemail) sendEmail();
}
//more email sending information
function sendEmail() {
  if (languageValue == 1) {
    addup5 = "kcal to ";
    addup6 = "kcal \n\n\n\n";
    let message = `Hi, this is just a way for you to have all the main data summed up saved in your email inbox.\n\n Gender: ${genderreturn}\n\n Goal: ${goalreturn}\n\n
    Bodytype: ${bodyreturn}\n\n Age: ${age}\n\n Current Weight: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Current fat percentage: ${bbgwp}% \n\nIdeal weight range: ${
      unit == "metric"
        ? `${idealweight1.toFixed(1)}kg to ${idealweight2.toFixed(
            1
          )}kg\n\nPerfect/ideal approximate weight: ${parseFloat(
            idealWeight000
          ).toFixed(1)}kg\n\n`
        : `${(idealweight1 * 2.205).toFixed(1)}lbs to ${(
            idealweight2 * 2.205
          ).toFixed(1)}lbs\n\n
        Perfect/ideal approximate weight: ${(idealWeight000 * 2.205).toFixed(
          1
        )}lbs\n\n`
    }
    Goal's fat percentage: ${(bbgw0p * 10) / 10}% \n\n
    Exercise Situation: ${
      exercise == 1
        ? "No Exercise \n\nExercise Advice: Start to Gradually Workout all the way up to 5-6 days/week \n\n"
        : exercise == 2
        ? "Too little Exercise \n\nExercise Advice: Start to Gradually Workout all the way up to 5-6 days/week \n\n"
        : exercise == 3
        ? "Moderate Exercise \n\nExercise Advice: Gradually increase intensity and frequency Of Your Workouts \n\n"
        : "Ideal exercise Intensity \n\nExercise Advice: Always Take care of the intensity and make sure it is an exercise hard enough *for you* \n\n"
    }Good/Healthy Meals Situation: ${
      healthy == 1
        ? "No Helthy Meals\n\nGood/Healthy Meals Advice: Start to Gradually Eat healthy all the way up to 5-6 days/week \n\n"
        : healthy == 2
        ? "Too Little Healthy Meals \n\nGood/Healthy Meals Advice: Start to Gradually Eat healthy all the way up to 5-6 days/week \n\n"
        : healthy == 3
        ? "Moderate Good Meals \n\nGood/Healthy Meals Advice: Slowly change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : "Ideal Healthy Meals \n\nGood/Healthy Meals Advice: Speechlessly Confident about this diet plan, just know to eat well but not too much \n\n"
    }Cheat Meals Situation: ${
      cheat == 4
        ? "Too much Cheat Meals \n\nCheat Meals Advice: Gradually change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : cheat == 3
        ? "Too much Cheat Meals \n\nCheat Meals Advice: Gradually change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : cheat == 2
        ? "Moderate Cheat Meals \n\nCheat Meals Advice: Gradually change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : "Ideal Quantity of Cheat Meals \n\nCheat Meals Advice: No advice, already the best it can be \n\n"
    }Meals per day Situation: ${
      meals == 1
        ? "Too little Meals per day \n\nMeals per day Advice: Increase the Meals per day. Eat decent amounts of right food every 3 hours \n\n"
        : meals == 2
        ? "Too little Meals per day \n\nMeals per day Advice: Increase the Meals per day. Eat decent amounts of right food every 3 hours \n\n"
        : meals == 3
        ? "Moderate Quantity of Meals per day \n\nMeals per day Advice: Increase the Meals per day. Eat decent amounts of right food every 3 hours \n\n"
        : "Good and Ideal Quantity of Meals per day\n\nMeals per day Advice: Really Good but remember of only eating for feeding and not for anything else, besides eat every 3 hours or so \n\n"
    }BMI state: ${bmi_state}\n\nBasal Metabolic Rate: ${bmr}\n\nRecommended calorie intake range: `;
  } else if (languageValue == 2) {
    addup5 = "kcal para ";
    addup6 = "kcal \n\n\n\n";
    let message = `Olá, esta é apenas uma forma de guardar todos os dados principais na sua caixa de entrada de email.\n\n Gênero: ${genderreturn}\n\n Objetivo: ${goalreturn}\n\n
    Tipo de Corpo: ${bodyreturn}\n\n Idade: ${age}\n\n Peso Atual: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Percentual de Gordura Atual: ${bbgwp}% \n\nVariação de peso ideal: ${
      unit == "metric"
        ? `${idealweight1.toFixed(1)}kg até ${idealweight2.toFixed(
            1
          )}kg\n\nAproximado peso ideal: ${parseFloat(idealWeight000).toFixed(
            1
          )}kg\n\n`
        : `${(idealweight1 * 2.205).toFixed(1)}lbs até ${(
            idealweight2 * 2.205
          ).toFixed(1)}lbs\n\n
        Aproximado peso ideal: ${(idealWeight000 * 2.205).toFixed(1)}lbs\n\n`
    }
    Percentual de Gordura do seu Objetivo: ${(bbgw0p * 10) / 10}% \n\n
    Situação de Exercício: ${
      exercise == 1
        ? "Nenhum \n\nConselho de Exercício: Comece a treinar gradualmente até 5-6 dias / semana \n\n"
        : exercise == 2
        ? "Muito pouco exercício \n\nConselho de Exercício: Comece a treinar gradualmente até 5-6 dias / semana \n\n"
        : exercise == 3
        ? "Exercício moderado \n\nConselho de Exercício: Aumente gradualmente a intensidade e a frequência dos seus treinos \n\n"
        : "Intensidade ideal de exercício\n\nConselho de Exercício: Sempre tome cuidado com a intensidade e certifique-se de que é um exercício difícil o suficiente * para você *\n\n"
    }Situação da alimentação saudável: ${
      healthy == 1
        ? "Nenhuma\n\nConselho de alimentação saudável: Comece a comer gradualmente de forma saudável até 5-6 dias / semana \n\n"
        : healthy == 2
        ? "Alimentação saudável deficiente \n\nConselho de alimentação saudável: Comece a comer gradualmente de forma saudável até 5-6 dias / semana \n\n"
        : healthy == 3
        ? "Alimentação saudável moderada \n\nConselho de alimentação saudável: Mude lentamente seus hábitos de compra de alimentos para que você só tenha comida boa para comer nas quantidades certas \n\n"
        : "Alimetação ideal \n\nConselho de alimentação saudável: Sem palavras, confiante sobre este plano de dieta, apenas saiba comer bem, mas não muito \n\n "
    }Situação da alimentação não saudável: ${
      cheat == 4
        ? "Muita alimentação não saudável \n\nConselho sobre alimentação não saudável: Mude gradualmente seus hábitos de compra de alimentos para que você só tenha bons alimentos para comer nas quantidades certas \n\n"
        : cheat == 3
        ? "Muita alimentação não saudável \n\nConselho sobre alimentação não saudável: Mude gradualmente seus hábitos de compra de alimentos para que você só tenha bons alimentos para comer nas quantidades certas \n\n"
        : cheat == 2
        ? "Alimentação não saudável moderada \n\nConselho sobre alimentação não saudável: Mude gradualmente seus hábitos de compra de alimentos para que você só tenha bons alimentos para comer nas quantidades certas \n\n"
        : "Alimentação não saudável ideal \n\nConselho sobre alimentação não saudável: Nenhum conselho, já é o melhor que pode ser \n\n"
    }Situação de refeições por dia: ${
      meals == 1
        ? "Muito poucas refeições por dia \n\nConselho sobre refeições por dia: Aumente as refeições por dia. Coma quantidades decentes de alimentos certos a cada 3 horas \n\n"
        : meals == 2
        ? "Muito poucas refeições por dia \n\nConselho sobre refeições por dia: Aumente as refeições por dia. Coma quantidades decentes de alimentos certos a cada 3 horas \n\n"
        : meals == 3
        ? "Refeições moderadas por dia \n\nConselho sobre refeições por dia: Aumente as refeições por dia. Coma quantidades decentes de alimentos certos a cada 3 horas \n\n"
        : "Quantidade ideal de refeições por dia\n\nConselho sobre refeições por dia: Muito bom, mas lembre-se de comer apenas para se alimentar e nada mais, além de comer a cada 3 horas, mais ou menos \n\n"
    }Estado do IMC: ${bmi_state}\n\nTaxa metabólica basal: ${bmr}\n\nVariação de Ingestão Calórica Recomendada: `;
  } else if (languageValue == 3) {
    addup5 = "kcal à ";
    addup6 = "kcal \n\n\n\n";
    let message = `Bonjour, c'est juste un moyen pour vous d'avoir toutes les données principales résumées enregistrées dans votre boîte de réception.\n\n 
    Genre: ${genderreturn}\n\n Objectif: ${goalreturn}\n\n
    Type de corps: ${bodyreturn}\n\n Âge: ${age}\n\n Poids actuel: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Pourcentage de graisse actuel: ${bbgwp}% \n\nGamme de poids idéale: ${
      unit == "metric"
        ? `${idealweight1.toFixed(1)}kg à ${idealweight2.toFixed(
            1
          )}kg\n\nPoids approximatif parfait / idéal: ${parseFloat(
            idealWeight000
          ).toFixed(1)}kg\n\n`
        : `${(idealweight1 * 2.205).toFixed(1)}lbs à ${(
            idealweight2 * 2.205
          ).toFixed(1)}lbs\n\n
        Poids approximatif parfait / idéal: ${(idealWeight000 * 2.205).toFixed(
          1
        )}lbs\n\n`
    }
    Pourcentage de graisse de l'objectif: ${(bbgw0p * 10) / 10}% \n\n
    Situation d'exercice: ${
      exercise == 1
        ? "Aucun exercice \n\nConseils d'exercice: Commencez à vous entraîner progressivement jusqu'à 5-6 jours / semaine \n\n"
        : exercise == 2
        ? "Trop peu d'exercice \n\nConseils d'exercice: Commencez à vous entraîner progressivement jusqu'à 5-6 jours / semaine \n\n"
        : exercise == 3
        ? "Exercice modéré \n\nConseils d'exercice: Augmentez progressivement l'intensité et la fréquence de vos entraînements\n\n"
        : "Intensité d'exercice idéale \n\nConseils d'exercice: Faites toujours attention à l'intensité et assurez-vous que c'est un exercice assez dur * pour vous * \n\n"
    }Situation de bons repas sains: ${
      healthy == 1
        ? "Pas de repas sains\n\nConseils bons / sains: Commencez progressivement à manger sainement jusqu'à 5-6 jours / semaine \n\n"
        : healthy == 2
        ? "Trop peu de repas sains \n\nConseils bons / sains: Commencez progressivement à manger sainement jusqu'à 5-6 jours / semaine \n\n"
        : healthy == 3
        ? "Bons repas modérés \n\nConseils bons / sains: Changez lentement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : "Repas sains idéaux \n\nConseils bons / sains: Sans voix confiant à propos de ce plan de régime, sachez simplement qu'il faut bien manger mais pas trop \n\n"
    }Situation des repas non sains: ${
      cheat == 4
        ? "Trop de repas non sains \n\nConseils de repas non sains: Changez progressivement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : cheat == 3
        ? "Trop de repas non sains \n\nConseils de repas non sains: Changez progressivement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : cheat == 2
        ? "Moderate Cheat Meals \n\nConseils de repas non sains: Changez progressivement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : "Quantité idéale de repas non sains \n\nConseils de repas non sains: Aucun conseil, déjà le meilleur possible \n\n"
    }Repas par jour Situation: ${
      meals == 1
        ? "Trop peu de repas par jour \n\nRepas par jour Conseils: Augmentez les repas par jour. Mangez des quantités décentes de bonne nourriture toutes les 3 heures \n\n"
        : meals == 2
        ? "Trop peu de repas par jour \n\nRepas par jour Conseils: Augmentez les repas par jour. Mangez des quantités décentes de bonne nourriture toutes les 3 heures \n\n"
        : meals == 3
        ? "Quantité modérée de repas par jour \n\nRepas par jour Conseils: Augmentez les repas par jour. Mangez des quantités décentes de bonne nourriture toutes les 3 heures \n\n"
        : "Bonne et idéale quantité de repas par jour\n\nRepas par jour Conseils: Vraiment bon mais rappelez-vous de ne manger que pour se nourrir et pas pour autre chose, à part manger toutes les 3 heures environ\n\n"
    }État de l'IMC: ${bmi_state}\n\nLe taux métabolique basal: ${bmr}\n\nPlage d'apport calorique recommandée: `;
  } else if (languageValue == 4) {
    addup5 = "kcal a ";
    addup6 = "kcal \n\n\n\n";
    let message = `Hola, esta es solo una manera de tener todos los datos principales resumidos guardados en la bandeja de entrada de su correo electrónico.\n\n 
    Género: ${genderreturn}\n\n Objetivo: ${goalreturn}\n\n
    Tipo de Cuerpo: ${bodyreturn}\n\n Edad: ${age}\n\n Peso Actual: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Porcentaje de grasa actual: ${bbgwp}% \n\nRango de peso ideal: ${
      unit == "metric"
        ? `${idealweight1.toFixed(1)}kg a ${idealweight2.toFixed(
            1
          )}kg\n\nPeso aproximado perfecto / ideal: ${parseFloat(
            idealWeight000
          ).toFixed(1)}kg\n\n`
        : `${(idealweight1 * 2.205).toFixed(1)}lbs a ${(
            idealweight2 * 2.205
          ).toFixed(1)}lbs\n\n
        Peso aproximado perfecto / ideal: ${(idealWeight000 * 2.205).toFixed(
          1
        )}lbs\n\n`
    }
    Porcentaje de grasa del objetivo: ${(bbgw0p * 10) / 10}% \n\n
    Situación del ejercicio: ${
      exercise == 1
        ? "No ejercicio \n\nConsejos de ejercicio: Comience a entrenar gradualmente hasta 5-6 días a la semana \n\n"
        : exercise == 2
        ? "Muy poco ejercicio \n\nConsejos de ejercicio: Comience a entrenar gradualmente hasta 5-6 días a la semana \n\n"
        : exercise == 3
        ? "Ejercicio moderado \n\nConsejos de ejercicio: Aumente gradualmente la intensidad y la frecuencia de sus entrenamientos\n\n"
        : "Intensidad ideal del ejercicio \n\nConsejos de ejercicio: Cuida siempre la intensidad y asegúrate de que sea un ejercicio lo suficientemente duro * para ti * \n\n"
    }Situação da alimentação saudável: ${
      healthy == 1
        ? "Sin comidas saludables\n\nConsejos sobre comidas buenas / saludables: Comience a comer saludable gradualmente hasta 5-6 días a la semana \n\n"
        : healthy == 2
        ? "Muy pocas comidas saludables \n\nConsejos sobre comidas buenas / saludables: Comience a comer saludable gradualmente hasta 5-6 días a la semana \n\n"
        : healthy == 3
        ? "Buenas comidas moderadas \n\nConsejos sobre comidas buenas / saludables: Cambie lentamente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : "Comidas saludables ideales \n\nConsejos sobre comidas buenas / saludables: Confiado sin palabras sobre este plan de dieta, solo sepa comer bien pero no demasiado \n\n"
    }Situação da alimentação não saudável: ${
      cheat == 4
        ? "Demasiadas comidas no saludables \n\nConsejos de comidas no saludables: Cambie gradualmente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : cheat == 3
        ? "Demasiadas comidas no saludables \n\nConsejos de comidas no saludables: Cambie gradualmente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : cheat == 2
        ? "Comidas moderadas no saludables \n\nConsejos de comidas no saludables: Cambie gradualmente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : "Cantidad ideal de comidas no saludables \n\nConsejos de comidas no saludables: Sin consejos, ya lo mejor que puede ser. \n\n"
    }Situação de refeições por dia: ${
      meals == 1
        ? "Muy pocas comidas al día \n\nComidas por día Consejos: Aumente las Comidas por día. Consuma cantidades decentes de alimentos adecuados cada 3 horas. \n\n"
        : meals == 2
        ? "Muy pocas comidas al día \n\nComidas por día Consejos: Aumente las Comidas por día. Consuma cantidades decentes de alimentos adecuados cada 3 horas. \n\n"
        : meals == 3
        ? "Cantidad moderada de comidas por día \n\nComidas por día Consejos: Aumente las Comidas por día. Consuma cantidades decentes de alimentos adecuados cada 3 horas.\n\n"
        : "Cantidad buena e ideal de comidas por día\n\nComidas por día Consejos: Muy bueno pero recuerda que solo comes para alimentarte y no para nada más, además de comer cada 3 horas, aproximadamente. \n\n"
    }Estado de IMC: ${bmi_state}\n\nTasa metabólica basal: ${bmr}\n\nRango de ingesta calórica recomendado: `;
  }
  if (gender == "male") {
    if (goal == "bulking") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0);
      message += addup6;
    } else if (goal == "cutting") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0);
      message += addup6;
    } else if (goal == "surplus") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0);
      message += addup6;
    } else if (goal == "muscle") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0);
      message += addup6;
    }
  } else if (gender == "female") {
    if (goal == "bulking") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.05).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0);
      message += addup6;
    } else if (goal == "cutting") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.65).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.75).toFixed(0);
      message += addup6;
    } else if (goal == "surplus") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0);
      message += addup6;
    } else if (goal == "muscle") {
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0);
      message += addup5;
      message += ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0);
      message += addup6;
    }
  }
  var finalmessage = encodeURIComponent(message);
  if (languageValue == 1) let subject = "Fitness Management Program Main Data";
  else if (languageValue == 2)
    let subject =
      "Dados principais do programa de gestão de condicionamento físico";
  else if (languageValue == 3)
    let subject = "Données principales du programme de gestion du poids";
  else if (languageValue == 4)
   let subject = "Datos principales del programa de control de peso";
  let url =
    "mailto:" +
    emailaddrreturn +
    "?subject=" +
    subject +
    "&body=" +
    finalmessage;
  window.open(url, "_blank");
}
//age related queries
function ages() {
  age = document.getElementById("age").value;
  age = parseFloat(age);
  if (languageValue == 1) {
    if (age <= 12)
      ageAdvice =
        " Honestly, I like that you at this young age want to get in shape, but you know it's important that you understand that until you reach your teens 99,99% of your focus has to be in getting and keeping healthy. Relax, soon you will be able to get in shape easier than now and, more importantly, in a safer time of your life!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your early teen's the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Since you are at your best age range to get in shape, that does not mean it's gotta be easy but it means that you have the most amount of hormones that help you through the process!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, it is definitely important that you can maintain good health, but you're more than right on wanting to have a better body, and the healthier you are the easier to get in shape!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your late 40s, early 50s, and 60s the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    else if (age >= 61)
      ageAdvice =
        " Honestly, I like that you at this age want to get in shape, but you know it's important that you understand that 99% of your focus has to be in getting and then keeping healthy. Relax, it may be difficult but you're gonna make it, and also the healthier you are, the easier it will be to get a better body!";
  } else if (languageValue == 2) {
    if (age <= 12)
      ageAdvice =
        " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que, até chegar à adolescência, 99,99% do seu foco tem que ser em obter e se manter saudável. Relaxe, logo você poderá entrar em forma mais fácil do que agora e, mais importante, em um momento mais seguro da sua vida!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, no seu primeiro adolescente a coisa mais importante obviamente é a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Como você está na sua melhor faixa etária para entrar em forma, isso não significa que deva ser fácil, mas significa que você tem a maior quantidade de hormônios que o ajudam no processo!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, é definitivamente importante que você possa manter uma boa saúde, mas você está mais do que certo em querer ter um corpo melhor, e quanto mais saudável você estiver, mais fácil será entrar em forma!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, com quase 40, 50 e 60 anos, a coisa mais importante é obviamente a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    else if (age >= 61)
      ageAdvice =
        " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que 99% do seu foco tem que ser em ficar e então se manter saudável. Relaxe, pode ser difícil, mas você vai conseguir, e quanto mais saudável você for, mais fácil será conseguir um corpo melhor!";
  } else if (languageValue == 3) {
    if (age <= 12)
      ageAdvice =
        " Honnêtement, j'aime que vous, à ce jeune âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que jusqu'à ce que vous atteigniez votre adolescence, 99,99% de votre objectif doit être de rester en bonne santé. Détendez-vous, bientôt vous pourrez vous mettre en forme plus facilement que maintenant et, surtout, à un moment plus sûr de votre vie!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à votre jeune adolescent, la chose la plus importante est évidemment votre santé, mais vous avez plus que raison de vouloir avoir un meilleur corps!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Puisque vous êtes à votre meilleure tranche d'âge pour vous mettre en forme, cela ne signifie pas que ce doit être facile, mais cela signifie que vous avez le plus d'hormones qui vous aident tout au long du processus!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, il est vraiment important que vous puissiez rester en bonne santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps, et plus vous êtes en bonne santé, plus vous êtes en forme!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à la fin de la quarantaine, au début de la cinquantaine et au début de la soixantaine, la chose la plus importante est évidemment votre santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps!";
    else if (age >= 61)
      ageAdvice =
        " Honnêtement, j'aime le fait que vous, à cet âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que 99% de votre objectif doit être de devenir et de rester en bonne santé. Détendez-vous, cela peut être difficile mais vous y arriverez, et plus vous serez en santé, plus il sera facile d'avoir un meilleur corps!";
  } else if (languageValue == 4) {
    if (age <= 12)
      ageAdvice =
        " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que entiendas que hasta que llegues a la adolescencia, el 99,99% de tu enfoque debe estar en estar y mantenerte saludable. Relájate, pronto podrás ponerte en forma más fácilmente que ahora y, lo que es más importante, ¡en un momento más seguro de tu vida!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, en la adolescencia temprana lo más importante es obviamente tu salud, ¡pero tienes más razón en querer tener un cuerpo mejor!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Ya que estás en tu mejor rango de edad para ponerte en forma, eso no significa que tenga que ser fácil, ¡pero significa que tienes la mayor cantidad de hormonas que te ayudan en el proceso!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, definitivamente es importante que puedas mantener una buena salud, pero tienes más razón en querer tener un mejor cuerpo, ¡y cuanto más saludable estés, más fácil será ponerte en forma!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, a finales de los 40, principios de los 50 y 60 lo más importante es obviamente su salud, ¡pero tiene más razón en querer tener un cuerpo mejor!";
    else if (age >= 61)
      ageAdvice =
        " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que comprendas que el 99% de tu enfoque tiene que estar en estar y luego en mantenerte saludable. Relájate, puede ser difícil, pero lo lograrás, y además, cuanto más saludable estés, ¡más fácil será tener un mejor cuerpo!";
  }
}
// result function
// all processing
// a lot and i mean a LOT of code + calculations done in the result path
function result() {
  names();
  resultTransition();
  clearScreen();
  linkTitlea.removeAttribute("href");
  titleLink.removeAttribute("href");
  idFooter.style.display = "none";
  rightsidebarButton.style.display = "none";
  leftsidebarButton.style.display = "none";
  day = new Date();
  dd = String(day.getDate()).padStart(2, "0");
  mm = String(day.getMonth() + 1).padStart(2, "0"); //January is 0!
  yyyy = day.getFullYear();
  day = `${dd}/${mm}/${yyyy}`;
  if (bodytype == "ecto") {
    if (goal == "bulking") bodyp += 0;
    else if (goal == "cutting") bodyp += 1;
    else if (goal == "surplus") bodyp += 2;
    else if (goal == "muscle") bodyp += 0;
    if (languageValue == 1) {
      if (bodyp == 2)
        bodypt +=
          " Although it may be easier for your body type since you lose fat easier, but you still gotta grind for it!";
      else if (bodyp == 1)
        bodypt +=
          " It can get tough for your body type for the muscle-up part, but still totally doable!";
      else if (bodyp == 0)
        bodypt +=
          " I know, it is more difficult for your body type but still let´s do it, it will be harder to keep but still, you'll get there!";
    } else if (languageValue == 2) {
      if (bodyp == 2)
        bodypt +=
          " Embora possa ser mais fácil para o seu tipo de corpo, já que você perde gordura com mais facilidade, você ainda precisa trabalhar para isso!";
      else if (bodyp == 1)
        bodypt +=
          " Pode ser difícil para o seu tipo de corpo na parte muscular, mas ainda assim é totalmente factível!";
      else if (bodyp == 0)
        bodypt +=
          " Eu sei, é mais difícil para o seu tipo de corpo mas ainda vamos fazer, vai ser mais difícil de manter mas mesmo assim, você vai chegar lá!";
    } else if (languageValue == 3) {
      if (bodyp == 2)
        bodypt +=
          " Bien que cela puisse être plus facile pour votre type de corps, car vous perdez de la graisse plus facilement, mais vous devez quand même moudre pour cela!";
      else if (bodyp == 1)
        bodypt +=
          " Cela peut être difficile pour votre type de corps pour la partie musculaire, mais cela reste tout à fait faisable!";
      else if (bodyp == 0)
        bodypt +=
          " Je sais, c'est plus difficile pour votre type de corps mais faisons-le quand même, ce sera plus difficile à garder mais quand même, vous y arriverez!";
    } else if (languageValue == 4) {
      if (bodyp == 2)
        bodypt +=
          " Aunque puede ser más fácil para tu tipo de cuerpo, ya que pierdes grasa más fácilmente, ¡aún así tienes que esforzarte!";
      else if (bodyp == 1)
        bodypt +=
          " Puede ser difícil para tu tipo de cuerpo para la parte de músculos, ¡pero aún así es totalmente factible!";
      else if (bodyp == 0)
        bodypt +=
          " Lo sé, es más difícil para tu tipo de cuerpo, pero aún así hagámoslo, será más difícil de mantener, pero aún así, ¡lo lograrás!";
    }
  } else if (bodytype == "meso") {
    if (goal == "bulking") bodyp += 2;
    else if (goal == "cutting") bodyp += 2;
    else if (goal == "surplus") bodyp += 1;
    else if (goal == "muscle") bodyp += 2;
    if (languageValue == 1) {
      if (bodyp == 2)
        bodypt +=
          " Yeah, got it, 'for me its easier' yada yada yada. Well, it's supposed to, but if you don't concentrate and engage on your goal, sorry bro, but if it happens it will take a lot longer, so focus and you will get there.";
      else if (bodyp == 1)
        bodypt +=
          " It can get difficult for your body type for the muscle-up part, but still totally doable!";
      else if (bodyp == 0) bodypt += " That shouldn't happen! Sry.";
    } else if (languageValue == 2) {
      if (bodyp == 2)
        bodypt +=
          " Sim, entendi, 'para mim é mais fácil' blá blá blá. Bem, é suposto que sim, mas se você não se concentrar e se engajar no seu objetivo, desculpe mano, mas se acontecer vai demorar muito mais, então foque e você vai chegar lá.";
      else if (bodyp == 1)
        bodypt +=
          " It can get difficult for your body type for the muscle-up part, but still totally doable!";
      else if (bodyp == 0) bodypt += " Isso não deveria acontecer! Desculpa.";
    } else if (languageValue == 3) {
      if (bodyp == 2)
        bodypt +=
          " Ouais, compris, «pour moi, c'est plus facile» yada yada yada. Eh bien, c'est censé le faire, mais si vous ne vous concentrez pas et ne vous engagez pas sur votre objectif, désolé mon frère, mais si cela arrive, cela prendra beaucoup plus de temps, alors concentrez-vous et vous y arriverez.";
      else if (bodyp == 1)
        bodypt +=
          " Cela peut devenir difficile pour votre type de corps pour la partie musculaire, mais cela reste tout à fait faisable!";
      else if (bodyp == 0) bodypt += " Cela ne devrait pas arriver! Pardon.";
    } else if (languageValue == 4) {
      if (bodyp == 2)
        bodypt +=
          " Sí, lo tengo, 'para mí es más fácil' yada yada yada. Bueno, se supone que debe hacerlo, pero si no te concentras y te comprometes con tu objetivo, lo siento hermano, pero si sucede, tomará mucho más tiempo, así que concéntrate y llegarás allí..";
      else if (bodyp == 1)
        bodypt +=
          " Puede ser difícil para tu tipo de cuerpo para la parte de los músculos, ¡pero aún así es totalmente factible!";
      else if (bodyp == 0) bodypt += " ¡Eso no debería suceder! Lo siento.";
    }
  } else if (bodytype == "endo") {
    if (goal == "bulking") bodyp += 2;
    else if (goal == "cutting") bodyp += 0;
    else if (goal == "surplus") bodyp += 1;
    else if (goal == "muscle") bodyp += 2;
    if (languageValue == 1) {
      if (bodyp == 2)
        bodypt +=
          " For your body type it may be easier, due to the ease you have to gain muscle, but, still, you gotta grind to accomplish it!";
      else if (bodyp == 1)
        bodypt +=
          " It can get difficult for your body type for the muscle-up part, but still totally doable!";
      else if (bodyp == 0)
        bodypt +=
          " I know, it is more difficult for your body type but still let´s do it, it will be harder to maintain but still you'll get there! I'm with you in that, I'm an endomorph that craves to cut too.";
    } else if (languageValue == 2) {
      if (bodyp == 2)
        bodypt +=
          " Para o seu tipo de corpo pode ser mais fácil, devido à facilidade que você tem para ganhar músculos, mas, ainda assim, é preciso trincar para conseguir!";
      else if (bodyp == 1)
        bodypt +=
          " Pode ser difícil para o seu tipo de corpo na parte muscular, mas ainda assim é totalmente factível!";
      else if (bodyp == 0)
        bodypt +=
          " Eu sei, é mais difícil para o seu tipo de corpo, mas mesmo assim vamos fazer, será mais difícil de manter, mas você vai chegar lá! Estou com você nisso, sou um endomorfo que anseia secar também.";
    } else if (languageValue == 3) {
      if (bodyp == 2)
        bodypt +=
          " Pour votre type de corps, cela peut être plus facile, en raison de la facilité don't vous disposez pour gagner du muscle, mais, quand même, vous devez broyer pour y parvenir!";
      else if (bodyp == 1)
        bodypt +=
          " Cela peut devenir difficile pour votre type de corps pour la partie musculaire, mais cela reste tout à fait faisable!";
      else if (bodyp == 0)
        bodypt +=
          " Je sais, c'est plus difficile pour votre type de corps mais faisons-le quand même, ce sera plus difficile à entretenir mais vous y arriverez quand même! Je suis avec toi, je suis un endomorphe qui aspire aussi à couper.";
    } else if (languageValue == 4) {
      if (bodyp == 2)
        bodypt +=
          " Para tu tipo de cuerpo puede ser más fácil, debido a la facilidad que tienes para ganar músculo, pero, aún así, ¡tienes que esforzarte para lograrlo!";
      else if (bodyp == 1)
        bodypt +=
          " Puede ser difícil para tu tipo de cuerpo para la parte de los músculos, ¡pero aún así es totalmente factible!";
      else if (bodyp == 0)
        bodypt +=
          " Lo sé, es más difícil para tu tipo de cuerpo, pero aún así hagámoslo, será más difícil de mantener, ¡pero aún así llegarás! Estoy contigo en eso, soy un endomorfo que también anhela secar.";
    }
  }
  if (currentBody == 1) {
    if (gender == "male") {
      bbgw1 = weight * 0.04;
      bbgw2 = weight * 0.05;
      bbgwp = 4.5;
    } else if (gender == "female") {
      bbgw1 = weight * 0.12;
      bbgw2 = weight * 0.14;
      bbgwp = 13;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 2) {
    if (gender == "male") {
      bbgw1 = weight * 0.06;
      bbgw2 = weight * 0.07;
      bbgwp = 6.5;
    } else if (gender == "female") {
      bbgw1 = weight * 0.15;
      bbgw2 = weight * 0.17;
      bbgwp = 16;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 3) {
    if (gender == "male") {
      bbgw1 = weight * 0.08;
      bbgw2 = weight * 0.1;
      bbgwp = 9;
    } else if (gender == "female") {
      bbgw1 = weight * 0.18;
      bbgw2 = weight * 0.2;
      bbgwp = 19;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 4) {
    if (gender == "male") {
      bbgw1 = weight * 0.11;
      bbgw2 = weight * 0.12;
      bbgwp = 11.5;
    } else if (gender == "female") {
      bbgw1 = weight * 0.21;
      bbgw2 = weight * 0.23;
      bbgwp = 22;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 5) {
    if (gender == "male") {
      bbgw1 = weight * 0.13;
      bbgw2 = weight * 0.15;
      bbgwp = 14;
    } else if (gender == "female") {
      bbgw1 = weight * 0.24;
      bbgw2 = weight * 0.26;
      bbgwp = 25;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 6) {
    if (gender == "male") {
      bbgw1 = weight * 0.16;
      bbgw2 = weight * 0.19;
      bbgwp = 17.5;
    } else if (gender == "female") {
      bbgw1 = weight * 0.27;
      bbgw2 = weight * 0.29;
      bbgwp = 28;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 7) {
    if (gender == "male") {
      bbgw1 = weight * 0.2;
      bbgw2 = weight * 0.24;
      bbgwp = 22;
    } else if (gender == "female") {
      bbgw1 = weight * 0.3;
      bbgw2 = weight * 0.35;
      bbgwp = 32.5;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 8) {
    if (gender == "male") {
      bbgw1 = weight * 0.25;
      bbgw2 = weight * 0.3;
      bbgwp = 27.5;
    } else if (gender == "female") {
      bbgw1 = weight * 0.36;
      bbgw2 = weight * 0.4;
      bbgwp = 38;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  } else if (currentBody == 9) {
    if (gender == "male") {
      bbgw1 = weight * 0.35;
      bbgw2 = weight * 0.4;
      bbgwp = 37.5;
    } else if (gender == "female") {
      bbgw1 = weight * 0.5;
      bbgw2 = weight * 0.5;
      bbgwp = 50;
    }
    if (goal == "bulking") bbgw0 = ((bbgw2 + bbgw1) / 2).toFixed(1);
    else if (goal == "cutting") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "surplus") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
    else if (goal == "muscle") bbgw0 = ((bbgw1 + bbgw2) / 2).toFixed(1);
  }
  if (goalBody == 1) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.04;
      bbgw4 += idealWeight000 * 0.05;
      if (goal == "bulking") bbgw0p += ((3 * 5 + 4) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 4 + 5) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((4 + 5) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((4 + 2 * 5) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.12;
      bbgw4 += idealWeight000 * 0.14;
      if (goal == "bulking") bbgw0p += ((3 * 14 + 12) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 12 + 14) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((12 + 14) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((12 + 2 * 14) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 2) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.06;
      bbgw4 += idealWeight000 * 0.07;
      if (goal == "bulking") bbgw0p += ((3 * 7 + 6) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 6 + 7) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((6 + 7) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((6 + 2 * 7) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.15;
      bbgw4 += idealWeight000 * 0.17;
      if (goal == "bulking") bbgw0p += ((3 * 17 + 15) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 15 + 17) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((15 + 17) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((15 + 2 * 17) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 3) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.08;
      bbgw4 += idealWeight000 * 0.1;
      if (goal == "bulking") bbgw0p += ((3 * 10 + 8) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 8 + 10) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((8 + 10) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((8 + 2 * 10) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.18;
      bbgw4 += idealWeight000 * 0.2;
      if (goal == "bulking") bbgw0p += ((3 * 20 + 18) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 18 + 20) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((18 + 20) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((18 + 2 * 20) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 4) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.11;
      bbgw4 += idealWeight000 * 0.12;
      if (goal == "bulking") bbgw0p += ((3 * 12 + 11) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 11 + 12) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((11 + 12) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((11 + 2 * 12) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.21;
      bbgw4 += idealWeight000 * 0.23;
      if (goal == "bulking") bbgw0p += ((3 * 23 + 21) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 21 + 23) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((21 + 23) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((21 + 2 * 23) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 5) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.13;
      bbgw4 += idealWeight000 * 0.15;
      if (goal == "bulking") bbgw0p += ((3 * 15 + 13) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 13 + 15) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((13 + 15) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((13 + 2 * 15) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.24;
      bbgw4 += idealWeight000 * 0.26;
      if (goal == "bulking") bbgw0p += ((3 * 26 + 24) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 24 + 26) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((24 + 26) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((24 + 2 * 26) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 6) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.16;
      bbgw4 += idealWeight000 * 0.19;
      if (goal == "bulking") bbgw0p += ((3 * 19 + 16) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 16 + 19) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((16 + 19) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((16 + 2 * 19) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.27;
      bbgw4 += idealWeight000 * 0.29;
      if (goal == "bulking") bbgw0p += ((3 * 29 + 27) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 27 + 29) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((27 + 29) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((27 + 2 * 29) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 7) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.2;
      bbgw4 += idealWeight000 * 0.24;
      if (goal == "bulking") bbgw0p += ((3 * 24 + 20) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 20 + 24) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((20 + 24) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((20 + 2 * 24) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.3;
      bbgw4 += idealWeight000 * 0.35;
      if (goal == "bulking") bbgw0p += ((3 * 35 + 30) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 30 + 35) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((30 + 35) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((30 + 2 * 35) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 8) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.25;
      bbgw4 += idealWeight000 * 0.3;
      if (goal == "bulking") bbgw0p += ((3 * 30 + 25) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 25 + 30) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((25 + 30) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((25 + 2 * 30) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.36;
      bbgw4 += idealWeight000 * 0.4;
      if (goal == "bulking") bbgw0p += ((3 * 40 + 36) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 36 + 40) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((36 + 40) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((36 + 2 * 40) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  } else if (goalBody == 9) {
    if (gender == "male") {
      bbgw3 += idealWeight000 * 0.35;
      bbgw4 += idealWeight000 * 0.4;
      if (goal == "bulking") bbgw0p += ((3 * 40 + 35) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 35 + 40) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((35 + 40) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((35 + 2 * 40) / 3).toFixed(1);
    } else if (gender == "female") {
      bbgw3 += idealWeight000 * 0.5;
      bbgw4 += idealWeight000 * 0.5;
      if (goal == "bulking") bbgw0p += ((3 * 50 + 50) / 4).toFixed(1);
      else if (goal == "cutting") bbgw0p += ((2.5 * 50 + 50) / 3.5).toFixed(1);
      else if (goal == "surplus") bbgw0p += ((50 + 50) / 2).toFixed(1);
      else if (goal == "muscle") bbgw0p += ((50 + 2 * 50) / 3).toFixed(1);
    }
    if (goal == "bulking") bbgw00 += ((3 * bbgw4 + bbgw3) / 4).toFixed(1);
    else if (goal == "cutting")
      bbgw00 += ((2.5 * bbgw3 + bbgw4) / 3.5).toFixed(1);
    else if (goal == "surplus") bbgw00 += ((bbgw3 + bbgw4) / 2).toFixed(1);
    else if (goal == "muscle") bbgw00 += ((bbgw3 + 2 * bbgw4) / 3).toFixed(1);
  }
  if (unit == "metric") {
    weight = parseFloat(weightMetric.value);
    height = parseFloat(heightMetric.value);
    bmi += weight / height ** 2;
    if (languageValue == 1) {
      if (bmi < 18.5) bmi_state += "underweight";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal/healthy";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "overweight";
      else if (bmi > 30) bmi_state += "obese";
    } else if (languageValue == 2) {
      if (bmi < 18.5) bmi_state += "abaixo do peso";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal/saudável";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "sobrepeso";
      else if (bmi > 30) bmi_state += "obeso";
    } else if (languageValue == 3) {
      if (bmi < 18.5) bmi_state += "poids insuffisant";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal / sain";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "en surpoids";
      else if (bmi > 30) bmi_state += "obèse";
    } else if (languageValue == 4) {
      if (bmi < 18.5) bmi_state += "bajo peso";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal / saludable";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "exceso de peso";
      else if (bmi > 30) bmi_state += "obeso";
    }
    idealWeight("kg", 1);
  } else if (unit == "imperial") {
    weight = Number((parseFloat(weightImperial.value) / 2.205).toFixed(1));
    height = parseFloat(heightImperial.value) / 39.37;
    bmi += weight / height ** 2;
    if (languageValue == 1) {
      if (bmi < 18.5) bmi_state += "underweight";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal/healthy";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "overweight";
      else if (bmi > 30) bmi_state += "obese";
    } else if (languageValue == 2) {
      if (bmi < 18.5) bmi_state += "abaixo do peso";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal/saudável";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "sobrepeso";
      else if (bmi > 30) bmi_state += "obeso";
    } else if (languageValue == 3) {
      if (bmi < 18.5) bmi_state += "poids insuffisant";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal / sain";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "en surpoids";
      else if (bmi > 30) bmi_state += "obèse";
    } else if (languageValue == 4) {
      if (bmi < 18.5) bmi_state += "bajo peso";
      else if (bmi >= 18.5 && bmi <= 24.9) bmi_state += "normal / saludable";
      else if (bmi >= 25 && bmi <= 30) bmi_state += "exceso de peso";
      else if (bmi > 30) bmi_state += "obeso";
    }
    idealWeight("lbs", 2.205);
  }
  if (languageValue == 1) {
    if (gender == "male") {
      bmr = (10 * weight + 625 * height - 5 * age + 5).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Since you trying to bulk, you should try to get a small calorie intake surplus, like 100-300 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises.";
      else if (goal == "cutting")
        bmrl =
          "Since you are trying to cut, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, such as breathing, circulation and cell production a day, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises. Also you have to have in mind that a good catalyst to all this is training, you can eat more as soon as you burn through exercise, always maintaining that same calorie intake deficit.";
      else if (goal == "surplus")
        bmrl =
          "Since you are trying to lose weight, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises.";
      else if (goal == "muscle")
        bmrl =
          "Since you trying to gain weight through mostly muscle, you should try to get a decent calorie intake surplus, like 250-450 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours, once you will get muscle and weight in general you gotta workout, mainly in the gym. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises.";
    } else if (gender == "female") {
      bmr = (10 * weight + 625 * height - 5 * age - 161).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Since you trying to bulk, you should try to get a small calorie intake surplus, like 100-300 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.05).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises.";
      else if (goal == "cutting")
        bmrl =
          "Since you are trying to cut, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.65).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.75).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises. Also you have to have in mind that a good catalyst to all this is training, you can eat more as soon as you burn through exercise, always maintaining that same calorie intake deficit.";
      else if (goal == "surplus")
        bmrl =
          "Since you are trying to lose weight, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises.";
      else if (goal == "muscle")
        bmrl =
          "Since you trying to gain weight through mostly muscle, you should try to get a decent calorie intake surplus, like 250-450 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours, once you will get muscle and weight in general you gotta workout, mainly in the gym. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises.";
    }
  } else if (languageValue == 2) {
    if (gender == "male") {
      bmr = (10 * weight + 625 * height - 5 * age + 5).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Já que você está tentando aumentar o volume, deve tentar obter um pequeno excedente de ingestão de calorias, como 100-300 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para as funções corporais basais, por dia, como respiração, circulação e a produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que vão desempenhar um grande papel neste seu caminho. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios.";
      else if (goal == "cutting")
        bmrl =
          "Já que você está tentando secar, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, como respiração, circulação e a produção de células por dia, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios. Também é preciso ter em mente que um bom catalisador para tudo isso é o treinamento, você pode comer mais assim que se queimar com o exercício, mantendo sempre esse mesmo déficit calórico.";
      else if (goal == "surplus")
        bmrl =
          "Já que você está tentando perder peso, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, tal como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios.";
      else if (goal == "muscle")
        bmrl =
          "Já que você está tentando ganhar peso principalmente através dos músculos, você deve tentar obter um excedente de ingestão de calorias decente, como 250-450 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que terão um grande papel nesse seu caminho, pois você vai ganhar músculos. e peso em geral você tem que treinar, principalmente na academia. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios.";
    } else if (gender == "female") {
      bmr = (10 * weight + 625 * height - 5 * age - 161).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Já que você está tentando aumentar o volume, deve tentar obter um pequeno excedente de ingestão de calorias, como 100-300 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para as funções corporais basais, por dia, como respiração, circulação e a produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que vão desempenhar um grande papel neste seu caminho. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.05).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios.";
      else if (goal == "cutting")
        bmrl =
          "Já que você está tentando secar, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.65).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.75).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios. Também é preciso ter em mente que um bom catalisador para tudo isso é o treinamento, você pode comer mais assim que se queimar com o exercício, mantendo sempre esse mesmo déficit calórico.";
      else if (goal == "surplus")
        bmrl =
          "Já que você está tentando perder peso, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, tal como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios.";
      else if (goal == "muscle")
        bmrl =
          "Já que você está tentando ganhar peso principalmente através dos músculos, você deve tentar obter um excedente de ingestão de calorias decente, como 250-450 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que terão um grande papel nesse seu caminho, pois você vai ganhar músculos. e peso em geral você tem que treinar, principalmente na academia. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios.";
    }
  } else if (languageValue == 3) {
    if (gender == "male") {
      bmr = (10 * weight + 625 * height - 5 * age + 5).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Puisque vous essayez de prendre du volume, vous devriez essayer d'obtenir un petit surplus d'apport calorique, comme 100 à 300 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour les fonctions basales de votre corps, par jour, comme la respiration, la circulation. et la production cellulaire, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices.";
      else if (goal == "cutting")
        bmrl =
          "Puisque vous essayez de couper, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, telles que la respiration, la circulation et la production de cellules par jour est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices. Vous devez également garder à l'esprit qu'un bon catalyseur de tout cela est l'entraînement, vous pouvez manger plus dès que vous brûlez en faisant de l'exercice, en maintenant toujours le même déficit calorique.";
      else if (goal == "surplus")
        bmrl =
          "Puisque vous essayez de perdre du poids, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, un jour, tel comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices.";
      else if (goal == "muscle")
        bmrl =
          "Puisque vous essayez de prendre du poids principalement par vos muscles, vous devriez essayer d'obtenir un excédent calorique décent, comme 250 à 450 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, par exemple. comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin, une fois que vous aurez du muscle. et le poids en général, vous devez vous entraîner, principalement dans le gymnase. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices.";
    } else if (gender == "female") {
      bmr = (10 * weight + 625 * height - 5 * age - 161).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Puisque vous essayez de prendre du volume, vous devriez essayer d'obtenir un petit surplus d'apport calorique, comme 100 à 300 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour les fonctions basales de votre corps, par jour, comme la respiration, la circulation. et la production cellulaire, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.05).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices.";
      else if (goal == "cutting")
        bmrl =
          "Puisque vous essayez de réduire, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est fondamentalement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, comme la respiration, la circulation et la production de cellules, <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.65).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.75).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices. Vous devez également garder à l'esprit qu'un bon catalyseur de tout cela est l'entraînement, vous pouvez manger plus dès que vous brûlez en faisant de l'exercice, en maintenant toujours le même déficit calorique.";
      else if (goal == "surplus")
        bmrl =
          "Puisque vous essayez de perdre du poids, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, un jour, tel comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices.";
      else if (goal == "muscle")
        bmrl =
          "Puisque vous essayez de prendre du poids principalement par vos muscles, vous devriez essayer d'obtenir un excédent calorique décent, comme 250 à 450 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, par exemple. comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin, une fois que vous aurez du muscle. et le poids en général, vous devez vous entraîner, principalement dans le gymnase. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices.";
    }
  } else if (languageValue == 4) {
    if (gender == "male") {
      bmr = (10 * weight + 625 * height - 5 * age + 5).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Dado que está tratando de aumentar el volumen, debe intentar obtener un pequeño excedente de ingesta de calorías, como 100-300 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, al día, como la respiración, la circulación. y la producción de células, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de menor índice glucémico, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios.";
      else if (goal == "cutting")
        bmrl =
          "Ya que está tratando de reducir, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, como la respiración, la circulación. y la producción de células al día, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios. También debes tener en cuenta que un buen catalizador de todo esto es el entrenamiento, puedes comer más en cuanto te quemas a través del ejercicio, manteniendo siempre ese mismo déficit de ingesta calórica.";
      else if (goal == "surplus")
        bmrl =
          "Dado que está tratando de perder peso, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios.";
      else if (goal == "muscle")
        bmrl =
          "Dado que intenta ganar peso principalmente a través de los músculos, debe tratar de obtener un excedente de ingesta de calorías decente, como 250-450 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de índice glucémico más bajo, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo, una vez que obtengas músculo. y peso en general tienes que hacer ejercicio, principalmente en el gimnasio. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios.";
    } else if (gender == "female") {
      bmr = (10 * weight + 625 * height - 5 * age - 161).toFixed(1) + "kcal";
      if (goal == "bulking")
        bmrl =
          "Dado que está tratando de aumentar el volumen, debe intentar obtener un pequeño excedente de ingesta de calorías, como 100-300 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, al día, como la respiración, la circulación. y la producción de células, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de menor índice glucémico, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.05).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios.";
      else if (goal == "cutting")
        bmrl =
          "Dado que está tratando de reducir, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, como la respiración, la circulación y la producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.65).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.75).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios. También debes tener en cuenta que un buen catalizador de todo esto es el entrenamiento, puedes comer más en cuanto te quemas a través del ejercicio, manteniendo siempre ese mismo déficit de ingesta calórica.";
      else if (goal == "surplus")
        bmrl =
          "Dado que está tratando de perder peso, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.7).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 0.8).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios.";
      else if (goal == "muscle")
        bmrl =
          "Dado que intenta ganar peso principalmente a través de los músculos, debe tratar de obtener un excedente de ingesta de calorías decente, como 250-450 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de índice glucémico más bajo, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo, una vez que obtengas músculo. y peso en general tienes que hacer ejercicio, principalmente en el gimnasio. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.1).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * age + 5) * 1.15).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios.";
    }
  }
  if (languageValue == 1) {
    bmrll =
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link to a whole food health tool</a>';
    bmrlll =
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link to a food calorie by general group</a>';
    bmrllll =
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link to a Harvard page about exercise calories</a>';
    bmrlllll =
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link to best apps for workout advice</a>";
    if (exercise == 1)
      cbody =
        " Well, it does not matter what is your goal, your current weight, nor your body type, if you don't exercise, it will be basically impossible for you to reach your goal. It can be run, cycling, powerlifting, or any high-intensity workout you want to do, because it helps you to grow on muscle, burn calories, get rid of water surplus your body can store, plus a lot of health improvements exercising can provide you. The recommended is at least 3-4 times a week, but of course that if you, for example, workout 5 times a week, it won't be bad it will actually help you more, so you know what to do!";
    else if (exercise == 2)
      cbody =
        " Well, I suppose, sometimes, you wonder why are you stagnant in the body you're and that you don't like. I can tell you. You are working out too little. Yeah I get it, but it's necessary for you, to get a healthier and prettier body, at least 3-4 high-intensity workouts a week, if you do more, it will still be good and, as a matter of fact, it will be better.";
    else if (exercise == 3)
      cbody =
        " Well, you already do the minimal workout frequency for a diet plan, but if you still feel like more can be done in the path of your dream body, you're totally right, then you can do 5, 6 or, if you really want to do this, 7 times a week, the more the better. ";
    else if (exercise == 4)
      cbody =
        " Well, that's good. you already do more workouts than required for a regular diet plan. If you want to elevate it even more try doing 7 heavy workouts a week, besides a good diet food plan.";
    if (healthy == 1)
      cbodyc =
        " I probably shouldn't believe you, but I will. Please, you have to have complete meals, nutrient wise, besides healthy food in it like salad, good protein, choosing cleverly between 'similar options', for example, on weekdays choose chicken breast over red meat. But on weekends don't put everything to lose but free yourself to eat something you like more. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    else if (healthy == 2)
      cbodyc =
        " That's ok, but still, you need more healthy and complete, nutrient wise, meal days a week, like salad, good protein, choosing cleverly between 'similar options', for example, on weekdays choose chicken breast over red meat. But on weekends don't put everything to lose but free yourself to eat something you like more. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    else if (healthy == 3)
      cbodyc =
        " You have a decent frequency of good meal days a week but I think that you can complete 5 days a week of it, this way you will have more nutrients on your blood, and then you are going to start seeing the effects on your body shortly. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    else if (healthy == 4)
      cbodyc =
        " It's good that you have a good healthy meal day frequency, this will help you a lot on your path to your body goal. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    if (cheat == 1)
      ccbody =
        " It's good that you have a practically null cheat meal regularity, this will be helpful in your path to your body goal.";
    else if (cheat == 2)
      ccbody =
        " You have a decent frequency cheat meal days a week but I think that you can shorten it to 1 cheat meal day a week of it, this way you will have more ease on maintaining your diet plan and sustaining it you are going to start seeing the effects on your body shortly.";
    else if (cheat == 3)
      ccbody =
        " That's ok, but still, you need to shorten the number of cheat meals you eat try to only do it on weekends and when you feel like it, try doing it only on Sundays. But on weekends don't put everything to lose but free yourself to eat something you like more.";
    else if (cheat == 4)
      ccbody =
        " You need to gradually shorten the number of cheat meals you eat, because that enormous amount of cheat meals are not good at all for your health, therefore try doing it only on Fridays, Saturdays, and Sundays, then when you feel like it, try to only do it on weekends and when you feel like it, try doing it only on Sundays. But on weekends don't put everything to lose but free yourself to eat something you like more.";
    if (meals == 1)
      bodycc =
        " I know how that goes, you think, and i did too, that if you eat less you lose fat, but that is not necessarily the case. If you eat the right amount of the right food 5-6 times a day you will lose more fat and if you maintain a good protein ingestion in every meal, you will also make more muscle out of it.";
    else if (meals == 2)
      bodycc =
        " I know how that goes, you think, and i did too, that if you eat less you lose fat, but that is not necessarily the case. If you eat the right amount of the right food 5-6 times a day you will lose more fat and if you maintain a good protein ingestion in every meal, you will also make more muscle out of it.";
    else if (meals == 3)
      bodycc =
        " Your eating frequency is decent but you should try to eat at least once more through the day, and always eating healthy with a good portion of proteins and moderate portions of carbohydrates";
    else if (meals == 4)
      bodycc =
        " That's ideal, always eat healthy with 3-hour intervals for better muscle gain and fat loss.";
    goalBodyDistance += currentBody - bgoal;
    if (goalBodyDistance == 1)
      goalDistance +=
        " Also, you are really close to your goal, which means that with focus and determination your run towards your goal will be short!";
    else if (goalBodyDistance == 2)
      goalDistance +=
        " Also, you are close to your goal, which means that with focus and determination your run towards your goal will be short!";
    else if (goalBodyDistance == 3)
      goalDistance +=
        " Also, you are not far from your goal, take ownership of your path and you'll get there soon!";
    else if (goalBodyDistance == 4)
      goalDistance +=
        " It will be a bit difficult but with focus, besides the right training and diet, you'll get there!";
    else if (goalBodyDistance == 5)
      goalDistance +=
        " It will be difficult but with focus, besides the right training and diet, you'll get there!";
    else if (goalBodyDistance == 6)
      goalDistance +=
        " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
    else if (goalBodyDistance == 7)
      goalDistance +=
        " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
    else if (goalBodyDistance == 8)
      goalDistance +=
        " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
    if (goal == "bulking") {
      ccbodycc =
        " Since you are trying to bulk, you should focus the most on weight training, better with an instructor but it works anyway. Try increasing the weights and decreasing the movement speed. At your will for losing weight try some exercises like running, cycling, and so on. ";
      bodyc =
        " For bulking, You should eat well, a lot of protein, a good portion of carbohydrates. And you should always try to have a slight calorie intake surplus. Your menu varies between eggs, protein shakes, chicken, meat and so on. Besides salads, fruits and vegetables.";
    }
    if (goal == "cutting") {
      ccbodycc =
        " Since you are trying to cut, you should focus on weight training, better with an instructor but it works anyway, for having the athletic shape, and also some exercises like running, cycling, and so on. Try increasing the weights and decreasing the movement speed, while in the gym workout, and try to increase the difficulty of the aerobic exercises gradually, every workout day.";
      bodyc =
        " For cutting, You should eat in a controlled way, but with a good portion of proteins, not much carbohydrates and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit. ";
    }
    if (goal == "surplus") {
      ccbodycc =
        " Since you are trying to lose weight, you should focus on weight training and aerobic exercises, better with an instructor but it works anyway, for having the better shape. Try increasing the weights and decreasing the movement speed, while in the gym workout, and try to increase the difficulty of the aerobic exercises gradually, every workout day.";
      bodyc =
        " For losing weight, You should eat in a controlled way, but with a decent portion of proteins, not much carbohydrates and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit. ";
    }
    if (goal == "muscle") {
      ccbodycc =
        " Since you are trying to muscle-up, you should focus on weight training, better with an instructor but it works anyway, for having the better shape. Try increasing the weights and decreasing the movement speed, while in the gym workout.";
      bodyc =
        " For gaining weight, You should eat in a controlled way, but with a good portion of proteins and carbohydrates, and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit.";
    }
  } else if (languageValue == 2) {
    bmrll =
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link a uma ferramenta de saúde alimentar completa</a>';
    bmrlll =
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link a uma caloria alimentar por grupo geral</a>';
    bmrllll =
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link a uma página de Harvard sobre calorias de exercícios</a>';
    bmrlllll =
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link para os melhores aplicativos para conselhos de treino</a>";
    if (exercise == 1)
      cbody =
        " Bem, não importa qual é a sua meta, seu peso atual, nem seu tipo de corpo, se você não se exercitar, será basicamente impossível atingir sua meta. Pode ser corrida, ciclismo, levantamento de peso ou qualquer treino de alta intensidade que você queira fazer, porque ajuda a aumentar os músculos, queimar calorias, se livrar do excesso de água que seu corpo pode armazenar, além de muitas melhorias para a saúde que os exercícios podem te fornecer. O recomendado é pelo menos 3-4 vezes por semana, mas é claro que se você, por exemplo, treinar 5 vezes por semana, não será ruim, na verdade irá ajudá-lo mais, então você sabe o que fazer!";
    else if (exercise == 2)
      cbody =
        " Bem, suponho que, às vezes, você se pergunte por que está estagnado no corpo que está e de que não gosta. Eu posso te contar. Você está malhando muito pouco. Sim, entendi, mas é necessário para você ter um corpo mais saudável e bonito, pelo menos 3-4 treinos de alta intensidade por semana, se você fizer mais, ainda será bom e, na verdade, é será melhor.";
    else if (exercise == 3)
      cbody =
        " Bem, você já faz a frequência mínima de treino para um plano de dieta, mas se ainda sente que mais pode ser feito no caminho do seu corpo de sonho, você está totalmente certo, então você pode fazer 5, 6 ou, se você realmente quero fazer isso, 7 vezes por semana, quanto mais, melhor. ";
    else if (exercise == 4)
      cbody =
        " Bem, isso é bom. você já faz mais exercícios do que o necessário para um plano de dieta regular. Se quiser elevá-la ainda mais experimente fazer 7 treinos pesados por semana, além de um bom plano alimentar dietético.";
    if (healthy == 1)
      cbodyc =
        " Eu provavelmente não deveria acreditar em você, mas vou. Por favor, você tem que fazer refeições completas, em termos de nutrientes, além de alimentos saudáveis como salada, boa proteína, escolhendo habilmente entre 'opções semelhantes', por exemplo, nos dias de semana prefira peito de frango à carne vermelha. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    else if (healthy == 2)
      cbodyc =
        " Tudo bem, mas ainda assim, você precisa de refeições mais saudáveis e completas, em termos de nutrientes, dias de refeição por semana, como salada, boa proteína, escolher habilmente entre 'opções semelhantes', por exemplo, nos dias de semana escolha peito de frango em vez de carne vermelha. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    else if (healthy == 3)
      cbodyc =
        " Você tem uma frequência decente de bons dias de refeição por semana, mas eu acho que você pode completar 5 dias por semana, assim você terá mais nutrientes no seu sangue, e então você começará a ver os efeitos no seu corpo em breve . Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    else if (healthy == 4)
      cbodyc =
        " É bom que você tenha uma boa frequência de refeições saudáveis, isso vai te ajudar muito no seu caminho para o seu objetivo corporal. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    if (cheat == 1)
      ccbody =
        " É bom que você tenha uma regularidade de refeição de trapaça praticamente nula, isso será útil em seu caminho para seu objetivo corporal.";
    else if (cheat == 2)
      ccbody =
        " Você tem uma frequência decente de refeições diárias por semana, mas acho que pode encurtá-la para 1 refeição diária normal por semana, dessa forma você terá mais facilidade em manter seu plano de dieta e sustentá-lo, você começará a ver o efeitos em seu corpo em breve.";
    else if (cheat == 3)
      ccbody =
        " Tudo bem, mas ainda assim, você precisa encurtar o número de cheats que você faz, tente fazer apenas nos finais de semana e quando quiser, tente fazer apenas aos domingos. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais.";
    else if (cheat == 4)
      ccbody =
        " Você precisa diminuir gradativamente o número de refeições casuais que você faz, porque essa quantidade enorme de refeições casuais não faz bem à sua saúde, portanto, tente fazê-lo apenas às sextas, sábados e domingos, então quando tiver vontade, tente para fazer apenas nos finais de semana e quando quiser, tente fazer apenas aos domingos. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais.";
    if (meals == 1)
      bodycc =
        " Sei o que acontece, você pensa, e eu também, que se comer menos perderá gordura, mas não é necessariamente o caso. Se você comer a quantidade certa da comida certa 5-6 vezes ao dia, perderá mais gordura e se mantiver uma boa ingestão de proteína em todas as refeições, também ganhará mais músculos.";
    else if (meals == 2)
      bodycc =
        " Sei o que acontece, você pensa, e eu também, que se comer menos perderá gordura, mas não é necessariamente o caso. Se você comer a quantidade certa da comida certa 5-6 vezes ao dia, perderá mais gordura e se mantiver uma boa ingestão de proteína em todas as refeições, também ganhará mais músculos.";
    else if (meals == 3)
      bodycc =
        " Sua frequência alimentar é decente, mas você deve tentar comer pelo menos mais uma vez ao longo do dia, e sempre comendo saudável com uma boa porção de proteínas e porções moderadas de carboidratos";
    else if (meals == 4)
      bodycc =
        " Isso é ideal, sempre alimente-se de forma saudável com intervalos de 3 horas para melhor ganho muscular e perda de gordura.";
    goalBodyDistance += currentBody - bgoal;
    if (goalBodyDistance == 1)
      goalDistance +=
        " Além disso, você está muito perto de seu objetivo, o que significa que com foco e determinação sua corrida em direção ao objetivo será curta!";
    else if (goalBodyDistance == 2)
      goalDistance +=
        " Além disso, você está perto de seu objetivo, o que significa que com foco e determinação sua corrida em direção ao objetivo será curta!";
    else if (goalBodyDistance == 3)
      goalDistance +=
        " Além disso, você não está longe de seu objetivo, tome posse de seu caminho e você chegará lá em breve!";
    else if (goalBodyDistance == 4)
      goalDistance +=
        " Vai ser um pouco difícil, mas com foco, além do treino e da dieta corretos, você vai chegar lá!";
    else if (goalBodyDistance == 5)
      goalDistance +=
        " Vai ser difícil, mas com foco, além do treino e da dieta corretos, você vai chegar lá!";
    else if (goalBodyDistance == 6)
      goalDistance +=
        " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
    else if (goalBodyDistance == 7)
      goalDistance +=
        " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
    else if (goalBodyDistance == 8)
      goalDistance +=
        " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
    if (goal == "bulking") {
      ccbodycc =
        " Já que você está tentando ganhar massa, você deve se concentrar mais no treinamento com pesos, melhor com um instrutor, mas funciona de qualquer maneira. Experimente aumentar os pesos e diminuir a velocidade do movimento. Quando desejar, para perder peso, experimente alguns exercícios como corrida, ciclismo e assim por diante. ";
      bodyc =
        " Para aumentar, você deve comer bem, muita proteína, uma boa porção de carboidratos. E você deve sempre tentar ter um pequeno excedente de ingestão de calorias. Seu menu varia entre ovos, shakes de proteína, frango, carne e assim por diante. Além de saladas, frutas e vegetais.";
    }
    if (goal == "cutting") {
      ccbodycc =
        " Já que você está tentando secar, você deve focar no treinamento com pesos, melhor com um instrutor, mas funciona mesmo assim, para ter a forma atlética, e também alguns exercícios como corrida, ciclismo e assim por diante. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante a malhação, e tente aumentar a dificuldade dos exercícios aeróbicos gradativamente, a cada dia de treino.";
      bodyc =
        " Para secar, deve comer de forma controlada, mas com uma boa porção de proteínas, não muito carbohidratos e claro os nossos entes queridos: salada, fruta e vegetais. Mas você deve ter um déficit de ingestão de calorias. ";
    }
    if (goal == "surplus") {
      ccbodycc =
        " Já que você está tentando emagrecer, você deve focar no musculação e exercícios aeróbicos, melhor com um instrutor, mas funciona mesmo assim, para ter uma melhor forma. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante a ginástica, e tente aumentar a dificuldade dos exercícios aeróbicos gradativamente, a cada dia de treino.";
      bodyc =
        " Para emagrecer, deve comer de forma controlada, mas com uma porção decente de proteínas, sem muitos carbohidratos e claro os nossos entes queridos: salada, fruta e vegetais. Mas você deve ter um déficit de ingestão calórica. ";
    }
    if (goal == "muscle") {
      ccbodycc =
        " Já que você está tentando ganhar músculos, você deve se concentrar no treinamento com pesos, melhor com um instrutor, mas funciona de qualquer maneira, para ter a melhor forma. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante o treino de ginásio.";
      bodyc =
        " Para ganhar peso, você deve comer de forma controlada, mas com uma boa porção de proteínas e carboidratos e, claro, nossos entes queridos: salada, frutas e vegetais. Mas você deve ter um déficit de ingestão calórica.";
    }
  } else if (languageValue == 3) {
    bmrll =
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link vers un outil de santé alimentaire complet</a>';
    bmrlll =
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link vers une calorie alimentaire par groupe général</a>';
    bmrllll =
      "<a id='finallink' href='https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities' target='_blank'>Link vers une page de Harvard sur les calories d'exercice</a>";
    bmrlllll =
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Lien vers les meilleures applications pour obtenir des conseils d'entraînement</a>";
    if (exercise == 1)
      cbody =
        " Eh bien, peu importe votre objectif, votre poids actuel ou votre type de corps, si vous ne faites pas d'exercice, il vous sera pratiquement impossible d'atteindre votre objectif. Il peut s'agir de course, de cyclisme, de dynamophilie ou de tout entraînement de haute intensité que vous souhaitez faire, car il vous aide à développer vos muscles, à brûler des calories, à vous débarrasser du surplus d'eau que votre corps peut stocker, ainsi que de nombreuses améliorations de la santé que l'exercice peut vous fournir. Le recommandé est au moins 3 à 4 fois par semaine, mais bien sûr, si vous vous entraînez, par exemple, 5 fois par semaine, ce ne sera pas mal, cela vous aidera davantage, alors vous savez quoi faire!";
    else if (exercise == 2)
      cbody =
        " Eh bien, je suppose que parfois, vous vous demandez pourquoi vous stagnez dans le corps que vous et que vous n'aimez pas. Je peux vous dire. Vous travaillez trop peu. Ouais je comprends, mais c'est nécessaire pour toi, pour avoir un corps plus sain et plus joli, au moins 3-4 séances d'entraînement de haute intensité par semaine, si tu en fais plus, ce sera toujours bon et, en fait, ça sera mieux.";
    else if (exercise == 3)
      cbody =
        " Eh bien, vous faites déjà la fréquence minimale d'entraînement pour un régime alimentaire, mais si vous pensez toujours que plus peut être fait sur le chemin de votre corps de rêve, vous avez tout à fait raison, alors vous pouvez faire 5, 6 ou, si vous vraiment veulent faire cela, 7 fois par semaine, plus il y en a, mieux c'est. ";
    else if (exercise == 4)
      cbody =
        " Bon, c'est bien. vous faites déjà plus de séances d'entraînement que nécessaire pour un régime alimentaire régulier. Si vous voulez l'augmenter encore plus, essayez de faire 7 séances d'entraînement intensives par semaine, en plus d'un bon régime alimentaire.";
    if (healthy == 1)
      cbodyc =
        " Je ne devrais probablement pas te croire, mais je le ferai. S'il vous plaît, vous devez avoir des repas complets, en termes de nutriments, en plus des aliments sains comme une salade, de bonnes protéines, en choisissant intelligemment entre des options similaires '', par exemple, en semaine, choisissez la poitrine de poulet plutôt que la viande rouge. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    else if (healthy == 2)
      cbodyc =
        " Ce n'est pas grave, mais vous avez quand même besoin de repas plus sains et complets, en termes de nutriments, chaque semaine, comme une salade, de bonnes protéines, en choisissant intelligemment entre des options similaires '', par exemple, en semaine, choisissez la poitrine de poulet plutôt que la viande rouge. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    else if (healthy == 3)
      cbodyc =
        " Vous avez une fréquence décente de bons repas jours par semaine, mais je pense que vous pouvez en terminer 5 jours par semaine, de cette façon, vous aurez plus de nutriments dans votre sang, et ensuite vous allez commencer à voir les effets sur votre corps sous peu. . Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    else if (healthy == 4)
      cbodyc =
        " Il est bon que vous ayez une bonne fréquence quotidienne de repas sains, cela vous aidera beaucoup sur votre chemin vers votre objectif corporel. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    if (cheat == 1)
      ccbody =
        " Il est bon que vous ayez une régularité de repas malsains pratiquement nulle, cela vous sera utile sur votre chemin vers votre objectif corporel.";
    else if (cheat == 2)
      ccbody =
        " Vous avez une fréquence de repas de triche décente jours par semaine, mais je pense que vous pouvez le raccourcir à 1 repas de triche par semaine, de cette façon, vous aurez plus de facilité à maintenir votre régime alimentaire et à le maintenir, vous allez commencer à voir le effets sur votre corps sous peu.";
    else if (cheat == 3)
      ccbody =
        " C'est correct, mais quand même, vous devez réduire le nombre de repas de triche que vous mangez, essayez de ne le faire que le week-end et lorsque vous en avez envie, essayez de le faire uniquement le dimanche. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus.";
    else if (cheat == 4)
      ccbody =
        " Vous devez réduire progressivement le nombre de repas de triche que vous mangez, car cette énorme quantité de repas de triche n'est pas du tout bonne pour votre santé, essayez donc de le faire uniquement les vendredis, samedis et dimanches, puis quand vous en avez envie, essayez pour ne le faire que le week-end et quand vous en avez envie, essayez de le faire uniquement le dimanche. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus.";
    if (meals == 1)
      bodycc =
        " Je sais comment ça se passe, vous pensez, et moi aussi, que si vous mangez moins, vous perdez du gras, mais ce n'est pas forcément le cas. Si vous mangez la bonne quantité de la bonne nourriture 5 à 6 fois par jour, vous perdrez plus de graisse et si vous maintenez une bonne ingestion de protéines à chaque repas, vous en tirerez également plus de muscle..";
    else if (meals == 2)
      bodycc =
        " Je sais comment ça se passe, vous pensez, et moi aussi, que si vous mangez moins, vous perdez du gras, mais ce n'est pas forcément le cas. Si vous mangez la bonne quantité de la bonne nourriture 5 à 6 fois par jour, vous perdrez plus de graisse et si vous maintenez une bonne ingestion de protéines à chaque repas, vous en tirerez également plus de muscle..";
    else if (meals == 3)
      bodycc =
        " Votre fréquence d'alimentation est correcte, mais vous devriez essayer de manger au moins une fois de plus dans la journée et toujours manger sainement avec une bonne portion de protéines et des portions modérées de glucides.";
    else if (meals == 4)
      bodycc =
        " C'est idéal, mangez toujours sainement avec des intervalles de 3 heures pour un meilleur gain musculaire et une meilleure perte de graisse.";
    goalBodyDistance += currentBody - bgoal;
    if (goalBodyDistance == 1)
      goalDistance +=
        " De plus, vous êtes très proche de votre objectif, ce qui signifie qu'avec concentration et détermination, votre course vers votre objectif sera courte!";
    else if (goalBodyDistance == 2)
      goalDistance +=
        " De plus, vous êtes proche de votre objectif, ce qui signifie qu'avec de la concentration et de la détermination, votre course vers votre objectif sera courte!";
    else if (goalBodyDistance == 3)
      goalDistance +=
        " Aussi, vous n'êtes pas loin de votre objectif, prenez en main votre chemin et vous y arriverez bientôt!";
    else if (goalBodyDistance == 4)
      goalDistance +=
        " Ce sera un peu difficile mais avec de la concentration, en plus du bon entraînement et du bon régime, vous y arriverez!";
    else if (goalBodyDistance == 5)
      goalDistance +=
        " Ce sera difficile mais avec de la concentration, en plus du bon entraînement et du bon régime, vous y arriverez!";
    else if (goalBodyDistance == 6)
      goalDistance +=
        " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
    else if (goalBodyDistance == 7)
      goalDistance +=
        " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
    else if (goalBodyDistance == 8)
      goalDistance +=
        " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
    if (goal == "bulking") {
      ccbodycc =
        " Puisque vous essayez de prendre du volume, vous devriez vous concentrer le plus sur la musculation, mieux avec un instructeur, mais cela fonctionne quand même. Essayez d'augmenter les poids et de réduire la vitesse de déplacement. À votre guise pour perdre du poids, essayez des exercices comme la course à pied, le cyclisme, etc. ";
      bodyc =
        " Pour le gonflement, vous devez bien manger, beaucoup de protéines, une bonne portion de glucides. Et vous devriez toujours essayer d'avoir un léger surplus d'apport calorique. Votre menu varie entre les œufs, les boissons protéinées, le poulet, la viande, etc. Outre les salades, les fruits et légumes.";
    }
    if (goal == "cutting") {
      ccbodycc =
        " Puisque vous essayez de couper, vous devriez vous concentrer sur la musculation, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la forme athlétique, et aussi certains exercices comme la course, le cyclisme, etc. Essayez d'augmenter les poids et de réduire la vitesse de mouvement, pendant que vous vous entraînez au gymnase, et essayez d'augmenter progressivement la difficulté des exercices d'aérobie, chaque jour d'entraînement.";
      bodyc =
        " Pour la découpe, il faut manger de manière contrôlée, mais avec une bonne portion de protéines, peu de glucides et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique. ";
    }
    if (goal == "surplus") {
      ccbodycc =
        " Puisque vous essayez de perdre du poids, vous devriez vous concentrer sur la musculation et les exercices d'aérobie, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la meilleure forme. Essayez d'augmenter les poids et de réduire la vitesse de mouvement, pendant que vous vous entraînez au gymnase, et essayez d'augmenter progressivement la difficulté des exercices d'aérobie, chaque jour d'entraînement.";
      bodyc =
        " Pour perdre du poids, vous devez manger de manière contrôlée, mais avec une bonne portion de protéines, pas beaucoup de glucides et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique. ";
    }
    if (goal == "muscle") {
      ccbodycc =
        " Puisque vous essayez de vous muscler, vous devriez vous concentrer sur la musculation, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la meilleure forme. Essayez d'augmenter les poids et de réduire la vitesse de mouvement pendant que vous vous entraînez au gymnase.";
      bodyc =
        " Pour prendre du poids, vous devez manger de manière contrôlée, mais avec une bonne portion de protéines et de glucides, et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique.";
    }
  } else if (languageValue == 4) {
    bmrll =
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link a una herramienta de salud alimentaria integral</a>';
    bmrlll =
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link a una caloría alimentaria por grupo general</a>';
    bmrllll =
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link a una página de Harvard sobre las calorías del ejercicio</a>';
    bmrlllll =
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link a las mejores aplicaciones para obtener consejos sobre ejercicios</a>";
    if (exercise == 1)
      cbody =
        " Bueno, no importa cuál sea tu objetivo, tu peso actual ni tu tipo de cuerpo, si no haces ejercicio, será básicamente imposible que lo alcance. Puede ser correr, andar en bicicleta, levantar pesas o cualquier entrenamiento de alta intensidad que desee hacer, ya que le ayuda a desarrollar músculo, quemar calorías, eliminar el exceso de agua que su cuerpo puede almacenar, además de muchas mejoras para la salud que puede hacer el ejercicio. proporcionarle. Lo recomendado es al menos 3-4 veces a la semana, pero por supuesto que si, por ejemplo, haces ejercicio 5 veces a la semana, no será malo, en realidad te ayudará más, ¡así que sabes qué hacer!";
    else if (exercise == 2)
      cbody =
        " Bueno, supongo que a veces te preguntas por qué estás estancado en el cuerpo que eres y que no te gusta. Te puedo decir. Está haciendo muy poco ejercicio. Sí, lo entiendo, pero es necesario para ti, para tener un cuerpo más sano y bonito, al menos 3-4 entrenamientos de alta intensidad a la semana, si haces más, seguirá siendo bueno y, de hecho, será será mejor.";
    else if (exercise == 3)
      cbody =
        " Bueno, ya tiene la frecuencia mínima de entrenamiento para un plan de dieta, pero si todavía siente que se puede hacer más en el camino del cuerpo de sus sueños, tiene toda la razón, entonces puede hacer 5, 6 o, si realmente lo desea. quiero hacer esto, 7 veces a la semana, cuanto más, mejor. ";
    else if (exercise == 4)
      cbody =
        " Bueno, eso es bueno. ya haces más entrenamientos de los necesarios para un plan de dieta regular. Si quieres elevarlo aún más intenta hacer 7 entrenamientos pesados a la semana, además de un buen plan alimenticio dietético.";
    if (healthy == 1)
      cbodyc =
        " Probablemente no debería creerte, pero lo haré. Por favor, debe tener comidas completas, en cuanto a nutrientes, además de alimentos saludables como ensaladas, buenas proteínas, eligiendo inteligentemente entre 'opciones similares', por ejemplo, los días de semana elija pechuga de pollo sobre carne roja. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    else if (healthy == 2)
      cbodyc =
        " Está bien, pero aún así, necesita días de comida a la semana más saludables y completos, en cuanto a nutrientes, como ensalada, buenas proteínas, eligiendo inteligentemente entre 'opciones similares', por ejemplo, los días de semana elija pechuga de pollo en lugar de carne roja. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    else if (healthy == 3)
      cbodyc =
        " Tienes una frecuencia decente de buenos días de comida a la semana, pero creo que puedes completar 5 días a la semana, de esta manera tendrás más nutrientes en tu sangre y luego comenzarás a ver los efectos en tu cuerpo en breve. . Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    else if (healthy == 4)
      cbodyc =
        " Es bueno que tengas una buena frecuencia diaria de comidas saludables, esto te ayudará mucho en tu camino hacia tu objetivo corporal. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    if (cheat == 1)
      ccbody =
        " Es bueno que tengas una regularidad de comidas poco saludables que sea prácticamente nula, esto te será útil en tu camino hacia tu meta corporal.";
    else if (cheat == 2)
      ccbody =
        " Tiene una frecuencia decente para hacer trampas los días de la semana, pero creo que puede acortarla a 1 comida trampa al día a la semana, de esta manera tendrá más facilidad para mantener su plan de dieta y mantenerlo, comenzará a ver el efectos en su cuerpo en breve.";
    else if (cheat == 3)
      ccbody =
        " Eso está bien, pero aún así, debes acortar la cantidad de comidas trampa que comes, intenta hacerlo solo los fines de semana y, cuando te apetezca, intenta hacerlo solo los domingos. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más.";
    else if (cheat == 4)
      ccbody =
        " Necesita acortar gradualmente la cantidad de comidas trampa que come, porque esa enorme cantidad de comidas trampa no es nada bueno para su salud, por lo tanto, intente hacerlo solo los viernes, sábados y domingos, luego, cuando lo desee, intente a hacerlo solo los fines de semana y cuando te apetezca, intenta hacerlo solo los domingos. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más.";
    if (meals == 1)
      bodycc =
        " Sé cómo va eso, piensas, y yo también, que si comes menos pierdes grasa, pero ese no es necesariamente el caso. Si come la cantidad correcta de la comida adecuada 5-6 veces al día, perderá más grasa y si mantiene una buena ingesta de proteínas en cada comida, también hará más músculo con ella.";
    else if (meals == 2)
      bodycc =
        " Sé cómo va eso, piensas, y yo también, que si comes menos pierdes grasa, pero ese no es necesariamente el caso. Si come la cantidad correcta de la comida adecuada 5-6 veces al día, perderá más grasa y si mantiene una buena ingesta de proteínas en cada comida, también hará más músculo con ella.";
    else if (meals == 3)
      bodycc =
        " Su frecuencia de alimentación es decente, pero debe intentar comer al menos una vez más durante el día, y siempre comer sano con una buena porción de proteínas y porciones moderadas de carbohidratos.";
    else if (meals == 4)
      bodycc =
        " Eso es ideal, siempre coma sano con intervalos de 3 horas para una mejor ganancia muscular y pérdida de grasa..";
    goalBodyDistance += currentBody - bgoal;
    if (goalBodyDistance == 1)
      goalDistance +=
        " Además, estás muy cerca de tu objetivo, lo que significa que con concentración y determinación, ¡tu carrera hacia tu objetivo será corta!";
    else if (goalBodyDistance == 2)
      goalDistance +=
        " Además, estás cerca de tu objetivo, lo que significa que con concentración y determinación, ¡tu carrera hacia tu objetivo será corta!";
    else if (goalBodyDistance == 3)
      goalDistance +=
        " Además, no está lejos de su objetivo, tome posesión de su camino y ¡llegará pronto!";
    else if (goalBodyDistance == 4)
      goalDistance +=
        " Será un poco difícil, pero con concentración, además del entrenamiento y la dieta adecuados, ¡lo lograrás!";
    else if (goalBodyDistance == 5)
      goalDistance +=
        " Será difícil, pero con concentración, además del entrenamiento y la dieta adecuados, ¡lo lograrás!";
    else if (goalBodyDistance == 6)
      goalDistance +=
        " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
    else if (goalBodyDistance == 7)
      goalDistance +=
        " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
    else if (goalBodyDistance == 8)
      goalDistance +=
        " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
    if (goal == "bulking") {
      ccbodycc =
        " Dado que está tratando de aumentar el volumen, debe concentrarse más en el entrenamiento con pesas, mejor con un instructor, pero de todos modos funciona. Intente aumentar los pesos y disminuir la velocidad de movimiento. Si desea perder peso, pruebe algunos ejercicios como correr, andar en bicicleta, etc. ";
      bodyc =
        " Para aumentar el volumen, debes comer bien, mucha proteína, una buena porción de carbohidratos. Y siempre debe intentar tener un ligero exceso de ingesta calórica. Su menú varía entre huevos, batidos de proteínas, pollo, carne, etc. Además de ensaladas, frutas y verduras.";
    }
    if (goal == "cutting") {
      ccbodycc =
        " Ya que estás tratando desecar, debes enfocarte en el entrenamiento con pesas, mejor con un instructor pero de todos modos funciona, para tener la forma atlética, y también algunos ejercicios como correr, andar en bicicleta, etc. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras está en el gimnasio, e intente aumentar la dificultad de los ejercicios aeróbicos gradualmente, todos los días de entrenamiento.";
      bodyc =
        " Parasecar, conviene comer de forma controlada, pero con una buena porción de proteínas, poco carbohidratos y por supuesto nuestros seres queridos: ensalada, frutas y verduras. Pero deberías tener un déficit de ingesta de calorías.. ";
    }
    if (goal == "surplus") {
      ccbodycc =
        " Ya que estás tratando de perder peso, debes concentrarte en el entrenamiento con pesas y ejercicios aeróbicos, mejor con un instructor pero de todos modos funciona, para tener la mejor forma. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras está en el gimnasio, y trate de aumentar la dificultad de los ejercicios aeróbicos gradualmente, todos los días de entrenamiento.";
      bodyc =
        " Para adelgazar, conviene comer de forma controlada, pero con una buena porción de proteínas, poco carbohidratos y por supuesto nuestros seres queridos: ensalada, frutas y verduras. Pero debería tener un déficit de ingesta de calorías. ";
    }
    if (goal == "muscle") {
      ccbodycc =
        " Ya que estás tratando de hacer musculación, debes concentrarte en el entrenamiento con pesas, mejor con un instructor pero de todos modos funciona, para tener la mejor forma. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras hace ejercicio en el gimnasio.";
      bodyc =
        " Para subir de peso, conviene comer de forma controlada, pero con una buena porción de proteínas y carbohidratos, y por supuesto de nuestros seres queridos: ensalada, frutas y verduras. Pero deberías tener un déficit de ingesta de calorías..";
    }
  }
  //downloaded file message formation
  if (languageValue == 1)
    downloadResult +=
      '<h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Well <big style="font-family: Kaushan Script, cursive;">';
  else if (languageValue == 2)
    downloadResult +=
      '<h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bem <big style="font-family: Kaushan Script, cursive;">';
  else if (languageValue == 3)
    downloadResult +=
      '<h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bien <big style="font-family: Kaushan Script, cursive;">';
  else if (languageValue == 4)
    downloadResult +=
      '<h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">¡Bueno! <big style="font-family: Kaushan Script, cursive;">';
  downloadResult += `${inputName}</big><br>${btype}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${bodypt}${goalDistance}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${ageAdvice}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${bodytp}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${cbody}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${ccbodycc}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${cbodyc}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${ccbody}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${bodycc}${bodyc}</h3>`;
  if (emotion == "yes")
    downloadResult += `<br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${emotionans}</h3>`;
  downloadResult += `<br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${bmrl}</h3><br><h4><i>${bmrll}</i></h4><br><h4><i>${bmrlll}</i></h4><br><h4><i>${bmrllll}</i></h4><br><h4><i>${bmrlllll}</i></h4></span>`;
  storage();
}
function resultTransition() {
  idBar.style.display = "block";
  const num = document.querySelector(".number");
  setInterval(() => {
    if (counter == 5) h4Config.innerHTML = `${processing}.`;
    if (counter == 10) h4Config.innerHTML = `${processing}..`;
    if (counter == 15) h4Config.innerHTML = `${processing}...`;
    if (counter == 20) h4Config.innerHTML = `${processing}`;
    if (counter == 25) h4Config.innerHTML = `${processing}.`;
    if (counter == 30) h4Config.innerHTML = `${processing}..`;
    if (counter == 35) h4Config.innerHTML = `${processing}...`;
    if (counter == 40) h4Config.innerHTML = `${rpossibilities}`;
    if (counter == 45) h4Config.innerHTML = `${rpossibilities}.`;
    if (counter == 50) h4Config.innerHTML = `${rpossibilities}..`;
    if (counter == 55) h4Config.innerHTML = `${rpossibilities}...`;
    if (counter == 60) h4Config.innerHTML = `${rpossibilities}`;
    if (counter == 65) h4Config.innerHTML = `${rpossibilities}.`;
    if (counter == 70) h4Config.innerHTML = `${rpossibilities}..`;
    if (counter == 75) h4Config.innerHTML = `${rpossibilities}...`;
    if (counter == 80) h4Config.innerHTML = `${diagnosis}.`;
    if (counter == 85) h4Config.innerHTML = `${diagnosis}..`;
    if (counter == 90) h4Config.innerHTML = `${diagnosis}...`;
    if (counter == 95) h4Config.innerHTML = `${done}`;
    if (counter == 100) {
      clearInterval();
      timeInterval = setInterval(resultTime, 1);
      linkTitlea.setAttribute("href", "");
      titleLink.setAttribute("href", "");
    } else {
      counter += 1;
      num.textContent = counter + "%";
    }
  }, 200);
  if (
    (timeGaps === 0 && counter >= 100) ||
    (timeGaps === 0 && h4Config.innerHTML == "Done")
  )
    timeInterval = setInterval(resultTime, 1);
  if (timeGaps > 1500000) clearInterval(timeInterval);
}
const names = () => inputName = document.getElementById("name").value;
function resultTime() {
  if (timeGaps > 1500000) clearInterval(timeInterval);
  if (timeGaps == 100) {
    idBar.style.display = "none";
    finalResultH3Id.style.display = "block";
    finalResultH3Id.innerHTML = resultBeginning;
    finalResultH3Id.innerHTML += `${inputName}</big>, ${btype}`;
  }
  timeGaps += 1;
  if (timeGaps == 1500) finalResultH3Id.innerHTML += `${bodypt}${goalDistance}<br><br>`;
  if (timeGaps == 2000) finalResultH3Id.innerHTML += `${ageAdvice}<br><br>`;
  if (timeGaps == 3000) finalResultH3Id.innerHTML += `${bodytp}<br><br>`;
  if (timeGaps == 4000) finalResultH3Id.innerHTML += `${cbody}<br><br>`;
  if (timeGaps == 5000) finalResultH3Id.innerHTML += `${ccbodycc}<br><br>`;
  if (timeGaps == 6000) finalResultH3Id.innerHTML += `${cbodyc}<br><br>`;
  if (timeGaps == 7000) finalResultH3Id.innerHTML += `${ccbody}<br><br>`;
  if (timeGaps == 8000)
    finalResultH3Id.innerHTML += `${bodycc}<br><br>${bodyc}<br><br>`;
  if (timeGaps == 10000 && emotion == "yes")
    finalResultH3Id.innerHTML += `${emotionans}<br><br>`;
  if (timeGaps == 11000) finalResultH3Id.innerHTML += `${bmrl}<br><br><br>`;
  if (timeGaps == 12000) {
    finalResultH4Id.innerHTML = "";
    finalResultH4Id.style.display = "block";
    finalResultH4Id.innerHTML += `<i>${bmrll}<br><br>${bmrlll}<br><br>${bmrllll}<br><br>${bmrlllll}</i><br><br><br>`;
  }
  if (timeGaps == 13000) {
    finalResultH2Id.style.display = "block";
    if (!(noEmailNeeded === 0 || emailaddrreturnfinal || emailaddrreturn))
      emailLinkColor.innerHTML = ``;
  }
  if (timeGaps == 14000) {
    idFooter.style.position = "relative";
    idFooter.style.marginBottom = "0";
    idFooter.style.display = "block";
  }
}
