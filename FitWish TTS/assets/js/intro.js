function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  let introTxt = document.querySelectorAll(".planTxt");
  for (let element of introTxt) element.style.fontSize = "2.2vw";
  planId.style.marginLeft = "43%";
  planId.style.marginRight = "auto";
  planId.innerHTML = "Our Plan:";
  checkImgId.style.marginLeft = "23%";
  idBadHabits.innerHTML =
    "You might be struggling with your current health state, disliking the situation but not entirely committed to change it";
  idPlanMsg.innerHTML =
    "But now you started a path in which you take ownership of yourself, and I am going to help you out";
  idGoodHabits.innerHTML =
    "Sooner than you'd expect, you'll be used to looking just as good as you want, and healthier too!";
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  let introTxt = document.querySelectorAll(".planTxt");
  for (let element of introTxt) element.style.fontSize = "2.1vw";
  planId.style.marginLeft = "41.5%";
  planId.style.marginRight = "auto";
  planId.innerHTML = "Nosso Plano:";
  checkImgId.style.marginLeft = "19.1%";
  idBadHabits.innerHTML =
    "Você pode estar tendo dificuldades e decepções com seu atual estado de saúde, não gostando da situação mas não completamente comprometido a mudar";
  idPlanMsg.innerHTML =
    "Mas agora você começou um caminho no qual você tomou responsabilidade sobre você mesmo, e eu vou te ajudar";
  idGoodHabits.innerHTML =
    "Antes do que você pode esperar, você já estará aconstumado a ter a aparência que você quiser, e também mais saudável!";
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  planId.innerHTML = "Notre Plan:";
  idBadHabits.innerHTML =
    "Vous avez peut-être des difficultés avec votre état de santé actuel, vous n'aimez pas la situation, mais vous n'êtes pas entièrement déterminé à la changer";
  idPlanMsg.innerHTML =
    "Mais maintenant tu as commencé un chemin dans lequel tu prends possession de toi-même, et je vais t'aider";
  idGoodHabits.innerHTML =
    "Plus tôt que prévu, vous serez habitué à avoir l'air aussi beau que vous le souhaitez, et en meilleure santé aussi!";
  checkImgId.style.marginLeft = "21.05%";
  let introTxt = document.querySelectorAll(".planTxt");
  for (let element of introTxt) element.style.fontSize = "2.2vw";
  planId.style.marginLeft = "41.75%";
  planId.style.marginRight = "auto";
}
function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  planId.innerHTML = "Nuestro Plan:";
  idBadHabits.innerHTML =
    "Es posible que esté luchando con su estado de salud actual, no le guste la situación, pero no esté completamente comprometido a cambiarla.";
  idPlanMsg.innerHTML =
    "Pero ahora iniciaste un camino en el que te apropiaste de ti mismo, y yo te voy a ayudar";
  idGoodHabits.innerHTML =
    "¡Antes de lo que esperabas, estarás acostumbrado a verte tan bien como quieras y más saludable también!";
  checkImgId.style.marginLeft = "17.9%";
  let introTxt = document.querySelectorAll(".planTxt");
  for (let element of introTxt) element.style.fontSize = "2.2vw";
  planId.style.marginLeft = "41%";
  planId.style.marginRight = "2.55%";
}
function themeTypeLight() {
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  planId.style.color = "blue";
  idBadHabits.style.color = "red";
  idPlanMsg.style.color = "blue";
  idGoodHabits.style.color = "darkgreen";
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  planId.style.color = "cyan";
  idBadHabits.style.color = "white";
  idPlanMsg.style.color = "cyan";
  idGoodHabits.style.color = "gold";
}

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  window[sessionStorage.getItem("language")]();
  switch (sessionStorage.getItem("theme")) {
    case "light":
      themeTypeLight();
      break;
    default:
      themeTypeDark();
  }
  if (!localStorage.getItem("contentArray")) buttonFirst.style.display = "none";
});
