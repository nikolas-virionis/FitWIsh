var alreadyInPage,
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
export function english() {
  language = "english";
  sessionStorage.setItem("language", language);
  languageValue = 1;
  linkTitle.title = "FitWish Home Page";
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Attempt's Menu";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "About";
  if (document.getElementById("buttonHome")) buttonHome.value = "Home Page";
  if (document.getElementById("buttonContact")) buttonContact.value = "Contact";
  howItWorksId.innerHTML = "How it Works";
  aboutId.innerHTML = "About";
  contactId.innerHTML = "Contact";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children)
      element.style.fontSize = "2.355vw";
  if (document.getElementById("pagesNavId"))
    pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  languageInput.innerHTML = "Language:";
  alreadyInPage = "Already in page";
  if (document.getElementById("pageId")) pageId.innerHTML = "Pages:";
  if (document.getElementById("introPageId"))
    introPageId.innerHTML = "Introduction";
  if (document.getElementById("loginPageId")) loginPageId.innerHTML = "Login";
  if (document.getElementById("genderUnitPageId"))
    genderUnitPageId.innerHTML = "Gender/Unit";
  if (document.getElementById("goalPageId")) goalPageId.innerHTML = "Goal";
  if (document.getElementById("dataPageId"))
    dataPageId.innerHTML = "Weight/Height";
  if (document.getElementById("bodyTypePageId"))
    bodyTypePageId.innerHTML = "Body Type";
  if (document.getElementById("bodyImagePageId"))
    bodyImagePageId.innerHTML = "Body Fat Evaluation";
  if (document.getElementById("xercisePageId"))
    xercisePageId.innerHTML = "Exercise Evaluation";
  if (document.getElementById("healthyPageId"))
    healthyPageId.innerHTML = "Healthy Meals";
  if (document.getElementById("cheatPageId"))
    cheatPageId.innerHTML = "Cheat Meals";
  if (document.getElementById("mealsPageId"))
    mealsPageId.innerHTML = "Meals/Day";
  if (document.getElementById("emotionPageId"))
    emotionPageId.innerHTML = "Emotion-based Overeating";
  if (document.getElementById("buttonNext")) buttonNext.value = "Next";
  if (document.getElementById("buttonPrev")) buttonPrev.value = "Previous";
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
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Menu de Tentativas";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "Sobre";
  if (document.getElementById("buttonHome"))
    buttonHome.value = "Página Inicial";
  if (document.getElementById("buttonContact")) buttonContact.value = "Contato";
  howItWorksId.innerHTML = "Como Funciona";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contato";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children)
      element.style.fontSize = "2.105vw";
  languageInput.innerHTML = "Idioma:";
  alreadyInPage = "Já nessa página";
  if (document.getElementById("pagesNavId"))
    pagesNavId.innerHTML = "Páginas/Seções(&sect;)";
  if (document.getElementById("pageId")) pageId.innerHTML = "Páginas:";
  if (document.getElementById("introPageId"))
    introPageId.innerHTML = "Introdução";
  if (document.getElementById("loginPageId")) loginPageId.innerHTML = "Login";
  if (document.getElementById("genderUnitPageId"))
    genderUnitPageId.innerHTML = "Gênero/Unidade";
  if (document.getElementById("goalPageId")) goalPageId.innerHTML = "Objetivo";
  if (document.getElementById("bodyTypePageId"))
    bodyTypePageId.innerHTML = "Tipo Corporal";
  if (document.getElementById("bodyImagePageId"))
    bodyImagePageId.innerHTML = "Avaliação da Gordura Corporal";
  if (document.getElementById("xercisePageId"))
    xercisePageId.innerHTML = "Avaliação de Exercícios";
  if (document.getElementById("dataPageId"))
    dataPageId.innerHTML = "Peso/Altura";
  if (document.getElementById("healthyPageId"))
    healthyPageId.innerHTML = "Refeições Saudáveis";
  if (document.getElementById("cheatPageId"))
    cheatPageId.innerHTML = "Refeições não Saudáveis";
  if (document.getElementById("mealsPageId"))
    mealsPageId.innerHTML = "Refeições/Dia";
  if (document.getElementById("emotionPageId"))
    emotionPageId.innerHTML = "Comer demais por conta de emoções";
  if (document.getElementById("buttonNext")) buttonNext.value = "Próximo";
  if (document.getElementById("buttonPrev")) buttonPrev.value = "Anterior";
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
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Menu des tentatives";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "À propos";
  if (document.getElementById("buttonHome"))
    buttonHome.value = "Page d'accueil";
  if (document.getElementById("buttonContact")) buttonContact.value = "Contact";
  howItWorksId.innerHTML = "Comment ça fonctionne";
  contactId.innerHTML = "Contact";
  aboutId.innerHTML = "À propos";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children) element.style.fontSize = "2.2vw";
  languageInput.innerHTML = "Langue:";
  alreadyInPage = "Déjà en page";
  if (document.getElementById("pageId")) pageId.innerHTML = "Pages:";
  if (document.getElementById("introPageId"))
    introPageId.innerHTML = "Introduction";
  if (document.getElementById("loginPageId")) loginPageId.innerHTML = "Login";
  if (document.getElementById("genderUnitPageId"))
    genderUnitPageId.innerHTML = "Genre / Unité";
  if (document.getElementById("goalPageId")) goalPageId.innerHTML = "Objectif";
  if (document.getElementById("dataPageId"))
    dataPageId.innerHTML = "Poids/Hauteur";
  if (document.getElementById("bodyTypePageId"))
    bodyTypePageId.innerHTML = "Type de corps";
  if (document.getElementById("bodyImagePageId"))
    bodyImagePageId.innerHTML = "Évaluation de la graisse corporelle";
  if (document.getElementById("pagesNavId"))
    pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  if (document.getElementById("xercisePageId"))
    xercisePageId.innerHTML = "Évaluation de l'exercice";
  if (document.getElementById("healthyPageId"))
    healthyPageId.innerHTML = "Repas sains";
  if (document.getElementById("cheatPageId"))
    cheatPageId.innerHTML = "Repas de triche";
  if (document.getElementById("mealsPageId"))
    mealsPageId.innerHTML = "Repas / jour";
  if (document.getElementById("emotionPageId"))
    emotionPageId.innerHTML = "Suralimentation basée sur les émotions";
  if (document.getElementById("buttonNext")) buttonNext.value = "Suivant";
  if (document.getElementById("buttonPrev")) buttonPrev.value = "Précédent";
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
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Menú de intentos";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "Sobre";
  if (document.getElementById("buttonHome"))
    buttonHome.value = "Pagina de Inicio";
  if (document.getElementById("buttonContact"))
    buttonContact.value = "Contacto";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contacto";
  howItWorksId.innerHTML = "Cómo funciona";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children)
      element.style.fontSize = "2.025vw";
  languageInput.innerHTML = "Idioma:";
  alreadyInPage = "Ya en la pagina";
  if (document.getElementById("pageId")) pageId.innerHTML = "Paginas:";
  if (document.getElementById("introPageId"))
    introPageId.innerHTML = "Introducción";
  if (document.getElementById("loginPageId")) loginPageId.innerHTML = "Login";
  if (document.getElementById("genderUnitPageId"))
    genderUnitPageId.innerHTML = "Género / Unidad";
  if (document.getElementById("goalPageId")) goalPageId.innerHTML = "Objetivo";
  if (document.getElementById("bodyTypePageId"))
    bodyTypePageId.innerHTML = "Tipo de cuerpo";
  if (document.getElementById("bodyImagePageId"))
    bodyImagePageId.innerHTML = "Evaluación de la grasa corporal";
  if (document.getElementById("xercisePageId"))
    xercisePageId.innerHTML = "Evaluación del ejercicio";
  if (document.getElementById("healthyPageId"))
    healthyPageId.innerHTML = "Comidas saludables";
  if (document.getElementById("pagesNavId"))
    pagesNavId.innerHTML = "Paginas/Secciones(&sect;)";
  if (document.getElementById("dataPageId"))
    dataPageId.innerHTML = "Peso/Altura";
  if (document.getElementById("cheatPageId"))
    cheatPageId.innerHTML = "Comidas no saludables";
  if (document.getElementById("mealsPageId"))
    mealsPageId.innerHTML = "Comidas / Día";
  if (document.getElementById("emotionPageId"))
    emotionPageId.innerHTML = "Comer en exceso basado en las emociones";
  if (document.getElementById("buttonNext")) buttonNext.value = "Próximo";
  if (document.getElementById("buttonPrev")) buttonPrev.value = "Previo";
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
  sessionStorage.setItem("theme", theme);
  document.body.style.cssText = "background-color:white; color:#1F3B4D;";
  if (document.getElementById("leftsidebarButton"))
    leftsidebarButton.style.color = "black";
  if (document.getElementById("rightsidebarButton"))
    rightsidebarButton.style.color = "black";
  if (document.getElementById("headingObjInputIdHead"))
    document.getElementById("headingObjInputIdHead").style.color = "black";
  if (document.querySelector("#pageBtnsId")) {
    for (let button of document.querySelector("#pageBtnsId").children) {
      button.classList.remove("aboutContactBtn");
      button.classList.add("contactAboutBtn");
    }
  }
}
export function themeTypeDark() {
  theme = "dark";
  sessionStorage.setItem("theme", theme);
  if (document.getElementById("leftsidebarButton"))
    leftsidebarButton.style.color = "aliceblue";
  if (document.getElementById("rightsidebarButton"))
    rightsidebarButton.style.color = "aliceblue";
  document.body.style.cssText = "background-color:#12232A; color:#1F3B4D;";
  if (document.getElementById("headingObjInputIdHead"))
    document.getElementById("headingObjInputIdHead").style.color = "aliceblue";
  if (document.querySelector("#pageBtnsId"))
    for (let button of document.querySelector("#pageBtnsId").children) {
      button.classList.add("aboutContactBtn");
      button.classList.remove("contactAboutBtn");
    }
}
