function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  if (contentArray.length == 2) numberBtnsOverwriteEn();
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
function portugûes() {
  import("./script").then(({ portugûes: defaultPortugûes }) =>
    defaultPortugûes()
  );
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function themeTypeDark() {}
function themeTypeLight() {}

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
  } else if (
    contentArray[1].language == "português" ||
    (navigator.language[0] == "p" && navigator.language[1] == "t")
  ) {
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
  if (contentArray[1].theme == "dark" || contentArray[1].theme == null)
    themeTypeDark();
  else if (contentArray[1].theme == "light") themeTypeLight();
}

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
