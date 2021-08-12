// let contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [];
let { contentArray } = await import("./modules/index/iniciateIndexLang.js");
// import { contentArray } from "./modules/index/iniciateIndexLang.js";
import {
  startNewTry,
  overwriteTest2,
  overwriteTest,
  seeAllTests,
} from "./modules/index/previousTestsHandle.js";

export function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  if (contentArray?.length >= 1)
    import("./modules/index/overwriteBtns.js").then(
      ({ numberBtnsOverwriteEn }) => numberBtnsOverwriteEn()
    );
  firstPageBtnSeePrev.innerHTML = "Hide Previous Test";
  firstPageH1.innerHTML =
    "We are glad you gave us a chance to help you achieve the body of your dreams, press start to continue";
  if (contentArray?.length > 0)
    firstPageH12nd.innerHTML = `We detected that you have already tried our test once as ${contentArray[0].inputName}, made in ${contentArray[0].day}. Choose what you would like to do below`;
  firstPageBtnStart.value = `Start`;
  firstPageBtnDifferent.value = `Do a Different Test`;
  firstPageBtnOverwrite.value = `Overwrite one Previous Test`;
  firstPageBtnDelete.value = `Delete All Previous Tests Made`;
  firstPageBtnSeeAll.value = `See All Previous Tests`;
  firstPageBtnSeePrev.value = `See the Previous Test Result`;
  firstPageBtnHideAll.value = `Hide All Previous Tests`;
}
export function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  if (contentArray.length >= 1)
    import("./modules/index/overwriteBtns.js").then(
      ({ numberBtnsOverwritePt }) => numberBtnsOverwritePt()
    );
  firstPageBtnSeePrev.innerHTML = "Ocultar Teste Anterior";
  firstPageH1.innerHTML =
    "Estamos felizes por você ter nos dado a chance de ajudá-lo a alcançar o corpo dos seus sonhos, pressione iniciar para continuar";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `Detectamos que você já tentou nosso teste uma vez como ${contentArray[0].inputName}, feito em ${contentArray[0].day}. Escolha o que você gostaria de fazer abaixo`;
  firstPageBtnStart.value = `Iniciar`;
  firstPageBtnDifferent.value = `Fazer um novo Teste`;
  firstPageBtnOverwrite.value = `Sobrescrever um Teste Anterior`;
  firstPageBtnDelete.value = `Deletar Todos os Testes Feitos Anteriormente`;
  firstPageBtnSeeAll.value = `Ver Todos os Testes Anteriores`;
  firstPageBtnSeePrev.value = `Ver o Resultado do Teste Anterior`;
  firstPageBtnHideAll.value = `Ocultar Testes Anteriores`;
}
export function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  if (contentArray.length >= 1)
    import("./modules/index/overwriteBtns.js").then(
      ({ numberBtnsOverwriteFr }) => numberBtnsOverwriteFr()
    );
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
export function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  if (contentArray.length >= 1)
    import("./modules/index/overwriteBtns.js").then(
      ({ numberBtnsOverwriteEs }) => numberBtnsOverwriteEs()
    );
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
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let element of document.querySelectorAll(".firstPageH1setItem"))
    element.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let element of document.querySelectorAll(".firstPageH1setItem"))
    element.style.color = "azure";
}

[
  document.getElementById("firstPageBtn1stTry"),
  document.getElementById("firstPageBtn2ndTry"),
].forEach((element) =>
  element.addEventListener("click", (e) =>
    import("./modules/index/previousTestsHandle.js").then(
      ({ showPrevTestResult }) => showPrevTestResult(Number(e.target.id[12]))
    )
  )
);
[
  document.getElementById("firstPageBtn1stTryOverwrite"),
  document.getElementById("firstPageBtn2ndTryOverwrite"),
].forEach((element) =>
  element.addEventListener("click", (e) =>
    overwriteTest2(Number(e.target.id[12]))
  )
);
[
  document.getElementById("firstPageBtnStart"),
  document.getElementById("firstPageBtnDifferent"),
].forEach((element) =>
  element.addEventListener("click", (e) =>
    startNewTry(e.target.id.endsWith("Start") ? 1 : 2)
  )
);
[
  document.getElementById("firstPageBtnSeePrev"),
  document.getElementById("firstPageBtnSeeAll"),
].forEach((element) =>
  element.addEventListener("click", (e) =>
    import("./modules/index/previousTestsHandle.js").then(
      ({ seePrevTests, seeAllTests }) =>
        eval(`see${e.target.id.slice(15)}Tests`)()
    )
  )
);
[
  document.getElementById("firstPageBtnHidePrev"),
  document.getElementById("firstPageBtnHideAll"),
].forEach((element) =>
  element.addEventListener("click", (e) =>
    import("./modules/index/previousTestsHandle.js").then(
      ({ hidePrevTests, hideAllTests }) =>
        eval(`hide${e.target.id.slice(16)}Tests`)()
    )
  )
);
firstPageBtnOverwrite.addEventListener("click", () => overwriteTest());
firstPageBtnDelete.addEventListener("click", () =>
  import("./modules/index/previousTestsHandle.js").then(({ deleteTests }) =>
    deleteTests()
  )
);

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
  if (document.querySelectorAll(".nationBtns")) {
    let nations = ["english", "português", "français", "español"];
    document
      .querySelectorAll(".nationBtns")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          setLanguage(
            nations[
              [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
            ]
          )()
        )
      );
  }

  const setTranslations = async (language) => {
    let file =
      window.location.pathname.split("/").pop().slice(0, -5) ?? "index";
    await import("./script.js").then(({ globalTranslations }) =>
      globalTranslations(language)
    );
    await import(`./modules/${file}/languages/${language}.js`)
      .catch(() => import(`./modules/index/languages/${language}.js`))
      .then(({ translations }) => {});
  };

  if (document.querySelectorAll(".listnav"))
    document.querySelectorAll(".listnav").forEach((element) => {
      element.addEventListener("click", (e) =>
        eval(
          `themeType${
            e.target.id.slice(0, -11).charAt(0).toUpperCase() +
            e.target.id.slice(1, -11)
          }`
        )()
      );
    });
  sessionStorage.setItem("first", JSON.stringify(true));
  eval(sessionStorage.getItem("language"))?.();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  if (
    !contentArray ||
    (contentArray.length == 0 && !sessionStorage.getItem("language"))
  ) {
    getDefLang();
    themeTypeDark();
  } else if (contentArray?.length != 0) {
    import("./modules/index/iniciateIndexLang.js").then(({ triesMade }) => {
      rearrangeElements(triesMade + 1);
      if (contentArray?.[triesMade - 1].theme == "light") themeTypeLight();
      else themeTypeDark();
      if (contentArray?.length == 1) {
        if (contentArray?.[0].language == "português") return português();
        if (contentArray?.[0].language == "français") return français();
        if (contentArray?.[0].language == "español") return español();
        return getDefLang();
      }
      initiateLanguage();
    });
  }
});

const initiateLanguage = () =>
  import("./modules/index/iniciateIndexLang.js").then(
    ({
      iniciateEnglish,
      iniciatePortuguês,
      iniciateFrançais,
      iniciateEspañol,
    }) =>
      contentArray?.[1].language == "português" || getBrowserLang() == "pt"
        ? iniciatePortuguês()
        : contentArray?.[1].language == "français" || getBrowserLang() == "fr"
        ? iniciateFrançais()
        : contentArray?.[1].language == "español" || getBrowserLang() == "es"
        ? iniciateEspañol()
        : iniciateEnglish()
  );
