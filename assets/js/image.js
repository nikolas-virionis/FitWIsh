import { getAge } from "./modules/global/fieldGetter.js";
function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  showImgBtn.innerHTML = "&#9776; Show Image";
  referenceImgTxt.innerHTML = "Reference Image:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Select a gender to see the reference Image';
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Which one of these you think represent you the most?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Which one of these you think represent your goal the most?";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  showImgBtn.innerHTML = "&#9776; Exibir Imagem";
  referenceImgTxt.innerHTML = "Imagem de Referência:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Escolha um gênero para ver a imagem de referência';
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Qual dessas imagens representa melhor seu estado atual?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Qual dessas imagens representa melhor seu objetivo corporal?";
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  showImgBtn.innerHTML = "&#9776; Afficher l'image";
  referenceImgTxt.innerHTML = "Image de référence:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Sélectionnez un sexe pour voir l\'image de référence';
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Lequel de ceux-ci vous représente le plus?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Selon vous, lequel de ces éléments représente le plus votre objectif?";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  showImgBtn.innerHTML = "&#9776; Mostrar imagen";
  referenceImgTxt.innerHTML = "Imagen de referencia:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Seleccione un género para ver la imagen de referencia';
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "¿Cuál de estos crees que te representa más?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "¿Cuál de estos crees que representa más tu objetivo?";
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

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  if (getCurrentBody())
    document.getElementById(
      `colorChangeIdBody${getCurrentBody()}`
    ).style.backgroundColor = "#7395AE";
  if (getGoalBody())
    document.getElementById(
      `colorChangeIdGoal${getGoalBody()}`
    ).style.backgroundColor = "#7395AE";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  if (!sessionStorage.getItem("gender")) {
    if (language == "english")
      alert(
        "In order to access the body fat evaluation page, choosing a gender is necessary"
      );
    else if (language == "português")
      alert(
        "Para acessar a página de avaliação de gordura corporal, é necessário escolher o gênero"
      );
    else if (language == "français")
      alert(
        "Afin d'accéder à la page d'évaluation de la graisse corporelle, le choix d'un sexe est nécessaire"
      );
    else if (language == "español")
      alert(
        "Para acceder a la página de evaluación de la grasa corporal, es necesario elegir un género"
      );
    window.location.href = "genderUnit.html";
  } else loadImg(sessionStorage.getItem("gender"));
  if (!sessionStorage.getItem("age")) {
    if (language == "english")
      alert(
        "In order to access the body fat evaluation page, inserting an age is necessary"
      );
    else if (language == "português")
      alert(
        "Para acessar a página de avaliação de gordura corporal, é necessário inserir uma idade"
      );
    else if (language == "français")
      alert(
        "Afin d'accéder à la page d'évaluation de la graisse corporelle, l'insertion d'un âge est nécessaire"
      );
    else if (language == "español")
      alert(
        "Para acceder a la página de evaluación de la grasa corporal, es necesario insertar una edad"
      );
    window.location.href = "login.html";
  }
  buttons.forEach((button) => {
    button.addEventListener("click", (e) =>
      e.target.id.slice(-2, -1) == "y"
        ? setCurrentBody(Number(e.target.id.slice(-1)))
        : setGoalBody(Number(e.target.id.slice(-1)))
    );
    button.addEventListener("mouseout", (e) =>
      hoverOutColorChangeFunc(e.target.id)
    );
  });
});

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  changeBodyColor();
  checkGoal();
}
function changeBodyColor() {
  if (getCurrentBody() == 1)
    colorChangeIdBody1.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 2)
    colorChangeIdBody2.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 3)
    colorChangeIdBody3.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 4)
    colorChangeIdBody4.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 5)
    colorChangeIdBody5.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 6)
    colorChangeIdBody6.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 7)
    colorChangeIdBody7.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 8)
    colorChangeIdBody8.style.backgroundColor = "#7395AE";
  else if (getCurrentBody() == 9)
    colorChangeIdBody9.style.backgroundColor = "#7395AE";
}
function checkGoal() {
  if (getGoalBody() == 1) {
    if (getAge() >= 15 && getAge() <= 40)
      colorChangeIdGoal1.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal1.style.backgroundColor = "teal";
  } else if (getGoalBody() == 2) {
    if (getAge() >= 15 && getAge() <= 40)
      colorChangeIdGoal2.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal2.style.backgroundColor = "teal";
  } else if (getGoalBody() == 3) {
    if (getAge() >= 15 && getAge() <= 50)
      colorChangeIdGoal3.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal3.style.backgroundColor = "teal";
  } else if (getGoalBody() == 4) {
    if (getAge() >= 10 && getAge() <= 60)
      colorChangeIdGoal4.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal4.style.backgroundColor = "teal";
  } else if (getGoalBody() == 5)
    colorChangeIdGoal5.style.backgroundColor = "#7395AE";
  else if (getGoalBody() == 6)
    colorChangeIdGoal6.style.backgroundColor = "#7395AE";
  else if (getGoalBody() == 7)
    colorChangeIdGoal7.style.backgroundColor = "#7395AE";
  else if (getGoalBody() == 8)
    colorChangeIdGoal8.style.backgroundColor = "#7395AE";
  else if (getGoalBody() == 9)
    colorChangeIdGoal9.style.backgroundColor = "#7395AE";
}

function loadImg(gender) {
  img = document.createElement("img");
  if (gender == "male")
    setImg(
      "https://crossfitclandestine.files.wordpress.com/2019/05/xbody-fat-chart-men.png.pagespeed.ic_.57b54gdukq.jpg"
    );
  else
    setImg(
      "https://crossfitclandestine.files.wordpress.com/2019/05/body-fat-chart-women.png.pagespeed.ce_.9463kejyyr.png"
    );
}

function openGenderCenterNav() {
  myGenderCenterNav.style.width = "60vw";
  myGenderCenterNav.style.height = "60vh";
  myGenderCenterNav.style.display = "block";
  closeNav();
  closeRightNav();
}
function closeGenderCenterNav() {
  myGenderCenterNav.style.width = "0";
  myGenderCenterNav.style.height = "0";
  myGenderCenterNav.style.display = "none";
}

showImgBtn.addEventListener("click", () => openGenderCenterNav());
genderCloneNav.addEventListener("click", () => closeGenderCenterNav());

function setImg(link) {
  img.src = link;
  img.setAttribute("width", "400");
  img.setAttribute("height", "300");
  src = document.getElementById("bodyImageId");
  src.appendChild(img);
}

import { getCurrentBody } from "./modules/global/fieldGetter.js";
const setCurrentBody = (body) =>
  sessionStorage.setItem("currentBody", JSON.stringify(body));

import { getGoalBody } from "./modules/global/fieldGetter.js";
const setGoalBody = (goal) => {
  if (
    !(
      (getAge() >= 15 && getAge() <= 40) ||
      (getAge() < 15 && getAge() >= 10 && getGoalBody() > 3) ||
      (getAge() > 40 && getAge() <= 50 && getGoalBody() > 2) ||
      (getAge() > 50 && getAge() <= 60 && getGoalBody() > 3) ||
      (getAge() > 60 && getGoalBody() > 4)
    )
  ) {
    if (language == "english") {
      if (getAge() < 15 && getAge() >= 10 && getGoalBody() <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now and soon enough you'll be able to get to this body goal of yours as safe as it gets."
        );
      else if (getAge() < 10)
        alert(
          "I wouldn't recommend you would try to get to fit by now, of course, you should be healthy but I cannot see a way you can use this coding advice in your way, being this young, since it's purpose is people long term body goal, and by this, I get that the changes can likely be extreme for a 9 y/o or younger"
        );
      else if (getAge() > 40 && getAge() <= 50 && getGoalBody() <= 2)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (getAge() > 50 && getAge() <= 60 && getGoalBody() <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (getAge() > 60 && getGoalBody() <= 4)
        alert(
          "This won't be gladful to hear, it breaks my heart to say it too, because I appreciate your ferving will of getting in shape, however for your age it is not healthy to get this little body fat percentage, try a bit higher by now since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
    } else if (language == "português") {
      if (getAge() < 15 && getAge() >= 10 && getGoalBody() <= 3)
        alert(
          "Para a sua idade, não é saudável obter essa pequena porcentagem de gordura corporal, tente um pouco mais alto agora e em breve você será capaz de atingir esse seu objetivo corporal o mais seguro possível."
        );
      else if (getAge() < 10)
        alert(
          "Eu não recomendaria que você tentasse entrar em forma agora, é claro, você deve estar saudável, mas não vejo uma maneira de usar este conselho de codificação do seu jeito, sendo tão jovem, já que seu propósito é o corpo das pessoas a longo prazo objetivo, e com isso, eu entendo que as mudanças podem provavelmente ser extremas para um jovem de 9 anos ou menos"
        );
      else if (getAge() > 40 && getAge() <= 50 && getGoalBody() <= 2)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (getAge() > 50 && getAge() <= 60 && getGoalBody() <= 3)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (getAge() > 60 && getGoalBody() <= 4)
        alert(
          "Não vou ficar feliz em ouvir isso, parte meu coração dizer isso também, porque eu aprecio sua fervorosa vontade de entrar em forma, porém para sua idade não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto até agora, uma vez que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
    } else if (language == "français") {
      if (getAge() < 15 && getAge() >= 10 && getGoalBody() <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant et vous serez bientôt en mesure d'atteindre votre objectif corporel aussi sûr que possible."
        );
      else if (getAge() < 10)
        alert(
          "Je ne vous recommanderais pas d'essayer de vous mettre en forme maintenant, bien sûr, vous devriez être en bonne santé, mais je ne vois pas comment vous pouvez utiliser ces conseils de codage à votre manière, étant aussi jeune, car son but est le corps à long terme des gens objectif, et par là, je comprends que les changements peuvent probablement être extrêmes pour un 9 ans ou moins"
        );
      else if (getAge() > 40 && getAge() <= 50 && getGoalBody() <= 2)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (getAge() > 50 && getAge() <= 60 && getGoalBody() <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (getAge() > 60 && getGoalBody() <= 4)
        alert(
          "Ce ne sera pas heureux d'entendre, cela me brise le cœur de le dire aussi, car j'apprécie votre fervente volonté de vous mettre en forme, mais pour votre âge, ce n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut en maintenant puisque la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
    } else if (language == "español") {
      if (getAge() < 15 && getAge() >= 10 && getGoalBody() <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto ahora y muy pronto podrá alcanzar este objetivo corporal de la manera más segura posible."
        );
      else if (getAge() < 10)
        alert(
          "No recomendaría que intentaras ponerte en forma a esta altura, por supuesto, deberías estar sano, pero no veo la manera en que puedas usar este consejo de codificación a tu manera, siendo tan joven, ya que su propósito es el cuerpo de las personas a largo plazo. objetivo, y con esto, entiendo que los cambios probablemente pueden ser extremos para un niño de 9 años o menos"
        );
      else if (getAge() > 40 && getAge() <= 50 && getGoalBody() <= 2)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (getAge() > 50 && getAge() <= 60 && getGoalBody() <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (getAge() > 60 && getGoalBody() <= 4)
        alert(
          "Esto no me alegrará escucharlo, me rompe el corazón decirlo también, porque agradezco tu ferviente voluntad de ponerte en forma, sin embargo para tu edad no es saludable obtener este pequeño porcentaje de grasa corporal, intenta un poco más alto ahora, dado que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
    }
  } else sessionStorage.setItem("goalBody", JSON.stringify(goal));
};
