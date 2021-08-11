function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "40%";
  idAboutH2.innerHTML = "Who are we?";
  idAboutTxtLeft.innerHTML =
    "Well, we are FitWish, a new startup with the goal to, as our Name says, fulfill your wish in the fitness sector, we don't charge for your first diagnosis because we believe that wellness shouldn't have more hurdles than it already does. Therefore by committing to this quick quiz you will have a sort of guidance towards achieving your goal in this fitness field.";
  idAboutTxtRight.innerHTML =
    "We at FitWish acknowledge the effort put into getting your body the way you want it to be, and because of that, we appreciate your valuable decision to stand your ground and act upon what you should, your health.";
  idAboutHeading.innerHTML = "About";
}

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
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  if (!localStorage.getItem("contentArray")) buttonFirst.style.display = "none";
});

function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "37%";
  idAboutH2.innerHTML = "Quem somos nós?";
  idAboutTxtLeft.innerHTML =
    "Pois bem, somos a FitWish, uma nova startup com o objetivo de, como nosso nome diz, cumprir o seu desejo no setor fitness Não cobramos pelo seu primeiro diagnóstico porque acreditamos que o bem-estar não deve ter mais obstáculos do que já tem. Portanto, ao se comprometer com este teste rápido, você terá uma espécie de orientação para atingir seu objetivo neste campo fitness.";
  idAboutTxtRight.innerHTML =
    "Nós da FitWish reconhecemos o esforço feito para deixar seu corpo do jeito que você deseja e, por isso, apreciamos sua valiosa decisão de defender sua posição e agir de acordo com o que você deve, sua saúde.";
  idAboutHeading.innerHTML = "Sobre";
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  idAboutTxtLeft.style.fontSize = "0.9em";
  idAboutH2.style.marginLeft = "38.75%";
  idAboutH2.innerHTML = "Qui sommes nous?";
  idAboutTxtLeft.innerHTML =
    "Eh bien, nous sommes FitWish, une nouvelle startup avec pour objectif, comme notre nom l'indique, de réaliser votre souhait dans le secteur du fitness, nous ne facturons pas votre premier diagnostic car nous pensons que le bien-être ne devrait pas avoir plus d'obstacles qu'il ne le fait déjà. Est-ce que. Par conséquent, en vous engageant à ce quiz rapide, vous aurez une sorte de conseils pour atteindre votre objectif dans ce domaine du fitness.";
  idAboutHeading.innerHTML = "À propos";
  idAboutTxtRight.innerHTML =
    "Chez FitWish, nous reconnaissons l'effort déployé pour que votre corps soit tel que vous le souhaitez, et pour cette raison, nous apprécions votre précieuse décision de défendre votre position et d'agir en fonction de ce que vous devriez, votre santé.";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "33.5%";
  idAboutH2.innerHTML = "Quienes somos nosotros?";
  idAboutTxtLeft.innerHTML =
    "Bueno, somos FitWish, una nueva startup con el objetivo de, como dice nuestro Nombre, cumplir tu deseo en el sector del fitness, no cobramos por tu primer diagnóstico porque creemos que el bienestar no debería tener más obstáculos de los que ya tiene. hace. Por lo tanto, al comprometerse con este cuestionario rápido, tendrá una especie de guía para lograr su objetivo en este campo del fitness.";
  idAboutHeading.innerHTML = "Sobre";
  idAboutTxtRight.innerHTML =
    "En FitWish reconocemos el esfuerzo realizado para lograr que su cuerpo esté de la manera que desea que sea, y por eso, apreciamos su valiosa decisión de defender su posición y actuar de acuerdo con lo que debe, su salud.";
}
function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  idAboutHeading.style.color = "#1F3B4D";
  idAboutH2.style.color = "#1F3B4D";
  idAboutTxtRight.style.color = "#1F3B4D";
  idAboutTxtLeft.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  idAboutHeading.style.color = "azure";
  idAboutH2.style.color = "azure";
  idAboutTxtRight.style.color = "azure";
  idAboutTxtLeft.style.color = "azure";
}
