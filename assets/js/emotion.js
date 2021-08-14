export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/emotion/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdEmotion.innerHTML = translations.emotion;
      colorChangeIdEmoYes.value = translations.yes;
      colorChangeIdEmoNo.value = translations.no;
      buttonResult.value = translations.result;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/emotion/themes/${theme}.js`).then(
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
  if (getEmotion() == "yes")
    colorChangeIdEmoYes.style.backgroundColor = "#7395AE";
  else if (getEmotion() == "no")
    colorChangeIdEmoNo.style.backgroundColor = "#7395AE";
}

// emotional overeating
const { getEmotion } = await import("./modules/global/fieldGetter.js");
const emotion = (emotion) => sessionStorage.setItem("emotion", emotion);

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
  if (getEmotion())
    document.getElementById(
      `colorChangeIdEmo${
        getEmotion().charAt(0).toUpperCase() + getEmotion().slice(1)
      }`
    ).style.backgroundColor = "#7395AE";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      emotion(e.target.id.slice(16).toLowerCase())
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});

buttonResult.addEventListener("click", () =>
  import("./modules/emotion/checkAnswers.js").then(({ checkAllAnswers }) =>
    checkAllAnswers()
  )
);
