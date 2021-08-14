export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/cheat/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdCheat.innerHTML = translations.cheat;
      colorChangeIdNoneCheat.value = translations.none;
      colorChangeIdLowCheat.value = translations.low;
      colorChangeIdMidCheat.value = translations.mid;
      colorChangeIdHighCheat.value = translations.high;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/cheat/themes/${theme}.js`).then(({ colorSwitch }) => {
    for (let el of document.querySelectorAll(".headingObjInputId"))
      el.style.backgroundColor = colorSwitch.elementsColor;
  });
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
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
  if (getCheat())
    document.getElementById(
      `colorChangeId${
        getCheat() == 1
          ? "None"
          : getCheat() == 2
          ? "Low"
          : getCheat() == 3
          ? "Mid"
          : "High"
      }Cheat`
    ).style.backgroundColor = "#7395AE";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
});

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getCheat() == 1) colorChangeIdNoneCheat.style.backgroundColor = "#7395AE";
  else if (getCheat() == 2)
    colorChangeIdLowCheat.style.backgroundColor = "#7395AE";
  else if (getCheat() == 3)
    colorChangeIdMidCheat.style.backgroundColor = "#7395AE";
  else if (getCheat() == 4)
    colorChangeIdHighCheat.style.backgroundColor = "#7395AE";
}

const setCheat = (cheat) =>
  sessionStorage.setItem("cheat", JSON.stringify(cheat));
const { getCheat } = await import("./modules/global/fieldGetter.js");

let { buttons } = await import("./script.js");
buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    setCheat(
      e.target.id.slice(13, -5) == "None"
        ? 1
        : e.target.id.slice(13, -5) == "Low"
        ? 2
        : e.target.id.slice(13, -5) == "Mid"
        ? 3
        : 4
    )
  );
  button.addEventListener("mouseout", (e) =>
    hoverOutColorChangeFunc(e.target.id)
  );
});
