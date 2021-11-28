export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/healthy/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdHealthy.innerHTML = translations.healthy;
      colorChangeIdNoneHealthy.value = translations.none;
      colorChangeIdLowHealthy.value = translations.low;
      colorChangeIdMidHealthy.value = translations.mid;
      colorChangeIdHighHealthy.value = translations.high;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/healthy/themes/${theme}.js`).then(
    ({ colorSwitch }) => {
      for (let el of document.querySelectorAll(".headingObjInputId"))
        el.style.backgroundColor = colorSwitch.elementsColor;
    }
  );
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
};

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getHealthy() == 1)
    colorChangeIdNoneHealthy.style.backgroundColor = "#7395AE";
  else if (getHealthy() == 2)
    colorChangeIdLowHealthy.style.backgroundColor = "#7395AE";
  else if (getHealthy() == 3)
    colorChangeIdMidHealthy.style.backgroundColor = "#7395AE";
  else if (getHealthy() == 4)
    colorChangeIdHighHealthy.style.backgroundColor = "#7395AE";
}

const { getHealthy } = await import("./modules/global/fieldGetter.js");
const setHealthy = (healthy) =>
  sessionStorage.setItem("healthy", JSON.stringify(healthy));

window.addEventListener("load", async () => {
  let { buttons } = await import("./script.js");
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
  if (getHealthy())
    document.getElementById(
      `colorChangeId${
        getHealthy() == 1
          ? "None"
          : getHealthy() == 2
          ? "Low"
          : getHealthy() == 3
          ? "Mid"
          : "High"
      }Healthy`
    ).style.backgroundColor = "#7395AE";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      setHealthy(
        e.target.id.slice(13, -7) == "None"
          ? 1
          : e.target.id.slice(13, -7) == "Low"
          ? 2
          : e.target.id.slice(13, -7) == "Mid"
          ? 3
          : 4
      )
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});
