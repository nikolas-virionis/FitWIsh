let contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [],
  triesMade;

function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  if (contentArray.length >= 1) numberBtnsOverwriteEn();
  firstPageBtnSeePrev.innerHTML = "Hide Previous Test";
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
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  if (contentArray.length >= 1) numberBtnsOverwritePt();
  firstPageBtnSeePrev.innerHTML = "Ocultar Teste Anterior";
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
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  if (contentArray.length >= 1) numberBtnsOverwriteFr();
  firstPageBtnSeePrev.innerHTML = "Masquer le test précédent";
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
}
function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  if (contentArray.length >= 1) numberBtnsOverwriteEs();
  firstPageBtnSeePrev.innerHTML = "Ocultar Prueba Anterior";
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
}
function themeTypeLight() {
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  firstPageH1.style.color = "#1F3B4D";
  firstPageH12nd.style.color = "#1F3B4D";
  firstPageH13rd.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  firstPageH1.style.color = "azure";
  firstPageH12nd.style.color = "azure";
  firstPageH13rd.style.color = "azure";
}

function iniciateEnglish() {
  english();
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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
}

function iniciatePortuguês() {
  português();
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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
}
function iniciateFrançais() {
  français();
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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
}

function iniciateEspañol() {
  español();
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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

function rearrangeElements(tries) {
  firstPageH1.style.display = "none";
  firstPageBtnStart.style.display = "none";
  firstPageBtnOverwrite.style.display = "block";
  firstPageBtnDelete.style.display = "block";
  firstPageH12nd.style.display = tries == 2 ? "block" : "none";
  firstPageH13rd.style.display = tries == 2 ? "none" : "block";
  firstPageBtnDifferent.style.display = tries == 2 ? "block" : "none";
  firstPageBtnSeePrev.style.display = tries == 2 ? "block" : "none";
  firstPageBtnSeeAll.style.display = tries == 2 ? "none" : "block";
}

const getBrowserLang = () => navigator.language.slice(0, 2);
function getDefLang() {
  switch (getBrowserLang()) {
    case "pt":
      return português();
    case "fr":
      return français();
    case "es":
      return español();
  }
  return english();
}
window.addEventListener("load", () => {
  if (sessionStorage.getItem("language"))
    window[sessionStorage.getItem("language")]();
  switch (sessionStorage.getItem("theme")) {
    case "light":
      themeTypeLight();
      break;
    default:
      themeTypeDark();
  }
  if (contentArray.length == 0 && !sessionStorage.getItem("language")) {
    getDefLang();
    themeTypeDark();
  } else if (contentArray.length != 0) {
    triesMade = contentArray.length;
    rearrangeElements(triesMade + 1);
    if (contentArray[triesMade - 1].theme == "light") themeTypeLight();
    else themeTypeDark();
    if (contentArray.length == 1) {
      if (contentArray[0].language == "português") português();
      else if (contentArray[0].language == "français") français();
      else if (contentArray[0].language == "español") español();
      else getDefLang();
    } else {
      if (contentArray[1].language == "português" || getBrowserLang() == "pt")
        return iniciatePortuguês();
      if (contentArray[1].language == "français" || getBrowserLang() == "fr")
        return iniciateFrançais();
      if (contentArray[1].language == "español" || getBrowserLang() == "es")
        return iniciateEspañol();
      return iniciateEnglish();
    }
  }
});

function numberBtnsOverwriteEn() {
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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
}
function numberBtnsOverwritePt() {
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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
}
function numberBtnsOverwriteFr() {
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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
}
function numberBtnsOverwriteEs() {
  if (
    !(
      contentArray[0].inputName.toLowerCase() ==
      contentArray[1].inputName.toLowerCase()
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
const showPrevTestResult = (resultTry) => {
  sessionStorage.setItem("resultTry", resultTry);
  window.location.href = "previousResult.html";
};

const startNewTry = (tryN) => {
  sessionStorage.setItem("tryNumber", JSON.stringify(tryN));
  window.location.href = "intro.html";
};
const overwriteTest2 = (testToBeOverwritten) => {
  let confirmOverwrite;
  if (language == "english")
    confirmOverwrite = confirm(
      `Are you sure you want to overwrite the test made as ${
        contentArray[testToBeOverwritten - 1].inputName
      }? It will be forever destroyed.`
    );
  else if (language == "português")
    confirmOverwrite = confirm(
      `Tem certeza que deseja sobrescrever o teste feito por ${
        contentArray[testToBeOverwritten - 1].inputName
      }? Esse teste será destruido para sempre.`
    );
  else if (language == "français")
    confirmOverwrite = confirm(
      `Voulez-vous vraiment remplacer le test effectué comme ${
        contentArray[testToBeOverwritten - 1].inputName
      }? Il sera détruit à jamais.`
    );
  else if (language == "español")
    confirmOverwrite = confirm(
      `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${
        contentArray[testToBeOverwritten - 1].inputName
      }? Será destruido para siempre.`
    );
  if (confirmOverwrite) {
    testToBeOverwritten == 1 ? contentArray.shift() : contentArray.pop();
    localStorage.setItem("contentArray", JSON.stringify(contentArray));
    startNewTry(testToBeOverwritten);
  }
};
function overwriteTest() {
  if (triesMade == 1) overwriteTest2(1);
  else if (triesMade == 2) {
    seeAllTests();
    firstPageBtn1stTryOverwrite.style.display = "block";
    firstPageBtn2ndTryOverwrite.style.display = "block";
  }
}
function deleteTests() {
  let deletePrevTests;
  if (language == "english")
    deletePrevTests = confirm("Are you sure you want to delete all the tests?");
  else if (language == "português")
    deletePrevTests = confirm(
      "Tem certeza que deseja deletar todos os testes?"
    );
  else if (language == "français")
    deletePrevTests = confirm("Voulez-vous vraiment supprimer tous les tests?");
  else if (language == "español")
    deletePrevTests = confirm(
      "¿Estás seguro de que quieres eliminar todas las pruebas?"
    );
  if (deletePrevTests) {
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
