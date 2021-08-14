function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  idHowToH2.innerHTML = "What you will do";
  idHowToH3.innerHTML = "What we will do";
  idHowToTxt1.innerHTML =
    "First, if you haven't already, check the theme and language that you prefer in the three bar button on the left. Then answer the test... candidly, yes, I know, its harsh but this is crucial for this to be as helpful as it can to you, then in some time from now you can repeat this test and compare the numbers.";
  idHowToTxt2.innerHTML =
    "Well, we are going to evaluate you in a comprehensive way and tell you the distance to your goals in your path to them, then you can come back to this very site and redo the test, having up to two previous test results stored locally and safely in your computer.";
  idHowToHeading.innerHTML = "How it Works";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  idHowToH2.innerHTML = "O que você vai fazer";
  idHowToH3.innerHTML = "O que nós vamos fazer";
  idHowToTxt1.innerHTML =
    "Primeiro, se ainda não o fez, verifique o tema e o idioma de sua preferência no botão de três barras à esquerda. Então responda o teste ... francamente, sim, eu sei, é duro, mas isso é crucial para ser o mais útil possível para você, então em algum tempo você pode repetir este teste e comparar os números.";
  idHowToTxt2.innerHTML =
    "Bem, vamos avaliá-lo de uma forma compreensiva e dizer-lhe a distância de seus objetivos em seu caminho até eles, então você pode voltar a este mesmo site e refazer o teste, tendo até dois resultados de testes anteriores armazenados localmente e com segurança em seu computador.";
  idHowToHeading.innerHTML = "Como Funciona";
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  idHowToH2.innerHTML = "Que vas tu faire";
  idHowToH3.innerHTML = "Qu'allons nous faire";
  idHowToHeading.innerHTML = "Comment ça fonctionne";
  idHowToTxt1.innerHTML =
    "Tout d'abord, si vous ne l'avez pas déjà fait, vérifiez le thème et la langue que vous préférez dans le bouton à trois barres sur la gauche. Alors répondez au test ... franchement, oui, je sais, c'est dur, mais c'est crucial pour que cela vous soit aussi utile que possible, puis dans un certain temps, vous pourrez répéter ce test et comparer les chiffres.";
  idHowToTxt2.innerHTML =
    "Eh bien, nous allons vous évaluer de manière complète et vous indiquer la distance qui vous sépare de vos objectifs sur votre chemin vers eux, puis vous pouvez revenir sur ce site même et refaire le test, en ayant jusqu'à deux résultats de test précédents stockés localement et en toute sécurité dans votre ordinateur.";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  idHowToH2.innerHTML = "Qué harás";
  idHowToH3.innerHTML = "Lo que haremos";
  idHowToHeading.innerHTML = "Cómo funciona";
  idHowToTxt1.innerHTML =
    "Primero, si aún no lo ha hecho, marque el tema y el idioma que prefiera en el botón de tres barras a la izquierda. Luego responda la prueba ... con franqueza, sí, lo sé, es duro, pero esto es crucial para que esto sea lo más útil posible para usted, luego, en algún momento a partir de ahora, puede repetir esta prueba y comparar los números.";
  idHowToTxt2.innerHTML =
    "Bueno, lo evaluaremos de manera integral y le diremos la distancia a sus objetivos en su camino hacia ellos, luego puede regresar a este mismo sitio y rehacer la prueba, teniendo hasta dos resultados de pruebas anteriores almacenados localmente y de forma segura en su computadora.";
}
function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  idHowToHeading.style.color = "#1F3B4D";
  idHowToH2.style.color = "#1F3B4D";
  idHowToH3.style.color = "#1F3B4D";
  idHowToTxt1.style.color = "#1F3B4D";
  idHowToTxt2.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  idHowToHeading.style.color = "azure";
  idHowToH2.style.color = "azure";
  idHowToH3.style.color = "azure";
  idHowToTxt1.style.color = "azure";
  idHowToTxt2.style.color = "azure";
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
