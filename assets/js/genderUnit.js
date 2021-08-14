let metricSystem, imperialSystem;
export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/genderUnit/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdGender.innerHTML = translations.gender;
      colorChangeIdMale.value = translations.male;
      colorChangeIdFemale.value = translations.female;
      headingObjInputIdUnit.innerHTML = translations.unit;
      colorChangeIdMetric.value = translations.metric;
      colorChangeIdImperial.value = translations.imperial;
      metricSystem = translations.metric;
      imperialSystem = translations.imperial;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/genderUnit/themes/${theme}.js`).then(
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
  if (getGender() == "male")
    colorChangeIdMale.style.backgroundColor = "#7395AE";
  else if (getGender() == "female")
    colorChangeIdFemale.style.backgroundColor = "#7395AE";

  if (getUnit() == "metric")
    colorChangeIdMetric.style.backgroundColor = "#7395AE";
  else if (getUnit() == "imperial")
    colorChangeIdImperial.style.backgroundColor = "#7395AE";
}

//gender
const gender = (gender) => sessionStorage.setItem("gender", gender);
const { getGender } = await import("./modules/global/fieldGetter.js");
// unit system
const unit = (unit) => sessionStorage.setItem("unit", unit);
const { getUnit } = await import("./modules/global/fieldGetter.js");

//hover nano instructions on units used

const metricUnit = () => (colorChangeIdMetric.value += ` (kg / m)`);
const metricUnitCloak = () => (colorChangeIdMetric.value = metricSystem);
const imperialUnit = () => (colorChangeIdImperial.value += ` (lbs / in)`);
const imperialUnitCloak = () => (colorChangeIdImperial.value = imperialSystem);

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
  if (getGender())
    document.getElementById(
      `colorChangeId${
        getGender().charAt(0).toUpperCase() + getGender().slice(1)
      }`
    ).style.backgroundColor = "#7395AE";
  if (getUnit())
    document.getElementById(
      `colorChangeId${getUnit().charAt(0).toUpperCase() + getUnit().slice(1)}`
    ).style.backgroundColor = "#7395AE";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      e.target.id.endsWith("ale") // mALE or femALE
        ? gender(e.target.id.slice(13).toLowerCase())
        : unit(e.target.id.slice(13).toLowerCase())
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
  let btns = getSiblings(document.getElementById("headingObjInputIdUnit"));
  btns.forEach((btn) => {
    btn.addEventListener("mouseover", (e) => {
      eval(`${e.target.id.slice(13).toLowerCase()}Unit`)();
    });
    btn.addEventListener("mouseout", (e) =>
      eval(`${e.target.id.slice(13).toLowerCase()}UnitCloak`)()
    );
  });
});
