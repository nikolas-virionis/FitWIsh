// let contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [];
let { contentArray } = await import("./modules/index/iniciateIndexLang.js");
// import { contentArray } from "./modules/index/iniciateIndexLang.js";
import {
  startNewTry,
  overwriteTest2,
  overwriteTest,
  seeAllTests,
} from "./modules/index/previousTestsHandle.js";

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

export const setTranslations = async (language) => {
  let file = window.location.pathname.split("/").pop().slice(0, -5) || "index";
  await import("./script.js").then(({ globalTranslations }) =>
    globalTranslations(language)
  );
  await import(`./modules/${file}/languages/${language}.js`)
    .catch(() => import(`./modules/index/languages/${language}.js`))
    .then(({ translations }) => {
      if (contentArray?.length >= 1)
        import("./modules/index/overwriteBtns.js").then(
          ({
            numberBtnsOverwriteEn,
            numberBtnsOverwritePo,
            numberBtnsOverwriteFr,
            numberBtnsOverwriteEs,
          }) =>
            eval(
              `numberBtnsOverwrite${language[0].toUpperCase() + language[1]}`
            )()
        );
      firstPageBtnSeePrev.innerHTML = translations.HidePrevious;
      firstPageH1.innerHTML = translations.firstH1;
      if (contentArray?.length > 0)
        firstPageH12nd.innerHTML = translations.secondTryH1;
      firstPageBtnStart.value = translations.start;
      firstPageBtnDifferent.value = translations.different;
      firstPageBtnOverwrite.value = translations.overwrite;
      firstPageBtnDelete.value = translations.deleteAll;
      firstPageBtnSeeAll.value = translations.seeAll;
      firstPageBtnSeePrev.value = translations.seePrev;
      firstPageBtnHideAll.value = translations.hideAll;
    });
};

const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};

const getBrowserLang = () => navigator.language.slice(0, 2);
function getDefLang() {
  switch (getBrowserLang()) {
    case "pt":
      return setLanguage("português");
    case "fr":
      return setLanguage("français");
    case "es":
      return setLanguage("español");
  }
  return setLanguage("english");
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
          )
        )
      );
  }

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
  // eval(sessionStorage.getItem("language"))?.();
  if (sessionStorage.getItem("language"))
    setLanguage(sessionStorage.getItem("language"));

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
        if (contentArray?.[0].language == "português")
          return setLanguage("português");
        if (contentArray?.[0].language == "français")
          return setLanguage("français");
        if (contentArray?.[0].language == "español")
          return setLanguage("español");
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
