function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
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
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
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
  import("./script.mjs").then(({ français: defaultFrançais }) =>
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
  import("./script.mjs").then(({ español: defaultEspañol }) =>
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
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#9DBCD4";
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
});

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
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

  let age = sessionStorage.getItem("age");
  if (goalBody == 1) {
    if (age >= 15 && age <= 40)
      colorChangeIdGoal1.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal1.style.backgroundColor = "teal";
  } else if (goalBody == 2) {
    if (age >= 15 && age <= 40)
      colorChangeIdGoal2.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal2.style.backgroundColor = "teal";
  } else if (goalBody == 3) {
    if (age >= 15 && age <= 50)
      colorChangeIdGoal3.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal3.style.backgroundColor = "teal";
  } else if (goalBody == 4) {
    if (age >= 10 && age <= 60)
      colorChangeIdGoal4.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal4.style.backgroundColor = "teal";
  } else if (goalBody == 5)
    colorChangeIdGoal5.style.backgroundColor = "#7395AE";
  else if (goalBody == 6) colorChangeIdGoal6.style.backgroundColor = "#7395AE";
  else if (goalBody == 7) colorChangeIdGoal7.style.backgroundColor = "#7395AE";
  else if (goalBody == 8) colorChangeIdGoal8.style.backgroundColor = "#7395AE";
  else if (goalBody == 9) colorChangeIdGoal9.style.backgroundColor = "#7395AE";
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
  document.getElementById("myGenderCenterNav").style.width = "70vw";
  document.getElementById("myGenderCenterNav").style.height = "70vh";
  if (gender != "male" && gender != "female")
    document.getElementById("backupReferenceImg").innerHTML = backupGenderImg;
}
function closeGenderCenterNav() {
  document.getElementById("myGenderCenterNav").style.width = "0";
  document.getElementById("myGenderCenterNav").style.height = "0";
  if (gender != "male" && gender != "female") backupReferenceImg.innerHTML = "";
}
function setImg(link) {
  img.src = link;
  img.setAttribute("width", "500");
  img.setAttribute("height", "400");
  src = document.getElementById("bodyImageId");
  src.appendChild(img);
}
function changeColor9(
  clickedId,
  idleId1,
  idleId2,
  idleId3,
  idleId4,
  idleId5,
  idleId6,
  idleId7,
  idleId8
) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId1).style.backgroundColor = "teal";
  document.getElementById(idleId2).style.backgroundColor = "teal";
  document.getElementById(idleId3).style.backgroundColor = "teal";
  document.getElementById(idleId4).style.backgroundColor = "teal";
  document.getElementById(idleId5).style.backgroundColor = "teal";
  document.getElementById(idleId6).style.backgroundColor = "teal";
  document.getElementById(idleId7).style.backgroundColor = "teal";
  document.getElementById(idleId8).style.backgroundColor = "teal";
}
function changeColor10(
  clickedId,
  idleId1,
  idleId2,
  idleId3,
  idleId4,
  idleId5,
  idleId6,
  idleId7,
  idleId8
) {
  if (
    (age >= 15 && age <= 40) ||
    (age < 15 && age >= 10 && goalBody > 3) ||
    (age > 40 && age <= 50 && goalBody > 2) ||
    (age > 50 && age <= 60 && goalBody > 3) ||
    (age > 60 && goalBody > 4)
  ) {
    document.getElementById(clickedId).style.backgroundColor = "#7395AE";
    document.getElementById(idleId1).style.backgroundColor = "teal";
    document.getElementById(idleId2).style.backgroundColor = "teal";
    document.getElementById(idleId3).style.backgroundColor = "teal";
    document.getElementById(idleId4).style.backgroundColor = "teal";
    document.getElementById(idleId5).style.backgroundColor = "teal";
    document.getElementById(idleId6).style.backgroundColor = "teal";
    document.getElementById(idleId7).style.backgroundColor = "teal";
    document.getElementById(idleId8).style.backgroundColor = "teal";
  } else {
    for (let element of arguments)
      document.getElementById(element).style.backgroundColor = "teal";
  }
}
const getCurrentBody = () => JSON.parse(sessionStorage.getItem("currentBody"));
const setCurrentBody = (body) =>
  sessionStorage.setItem("currentBody", JSON.stringify(body));

const getGoalBody = () => JSON.parse(sessionStorage.getItem("goalBody"));
const setGoalBody = (goal) => {
  if (
    !(
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
  ) {
    if (language == "english") {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now and soon enough you'll be able to get to this body goal of yours as safe as it gets."
        );
      else if (age < 10)
        alert(
          "I wouldn't recommend you would try to get to fit by now, of course, you should be healthy but I cannot see a way you can use this coding advice in your way, being this young, since it's purpose is people long term body goal, and by this, I get that the changes can likely be extreme for a 9 y/o or younger"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "This won't be gladful to hear, it breaks my heart to say it too, because I appreciate your ferving will of getting in shape, however for your age it is not healthy to get this little body fat percentage, try a bit higher by now since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
    } else if (language == "português") {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Para a sua idade, não é saudável obter essa pequena porcentagem de gordura corporal, tente um pouco mais alto agora e em breve você será capaz de atingir esse seu objetivo corporal o mais seguro possível."
        );
      else if (age < 10)
        alert(
          "Eu não recomendaria que você tentasse entrar em forma agora, é claro, você deve estar saudável, mas não vejo uma maneira de usar este conselho de codificação do seu jeito, sendo tão jovem, já que seu propósito é o corpo das pessoas a longo prazo objetivo, e com isso, eu entendo que as mudanças podem provavelmente ser extremas para um jovem de 9 anos ou menos"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Não vou ficar feliz em ouvir isso, parte meu coração dizer isso também, porque eu aprecio sua fervorosa vontade de entrar em forma, porém para sua idade não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto até agora, uma vez que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
    } else if (language == "français") {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant et vous serez bientôt en mesure d'atteindre votre objectif corporel aussi sûr que possible."
        );
      else if (age < 10)
        alert(
          "Je ne vous recommanderais pas d'essayer de vous mettre en forme maintenant, bien sûr, vous devriez être en bonne santé, mais je ne vois pas comment vous pouvez utiliser ces conseils de codage à votre manière, étant aussi jeune, car son but est le corps à long terme des gens objectif, et par là, je comprends que les changements peuvent probablement être extrêmes pour un 9 ans ou moins"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Ce ne sera pas heureux d'entendre, cela me brise le cœur de le dire aussi, car j'apprécie votre fervente volonté de vous mettre en forme, mais pour votre âge, ce n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut en maintenant puisque la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
    } else if (language == "español") {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto ahora y muy pronto podrá alcanzar este objetivo corporal de la manera más segura posible."
        );
      else if (age < 10)
        alert(
          "No recomendaría que intentaras ponerte en forma a esta altura, por supuesto, deberías estar sano, pero no veo la manera en que puedas usar este consejo de codificación a tu manera, siendo tan joven, ya que su propósito es el cuerpo de las personas a largo plazo. objetivo, y con esto, entiendo que los cambios probablemente pueden ser extremos para un niño de 9 años o menos"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Esto no me alegrará escucharlo, me rompe el corazón decirlo también, porque agradezco tu ferviente voluntad de ponerte en forma, sin embargo para tu edad no es saludable obtener este pequeño porcentaje de grasa corporal, intenta un poco más alto ahora, dado que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
    }
  } else sessionStorage.setItem("goalBody", JSON.stringify(goal));
};
