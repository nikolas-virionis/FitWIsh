function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  headingObjInputIdCheck.innerHTML =
    "<i>Are you sure you want to seethe results?<h5> The data inputted cannot be changed after this</h5></i>";
  colorChangeIdCheckNo.value = "No";
  colorChangeIdCheckYes.value = "Yes";
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  headingObjInputIdCheck.innerHTML =
    "<i> Tem certeza de que deseja ver os resultados? <h5> Os dados inseridos não podem ser alterados depois disso </h5> </i>";
  colorChangeIdCheckNo.value = "Não";
  colorChangeIdCheckYes.value = "Sim";
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  headingObjInputIdCheck.innerHTML =
    "<i>Êtes-vous sûr de vouloir voir les résultats ?<h5> Les données saisies ne peuvent pas être modifiées après cela</h5></i>";
  colorChangeIdCheckNo.value = "Non";
  colorChangeIdCheckYes.value = "Oui";
}

function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  headingObjInputIdCheck.innerHTML =
    "<i> ¿Está seguro de que desea ver los resultados? <h5> Los datos ingresados no se pueden cambiar después de esto </h5> </i>";
  colorChangeIdCheckNo.value = "No";
  colorChangeIdCheckYes.value = "Sí";
}
function themeTypeLight() {
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
}

window.addEventListener("load", () => {
  window[sessionStorage.getItem("language")]();
  switch (sessionStorage.getItem("theme")) {
    case "light":
      themeTypeLight();
      break;
    default:
      themeTypeDark();
  }
});

for (let button of buttons)
  button.addEventListener(
    "mouseout",
    (e) => (e.target.style.backgroundColor = "teal")
  );
