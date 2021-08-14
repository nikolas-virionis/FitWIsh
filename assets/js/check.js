export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/check/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdCheck.innerHTML =
        "<i>Are you sure you want to seethe results?<h5> The data inputted cannot be changed after this</h5></i>";
      colorChangeIdCheckNo.value = "No";
      colorChangeIdCheckYes.value = "Yes";
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};

// const setTheme = (theme) => {
//   sessionStorage.setItem("theme", theme);
//   colorSwitch(theme);
// };

function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
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
});

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
