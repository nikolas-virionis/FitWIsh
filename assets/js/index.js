let { contentArray } = await import("./modules/index/overwriteBtns.js");
import {
  startNewTry,
  overwriteTest2,
  overwriteTest,
  seeAllTests,
} from "./modules/index/previousTestsHandle.js";
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/index/themes/${theme}.js`).then(({ colorSwitch }) => {
    for (let element of document.querySelectorAll(".firstPageH1setItem"))
      element.style.color = colorSwitch.elementsColor;
  });
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
};

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
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/index/languages/${language}.js`).then(
    ({ translations }) => {
      if (contentArray?.length >= 1)
        import("./modules/index/overwriteBtns.js").then(
          ({ numberBtnsOverwrite }) => numberBtnsOverwrite(language)
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
    }
  );
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
        setTheme(e.target.id.slice(0, -11))
      );
    });
  sessionStorage.setItem("first", JSON.stringify(true));
  if (sessionStorage.getItem("language"))
    setLanguage(sessionStorage.getItem("language"));

  setTheme(sessionStorage.getItem("theme"));
  if (
    !contentArray ||
    (contentArray.length == 0 && !sessionStorage.getItem("language"))
  ) {
    getDefLang();
    themeTypeDark();
  } else if (contentArray?.length != 0) {
    import("./modules/index/overwriteBtns.js").then(({ triesMade }) => {
      rearrangeElements(triesMade + 1);
      setTheme(contentArray?.[triesMade - 1].theme);
      if (contentArray?.length == 1) {
        if (contentArray?.[0].language == "português")
          return setLanguage("português");
        if (contentArray?.[0].language == "français")
          return setLanguage("français");
        if (contentArray?.[0].language == "español")
          return setLanguage("español");
      }
      return getDefLang();
    });
  }
});
