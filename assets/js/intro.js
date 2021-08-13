let { contentArray } = await import("./modules/index/overwriteBtns.js");
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
          ({ numberBtnsOverwrite }) => numberBtnsOverwrite(language)
        );
      let introTxt = document.querySelectorAll(".planTxt");
      for (let element of introTxt)
        element.style.fontSize = translations.planTxtFontSize;
      planId.style.marginLeft = translations.planMarginLeft;
      planId.style.marginRight = translations.planMarginRight;
      planId.innerHTML = translations.plan;
      checkImgId.style.marginLeft = translations.checkImgMarginLeft;
      idBadHabits.innerHTML = translations.BadHabits;
      idPlanMsg.innerHTML = translations.PlanMsg;
      idGoodHabits.innerHTML = translations.GoodHabits;
    });
};

const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};

function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  planId.style.color = "blue";
  idBadHabits.style.color = "red";
  idPlanMsg.style.color = "blue";
  idGoodHabits.style.color = "darkgreen";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  planId.style.color = "cyan";
  idBadHabits.style.color = "white";
  idPlanMsg.style.color = "cyan";
  idGoodHabits.style.color = "gold";
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
