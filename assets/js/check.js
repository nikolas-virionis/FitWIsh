export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/check/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdCheck.innerHTML = translations.check;
      colorChangeIdCheckNo.value = translations.no;
      colorChangeIdCheckYes.value = translations.yes;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};

const setTheme = async (theme) => {
  sessionStorage.setItem("theme", theme);
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
};

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
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
});
let { buttons } = await import("./script.js");
for (let button of buttons)
  button.addEventListener(
    "mouseout",
    (e) => (e.target.style.backgroundColor = "teal")
  );

buttons.forEach((button) =>
  button.addEventListener(
    "click",
    (e) =>
      (window.location.href = e.target.id.endsWith("Yes")
        ? "result.html"
        : "emotion.html")
  )
);
