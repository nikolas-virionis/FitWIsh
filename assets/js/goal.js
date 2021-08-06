function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdGoal").innerHTML = "Goal";
  document.getElementById("colorChangeIdBulk").value = "Bulking";
  document.getElementById("colorChangeIdCut").value = "Cutting";
  document.getElementById("colorChangeIdSurp").value = "Get rid of fat surplus";
  document.getElementById("colorChangeIdMuscle").value =
    "Gaining Weight and Muscle";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objetivo";
  document.getElementById("colorChangeIdBulk").value = "Ganhar Massa";
  document.getElementById("colorChangeIdCut").value = "Secar";
  document.getElementById("colorChangeIdSurp").value = "Emagrecer";
  document.getElementById("colorChangeIdMuscle").value = "Ganhar peso";
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objectif";
  document.getElementById("colorChangeIdBulk").value = "Gagner du muscle";
  document.getElementById("colorChangeIdCut").value = "Obtenez déchiqueté";
  document.getElementById("colorChangeIdSurp").value = "Perdre du poids";
  document.getElementById("colorChangeIdMuscle").value = "Gagner de poids";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objetivo";
  document.getElementById("colorChangeIdBulk").value = "Ganar músculo";
  document.getElementById("colorChangeIdCut").value = "Hacerse Rasgado";
  document.getElementById("colorChangeIdSurp").value = "Perder peso";
  document.getElementById("colorChangeIdMuscle").value = "Ganar peso";
}
function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#9DBCD4";
}

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getGoal() == "bulking")
    colorChangeIdBulk.style.backgroundColor = "#7395AE";
  else if (getGoal() == "cutting")
    colorChangeIdCut.style.backgroundColor = "#7395AE";
  else if (getGoal() == "surplus")
    colorChangeIdSurp.style.backgroundColor = "#7395AE";
  else if (getGoal() == "muscle")
    colorChangeIdMuscle.style.backgroundColor = "#7395AE";
}

import { getGoal } from "./modules/global/fieldGetter.js";
const goal = (goal) => sessionStorage.setItem("goal", goal);

window.addEventListener("load", () => {
  if (document.querySelectorAll(".nationBtns")) {
    let nations = ["english", "português", "français", "español"];
    document
      .querySelectorAll(".nationBtns")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          eval(
            nations[
              [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
            ]
          )()
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
  if (getGoal())
    document.getElementById(
      `colorChangeId${
        getGoal() == "bulking"
          ? "Bulk"
          : getGoal() == "cutting"
          ? "Cut"
          : getGoal() == "surplus"
          ? "Surp"
          : "Muscle"
      }`
    ).style.backgroundColor = "#7395AE";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      goal(
        e.target.id.endsWith("Bulk")
          ? "bulking"
          : e.target.id.endsWith("Cut")
          ? "cutting"
          : e.target.id.endsWith("Surp")
          ? "surplus"
          : "muscle"
      )
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});
