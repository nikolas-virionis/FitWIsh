var bodyTypeAdvice,
  buttons = document.querySelectorAll(".button"),
  resultBeginning,
  contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [],
  idUser,
  exercise,
  healthy,
  cheat,
  meals,
  resultBeginning2,
  day,
  triesMade,
  tryNumber,
  counter = 0,
  timeInterval,
  metricDefault,
  metricVerify = 0,
  imperialDefault,
  metricNoDefault,
  resultPossibilities,
  defaultUnit,
  colorDownload = "#1F3B4D",
  backgroundColorDownload = "#12232A",
  done,
  processing,
  diagnosis,
  alreadyInPage,
  local,
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Select a gender to see the reference Image',
  weightManagementProgramFinalResult,
  language,
  theme,
  emailLinkFunc,
  downloadLinkFunc,
  emotionans,
  emotion,
  baseIdealWeight,
  topIdealWeight,
  weight,
  height,
  unit,
  advicedWeight,
  idealBodyFat,
  idealWeightMsgPunctuation,
  idealWeightMsgBmiState,
  bodyFatPercentage,
  bodyFat,
  confirmWriteEmail,
  exerciseAdvice,
  healthyAdvice,
  cheatAdvice,
  mealsAdvice,
  goalAdvice,
  goalAdvice2,
  bmr,
  calorieIntakeAdvice,
  calorieCounterLink,
  caloriesLink,
  baseBodyFat,
  topBodyFat,
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
  bodyTypeAdvantage,
  bodyTypeAdvantageAdvice = "",
  finalIdealWeightMsg = "",
  bodytype = "",
  idealWeightMsg = "",
  idealWeight,
  idealWeightDistance = 0,
  bmi = 0,
  currentBody = 0,
  goalBody = 0,
  goalBodyDistance = 0,
  goalBaseBodyFat = 0,
  goalTopBodyFat = 0,
  suggestedBodyFat = 0,
  idealBodyFatPercentage = 0,
  noEmailNeeded = 0,
  wrongEmailCount = 0,
  goalDistance = "";
const enterFuncMid = (event, blur, focus) => {
  if (event.key === "Enter") {
    document.getElementById(blur).blur();
    document.getElementById(focus).focus();
  }
};
const enterFunc = (event) =>
  event.key === "Enter" ? nextPageInterpreter() : "";
export function english() {
  language = "english";
  sessionStorage.setItem("language", language);
  languageValue = 1;
  linkTitle.title = "FitWish Home Page";
  buttonFirst.value = "Attempt's Menu";
  buttonAbout.value = "About";
  buttonHome.value = "Home Page";
  buttonContact.value = "Contact";
  howItWorksId.innerHTML = "How it Works";
  aboutId.innerHTML = "About";
  contactId.innerHTML = "Contact";
  for (let element of listRightNav.children) element.style.fontSize = "2.355vw";
  pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  languageInput.innerHTML = "Language:";
  alreadyInPage = "Already in page";
  pageId.innerHTML = "Pages:";
  introPageId.innerHTML = "Introduction";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Gender/Unit";
  goalPageId.innerHTML = "Goal";
  dataPageId.innerHTML = "Weight/Height";
  bodyTypePageId.innerHTML = "Body Type";
  bodyImagePageId.innerHTML = "Body Fat Evaluation";
  xercisePageId.innerHTML = "Exercise Evaluation";
  healthyPageId.innerHTML = "Healthy Meals";
  cheatPageId.innerHTML = "Cheat Meals";
  mealsPageId.innerHTML = "Meals/Day";
  emotionPageId.innerHTML = "Emotion-based Overeating";
  buttonNext.value = "Next";
  buttonPrev.value = "Previous";
  document.getElementById("lightThemeButton").innerHTML = "Light Theme";
  document.getElementById("darkThemeButton").innerHTML = "Dark Theme (default)";
  document.getElementById("disclaimerId").innerHTML = "DISCLAIMER";
  firstAlert =
    "DISCLAIMER: This is not a medical nor nutritionist advice and not only does not exclude a medical consultation, but also, me as this code creator, encourage and support YOU to get to see your doctor for anything YOU think YOU should improve in YOUR health life. Peace!";
  document.getElementById("allRights").innerHTML = "All Rights Reserved";
}
export function português() {
  language = "português";
  sessionStorage.setItem("language", language);
  languageValue = 2;
  linkTitle.title = "Página inicial do FitWish";
  buttonFirst.value = "Menu de Tentativas";
  buttonAbout.value = "Sobre";
  buttonHome.value = "Página Inicial";
  buttonContact.value = "Contato";
  howItWorksId.innerHTML = "Como Funciona";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contato";
  for (let element of listRightNav.children) element.style.fontSize = "2.105vw";
  languageInput.innerHTML = "Idioma:";
  alreadyInPage = "Já nessa página";
  pagesNavId.innerHTML = "Páginas/Seções(&sect;)";
  pageId.innerHTML = "Páginas:";
  introPageId.innerHTML = "Introdução";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Gênero/Unidade";
  goalPageId.innerHTML = "Objetivo";
  bodyTypePageId.innerHTML = "Tipo Corporal";
  bodyImagePageId.innerHTML = "Avaliação da Gordura Corporal";
  xercisePageId.innerHTML = "Avaliação de Exercícios";
  dataPageId.innerHTML = "Peso/Altura";
  healthyPageId.innerHTML = "Refeições Saudáveis";
  cheatPageId.innerHTML = "Refeições não Saudáveis";
  mealsPageId.innerHTML = "Refeições/Dia";
  emotionPageId.innerHTML = "Comer demais por conta de emoções";
  buttonNext.value = "Próximo";
  buttonPrev.value = "Anterior";
  document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
  document.getElementById("darkThemeButton").innerHTML = "Tema Escuro (padrão)";
  document.getElementById("disclaimerId").innerHTML = "AVISO LEGAL";
  firstAlert =
    "AVISO LEGAL: Este não é um conselho médico ou nutricionista e não só não exclui uma consulta médica, como também, eu, como criador deste código, encorajo e apoio VOCÊ a procurar seu médico para qualquer coisa que você acha que deveria melhorar em sua vida saudável.";
  document.getElementById("allRights").innerHTML = "Todos direitos reservados";
}
export function français() {
  language = "français";
  sessionStorage.setItem("language", language);
  languageValue = 3;
  linkTitle.title = "Page d'accueil FitWish";
  buttonFirst.value = "Menu des tentatives";
  buttonAbout.value = "À propos";
  buttonHome.value = "Page d'accueil";
  buttonContact.value = "Contact";
  howItWorksId.innerHTML = "Comment ça fonctionne";
  contactId.innerHTML = "Contact";
  aboutId.innerHTML = "À propos";
  for (let element of listRightNav.children) element.style.fontSize = "2.2vw";
  languageInput.innerHTML = "Langue:";
  alreadyInPage = "Déjà en page";
  pageId.innerHTML = "Pages:";
  introPageId.innerHTML = "Introduction";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Genre / Unité";
  goalPageId.innerHTML = "Objectif";
  dataPageId.innerHTML = "Poids/Hauteur";
  bodyTypePageId.innerHTML = "Type de corps";
  bodyImagePageId.innerHTML = "Évaluation de la graisse corporelle";
  pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  xercisePageId.innerHTML = "Évaluation de l'exercice";
  healthyPageId.innerHTML = "Repas sains";
  cheatPageId.innerHTML = "Repas de triche";
  mealsPageId.innerHTML = "Repas / jour";
  emotionPageId.innerHTML = "Suralimentation basée sur les émotions";
  buttonNext.value = "Suivant";
  buttonPrev.value = "Précédent";
  document.getElementById("lightThemeButton").innerHTML = "Thème léger";
  document.getElementById("darkThemeButton").innerHTML =
    "Thème sombre (par défaut)";
  document.getElementById("disclaimerId").innerHTML =
    "AVIS DE NON-RESPONSABILITÉ";
  firstAlert =
    "AVIS DE NON-RESPONSABILITÉ: Ce n'est pas un conseil médical ou nutritionniste et non seulement n'exclut pas une consultation médicale, mais aussi, moi en tant que créateur de code, je vous encourage et vous soutenez à voir votre médecin pour tout ce que VOUS pensez que VOUS devriez améliorer dans VOTRE vie de santé . Paix!";
  document.getElementById("allRights").innerHTML =
    "Tous les droits sont réservés";
}
export function español() {
  language = "español";
  sessionStorage.setItem("language", language);
  languageValue = 4;
  linkTitle.title = "Página de inicio de FitWish";
  buttonFirst.value = "Menú de intentos";
  buttonAbout.value = "Sobre";
  buttonHome.value = "Pagina de Inicio";
  buttonContact.value = "Contacto";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contacto";
  howItWorksId.innerHTML = "Cómo funciona";
  for (let element of listRightNav.children) element.style.fontSize = "2.025vw";
  languageInput.innerHTML = "Idioma:";
  alreadyInPage = "Ya en la pagina";
  pageId.innerHTML = "Paginas:";
  introPageId.innerHTML = "Introducción";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Género / Unidad";
  goalPageId.innerHTML = "Objetivo";
  bodyTypePageId.innerHTML = "Tipo de cuerpo";
  bodyImagePageId.innerHTML = "Evaluación de la grasa corporal";
  xercisePageId.innerHTML = "Evaluación del ejercicio";
  healthyPageId.innerHTML = "Comidas saludables";
  pagesNavId.innerHTML = "Paginas/Secciones(&sect;)";
  dataPageId.innerHTML = "Peso/Altura";
  cheatPageId.innerHTML = "Comidas no saludables";
  mealsPageId.innerHTML = "Comidas / Día";
  emotionPageId.innerHTML = "Comer en exceso basado en las emociones";
  buttonNext.value = "Próximo";
  buttonPrev.value = "Previo";
  document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
  document.getElementById("darkThemeButton").innerHTML =
    "Tema oscuro (predeterminado)";
  document.getElementById("disclaimerId").innerHTML =
    "DESCARGO DE RESPONSABILIDAD";
  firstAlert =
    "DESCARGO DE RESPONSABILIDAD: Este no es un consejo médico ni nutricionista y no solo no excluye una consulta médica, sino que también, como creador de este código, lo animo y lo apoyo para que vea a su médico por cualquier cosa que usted crea que debe mejorar en su vida de salud. . ¡Paz!";
  document.getElementById("allRights").innerHTML =
    "Todos los derechos reservados";
}
export function themeTypeLight() {
  theme = "light";
  leftsidebarButton.style.color = "black";
  rightsidebarButton.style.color = "black";
  document.body.style.cssText = "background-color:white; color:#1F3B4D;";
  document.getElementById("headingObjInputIdHead").style.color = "black";
  for (let button of document.querySelectorAll("#pageBtnsId").children) {
    button.classList.remove("aboutContactBtn");
    button.classList.add("contactAboutBtn");
  }
}
export function themeTypeDark() {
  theme = "dark";
  leftsidebarButton.style.color = "aliceblue";
  rightsidebarButton.style.color = "aliceblue";
  document.body.style.cssText = "background-color:#12232A; color:#1F3B4D;";
  document.getElementById("headingObjInputIdHead").style.color = "aliceblue";
  for (let button of document.querySelectorAll("#pageBtnsId").children) {
    button.classList.add("aboutContactBtn");
    button.classList.remove("contactAboutBtn");
  }
}
function firstPageLogin() {
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
    linkTitlea.href = "javascript:window.location.href = 'intro.html';";
    titleLink.href = "javascript:window.location.href = 'intro.html';";
    pagesNavId.onclick = rightNavInterpreter;
    pagesNavId.onclick();
    rightNavInterpreter();
  }
};
function rightNavInterpreter() {
  if (myRightSidenav.style.width == "250px")
    document.getElementById("myRightSidenav").style.width = "0";
  else document.getElementById("myRightSidenav").style.width = "250px";
}
const inPage = () => alert(alreadyInPage);
const openNav = () =>
  (document.getElementById("myLeftSidenav").style.width = "250px");
const closeNav = () =>
  (document.getElementById("myLeftSidenav").style.width = "0");
const closeRightNav = () =>
  (document.getElementById("myRightSidenav").style.width = "0");
const disclaimer = () => alert(firstAlert);
const hoverColorChangeFunc = (hoveredId) =>
  (document.getElementById(hoveredId).style.backgroundColor = "#2ECC71");

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
