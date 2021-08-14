export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/contact/languages/${language}.js`).then(
    ({ translations }) => {
      idContactH2.style.marginLeft = translations.contactH2MarginLeft;
      idContactH2.innerHTML = translations.contactH2;
      idContactIntro.innerHTML = translations.contactIntro;
      idContactHeading.innerHTML = translations.contactHeading;
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
  idContactHeading.style.color = "#1F3B4D";
  idContactLinkedIn.style.color = "#1F3B4D";
  idContactGmail.style.color = "#1F3B4D";
  idContactH2.style.color = "#1F3B4D";
  idContactIntro.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  idContactHeading.style.color = "azure";
  idContactH2.style.color = "azure";
  idContactIntro.style.color = "azure";
  idContactLinkedIn.style.color = "azure";
  idContactGmail.style.color = "azure";
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
