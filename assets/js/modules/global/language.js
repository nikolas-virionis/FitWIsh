export function english() {
  language = "english";
  sessionStorage.setItem("language", language);
  linkTitle.title = "FitWish Home Page";
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Attempt's Menu";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "About";
  if (document.getElementById("buttonHome")) buttonHome.value = "Home Page";
  if (document.getElementById("buttonContact")) buttonContact.value = "Contact";
  if (document.getElementById("howItWorksId"))
    howItWorksId.innerHTML = "How it Works";
  if (document.getElementById("aboutId")) aboutId.innerHTML = "About";
  if (document.getElementById("contactId")) contactId.innerHTML = "Contact";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children)
      element.style.fontSize = "2.355vw";
  if (document.getElementById("languageInput"))
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
  if (document.getElementById("imagePageId"))
    imagePageId.innerHTML = "Body Fat Evaluation";
  if (document.getElementById("exercisePageId"))
    exercisePageId.innerHTML = "Exercise Evaluation";
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
  if (window.location.pathname.split("/").pop().slice(0, -5) != "result") {
    document.getElementById("lightThemeButton").innerHTML = "Light Theme";
    document.getElementById("darkThemeButton").innerHTML =
      "Dark Theme (default)";
    document.getElementById("disclaimerId").innerHTML = "DISCLAIMER";
    firstAlert =
      "DISCLAIMER: This is not a medical nor nutritionist advice and not only does not exclude a medical consultation, but also, me as this code creator, encourage and support YOU to get to see your doctor for anything YOU think YOU should improve in YOUR health life. Peace!";
  }
  document.getElementById("allRights").innerHTML = "All Rights Reserved";
}
export function português() {
  language = "português";
  sessionStorage.setItem("language", language);
  linkTitle.title = "Página inicial do FitWish";
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Menu de Tentativas";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "Sobre";
  if (document.getElementById("buttonHome"))
    buttonHome.value = "Página Inicial";
  if (document.getElementById("buttonContact")) buttonContact.value = "Contato";
  if (document.getElementById("howItWorksId"))
    howItWorksId.innerHTML = "Como Funciona";
  if (document.getElementById("aboutId")) aboutId.innerHTML = "Sobre";
  if (document.getElementById("contactId")) contactId.innerHTML = "Contato";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children)
      element.style.fontSize = "2.105vw";
  if (document.getElementById("languageInput"))
    languageInput.innerHTML = "Idioma:";
  alreadyInPage = "Já nessa página";
  if (document.getElementById("pageId")) pageId.innerHTML = "Páginas:";
  if (document.getElementById("introPageId"))
    introPageId.innerHTML = "Introdução";
  if (document.getElementById("loginPageId")) loginPageId.innerHTML = "Login";
  if (document.getElementById("genderUnitPageId"))
    genderUnitPageId.innerHTML = "Gênero/Unidade";
  if (document.getElementById("goalPageId")) goalPageId.innerHTML = "Objetivo";
  if (document.getElementById("bodyTypePageId"))
    bodyTypePageId.innerHTML = "Tipo Corporal";
  if (document.getElementById("imagePageId"))
    imagePageId.innerHTML = "Avaliação da Gordura Corporal";
  if (document.getElementById("exercisePageId"))
    exercisePageId.innerHTML = "Avaliação de Exercícios";
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
  if (window.location.pathname.split("/").pop().slice(0, -5) != "result") {
    document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
    document.getElementById("darkThemeButton").innerHTML =
      "Tema Escuro (padrão)";
    document.getElementById("disclaimerId").innerHTML = "AVISO LEGAL";
    firstAlert =
      "AVISO LEGAL: Este não é um conselho médico ou nutricionista e não só não exclui uma consulta médica, como também, eu, como criador deste código, encorajo e apoio VOCÊ a procurar seu médico para qualquer coisa que você acha que deveria melhorar em sua vida saudável.";
  }
  document.getElementById("allRights").innerHTML = "Todos direitos reservados";
}
export function français() {
  language = "français";
  sessionStorage.setItem("language", language);
  linkTitle.title = "Page d'accueil FitWish";
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Menu des tentatives";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "À propos";
  if (document.getElementById("buttonHome"))
    buttonHome.value = "Page d'accueil";
  if (document.getElementById("buttonContact")) buttonContact.value = "Contact";
  if (document.getElementById("howItWorksId"))
    howItWorksId.innerHTML = "Comment ça fonctionne";
  if (document.getElementById("contactId")) contactId.innerHTML = "Contact";
  if (document.getElementById("aboutId")) aboutId.innerHTML = "À propos";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children) element.style.fontSize = "2.2vw";
  if (document.getElementById("languageInput"))
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
  if (document.getElementById("imagePageId"))
    imagePageId.innerHTML = "Évaluation de la graisse corporelle";
  if (document.getElementById("exercisePageId"))
    exercisePageId.innerHTML = "Évaluation de l'exercice";
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
  if (window.location.pathname.split("/").pop().slice(0, -5) != "result") {
    document.getElementById("lightThemeButton").innerHTML = "Thème léger";
    document.getElementById("darkThemeButton").innerHTML =
      "Thème sombre (par défaut)";
    document.getElementById("disclaimerId").innerHTML =
      "AVIS DE NON-RESPONSABILITÉ";
    firstAlert =
      "AVIS DE NON-RESPONSABILITÉ: Ce n'est pas un conseil médical ou nutritionniste et non seulement n'exclut pas une consultation médicale, mais aussi, moi en tant que créateur de code, je vous encourage et vous soutenez à voir votre médecin pour tout ce que VOUS pensez que VOUS devriez améliorer dans VOTRE vie de santé . Paix!";
  }
  document.getElementById("allRights").innerHTML =
    "Tous les droits sont réservés";
}
export function español() {
  language = "español";
  sessionStorage.setItem("language", language);
  linkTitle.title = "Página de inicio de FitWish";
  if (document.getElementById("buttonFirst"))
    buttonFirst.value = "Menú de intentos";
  if (document.getElementById("buttonAbout")) buttonAbout.value = "Sobre";
  if (document.getElementById("buttonHome"))
    buttonHome.value = "Pagina de Inicio";
  if (document.getElementById("buttonContact"))
    buttonContact.value = "Contacto";
  if (document.getElementById("aboutId")) aboutId.innerHTML = "Sobre";
  if (document.getElementById("contactId")) contactId.innerHTML = "Contacto";
  if (document.getElementById("howItWorksId"))
    howItWorksId.innerHTML = "Cómo funciona";
  if (
    document.getElementById("listRightNav") &&
    window.location.pathname.split("/").pop() != "index.html"
  )
    for (let element of listRightNav.children)
      element.style.fontSize = "2.025vw";
  if (document.getElementById("languageInput"))
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
  if (document.getElementById("imagePageId"))
    imagePageId.innerHTML = "Evaluación de la grasa corporal";
  if (document.getElementById("exercisePageId"))
    exercisePageId.innerHTML = "Evaluación del ejercicio";
  if (document.getElementById("healthyPageId"))
    healthyPageId.innerHTML = "Comidas saludables";
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
  if (window.location.pathname.split("/").pop().slice(0, -5) != "result") {
    document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
    document.getElementById("darkThemeButton").innerHTML =
      "Tema oscuro (predeterminado)";
    document.getElementById("disclaimerId").innerHTML =
      "DESCARGO DE RESPONSABILIDAD";
    firstAlert =
      "DESCARGO DE RESPONSABILIDAD: Este no es un consejo médico ni nutricionista y no solo no excluye una consulta médica, sino que también, como creador de este código, lo animo y lo apoyo para que vea a su médico por cualquier cosa que usted crea que debe mejorar en su vida de salud. . ¡Paz!";
  }
  document.getElementById("allRights").innerHTML =
    "Todos los derechos reservados";
}
