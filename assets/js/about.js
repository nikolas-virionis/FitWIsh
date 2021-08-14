export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/about/languages/${language}.js`).then(
    ({ translations }) => {
      idAboutTxtLeft.style.fontSize = translations.aboutTxtLeftFontSize;
      idAboutH2.style.marginLeft = translations.aboutH2MarginLeft;
      idAboutH2.innerHTML = translations.aboutH2;
      idAboutTxtLeft.innerHTML = translations.aboutTxtLeft;
      idAboutHeading.innerHTML = translations.aboutHeading;
      idAboutTxtRight.innerHTML = translations.aboutTxtRight;
    }
  );
};

const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};

function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  idAboutHeading.style.color = "#1F3B4D";
  idAboutH2.style.color = "#1F3B4D";
  idAboutTxtRight.style.color = "#1F3B4D";
  idAboutTxtLeft.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  idAboutHeading.style.color = "azure";
  idAboutH2.style.color = "azure";
  idAboutTxtRight.style.color = "azure";
  idAboutTxtLeft.style.color = "azure";
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
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  setLanguage(sessionStorage.getItem("language"));
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  if (!localStorage.getItem("contentArray")) buttonFirst.style.display = "none";
});
