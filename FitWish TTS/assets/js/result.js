let language = sessionStorage.getItem("language"),
  colorDownload = "#1F3B4D",
  backgroundColorDownload = "#12232A",
  processing,
  diagnosis,
  done,
  resultPossibilities,
  weightManagementProgramFinalResult,
  resultBeginning,
  baseIdealWeight,
  topIdealWeight,
  idealWeigh,
  bmi_state,
  finalIdealWeightMsg,
  bodyFat,
  bodyFatPercentage,
  suggestedBodyFat,
  topBodyFat,
  baseBodyFat,
  goalBaseBodyFat,
  goalTopBodyFat,
  idealBodyFatPercentage,
  bmr;

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  window[sessionStorage.getItem("language")]();
  window[
    `themeType${
      sessionStorage.getItem("theme").charAt(0).toUpperCase() +
      sessionStorage.getItem("theme").slice(1)
    }`
  ]();
  result();
});

function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  weightManagementProgramFinalResult =
    "Fitness_Management_Program_Final_Result.html";
  emailLinkColor.innerHTML =
    "<strong>Want to have a email sent to you with the main result data? Click here!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>Want to have a new document with all this last pages data? Click here!!</strong>";
  emotionAnswer =
    'For this emotional overeating issue you should try some ways to reduce it like: try to answer the question, am i really hungry or am i trying to eat my emotions?; aside from that you should try to calm yourself down with some breathing techniques, meditation or yoga to reduce stress; try to fight the boredom finding a new hobby, or something that "awakens" the  will do get up in the morning; don\'t discard the possibility of seeing a therapist to help you out in more areas than you can imagine; And to fight temptation, reward yourself periodically with a dose of a food you like, maybe every 15%-25% of the whole path completed, this way you will learn to moderate the amout you eat and thus make it easier for you to maintain your body in shape when you reach your goal.';
  h4Config.innerHTML = "Processing";
  processing = "Processing";
  diagnosis = "Finishing Diagnosis";
  resultPossibilities = "Loading Result Possibilities";
  done = "Done!";
  resultBeginning = 'Well <big style="font-family: Kaushan Script, cursive;">';
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  h4Config.innerHTML = "Processando";
  processing = "Processando";
  diagnosis = "Terminando Diagnóstico";
  resultPossibilities = "Carregando Possibilidades de Resultado";
  done = "Pronto!";
  resultBeginning = 'Bem <big style="font-family: Kaushan Script, cursive;">';
  weightManagementProgramFinalResult =
    "Resultado_final_do_programa_de_controle_de_peso.html";
  emailLinkColor.innerHTML =
    "<strong>Deseja receber um e-mail com os principais dados do resultado? Clique aqui!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>Quer ter um novo documento com todos esses dados da última página? Clique aqui!!</strong>";
  emotionAnswer =
    'Para esse problema de comer demais emocionalmente, você deve tentar algumas maneiras de reduzi-lo, como: tente responder à pergunta, estou realmente com fome ou estou tentando comer minhas emoções ?; além disso, você deve tentar se acalmar com algumas técnicas de respiração, meditação ou ioga para reduzir o estresse; tente lutar contra o tédio encontrando um novo hobby, ou algo que "desperte" a vontade o faça de se levantar de manhã; não descarte a possibilidade de ver um terapeuta para ajudá-lo em mais áreas do que você pode imaginar; E para lutar contra a tentação, recompense-se periodicamente com uma dose de um alimento que você goste, talvez a cada 15% -25% de todo o caminho percorrido, assim você aprenderá a moderar a quantidade que ingere e assim tornar mais fácil para você manter seu corpo em forma quando você atingir seu objetivo.';
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  h4Config.innerHTML = "Traitement";
  processing = "Traitement";
  diagnosis = "Fin du diagnostic";
  resultPossibilities = "Chargement des possibilités de résultat";
  done = "Fait!";
  resultBeginning = 'Bien <big style="font-family: Kaushan Script, cursive;">';
  weightManagementProgramFinalResult =
    "Résultat_final_du_programme_de_gestion_du_poids.html";
  emailLinkColor.innerHTML =
    "<strong>Vous souhaitez recevoir un e-mail contenant les principales données de résultat? Cliquez ici!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>Vous voulez avoir un nouveau document avec toutes ces dernières pages de données? Cliquez ici!!</strong>";
  emotionAnswer =
    "Pour ce problème émotionnel de suralimentation, vous devriez essayer quelques moyens de le réduire comme: essayez de répondre à la question, ai-je vraiment faim ou est-ce que j'essaye de manger mes émotions ?; à part cela, vous devriez essayer de vous calmer avec des techniques de respiration, de méditation ou de yoga pour réduire le stress; essayez de lutter contre l'ennui en trouvant un nouveau passe-temps, ou quelque chose qui «réveille» la volonté de se lever le matin; ne pas écarter la possibilité de voir un thérapeute pour vous aider dans plus de domaines que vous ne pouvez l'imaginer; Et pour lutter contre la tentation, récompensez-vous périodiquement avec une dose d'un aliment que vous aimez, peut-être tous les 15% à 25% du chemin parcouru, de cette façon vous apprendrez à modérer la quantité que vous mangez et ainsi vous faciliterez le maintien. votre corps en forme lorsque vous atteignez votre objectif.";
}
function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  h4Config.innerHTML = "Procesando";
  processing = "Procesando";
  diagnosis = "Diagnóstico final";
  resultPossibilities = "Cargando Posibilidades de Resultados";
  done = "¡Hecho!";
  resultBeginning =
    '¡Bueno! <big style="font-family: Kaushan Script, cursive;">';
  weightManagementProgramFinalResult =
    "Resultado_final_del_programa_de_control_de_peso.html";
  emailLinkColor.innerHTML =
    "<strong>¿Quiere que le envíen un correo electrónico con los principales datos de resultados? ¡¡Haga clic aquí!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>¿Quieres tener un nuevo documento con todos los datos de estas últimas páginas? ¡¡Haga clic aquí!!</strong>";
  emotionAnswer =
    'Para este problema emocional de comer en exceso, debe probar algunas formas de reducirlo, como: intente responder la pregunta, ¿tengo mucha hambre o estoy tratando de comerme mis emociones ?; aparte de eso, debes intentar calmarte con algunas técnicas de respiración, meditación o yoga para reducir el estrés; intenta luchar contra el aburrimiento encontrando un nuevo pasatiempo, o algo que  "despierte " la voluntad de levantarse por la mañana; no descarte la posibilidad de ver a un terapeuta para que le ayude en más áreas de las que pueda imaginar; Y para combatir la tentación, recompénsate periódicamente con una dosis de un alimento que te guste, tal vez cada 15% -25% de todo el camino recorrido, de esta forma aprenderás a moderar la cantidad que comes y así te será más fácil mantenerlo. tu cuerpo en forma cuando alcances tu objetivo.';
}
function themeTypeLight() {
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  colorDownload = "#1F3B4D";
  backgroundColorDownload = "white";
  divPushCircleId.style.backgroundColor = "white";
  finalResultH3Id.style.color = "#1F3B4D";
  document.getElementById("downloadLinkColor").style.color = "green";
  document.getElementById("emailLinkColor").style.color = "#E50278";
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  colorDownload = "azure";
  backgroundColorDownload = "#12232A";
  divPushCircleId.style.backgroundColor = "#12232A";
  finalResultH3Id.style.color = "azure";
  document.getElementById("downloadLinkColor").style.color = "lightgreen";
  document.getElementById("emailLinkColor").style.color = "pink";
}

//variable getters
const getName = () => sessionStorage.getItem("name");
const getEmail = () => sessionStorage.getItem("email");
const getAge = () => JSON.parse(sessionStorage.getItem("age"));
const getWeight = () => JSON.parse(sessionStorage.getItem("weight"));
const getHeight = () => JSON.parse(sessionStorage.getItem("height"));
const getBodyType = () => sessionStorage.getItem("bodytype");
const getCheat = () => JSON.parse(sessionStorage.getItem("cheat"));
const getEmotion = () => sessionStorage.getItem("emotion");
const getExecise = () => JSON.parse(sessionStorage.getItem("exercise"));
const getGender = () => sessionStorage.getItem("gender");
const getUnit = () => sessionStorage.getItem("unit");
const getGoal = () => sessionStorage.getItem("goal");
const getHealthy = () => JSON.parse(sessionStorage.getItem("healthy"));
const getCurrentBody = () => JSON.parse(sessionStorage.getItem("currentBody"));
const getGoalBody = () => JSON.parse(sessionStorage.getItem("goalBody"));
const getMeals = () => JSON.parse(sessionStorage.getItem("meals"));

//ideal Weight Calculations
function idealWeight(lbs, lb, weight, height) {
  let idealWeightDistance;
  let advicedWeight;
  let idealWeightMsgPunctuation;
  let idealWeightMsgBmiState;
  if (getGender() == "male") {
    if (getBodyType() == "ecto") {
      baseIdealWeight = 18.5 * height ** 2;
      topIdealWeight = 22 * height ** 2;
    } else if (getBodyType() == "meso") {
      baseIdealWeight = 20 * height ** 2;
      topIdealWeight = 24 * height ** 2;
    } else if (getBodyType() == "endo") {
      baseIdealWeight = 22 * height ** 2;
      topIdealWeight = 24.9 * height ** 2;
    }
  } else if (getGender() == "female") {
    if (getBodyType() == "ecto") {
      baseIdealWeight = 16.5 * height ** 2;
      topIdealWeight = 22 * height ** 2;
    } else if (getBodyType() == "meso") {
      baseIdealWeight = 18.5 * height ** 2;
      topIdealWeight = 22 * height ** 2;
    }
    if (getBodyType() == "endo") {
      baseIdealWeight = 20 * height ** 2;
      topIdealWeight = 24 * height ** 2;
    }
  }
  if (getGoal() == "bulking")
    idealWeight = ((3 * topIdealWeight + baseIdealWeight) / 4).toFixed(1);
  else if (getGoal() == "cutting")
    idealWeight = ((2.5 * baseIdealWeight + topIdealWeight) / 3.5).toFixed(1);
  else if (getGoal() == "surplus")
    idealWeight = ((baseIdealWeight + topIdealWeight) / 2).toFixed(1);
  else if (getGoal() == "muscle")
    idealWeight = ((baseIdealWeight + 2 * topIdealWeight) / 3).toFixed(1);
  if (
    getGoal() == "bulking" ||
    getGoal() == "cutting" ||
    getGoal() == "surplus"
  )
    idealWeightDistance = (weight - idealWeight).toFixed(1);
  else if (getGoal() == "muscle")
    idealWeightDistance = (idealWeight - weight).toFixed(1);
  if (
    bmi_state == "underweight" ||
    bmi_state == "abaixo do peso" ||
    bmi_state == "poids insuffisant" ||
    bmi_state == "bajo peso"
  )
    advicedWeight = (18.5 * height ** 2 - weight).toFixed(1);
  else if (
    bmi_state == "normal/healthy" ||
    bmi_state == "overweight" ||
    bmi_state == "obese" ||
    bmi_state == "normal/saudável" ||
    bmi_state == "en surpoids" ||
    bmi_state == "obeso" ||
    bmi_state == "normal / sain" ||
    bmi_state == "sobrepeso" ||
    bmi_state == "obèse" ||
    bmi_state == "normal / saludable" ||
    bmi_state == "exceso de peso" ||
    bmi_state == "obeso"
  )
    advicedWeight = (weight - 24.9 * height ** 2).toFixed(1);
  if (
    bmi_state != "normal/healthy" &&
    bmi_state != "normal/saudável" &&
    bmi_state != "normal / sain" &&
    bmi_state != "normal / saludable"
  ) {
    if ((language = "english")) {
      idealWeightMsgPunctuation = ", and ";
      idealWeightMsgBmiState = lbs + " distant from a normal&healthy state.";
      if (bmi_state == "underweight")
        advicedWeight = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "overweight" || bmi_state == "obese")
        advicedWeight = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if ((language = "português")) {
      idealWeightMsgPunctuation = ", e ";
      idealWeightMsgBmiState =
        lbs + " distante de um estado normal e saudável .";
      if (
        bmi_state == "underweight" ||
        bmi_state == "abaixo do peso" ||
        bmi_state == "poids insuffisant" ||
        bmi_state == "bajo peso"
      )
        advicedWeight = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "sobrepeso" || bmi_state == "obeso")
        advicedWeight = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if ((language = "français")) {
      idealWeightMsgPunctuation = ", et ";
      idealWeightMsgBmiState = lbs + " éloigné d'un état normal et sain.";
      if (bmi_state == "poids insuffisant")
        advicedWeight = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "en surpoids" || bmi_state == "obèse")
        advicedWeight = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if ((language = "español")) {
      idealWeightMsgPunctuation = ", y ";
      idealWeightMsgBmiState =
        lbs + " distante de un estado normal y saludable.";
      if (bmi_state == "bajo peso")
        advicedWeight = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "exceso de peso" || bmi_state == "obeso")
        advicedWeight = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    }
  } else if (
    bmi_state == "normal/healthy" ||
    bmi_state == "normal/saudável" ||
    bmi_state == "normal / sain" ||
    bmi_state == "normal / saludable"
  ) {
    idealWeightMsgPunctuation = ".";
    idealWeightMsgBmiState = "";
    advicedWeight = "";
  }
  idealBodyFat = (idealBodyFatPercentage * idealWeight).toFixed(1);
  if ((language = "english")) {
    idealWeightMsg = `Your ideal weight is, approximately, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</strong>, being between the range of <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</strong> and <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</strong>, and therefore you are <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</strong> apart from your ideal body, which has <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</strong> of fat, and therefore, your ideal body fat percentage is <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</strong>, as long as your current weight is <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</strong>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</strong> of which equals fat, and thus, your body fat percentage, right now, is around <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</strong>, and according to WHO's body mass index, you are currently <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</strong>`;
  } else if ((language = "português")) {
    idealWeightMsg = `Seu peso ideal é, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</strong>, sendo entre <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</strong> e <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</strong>, e assim você está <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</strong> distante do seu corpo ideal, que tem <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</strong> de gordura, e assim, seu percentual de gordura ideal é <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</strong>, já que seu peso atual é <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</strong>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</strong> desse de gordura e dessa forma seu percentual de gordura, agora, é, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</strong>, e de acordo com o indice de massa corporal da OMS você esta atualmente em <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</strong>`;
  } else if ((language = "français")) {
    idealWeightMsg = `Votre poids idéal est, environ, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</strong>, se situant entre la gamme de <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</strong> et <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</strong>, et donc tu es <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</strong> en dehors de votre corps idéal, qui a <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</strong> de graisse, et par conséquent, votre pourcentage de graisse corporelle idéal est <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</strong>, tant que votre poids actuel est <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</strong>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</strong> don't est égal à la graisse, et donc, votre pourcentage de graisse corporelle, actuellement, est d'environ <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</strong>, et selon l'indice de masse corporelle de l'OMS, vous êtes actuellement <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</strong>`;
  } else if ((language = "español")) {
    idealWeightMsg = `Tu peso ideal es, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</strong>, estar entre el rango de <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</strong> y <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</strong>, y por lo tanto eres <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</strong> aparte de tu cuerpo ideal, que tiene <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</strong> de grasa y, por lo tanto, su porcentaje ideal de grasa corporal es <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</strong>, siempre que su peso actual sea <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</strong>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</strong> de los cuales es igual a grasa y, por lo tanto, su porcentaje de grasa corporal, en este momento, es de alrededor <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</strong>, y según el índice de masa corporal de la OMS, actualmente <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</strong>`;
  }
  finalIdealWeightMsg += idealWeightMsgPunctuation;
  finalIdealWeightMsg += advicedWeight;
  finalIdealWeightMsg += idealWeightMsgBmiState;
}

function setBodyTypeAdvice() {
  if ((language = "english")) {
    if (getBodyType() == "ecto")
      return "since you are an ectomorph, you gotta have in mind that you naturally have a condition that makes you skinnier, having less fat but also less muscle.";
    if (getBodyType() == "meso")
      return "since you are a mesomorph, you gain muscle with moderate ease and lose fat also with some ease, genetically wise, so you got it 'easier than others', right? Yeah but nahh really. It's not because it's a little bit easier that it's easy to get seriously in shape, so then when you get it done you'll appreciate yourself even more, and that's what matters!";
    if (getBodyType() == "endo")
      return "since you are an endomorph, you gain both muscle and fat easily, makes bulking easy but makes it a lot more difficult to cut and get your body in shape.";
  }
  if ((language = "português")) {
    if (getBodyType() == "ecto")
      return "já que você é um ectomorfo, é preciso ter em mente que você tem naturalmente uma condição que o torna mais magro, tendo menos gordura, mas também menos músculos.";
    if (getBodyType() == "meso")
      return "como você é um mesomorfo, você ganha músculo com moderada facilidade e perde gordura também com alguma facilidade, geneticamente sábio, então você entendeu 'mais fácil do que os outros', certo? Sim, mas nahh realmente. Não é porque é um pouco mais fácil que é fácil entrar em forma seriamente, então, quando terminar, você se apreciará ainda mais, e é isso que importa!";
    if (getBodyType() == "endo")
      return "como você é um(a) endomorfo(a), você ganha músculo e gordura facilmente, torna mais fácil aumentar o volume, mas torna muito mais difícil secar e colocar seu corpo em forma.";
  }
  if ((language = "français")) {
    if (getBodyType() == "ecto")
      return "puisque vous êtes un ectomorphe, vous devez garder à l'esprit que vous avez naturellement une maladie qui vous rend plus maigre, avec moins de graisse mais aussi moins de muscle.";
    if (getBodyType() == "meso")
      return "puisque vous êtes un mésomorphe, vous gagnez du muscle avec une facilité modérée et perdez de la graisse également avec une certaine facilité, génétiquement sage, donc vous l'avez plus facile que les autres '', non? Ouais mais nahh vraiment. Ce n'est pas parce que c'est un peu plus facile qu'il est facile de se mettre sérieusement en forme, alors quand vous aurez terminé, vous vous apprécierez encore plus et c'est ce qui compte!";
    if (getBodyType() == "endo")
      return "puisque vous êtes un endomorphe, vous gagnez facilement du muscle et de la graisse, ce qui facilite le gonflement, mais il est beaucoup plus difficile de couper et de remettre votre corps en forme.";
  }
  if ((language = "español")) {
    if (getBodyType() == "ecto")
      return "como eres un ectomorfo, debes tener en cuenta que naturalmente tienes una condición que te hace más delgado, con menos grasa pero también con menos músculo.";
    if (getBodyType() == "meso")
      return "como eres mesomorfo, ganas músculo con moderada facilidad y pierdes grasa también con cierta facilidad, genéticamente, así que lo conseguiste 'más fácil que otros', ¿verdad? Sí, pero realmente no. No es porque sea un poco más fácil que sea fácil ponerse en forma seriamente, así que cuando lo termines te apreciarás aún más, ¡y eso es lo que importa!";
    if (getBodyType() == "endo")
      return "como eres un endomorfo, ganas músculo y grasa fácilmente, facilita el volumen pero hace que sea mucho más difícil secar y poner tu cuerpo en forma.";
  }
}

function setAgeAdvice() {
  if ((language = "english")) {
    if (getAge() <= 12)
      return " Honestly, I like that you at this young age want to get in shape, but you know it's important that you understand that until you reach your teens 99,99% of your focus has to be in getting and keeping healthy. Relax, soon you will be able to get in shape easier than now and, more importantly, in a safer time of your life!";
    if (getAge() >= 13 && getAge() <= 17)
      return " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your early teen's the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Since you are at your best age range to get in shape, that does not mean it's gotta be easy but it means that you have the most amount of hormones that help you through the process!";
    if (getAge() >= 31 && getAge() <= 45)
      return " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, it is definitely important that you can maintain good health, but you're more than right on wanting to have a better body, and the healthier you are the easier to get in shape!";
    if (getAge() >= 46 && getAge() <= 60)
      return " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your late 40s, early 50s, and 60s the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    if (getAge() >= 61)
      return " Honestly, I like that you at this age want to get in shape, but you know it's important that you understand that 99% of your focus has to be in getting and then keeping healthy. Relax, it may be difficult but you're gonna make it, and also the healthier you are, the easier it will be to get a better body!";
  }
  if ((language = "português")) {
    if (getAge() <= 12)
      return " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que, até chegar à adolescência, 99,99% do seu foco tem que ser em obter e se manter saudável. Relaxe, logo você poderá entrar em forma mais fácil do que agora e, mais importante, em um momento mais seguro da sua vida!";
    if (getAge() >= 13 && getAge() <= 17)
      return " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, no seu primeiro adolescente a coisa mais importante obviamente é a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Como você está na sua melhor faixa etária para entrar em forma, isso não significa que deva ser fácil, mas significa que você tem a maior quantidade de hormônios que o ajudam no processo!";
    if (getAge() >= 31 && getAge() <= 45)
      return " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, é definitivamente importante que você possa manter uma boa saúde, mas você está mais do que certo em querer ter um corpo melhor, e quanto mais saudável você estiver, mais fácil será entrar em forma!";
    if (getAge() >= 46 && getAge() <= 60)
      return " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, com quase 40, 50 e 60 anos, a coisa mais importante é obviamente a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    if (getAge() >= 61)
      return " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que 99% do seu foco tem que ser em ficar e então se manter saudável. Relaxe, pode ser difícil, mas você vai conseguir, e quanto mais saudável você for, mais fácil será conseguir um corpo melhor!";
  }
  if ((language = "français")) {
    if (getAge() <= 12)
      return " Honnêtement, j'aime que vous, à ce jeune âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que jusqu'à ce que vous atteigniez votre adolescence, 99,99% de votre objectif doit être de rester en bonne santé. Détendez-vous, bientôt vous pourrez vous mettre en forme plus facilement que maintenant et, surtout, à un moment plus sûr de votre vie!";
    if (getAge() >= 13 && getAge() <= 17)
      return " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à votre jeune adolescent, la chose la plus importante est évidemment votre santé, mais vous avez plus que raison de vouloir avoir un meilleur corps!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Puisque vous êtes à votre meilleure tranche d'âge pour vous mettre en forme, cela ne signifie pas que ce doit être facile, mais cela signifie que vous avez le plus d'hormones qui vous aident tout au long du processus!";
    if (getAge() >= 31 && getAge() <= 45)
      return " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, il est vraiment important que vous puissiez rester en bonne santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps, et plus vous êtes en bonne santé, plus vous êtes en forme!";
    if (getAge() >= 46 && getAge() <= 60)
      return " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à la fin de la quarantaine, au début de la cinquantaine et au début de la soixantaine, la chose la plus importante est évidemment votre santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps!";
    if (getAge() >= 61)
      return " Honnêtement, j'aime le fait que vous, à cet âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que 99% de votre objectif doit être de devenir et de rester en bonne santé. Détendez-vous, cela peut être difficile mais vous y arriverez, et plus vous serez en santé, plus il sera facile d'avoir un meilleur corps!";
  }
  if ((language = "español")) {
    if (getAge() <= 12)
      return " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que entiendas que hasta que llegues a la adolescencia, el 99,99% de tu enfoque debe estar en estar y mantenerte saludable. Relájate, pronto podrás ponerte en forma más fácilmente que ahora y, lo que es más importante, ¡en un momento más seguro de tu vida!";
    if (getAge() >= 13 && getAge() <= 17)
      return " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, en la adolescencia temprana lo más importante es obviamente tu salud, ¡pero tienes más razón en querer tener un cuerpo mejor!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Ya que estás en tu mejor rango de edad para ponerte en forma, eso no significa que tenga que ser fácil, ¡pero significa que tienes la mayor cantidad de hormonas que te ayudan en el proceso!";
    if (getAge() >= 31 && getAge() <= 45)
      return " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, definitivamente es importante que puedas mantener una buena salud, pero tienes más razón en querer tener un mejor cuerpo, ¡y cuanto más saludable estés, más fácil será ponerte en forma!";
    if (getAge() >= 46 && getAge() <= 60)
      return " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, a finales de los 40, principios de los 50 y 60 lo más importante es obviamente su salud, ¡pero tiene más razón en querer tener un cuerpo mejor!";
    if (getAge() >= 61)
      return " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que comprendas que el 99% de tu enfoque tiene que estar en estar y luego en mantenerte saludable. Relájate, puede ser difícil, pero lo lograrás, y además, cuanto más saludable estés, ¡más fácil será tener un mejor cuerpo!";
  }
}
// file name according to the language
// functions to download file with result
function downloadData() {
  let element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/html;charset=utf-8," +
      encodeURIComponent(setDownloadableFileData())
  );
  element.setAttribute("download", weightManagementProgramFinalResult);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function sendConfirm() {
  let redirectemail;
  if ((language = "english"))
    redirectemail = confirm(
      "Are you sure you want to receive a main result email?"
    );
  else if ((language = "português"))
    redirectemail = confirm(
      "Tem certeza de que deseja receber um e-mail de resultado principal?"
    );
  else if ((language = "français"))
    redirectemail = confirm(
      "Voulez-vous vraiment recevoir un e-mail de résultat principal?"
    );
  else if ((language = "español"))
    redirectemail = confirm(
      "¿Está seguro de que desea recibir un correo electrónico con el resultado principal?"
    );
  if (redirectemail) sendEmail();
}
//more email sending information
function sendEmail() {
  if ((language = "english")) {
    addup5 = "kcal to ";
    addup6 = "kcal \n\n\n\n";
    var message = `Hi, this is just a way for you to have all the main data summed up saved in your email inbox.\n\n Gender: ${getGender()}\n\n Goal: ${getGoal()}\n\n
    getBodyType(): ${getBodyType()}\n\n Age: ${getAge()}\n\n Current Weight: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Current fat percentage: ${bodyFatPercentage}% \n\nIdeal weight range: ${
      unit == "metric"
        ? `${baseIdealWeight.toFixed(1)}kg to ${topIdealWeight.toFixed(
            1
          )}kg\n\nPerfect/ideal approximate weight: ${parseFloat(
            idealWeight
          ).toFixed(1)}kg\n\n`
        : `${(baseIdealWeight * 2.205).toFixed(1)}lbs to ${(
            topIdealWeight * 2.205
          ).toFixed(1)}lbs\n\n
        Perfect/ideal approximate weight: ${(idealWeight * 2.205).toFixed(
          1
        )}lbs\n\n`
    }
    Goal's fat percentage: ${(idealBodyFatPercentage * 10) / 10}% \n\n
    Exercise Situation: ${
      getExercise() == 1
        ? "No Exercise \n\nExercise Advice: Start to Gradually Workout all the way up to 5-6 days/week \n\n"
        : getExercise() == 2
        ? "Too little Exercise \n\nExercise Advice: Start to Gradually Workout all the way up to 5-6 days/week \n\n"
        : getExercise() == 3
        ? "Moderate Exercise \n\nExercise Advice: Gradually increase intensity and frequency Of Your Workouts \n\n"
        : "Ideal exercise Intensity \n\nExercise Advice: Always Take care of the intensity and make sure it is an exercise hard enough *for you* \n\n"
    }Good/Healthy Meals Situation: ${
      getHealthy() == 1
        ? "No Helthy Meals\n\nGood/Healthy Meals Advice: Start to Gradually Eat healthy all the way up to 5-6 days/week \n\n"
        : getHealthy() == 2
        ? "Too Little Healthy Meals \n\nGood/Healthy Meals Advice: Start to Gradually Eat healthy all the way up to 5-6 days/week \n\n"
        : getHealthy() == 3
        ? "Moderate Good Meals \n\nGood/Healthy Meals Advice: Slowly change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : "Ideal Healthy Meals \n\nGood/Healthy Meals Advice: Speechlessly Confident about this diet plan, just know to eat well but not too much \n\n"
    }Cheat Meals Situation: ${
      getCheat() == 4
        ? "Too much Cheat Meals \n\nCheat Meals Advice: Gradually change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : getCheat() == 3
        ? "Too much Cheat Meals \n\nCheat Meals Advice: Gradually change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : getCheat() == 2
        ? "Moderate Cheat Meals \n\nCheat Meals Advice: Gradually change your food buying habits so that you only got Good Food to eat at the right Quantities \n\n"
        : "Ideal Quantity of Cheat Meals \n\nCheat Meals Advice: No advice, already the best it can be \n\n"
    }Meals per day Situation: ${
      getMeals() == 1
        ? "Too little Meals per day \n\nMeals per day Advice: Increase the Meals per day. Eat decent amounts of right food every 3 hours \n\n"
        : getMeals() == 2
        ? "Too little Meals per day \n\nMeals per day Advice: Increase the Meals per day. Eat decent amounts of right food every 3 hours \n\n"
        : getMeals() == 3
        ? "Moderate Quantity of Meals per day \n\nMeals per day Advice: Increase the Meals per day. Eat decent amounts of right food every 3 hours \n\n"
        : "Good and Ideal Quantity of Meals per day\n\nMeals per day Advice: Really Good but remember of only eating for feeding and not for anything else, besides eat every 3 hours or so \n\n"
    }BMI state: ${bmi_state}\n\nBasal Metabolic Rate: ${bmr}\n\nRecommended calorie intake range: `;
  } else if ((language = "português")) {
    addup5 = "kcal para ";
    addup6 = "kcal \n\n\n\n";
    var message = `Olá, esta é apenas uma forma de guardar todos os dados principais na sua caixa de entrada de email.\n\n Gênero: ${getGender()}\n\n Objetivo: ${getGoal()}\n\n
    Tipo de Corpo: ${getBodyType()}\n\n Idade: ${getAge()}\n\n Peso Atual: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Percentual de Gordura Atual: ${bodyFatPercentage}% \n\nVariação de peso ideal: ${
      unit == "metric"
        ? `${baseIdealWeight.toFixed(1)}kg até ${topIdealWeight.toFixed(
            1
          )}kg\n\nAproximado peso ideal: ${parseFloat(idealWeight).toFixed(
            1
          )}kg\n\n`
        : `${(baseIdealWeight * 2.205).toFixed(1)}lbs até ${(
            topIdealWeight * 2.205
          ).toFixed(1)}lbs\n\n
        Aproximado peso ideal: ${(idealWeight * 2.205).toFixed(1)}lbs\n\n`
    }
    Percentual de Gordura do seu Objetivo: ${
      (idealBodyFatPercentage * 10) / 10
    }% \n\n
    Situação de Exercício: ${
      getExercise() == 1
        ? "Nenhum \n\nConselho de Exercício: Comece a treinar gradualmente até 5-6 dias / semana \n\n"
        : getExercise() == 2
        ? "Muito pouco exercício \n\nConselho de Exercício: Comece a treinar gradualmente até 5-6 dias / semana \n\n"
        : getExercise() == 3
        ? "Exercício moderado \n\nConselho de Exercício: Aumente gradualmente a intensidade e a frequência dos seus treinos \n\n"
        : "Intensidade ideal de exercício\n\nConselho de Exercício: Sempre tome cuidado com a intensidade e certifique-se de que é um exercício difícil o suficiente * para você *\n\n"
    }Situação da alimentação saudável: ${
      getHealthy() == 1
        ? "Nenhuma\n\nConselho de alimentação saudável: Comece a comer gradualmente de forma saudável até 5-6 dias / semana \n\n"
        : getHealthy() == 2
        ? "Alimentação saudável deficiente \n\nConselho de alimentação saudável: Comece a comer gradualmente de forma saudável até 5-6 dias / semana \n\n"
        : getHealthy() == 3
        ? "Alimentação saudável moderada \n\nConselho de alimentação saudável: Mude lentamente seus hábitos de compra de alimentos para que você só tenha comida boa para comer nas quantidades certas \n\n"
        : "Alimetação ideal \n\nConselho de alimentação saudável: Sem palavras, confiante sobre este plano de dieta, apenas saiba comer bem, mas não muito \n\n "
    }Situação da alimentação não saudável: ${
      getCheat() == 4
        ? "Muita alimentação não saudável \n\nConselho sobre alimentação não saudável: Mude gradualmente seus hábitos de compra de alimentos para que você só tenha bons alimentos para comer nas quantidades certas \n\n"
        : getCheat() == 3
        ? "Muita alimentação não saudável \n\nConselho sobre alimentação não saudável: Mude gradualmente seus hábitos de compra de alimentos para que você só tenha bons alimentos para comer nas quantidades certas \n\n"
        : getCheat() == 2
        ? "Alimentação não saudável moderada \n\nConselho sobre alimentação não saudável: Mude gradualmente seus hábitos de compra de alimentos para que você só tenha bons alimentos para comer nas quantidades certas \n\n"
        : "Alimentação não saudável ideal \n\nConselho sobre alimentação não saudável: Nenhum conselho, já é o melhor que pode ser \n\n"
    }Situação de refeições por dia: ${
      getMeals() == 1
        ? "Muito poucas refeições por dia \n\nConselho sobre refeições por dia: Aumente as refeições por dia. Coma quantidades decentes de alimentos certos a cada 3 horas \n\n"
        : getMeals() == 2
        ? "Muito poucas refeições por dia \n\nConselho sobre refeições por dia: Aumente as refeições por dia. Coma quantidades decentes de alimentos certos a cada 3 horas \n\n"
        : getMeals() == 3
        ? "Refeições moderadas por dia \n\nConselho sobre refeições por dia: Aumente as refeições por dia. Coma quantidades decentes de alimentos certos a cada 3 horas \n\n"
        : "Quantidade ideal de refeições por dia\n\nConselho sobre refeições por dia: Muito bom, mas lembre-se de comer apenas para se alimentar e nada mais, além de comer a cada 3 horas, mais ou menos \n\n"
    }Estado do IMC: ${bmi_state}\n\nTaxa metabólica basal: ${bmr}\n\nVariação de Ingestão Calórica Recomendada: `;
  } else if ((language = "français")) {
    addup5 = "kcal à ";
    addup6 = "kcal \n\n\n\n";
    var message = `Bonjour, c'est juste un moyen pour vous d'avoir toutes les données principales résumées enregistrées dans votre boîte de réception.\n\n 
    Genre: ${getGender()}\n\n Objectif: ${getGoal()}\n\n
    Type de corps: ${getBodyType()}\n\n Âge: ${getAge()}\n\n Poids actuel: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Pourcentage de graisse actuel: ${bodyFatPercentage}% \n\nGamme de poids idéale: ${
      unit == "metric"
        ? `${baseIdealWeight.toFixed(1)}kg à ${topIdealWeight.toFixed(
            1
          )}kg\n\nPoids approximatif parfait / idéal: ${parseFloat(
            idealWeight
          ).toFixed(1)}kg\n\n`
        : `${(baseIdealWeight * 2.205).toFixed(1)}lbs à ${(
            topIdealWeight * 2.205
          ).toFixed(1)}lbs\n\n
        Poids approximatif parfait / idéal: ${(idealWeight * 2.205).toFixed(
          1
        )}lbs\n\n`
    }
    Pourcentage de graisse de l'objectif: ${
      (idealBodyFatPercentage * 10) / 10
    }% \n\n
    Situation d'exercice: ${
      getExercise() == 1
        ? "Aucun exercice \n\nConseils d'exercice: Commencez à vous entraîner progressivement jusqu'à 5-6 jours / semaine \n\n"
        : getExercise() == 2
        ? "Trop peu d'exercice \n\nConseils d'exercice: Commencez à vous entraîner progressivement jusqu'à 5-6 jours / semaine \n\n"
        : getExercise() == 3
        ? "Exercice modéré \n\nConseils d'exercice: Augmentez progressivement l'intensité et la fréquence de vos entraînements\n\n"
        : "Intensité d'exercice idéale \n\nConseils d'exercice: Faites toujours attention à l'intensité et assurez-vous que c'est un exercice assez dur * pour vous * \n\n"
    }Situation de bons repas sains: ${
      getHealthy() == 1
        ? "Pas de repas sains\n\nConseils bons / sains: Commencez progressivement à manger sainement jusqu'à 5-6 jours / semaine \n\n"
        : getHealthy() == 2
        ? "Trop peu de repas sains \n\nConseils bons / sains: Commencez progressivement à manger sainement jusqu'à 5-6 jours / semaine \n\n"
        : getHealthy() == 3
        ? "Bons repas modérés \n\nConseils bons / sains: Changez lentement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : "Repas sains idéaux \n\nConseils bons / sains: Sans voix confiant à propos de ce plan de régime, sachez simplement qu'il faut bien manger mais pas trop \n\n"
    }Situation des repas non sains: ${
      getCheat() == 4
        ? "Trop de repas non sains \n\nConseils de repas non sains: Changez progressivement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : getCheat() == 3
        ? "Trop de repas non sains \n\nConseils de repas non sains: Changez progressivement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : getCheat() == 2
        ? "Moderate Cheat Meals \n\nConseils de repas non sains: Changez progressivement vos habitudes d'achat de nourriture afin de ne manger que de la bonne nourriture aux bonnes quantités \n\n"
        : "Quantité idéale de repas non sains \n\nConseils de repas non sains: Aucun conseil, déjà le meilleur possible \n\n"
    }Repas par jour Situation: ${
      getMeals() == 1
        ? "Trop peu de repas par jour \n\nRepas par jour Conseils: Augmentez les repas par jour. Mangez des quantités décentes de bonne nourriture toutes les 3 heures \n\n"
        : getMeals() == 2
        ? "Trop peu de repas par jour \n\nRepas par jour Conseils: Augmentez les repas par jour. Mangez des quantités décentes de bonne nourriture toutes les 3 heures \n\n"
        : getMeals() == 3
        ? "Quantité modérée de repas par jour \n\nRepas par jour Conseils: Augmentez les repas par jour. Mangez des quantités décentes de bonne nourriture toutes les 3 heures \n\n"
        : "Bonne et idéale quantité de repas par jour\n\nRepas par jour Conseils: Vraiment bon mais rappelez-vous de ne manger que pour se nourrir et pas pour autre chose, à part manger toutes les 3 heures environ\n\n"
    }État de l'IMC: ${bmi_state}\n\nLe taux métabolique basal: ${bmr}\n\nPlage d'apport calorique recommandée: `;
  } else if ((language = "español")) {
    addup5 = "kcal a ";
    addup6 = "kcal \n\n\n\n";
    var message = `Hola, esta es solo una manera de tener todos los datos principales resumidos guardados en la bandeja de entrada de su correo electrónico.\n\n 
    Género: ${getGender()}\n\n Objetivo: ${getGoal()}\n\n
    Tipo de Cuerpo: ${getBodyType()}\n\n Edad: ${getAge()}\n\n Peso Actual: ${
      unit == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Porcentaje de grasa actual: ${bodyFatPercentage}% \n\nRango de peso ideal: ${
      unit == "metric"
        ? `${baseIdealWeight.toFixed(1)}kg a ${topIdealWeight.toFixed(
            1
          )}kg\n\nPeso aproximado perfecto / ideal: ${parseFloat(
            idealWeight
          ).toFixed(1)}kg\n\n`
        : `${(baseIdealWeight * 2.205).toFixed(1)}lbs a ${(
            topIdealWeight * 2.205
          ).toFixed(1)}lbs\n\n
        Peso aproximado perfecto / ideal: ${(idealWeight * 2.205).toFixed(
          1
        )}lbs\n\n`
    }
    Porcentaje de grasa del objetivo: ${
      (idealBodyFatPercentage * 10) / 10
    }% \n\n
    Situación del ejercicio: ${
      getExercise() == 1
        ? "No ejercicio \n\nConsejos de ejercicio: Comience a entrenar gradualmente hasta 5-6 días a la semana \n\n"
        : getExercise() == 2
        ? "Muy poco ejercicio \n\nConsejos de ejercicio: Comience a entrenar gradualmente hasta 5-6 días a la semana \n\n"
        : getExercise() == 3
        ? "Ejercicio moderado \n\nConsejos de ejercicio: Aumente gradualmente la intensidad y la frecuencia de sus entrenamientos\n\n"
        : "Intensidad ideal del ejercicio \n\nConsejos de ejercicio: Cuida siempre la intensidad y asegúrate de que sea un ejercicio lo suficientemente duro * para ti * \n\n"
    }Situação da alimentação saudável: ${
      getHealthy() == 1
        ? "Sin comidas saludables\n\nConsejos sobre comidas buenas / saludables: Comience a comer saludable gradualmente hasta 5-6 días a la semana \n\n"
        : getHealthy() == 2
        ? "Muy pocas comidas saludables \n\nConsejos sobre comidas buenas / saludables: Comience a comer saludable gradualmente hasta 5-6 días a la semana \n\n"
        : getHealthy() == 3
        ? "Buenas comidas moderadas \n\nConsejos sobre comidas buenas / saludables: Cambie lentamente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : "Comidas saludables ideales \n\nConsejos sobre comidas buenas / saludables: Confiado sin palabras sobre este plan de dieta, solo sepa comer bien pero no demasiado \n\n"
    }Situação da alimentação não saudável: ${
      getCheat() == 4
        ? "Demasiadas comidas no saludables \n\nConsejos de comidas no saludables: Cambie gradualmente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : getCheat() == 3
        ? "Demasiadas comidas no saludables \n\nConsejos de comidas no saludables: Cambie gradualmente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : getCheat() == 2
        ? "Comidas moderadas no saludables \n\nConsejos de comidas no saludables: Cambie gradualmente sus hábitos de compra de alimentos para que solo obtenga buenos alimentos para comer en las cantidades adecuadas \n\n"
        : "Cantidad ideal de comidas no saludables \n\nConsejos de comidas no saludables: Sin consejos, ya lo mejor que puede ser. \n\n"
    }Situação de refeições por dia: ${
      getMeals() == 1
        ? "Muy pocas comidas al día \n\nComidas por día Consejos: Aumente las Comidas por día. Consuma cantidades decentes de alimentos adecuados cada 3 horas. \n\n"
        : getMeals() == 2
        ? "Muy pocas comidas al día \n\nComidas por día Consejos: Aumente las Comidas por día. Consuma cantidades decentes de alimentos adecuados cada 3 horas. \n\n"
        : getMeals() == 3
        ? "Cantidad moderada de comidas por día \n\nComidas por día Consejos: Aumente las Comidas por día. Consuma cantidades decentes de alimentos adecuados cada 3 horas.\n\n"
        : "Cantidad buena e ideal de comidas por día\n\nComidas por día Consejos: Muy bueno pero recuerda que solo comes para alimentarte y no para nada más, además de comer cada 3 horas, aproximadamente. \n\n"
    }Estado de IMC: ${bmi_state}\n\nTasa metabólica basal: ${bmr}\n\nRango de ingesta calórica recomendado: `;
  }
  if (getGender() == "male") {
    if (getGoal() == "bulking") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.1
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.15
      ).toFixed(0);
      message += addup6;
    } else if (getGoal() == "cutting") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.7
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.8
      ).toFixed(0);
      message += addup6;
    } else if (getGoal() == "surplus") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.7
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.8
      ).toFixed(0);
      message += addup6;
    } else if (getGoal() == "muscle") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.1
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.15
      ).toFixed(0);
      message += addup6;
    }
  } else if (getGender() == "female") {
    if (getGoal() == "bulking") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.05
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.1
      ).toFixed(0);
      message += addup6;
    } else if (getGoal() == "cutting") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.65
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.75
      ).toFixed(0);
      message += addup6;
    } else if (getGoal() == "surplus") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.7
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        0.8
      ).toFixed(0);
      message += addup6;
    } else if (getGoal() == "muscle") {
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.1
      ).toFixed(0);
      message += addup5;
      message += (
        (10 * weight + 625 * height - 5 * getAge() + 5) *
        1.15
      ).toFixed(0);
      message += addup6;
    }
  }
  var finalmessage = encodeURIComponent(message);
  let subject;
  if ((language = "english")) subject = "Fitness Management Program Main Data";
  else if ((language = "português"))
    subject =
      "Dados principais do programa de gestão de condicionamento físico";
  else if ((language = "français"))
    subject = "Données principales du programme de gestion du poids";
  else if ((language = "español"))
    subject = "Datos principales del programa de control de peso";
  let url =
    "mailto:" + getEmail() + "?subject=" + subject + "&body=" + finalmessage;
  window.open(url, "_blank");
}
function getBodyTypeAdvantage() {
  if (
    (getBodyType() == "ecto" && getGoal() == "bulking") ||
    (getBodyType() == "ecto" && getGoal() == "muscle") ||
    (getBodyType() == "endo" && getGoal() == "cutting")
  )
    bodyTypeAdvantage = 0;
  else if (
    (getBodyType() == "ecto" && getGoal() == "cutting") ||
    (getBodyType() == "meso" && getGoal() == "surplus") ||
    (getBodyType() == "endo" && getGoal() == "surplus")
  )
    bodyTypeAdvantage = 1;
  else if (
    (getBodyType() == "ecto" && getGoal() == "surplus") ||
    (getBodyType() == "meso" && getGoal() == "bulking") ||
    (getBodyType() == "meso" && getGoal() == "cutting") ||
    (getBodyType() == "meso" && getGoal() == "muscle") ||
    (getBodyType() == "endo" && getGoal() == "bulking") ||
    (getBodyType() == "endo" && getGoal() == "muscle")
  )
    bodyTypeAdvantage = 2;
}
function getDate() {
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}
function getBodyTypeAdvantageAdviceEcto(bodyTypeAdvantage) {
  if ((language = "english")) {
    if (bodyTypeAdvantage == 2)
      return " Although it may be easier for your body type since you lose fat easier, but you still gotta grind for it!";
    if (bodyTypeAdvantage == 1)
      return " It can get tough for your body type for the muscle-up part, but still totally doable!";
    if (bodyTypeAdvantage == 0)
      return " I know, it is more difficult for your body type but still let´s do it, it will be harder to keep but still, you'll get there!";
  }
  if ((language = "português")) {
    if (bodyTypeAdvantage == 2)
      return " Embora possa ser mais fácil para o seu tipo de corpo, já que você perde gordura com mais facilidade, você ainda precisa trabalhar para isso!";
    if (bodyTypeAdvantage == 1)
      return " Pode ser difícil para o seu tipo de corpo na parte muscular, mas ainda assim é totalmente factível!";
    if (bodyTypeAdvantage == 0)
      return " Eu sei, é mais difícil para o seu tipo de corpo mas ainda vamos fazer, vai ser mais difícil de manter mas mesmo assim, você vai chegar lá!";
  }
  if ((language = "français")) {
    if (bodyTypeAdvantage == 2)
      return " Bien que cela puisse être plus facile pour votre type de corps, car vous perdez de la graisse plus facilement, mais vous devez quand même moudre pour cela!";
    if (bodyTypeAdvantage == 1)
      return " Cela peut être difficile pour votre type de corps pour la partie musculaire, mais cela reste tout à fait faisable!";
    if (bodyTypeAdvantage == 0)
      return " Je sais, c'est plus difficile pour votre type de corps mais faisons-le quand même, ce sera plus difficile à garder mais quand même, vous y arriverez!";
  }
  if ((language = "español")) {
    if (bodyTypeAdvantage == 2)
      return " Aunque puede ser más fácil para tu tipo de cuerpo, ya que pierdes grasa más fácilmente, ¡aún así tienes que esforzarte!";
    if (bodyTypeAdvantage == 1)
      return " Puede ser difícil para tu tipo de cuerpo para la parte de músculos, ¡pero aún así es totalmente factible!";
    if (bodyTypeAdvantage == 0)
      return " Lo sé, es más difícil para tu tipo de cuerpo, pero aún así hagámoslo, será más difícil de mantener, pero aún así, ¡lo lograrás!";
  }
}
function getBodyTypeAdvantageAdviceMeso(bodyTypeAdvantage) {
  if ((language = "english")) {
    if (bodyTypeAdvantage == 2)
      return " Yeah, got it, 'for me its easier' yada yada yada. Well, it's supposed to, but if you don't concentrate and engage on your goal, sorry bro, but if it happens it will take a lot longer, so focus and you will get there.";
    if (bodyTypeAdvantage == 1)
      return " It can get difficult for your body type for the muscle-up part, but still totally doable!";
    if (bodyTypeAdvantage == 0) return " That shouldn't happen! Sry.";
  }
  if ((language = "português")) {
    if (bodyTypeAdvantage == 2)
      return " Sim, entendi, 'para mim é mais fácil' blá blá blá. Bem, é suposto que sim, mas se você não se concentrar e se engajar no seu objetivo, desculpe mano, mas se acontecer vai demorar muito mais, então foque e você vai chegar lá.";
    if (bodyTypeAdvantage == 1)
      return " It can get difficult for your body type for the muscle-up part, but still totally doable!";
    if (bodyTypeAdvantage == 0) return " Isso não deveria acontecer! Desculpa.";
  }
  if ((language = "français")) {
    if (bodyTypeAdvantage == 2)
      return " Ouais, compris, «pour moi, c'est plus facile» yada yada yada. Eh bien, c'est censé le faire, mais si vous ne vous concentrez pas et ne vous engagez pas sur votre objectif, désolé mon frère, mais si cela arrive, cela prendra beaucoup plus de temps, alors concentrez-vous et vous y arriverez.";
    if (bodyTypeAdvantage == 1)
      return " Cela peut devenir difficile pour votre type de corps pour la partie musculaire, mais cela reste tout à fait faisable!";
    if (bodyTypeAdvantage == 0) return " Cela ne devrait pas arriver! Pardon.";
  }
  if ((language = "español")) {
    if (bodyTypeAdvantage == 2)
      return " Sí, lo tengo, 'para mí es más fácil' yada yada yada. Bueno, se supone que debe hacerlo, pero si no te concentras y te comprometes con tu objetivo, lo siento hermano, pero si sucede, tomará mucho más tiempo, así que concéntrate y llegarás allí..";
    if (bodyTypeAdvantage == 1)
      return " Puede ser difícil para tu tipo de cuerpo para la parte de los músculos, ¡pero aún así es totalmente factible!";
    if (bodyTypeAdvantage == 0) return " ¡Eso no debería suceder! Lo siento.";
  }
}
function getBodyTypeAdvantageAdviceEndo(bodyTypeAdvantage) {
  if ((language = "english")) {
    if (bodyTypeAdvantage == 2)
      return " For your body type it may be easier, due to the ease you have to gain muscle, but, still, you gotta grind to accomplish it!";
    if (bodyTypeAdvantage == 1)
      return " It can get difficult for your body type for the muscle-up part, but still totally doable!";
    if (bodyTypeAdvantage == 0)
      return " I know, it is more difficult for your body type but still let´s do it, it will be harder to maintain but still you'll get there! I'm with you in that, I'm an endomorph that craves to cut too.";
  }
  if ((language = "português")) {
    if (bodyTypeAdvantage == 2)
      return " Para o seu tipo de corpo pode ser mais fácil, devido à facilidade que você tem para ganhar músculos, mas, ainda assim, é preciso trincar para conseguir!";
    if (bodyTypeAdvantage == 1)
      return " Pode ser difícil para o seu tipo de corpo na parte muscular, mas ainda assim é totalmente factível!";
    if (bodyTypeAdvantage == 0)
      return " Eu sei, é mais difícil para o seu tipo de corpo, mas mesmo assim vamos fazer, será mais difícil de manter, mas você vai chegar lá! Estou com você nisso, sou um endomorfo que anseia secar também.";
  }
  if ((language = "français")) {
    if (bodyTypeAdvantage == 2)
      return " Pour votre type de corps, cela peut être plus facile, en raison de la facilité don't vous disposez pour gagner du muscle, mais, quand même, vous devez broyer pour y parvenir!";
    if (bodyTypeAdvantage == 1)
      return " Cela peut devenir difficile pour votre type de corps pour la partie musculaire, mais cela reste tout à fait faisable!";
    if (bodyTypeAdvantage == 0)
      return " Je sais, c'est plus difficile pour votre type de corps mais faisons-le quand même, ce sera plus difficile à entretenir mais vous y arriverez quand même! Je suis avec toi, je suis un endomorphe qui aspire aussi à couper.";
  }
  if ((language = "español")) {
    if (bodyTypeAdvantage == 2)
      return " Para tu tipo de cuerpo puede ser más fácil, debido a la facilidad que tienes para ganar músculo, pero, aún así, ¡tienes que esforzarte para lograrlo!";
    if (bodyTypeAdvantage == 1)
      return " Puede ser difícil para tu tipo de cuerpo para la parte de los músculos, ¡pero aún así es totalmente factible!";
    if (bodyTypeAdvantage == 0)
      return " Lo sé, es más difícil para tu tipo de cuerpo, pero aún así hagámoslo, será más difícil de mantener, ¡pero aún así llegarás! Estoy contigo en eso, soy un endomorfo que también anhela secar.";
  }
}
function getBodyTypeAdvantageAdvice() {
  if (getBodyType() == "ecto")
    return getBodyTypeAdvantageAdviceEcto(getBodyTypeAdvantage());
  if (getBodyType() == "meso")
    return getBodyTypeAdvantageAdviceMeso(getBodyTypeAdvantage());
  if (getBodyType() == "endo")
    return getBodyTypeAdvantageAdviceEndo(getBodyTypeAdvantage());
}
function getBodyFat() {
  if (currentBody == 1) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.04;
      topBodyFat = weight * 0.05;
      bodyFatPercentage = 4.5;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.12;
      topBodyFat = weight * 0.14;
      bodyFatPercentage = 13;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 2) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.06;
      topBodyFat = weight * 0.07;
      bodyFatPercentage = 6.5;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.15;
      topBodyFat = weight * 0.17;
      bodyFatPercentage = 16;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 3) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.08;
      topBodyFat = weight * 0.1;
      bodyFatPercentage = 9;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.18;
      topBodyFat = weight * 0.2;
      bodyFatPercentage = 19;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 4) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.11;
      topBodyFat = weight * 0.12;
      bodyFatPercentage = 11.5;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.21;
      topBodyFat = weight * 0.23;
      bodyFatPercentage = 22;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 5) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.13;
      topBodyFat = weight * 0.15;
      bodyFatPercentage = 14;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.24;
      topBodyFat = weight * 0.26;
      bodyFatPercentage = 25;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 6) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.16;
      topBodyFat = weight * 0.19;
      bodyFatPercentage = 17.5;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.27;
      topBodyFat = weight * 0.29;
      bodyFatPercentage = 28;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 7) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.2;
      topBodyFat = weight * 0.24;
      bodyFatPercentage = 22;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.3;
      topBodyFat = weight * 0.35;
      bodyFatPercentage = 32.5;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 8) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.25;
      topBodyFat = weight * 0.3;
      bodyFatPercentage = 27.5;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.36;
      topBodyFat = weight * 0.4;
      bodyFatPercentage = 38;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  } else if (currentBody == 9) {
    if (getGender() == "male") {
      baseBodyFat = weight * 0.35;
      topBodyFat = weight * 0.4;
      bodyFatPercentage = 37.5;
    } else if (getGender() == "female") {
      baseBodyFat = weight * 0.5;
      topBodyFat = weight * 0.5;
      bodyFatPercentage = 50;
    }
    if (getGoal() == "bulking")
      bodyFat = ((topBodyFat + baseBodyFat) / 2).toFixed(1);
    else if (getGoal() == "cutting")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "surplus")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      bodyFat = ((baseBodyFat + topBodyFat) / 2).toFixed(1);
  }
}
function getSuggestedBodyFat() {
  if (goalBody == 1) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.04;
      goalTopBodyFat = idealWeight * 0.05;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 5 + 4) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 4 + 5) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((4 + 5) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((4 + 2 * 5) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.12;
      goalTopBodyFat = idealWeight * 0.14;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 14 + 12) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 12 + 14) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((12 + 14) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((12 + 2 * 14) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 2) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.06;
      goalTopBodyFat = idealWeight * 0.07;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 7 + 6) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 6 + 7) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((6 + 7) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((6 + 2 * 7) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.15;
      goalTopBodyFat = idealWeight * 0.17;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 17 + 15) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 15 + 17) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((15 + 17) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((15 + 2 * 17) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 3) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.08;
      goalTopBodyFat = idealWeight * 0.1;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 10 + 8) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 8 + 10) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((8 + 10) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((8 + 2 * 10) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.18;
      goalTopBodyFat = idealWeight * 0.2;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 20 + 18) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 18 + 20) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((18 + 20) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((18 + 2 * 20) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 4) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.11;
      goalTopBodyFat = idealWeight * 0.12;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 12 + 11) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 11 + 12) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((11 + 12) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((11 + 2 * 12) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.21;
      goalTopBodyFat = idealWeight * 0.23;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 23 + 21) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 21 + 23) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((21 + 23) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((21 + 2 * 23) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 5) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.13;
      goalTopBodyFat = idealWeight * 0.15;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 15 + 13) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 13 + 15) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((13 + 15) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((13 + 2 * 15) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.24;
      goalTopBodyFat = idealWeight * 0.26;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 26 + 24) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 24 + 26) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((24 + 26) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((24 + 2 * 26) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 6) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.16;
      goalTopBodyFat = idealWeight * 0.19;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 19 + 16) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 16 + 19) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((16 + 19) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((16 + 2 * 19) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.27;
      goalTopBodyFat = idealWeight * 0.29;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 29 + 27) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 27 + 29) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((27 + 29) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((27 + 2 * 29) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 7) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.2;
      goalTopBodyFat = idealWeight * 0.24;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 24 + 20) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 20 + 24) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((20 + 24) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((20 + 2 * 24) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.3;
      goalTopBodyFat = idealWeight * 0.35;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 35 + 30) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 30 + 35) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((30 + 35) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((30 + 2 * 35) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 8) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.25;
      goalTopBodyFat = idealWeight * 0.3;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 30 + 25) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 25 + 30) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((25 + 30) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((25 + 2 * 30) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.36;
      goalTopBodyFat = idealWeight * 0.4;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 40 + 36) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 36 + 40) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((36 + 40) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((36 + 2 * 40) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  } else if (goalBody == 9) {
    if (getGender() == "male") {
      goalBaseBodyFat = idealWeight * 0.35;
      goalTopBodyFat = idealWeight * 0.4;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 40 + 35) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 35 + 40) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((35 + 40) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((35 + 2 * 40) / 3).toFixed(1);
    } else if (getGender() == "female") {
      goalBaseBodyFat = idealWeight * 0.5;
      goalTopBodyFat = idealWeight * 0.5;
      if (getGoal() == "bulking")
        idealBodyFatPercentage = ((3 * 50 + 50) / 4).toFixed(1);
      else if (getGoal() == "cutting")
        idealBodyFatPercentage = ((2.5 * 50 + 50) / 3.5).toFixed(1);
      else if (getGoal() == "surplus")
        idealBodyFatPercentage = ((50 + 50) / 2).toFixed(1);
      else if (getGoal() == "muscle")
        idealBodyFatPercentage = ((50 + 2 * 50) / 3).toFixed(1);
    }
    if (getGoal() == "bulking")
      suggestedBodyFat = ((3 * goalTopBodyFat + goalBaseBodyFat) / 4).toFixed(
        1
      );
    else if (getGoal() == "cutting")
      suggestedBodyFat = (
        (2.5 * goalBaseBodyFat + goalTopBodyFat) /
        3.5
      ).toFixed(1);
    else if (getGoal() == "surplus")
      suggestedBodyFat = ((goalBaseBodyFat + goalTopBodyFat) / 2).toFixed(1);
    else if (getGoal() == "muscle")
      suggestedBodyFat = ((goalBaseBodyFat + 2 * goalTopBodyFat) / 3).toFixed(
        1
      );
  }
}

function getBMIstate(bmi) {
  if ((language = "english")) {
    if (bmi < 18.5) return "underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "normal/healthy";
    if (bmi >= 25 && bmi <= 30) return "overweight";
    if (bmi > 30) return "obese";
  }
  if ((language = "português")) {
    if (bmi < 18.5) return "abaixo do peso";
    if (bmi >= 18.5 && bmi <= 24.9) return "normal/saudável";
    if (bmi >= 25 && bmi <= 30) return "sobrepeso";
    if (bmi > 30) return "obeso";
  }
  if ((language = "français")) {
    if (bmi < 18.5) return "poids insuffisant";
    if (bmi >= 18.5 && bmi <= 24.9) return "normal / sain";
    if (bmi >= 25 && bmi <= 30) return "en surpoids";
    if (bmi > 30) return "obèse";
  }
  if ((language = "español")) {
    if (bmi < 18.5) return "bajo peso";
    if (bmi >= 18.5 && bmi <= 24.9) return "normal / saludable";
    if (bmi >= 25 && bmi <= 30) return "exceso de peso";
    if (bmi > 30) return "obeso";
  }
}
function metric() {
  weight = parseFloat(getWeight());
  height = parseFloat(getHeight());
  bmi = weight / height ** 2;
  bmi_state = getBMIstate(bmi);
  idealWeight("kg", 1, weight, height);
}
function imperial() {
  weight = parseFloat((getWeight() / 2.205).toFixed(2));
  height = parseFloat((getHeight() / 39.37).toFixed(2));
  bmi = weight / height ** 2;
  bmi_state = getBMIstate(bmi);
  idealWeight("lbs", 2.205, weight, height);
}
function setCalorieIntake() {
  if ((language = "english")) {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return `Since you trying to bulk, you should try to get a small calorie intake surplus, like 100-300 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.1
        ).toFixed(
          0
        )}kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.15
        ).toFixed(
          0
        )}kcal</strong> besides the calories you burn through exercises.`;
      if (getGoal() == "cutting")
        return `Since you are trying to cut, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, such as breathing, circulation and cell production a day, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.7
        ).toFixed(
          0
        )}kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.8
        ).toFixed(
          0
        )}kcal</strong> besides the calories you burn through exercises. Also you have to have in mind that a good catalyst to all this is training, you can eat more as soon as you burn through exercise, always maintaining that same calorie intake deficit.`;
      if (getGoal() == "surplus")
        return `Since you are trying to lose weight, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.7
        ).toFixed(
          0
        )}kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.8
        ).toFixed(
          0
        )}kcal</strong> besides the calories you burn through exercises.`;
      if (getGoal() == "muscle")
        return `Since you trying to gain weight through mostly muscle, you should try to get a decent calorie intake surplus, like 250-450 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours, once you will get muscle and weight in general you gotta workout, mainly in the gym. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.1
        ).toFixed(
          0
        )}kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.15
        ).toFixed(
          0
        )}kcal</strong> besides the calories you burn through exercises.`;
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return `Since you trying to bulk, you should try to get a small calorie intake surplus, like 100-300 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.05
        ).toFixed(
          0
        )}kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.1
        ).toFixed(
          0
        )}kcal</strong> besides the calories you burn through exercises.`;
      if (getGoal() == "cutting")
        return (
          "Since you are trying to cut, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.65).toFixed(0) +
          "kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.75).toFixed(0) +
          "kcal</strong> besides the calories you burn through exercises. Also you have to have in mind that a good catalyst to all this is training, you can eat more as soon as you burn through exercise, always maintaining that same calorie intake deficit."
        );
      if (getGoal() == "surplus")
        return (
          "Since you are trying to lose weight, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> besides the calories you burn through exercises."
        );
      if (getGoal() == "muscle")
        return (
          "Since you trying to gain weight through mostly muscle, you should try to get a decent calorie intake surplus, like 250-450 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours, once you will get muscle and weight in general you gotta workout, mainly in the gym. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> besides the calories you burn through exercises."
        );
    }
  }
  if ((language = "português")) {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Já que você está tentando aumentar o volume, deve tentar obter um pequeno excedente de ingestão de calorias, como 100-300 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para as funções corporais basais, por dia, como respiração, circulação e a produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que vão desempenhar um grande papel neste seu caminho. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "cutting")
        return (
          "Já que você está tentando secar, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, como respiração, circulação e a produção de células por dia, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios. Também é preciso ter em mente que um bom catalisador para tudo isso é o treinamento, você pode comer mais assim que se queimar com o exercício, mantendo sempre esse mesmo déficit calórico."
        );
      if (getGoal() == "surplus")
        return (
          "Já que você está tentando perder peso, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, tal como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "muscle")
        return (
          "Já que você está tentando ganhar peso principalmente através dos músculos, você deve tentar obter um excedente de ingestão de calorias decente, como 250-450 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que terão um grande papel nesse seu caminho, pois você vai ganhar músculos. e peso em geral você tem que treinar, principalmente na academia. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios."
        );
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Já que você está tentando aumentar o volume, deve tentar obter um pequeno excedente de ingestão de calorias, como 100-300 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para as funções corporais basais, por dia, como respiração, circulação e a produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que vão desempenhar um grande papel neste seu caminho. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.05).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "cutting")
        return (
          "Já que você está tentando secar, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.65).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.75).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios. Também é preciso ter em mente que um bom catalisador para tudo isso é o treinamento, você pode comer mais assim que se queimar com o exercício, mantendo sempre esse mesmo déficit calórico."
        );
      if (getGoal() == "surplus")
        return (
          "Já que você está tentando perder peso, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, tal como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "muscle")
        return (
          "Já que você está tentando ganhar peso principalmente através dos músculos, você deve tentar obter um excedente de ingestão de calorias decente, como 250-450 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que terão um grande papel nesse seu caminho, pois você vai ganhar músculos. e peso em geral você tem que treinar, principalmente na academia. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> além das calorias que você queima com os exercícios."
        );
    }
  }
  if ((language = "français")) {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Puisque vous essayez de prendre du volume, vous devriez essayer d'obtenir un petit surplus d'apport calorique, comme 100 à 300 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour les fonctions basales de votre corps, par jour, comme la respiration, la circulation. et la production cellulaire, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "cutting")
        return (
          "Puisque vous essayez de couper, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, telles que la respiration, la circulation et la production de cellules par jour est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices. Vous devez également garder à l'esprit qu'un bon catalyseur de tout cela est l'entraînement, vous pouvez manger plus dès que vous brûlez en faisant de l'exercice, en maintenant toujours le même déficit calorique."
        );
      if (getGoal() == "surplus")
        return (
          "Puisque vous essayez de perdre du poids, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, un jour, tel comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "muscle")
        return (
          "Puisque vous essayez de prendre du poids principalement par vos muscles, vous devriez essayer d'obtenir un excédent calorique décent, comme 250 à 450 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, par exemple. comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin, une fois que vous aurez du muscle. et le poids en général, vous devez vous entraîner, principalement dans le gymnase. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices."
        );
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Puisque vous essayez de prendre du volume, vous devriez essayer d'obtenir un petit surplus d'apport calorique, comme 100 à 300 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour les fonctions basales de votre corps, par jour, comme la respiration, la circulation. et la production cellulaire, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.05).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "cutting")
        return (
          "Puisque vous essayez de réduire, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est fondamentalement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, comme la respiration, la circulation et la production de cellules, <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.65).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.75).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices. Vous devez également garder à l'esprit qu'un bon catalyseur de tout cela est l'entraînement, vous pouvez manger plus dès que vous brûlez en faisant de l'exercice, en maintenant toujours le même déficit calorique."
        );
      if (getGoal() == "surplus")
        return (
          "Puisque vous essayez de perdre du poids, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, un jour, tel comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "muscle")
        return (
          "Puisque vous essayez de prendre du poids principalement par vos muscles, vous devriez essayer d'obtenir un excédent calorique décent, comme 250 à 450 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, par exemple. comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin, une fois que vous aurez du muscle. et le poids en général, vous devez vous entraîner, principalement dans le gymnase. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> en plus des calories que vous brûlez grâce aux exercices."
        );
    }
  }
  if ((language = "español")) {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Dado que está tratando de aumentar el volumen, debe intentar obtener un pequeño excedente de ingesta de calorías, como 100-300 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, al día, como la respiración, la circulación. y la producción de células, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de menor índice glucémico, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "cutting")
        return (
          "Ya que está tratando de reducir, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, como la respiración, la circulación. y la producción de células al día, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios. También debes tener en cuenta que un buen catalizador de todo esto es el entrenamiento, puedes comer más en cuanto te quemas a través del ejercicio, manteniendo siempre ese mismo déficit de ingesta calórica."
        );
      if (getGoal() == "surplus")
        return (
          "Dado que está tratando de perder peso, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "muscle")
        return (
          "Dado que intenta ganar peso principalmente a través de los músculos, debe tratar de obtener un excedente de ingesta de calorías decente, como 250-450 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de índice glucémico más bajo, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo, una vez que obtengas músculo. y peso en general tienes que hacer ejercicio, principalmente en el gimnasio. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios."
        );
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Dado que está tratando de aumentar el volumen, debe intentar obtener un pequeño excedente de ingesta de calorías, como 100-300 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, al día, como la respiración, la circulación. y la producción de células, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de menor índice glucémico, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.05).toFixed(0) +
          "kcal</strong> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "cutting")
        return (
          "Dado que está tratando de reducir, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, como la respiración, la circulación y la producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.65).toFixed(0) +
          "kcal</strong> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.75).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios. También debes tener en cuenta que un buen catalizador de todo esto es el entrenamiento, puedes comer más en cuanto te quemas a través del ejercicio, manteniendo siempre ese mismo déficit de ingesta calórica."
        );
      if (getGoal() == "surplus")
        return (
          "Dado que está tratando de perder peso, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</strong> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "muscle")
        return (
          "Dado que intenta ganar peso principalmente a través de los músculos, debe tratar de obtener un excedente de ingesta de calorías decente, como 250-450 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</strong>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de índice glucémico más bajo, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo, una vez que obtengas músculo. y peso en general tienes que hacer ejercicio, principalmente en el gimnasio. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</strong> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</strong> además de las calorías que quema con los ejercicios."
        );
    }
  }
}
function setExeciseAdvice() {
  if ((language = "english")) {
    if (getExercise() == 1)
      return " Well, it does not matter what is your goal, your current weight, nor your body type, if you don't exercise, it will be basically impossible for you to reach your goal. It can be run, cycling, powerlifting, or any high-intensity workout you want to do, because it helps you to grow on muscle, burn calories, get rid of water surplus your body can store, plus a lot of health improvements exercising can provide you. The recommended is at least 3-4 times a week, but of course that if you, for example, workout 5 times a week, it won't be bad it will actually help you more, so you know what to do!";
    if (getExercise() == 2)
      return " Well, I suppose, sometimes, you wonder why are you stagnant in the body you're and that you don't like. I can tell you. You are working out too little. Yeah I get it, but it's necessary for you, to get a healthier and prettier body, at least 3-4 high-intensity workouts a week, if you do more, it will still be good and, as a matter of fact, it will be better.";
    if (getExercise() == 3)
      return " Well, you already do the minimal workout frequency for a diet plan, but if you still feel like more can be done in the path of your dream body, you're totally right, then you can do 5, 6 or, if you really want to do this, 7 times a week, the more the better. ";
    if (getExercise() == 4)
      return " Well, that's good. you already do more workouts than required for a regular diet plan. If you want to elevate it even more try doing 7 heavy workouts a week, besides a good diet food plan.";
  }
  if ((language = "português")) {
    if (getExercise() == 1)
      return " Bem, não importa qual é a sua meta, seu peso atual, nem seu tipo de corpo, se você não se exercitar, será basicamente impossível atingir sua meta. Pode ser corrida, ciclismo, levantamento de peso ou qualquer treino de alta intensidade que você queira fazer, porque ajuda a aumentar os músculos, queimar calorias, se livrar do excesso de água que seu corpo pode armazenar, além de muitas melhorias para a saúde que os exercícios podem te fornecer. O recomendado é pelo menos 3-4 vezes por semana, mas é claro que se você, por exemplo, treinar 5 vezes por semana, não será ruim, na verdade irá ajudá-lo mais, então você sabe o que fazer!";
    if (getExercise() == 2)
      return " Bem, suponho que, às vezes, você se pergunte por que está estagnado no corpo que está e de que não gosta. Eu posso te contar. Você está malhando muito pouco. Sim, entendi, mas é necessário para você ter um corpo mais saudável e bonito, pelo menos 3-4 treinos de alta intensidade por semana, se você fizer mais, ainda será bom e, na verdade, é será melhor.";
    if (getExercise() == 3)
      return " Bem, você já faz a frequência mínima de treino para um plano de dieta, mas se ainda sente que mais pode ser feito no caminho do seu corpo de sonho, você está totalmente certo, então você pode fazer 5, 6 ou, se você realmente quero fazer isso, 7 vezes por semana, quanto mais, melhor. ";
    if (getExercise() == 4)
      return " Bem, isso é bom. você já faz mais exercícios do que o necessário para um plano de dieta regular. Se quiser elevá-la ainda mais experimente fazer 7 treinos pesados por semana, além de um bom plano alimentar dietético.";
  }
  if ((language = "français")) {
    if (getExercise() == 1)
      return " Eh bien, peu importe votre objectif, votre poids actuel ou votre type de corps, si vous ne faites pas d'exercice, il vous sera pratiquement impossible d'atteindre votre objectif. Il peut s'agir de course, de cyclisme, de dynamophilie ou de tout entraînement de haute intensité que vous souhaitez faire, car il vous aide à développer vos muscles, à brûler des calories, à vous débarrasser du surplus d'eau que votre corps peut stocker, ainsi que de nombreuses améliorations de la santé que l'exercice peut vous fournir. Le recommandé est au moins 3 à 4 fois par semaine, mais bien sûr, si vous vous entraînez, par exemple, 5 fois par semaine, ce ne sera pas mal, cela vous aidera davantage, alors vous savez quoi faire!";
    if (getExercise() == 2)
      return " Eh bien, je suppose que parfois, vous vous demandez pourquoi vous stagnez dans le corps que vous et que vous n'aimez pas. Je peux vous dire. Vous travaillez trop peu. Ouais je comprends, mais c'est nécessaire pour toi, pour avoir un corps plus sain et plus joli, au moins 3-4 séances d'entraînement de haute intensité par semaine, si tu en fais plus, ce sera toujours bon et, en fait, ça sera mieux.";
    if (getExercise() == 3)
      return " Eh bien, vous faites déjà la fréquence minimale d'entraînement pour un régime alimentaire, mais si vous pensez toujours que plus peut être fait sur le chemin de votre corps de rêve, vous avez tout à fait raison, alors vous pouvez faire 5, 6 ou, si vous vraiment veulent faire cela, 7 fois par semaine, plus il y en a, mieux c'est. ";
    if (getExercise() == 4)
      return " Bon, c'est bien. vous faites déjà plus de séances d'entraînement que nécessaire pour un régime alimentaire régulier. Si vous voulez l'augmenter encore plus, essayez de faire 7 séances d'entraînement intensives par semaine, en plus d'un bon régime alimentaire.";
  }
  if ((language = "español")) {
    if (getExercise() == 1)
      return " Bueno, no importa cuál sea tu objetivo, tu peso actual ni tu tipo de cuerpo, si no haces ejercicio, será básicamente imposible que lo alcance. Puede ser correr, andar en bicicleta, levantar pesas o cualquier entrenamiento de alta intensidad que desee hacer, ya que le ayuda a desarrollar músculo, quemar calorías, eliminar el exceso de agua que su cuerpo puede almacenar, además de muchas mejoras para la salud que puede hacer el ejercicio. proporcionarle. Lo recomendado es al menos 3-4 veces a la semana, pero por supuesto que si, por ejemplo, haces ejercicio 5 veces a la semana, no será malo, en realidad te ayudará más, ¡así que sabes qué hacer!";
    if (getExercise() == 2)
      return " Bueno, supongo que a veces te preguntas por qué estás estancado en el cuerpo que eres y que no te gusta. Te puedo decir. Está haciendo muy poco ejercicio. Sí, lo entiendo, pero es necesario para ti, para tener un cuerpo más sano y bonito, al menos 3-4 entrenamientos de alta intensidad a la semana, si haces más, seguirá siendo bueno y, de hecho, será será mejor.";
    if (getExercise() == 3)
      return " Bueno, ya tiene la frecuencia mínima de entrenamiento para un plan de dieta, pero si todavía siente que se puede hacer más en el camino del cuerpo de sus sueños, tiene toda la razón, entonces puede hacer 5, 6 o, si realmente lo desea. quiero hacer esto, 7 veces a la semana, cuanto más, mejor. ";
    if (getExercise() == 4)
      return " Bueno, eso es bueno. ya haces más entrenamientos de los necesarios para un plan de dieta regular. Si quieres elevarlo aún más intenta hacer 7 entrenamientos pesados a la semana, además de un buen plan alimenticio dietético.";
  }
}
function setHealthyAdvice() {
  if ((language = "english")) {
    if (getHealthy() == 1)
      return " I probably shouldn't believe you, but I will. Please, you have to have complete meals, nutrient wise, besides healthy food in it like salad, good protein, choosing cleverly between 'similar options', for example, on weekdays choose chicken breast over red meat. But on weekends don't put everything to lose but free yourself to eat something you like more. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    if (getHealthy() == 2)
      return " That's ok, but still, you need more healthy and complete, nutrient wise, meal days a week, like salad, good protein, choosing cleverly between 'similar options', for example, on weekdays choose chicken breast over red meat. But on weekends don't put everything to lose but free yourself to eat something you like more. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    if (getHealthy() == 3)
      return " You have a decent frequency of good meal days a week but I think that you can complete 5 days a week of it, this way you will have more nutrients on your blood, and then you are going to start seeing the effects on your body shortly. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    if (getHealthy() == 4)
      return " It's good that you have a good healthy meal day frequency, this will help you a lot on your path to your body goal. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
  }
  if ((language = "português")) {
    if (getHealthy() == 1)
      return " Eu provavelmente não deveria acreditar em você, mas vou. Por favor, você tem que fazer refeições completas, em termos de nutrientes, além de alimentos saudáveis como salada, boa proteína, escolhendo habilmente entre 'opções semelhantes', por exemplo, nos dias de semana prefira peito de frango à carne vermelha. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    if (getHealthy() == 2)
      return " Tudo bem, mas ainda assim, você precisa de refeições mais saudáveis e completas, em termos de nutrientes, dias de refeição por semana, como salada, boa proteína, escolher habilmente entre 'opções semelhantes', por exemplo, nos dias de semana escolha peito de frango em vez de carne vermelha. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    if (getHealthy() == 3)
      return " Você tem uma frequência decente de bons dias de refeição por semana, mas eu acho que você pode completar 5 dias por semana, assim você terá mais nutrientes no seu sangue, e então você começará a ver os efeitos no seu corpo em breve . Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    if (getHealthy() == 4)
      return " É bom que você tenha uma boa frequência de refeições saudáveis, isso vai te ajudar muito no seu caminho para o seu objetivo corporal. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
  }
  if ((language = "français")) {
    if (getHealthy() == 1)
      return " Je ne devrais probablement pas te croire, mais je le ferai. S'il vous plaît, vous devez avoir des repas complets, en termes de nutriments, en plus des aliments sains comme une salade, de bonnes protéines, en choisissant intelligemment entre des options similaires '', par exemple, en semaine, choisissez la poitrine de poulet plutôt que la viande rouge. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    if (getHealthy() == 2)
      return " Ce n'est pas grave, mais vous avez quand même besoin de repas plus sains et complets, en termes de nutriments, chaque semaine, comme une salade, de bonnes protéines, en choisissant intelligemment entre des options similaires '', par exemple, en semaine, choisissez la poitrine de poulet plutôt que la viande rouge. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    if (getHealthy() == 3)
      return " Vous avez une fréquence décente de bons repas jours par semaine, mais je pense que vous pouvez en terminer 5 jours par semaine, de cette façon, vous aurez plus de nutriments dans votre sang, et ensuite vous allez commencer à voir les effets sur votre corps sous peu. . Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    if (getHealthy() == 4)
      return " Il est bon que vous ayez une bonne fréquence quotidienne de repas sains, cela vous aidera beaucoup sur votre chemin vers votre objectif corporel. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
  }
  if ((language = "español")) {
    if (getHealthy() == 1)
      return " Probablemente no debería creerte, pero lo haré. Por favor, debe tener comidas completas, en cuanto a nutrientes, además de alimentos saludables como ensaladas, buenas proteínas, eligiendo inteligentemente entre 'opciones similares', por ejemplo, los días de semana elija pechuga de pollo sobre carne roja. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    if (getHealthy() == 2)
      return " Está bien, pero aún así, necesita días de comida a la semana más saludables y completos, en cuanto a nutrientes, como ensalada, buenas proteínas, eligiendo inteligentemente entre 'opciones similares', por ejemplo, los días de semana elija pechuga de pollo en lugar de carne roja. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    if (getHealthy() == 3)
      return " Tienes una frecuencia decente de buenos días de comida a la semana, pero creo que puedes completar 5 días a la semana, de esta manera tendrás más nutrientes en tu sangre y luego comenzarás a ver los efectos en tu cuerpo en breve. . Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    if (getHealthy() == 4)
      return " Es bueno que tengas una buena frecuencia diaria de comidas saludables, esto te ayudará mucho en tu camino hacia tu objetivo corporal. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
  }
}
function setCheatAdvice() {
  if ((language = "english")) {
    if (getCheat() == 1)
      return " It's good that you have a practically null cheat meal regularity, this will be helpful in your path to your body goal.";
    if (getCheat() == 2)
      return " You have a decent frequency cheat meal days a week but I think that you can shorten it to 1 cheat meal day a week of it, this way you will have more ease on maintaining your diet plan and sustaining it you are going to start seeing the effects on your body shortly.";
    if (getCheat() == 3)
      return " That's ok, but still, you need to shorten the number of cheat meals you eat try to only do it on weekends and when you feel like it, try doing it only on Sundays. But on weekends don't put everything to lose but free yourself to eat something you like more.";
    if (getCheat() == 4)
      return " You need to gradually shorten the number of cheat meals you eat, because that enormous amount of cheat meals are not good at all for your health, therefore try doing it only on Fridays, Saturdays, and Sundays, then when you feel like it, try to only do it on weekends and when you feel like it, try doing it only on Sundays. But on weekends don't put everything to lose but free yourself to eat something you like more.";
  }
  if ((language = "português")) {
    if (getCheat() == 1)
      return " É bom que você tenha uma regularidade de refeição de trapaça praticamente nula, isso será útil em seu caminho para seu objetivo corporal.";
    if (getCheat() == 2)
      return " Você tem uma frequência decente de refeições diárias por semana, mas acho que pode encurtá-la para 1 refeição diária normal por semana, dessa forma você terá mais facilidade em manter seu plano de dieta e sustentá-lo, você começará a ver o efeitos em seu corpo em breve.";
    if (getCheat() == 3)
      return " Tudo bem, mas ainda assim, você precisa encurtar o número de cheats que você faz, tente fazer apenas nos finais de semana e quando quiser, tente fazer apenas aos domingos. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais.";
    if (getCheat() == 4)
      return " Você precisa diminuir gradativamente o número de refeições casuais que você faz, porque essa quantidade enorme de refeições casuais não faz bem à sua saúde, portanto, tente fazê-lo apenas às sextas, sábados e domingos, então quando tiver vontade, tente para fazer apenas nos finais de semana e quando quiser, tente fazer apenas aos domingos. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais.";
  }
  if ((language = "français")) {
    if (getCheat() == 1)
      return " Il est bon que vous ayez une régularité de repas malsains pratiquement nulle, cela vous sera utile sur votre chemin vers votre objectif corporel.";
    if (getCheat() == 2)
      return " Vous avez une fréquence de repas de triche décente jours par semaine, mais je pense que vous pouvez le raccourcir à 1 repas de triche par semaine, de cette façon, vous aurez plus de facilité à maintenir votre régime alimentaire et à le maintenir, vous allez commencer à voir le effets sur votre corps sous peu.";
    if (getCheat() == 3)
      return " C'est correct, mais quand même, vous devez réduire le nombre de repas de triche que vous mangez, essayez de ne le faire que le week-end et lorsque vous en avez envie, essayez de le faire uniquement le dimanche. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus.";
    if (getCheat() == 4)
      return " Vous devez réduire progressivement le nombre de repas de triche que vous mangez, car cette énorme quantité de repas de triche n'est pas du tout bonne pour votre santé, essayez donc de le faire uniquement les vendredis, samedis et dimanches, puis quand vous en avez envie, essayez pour ne le faire que le week-end et quand vous en avez envie, essayez de le faire uniquement le dimanche. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus.";
  }
  if ((language = "español")) {
    if (getCheat() == 1)
      return " Es bueno que tengas una regularidad de comidas poco saludables que sea prácticamente nula, esto te será útil en tu camino hacia tu meta corporal.";
    if (getCheat() == 2)
      return " Tiene una frecuencia decente para hacer trampas los días de la semana, pero creo que puede acortarla a 1 comida trampa al día a la semana, de esta manera tendrá más facilidad para mantener su plan de dieta y mantenerlo, comenzará a ver el efectos en su cuerpo en breve.";
    if (getCheat() == 3)
      return " Eso está bien, pero aún así, debes acortar la cantidad de comidas trampa que comes, intenta hacerlo solo los fines de semana y, cuando te apetezca, intenta hacerlo solo los domingos. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más.";
    if (getCheat() == 4)
      return " Necesita acortar gradualmente la cantidad de comidas trampa que come, porque esa enorme cantidad de comidas trampa no es nada bueno para su salud, por lo tanto, intente hacerlo solo los viernes, sábados y domingos, luego, cuando lo desee, intente a hacerlo solo los fines de semana y cuando te apetezca, intenta hacerlo solo los domingos. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más.";
  }
}
function setMealsAdvice() {
  if ((language = "english")) {
    if (getMeals() == 1)
      return " I know how that goes, you think, and i did too, that if you eat less you lose fat, but that is not necessarily the case. If you eat the right amount of the right food 5-6 times a day you will lose more fat and if you maintain a good protein ingestion in every meal, you will also make more muscle out of it.";
    if (getMeals() == 2)
      return " I know how that goes, you think, and i did too, that if you eat less you lose fat, but that is not necessarily the case. If you eat the right amount of the right food 5-6 times a day you will lose more fat and if you maintain a good protein ingestion in every meal, you will also make more muscle out of it.";
    if (getMeals() == 3)
      return " Your eating frequency is decent but you should try to eat at least once more through the day, and always eating healthy with a good portion of proteins and moderate portions of carbohydrates";
    if (getMeals() == 4)
      return " That's ideal, always eat healthy with 3-hour intervals for better muscle gain and fat loss.";
  }
  if ((language = "português")) {
    if (getMeals() == 1)
      return " Sei o que acontece, você pensa, e eu também, que se comer menos perderá gordura, mas não é necessariamente o caso. Se você comer a quantidade certa da comida certa 5-6 vezes ao dia, perderá mais gordura e se mantiver uma boa ingestão de proteína em todas as refeições, também ganhará mais músculos.";
    if (getMeals() == 2)
      return " Sei o que acontece, você pensa, e eu também, que se comer menos perderá gordura, mas não é necessariamente o caso. Se você comer a quantidade certa da comida certa 5-6 vezes ao dia, perderá mais gordura e se mantiver uma boa ingestão de proteína em todas as refeições, também ganhará mais músculos.";
    if (getMeals() == 3)
      return " Sua frequência alimentar é decente, mas você deve tentar comer pelo menos mais uma vez ao longo do dia, e sempre comendo saudável com uma boa porção de proteínas e porções moderadas de carboidratos";
    if (getMeals() == 4)
      return " Isso é ideal, sempre alimente-se de forma saudável com intervalos de 3 horas para melhor ganho muscular e perda de gordura.";
  }
  if ((language = "français")) {
    if (getMeals() == 1)
      return " Je sais comment ça se passe, vous pensez, et moi aussi, que si vous mangez moins, vous perdez du gras, mais ce n'est pas forcément le cas. Si vous mangez la bonne quantité de la bonne nourriture 5 à 6 fois par jour, vous perdrez plus de graisse et si vous maintenez une bonne ingestion de protéines à chaque repas, vous en tirerez également plus de muscle..";
    if (getMeals() == 2)
      return " Je sais comment ça se passe, vous pensez, et moi aussi, que si vous mangez moins, vous perdez du gras, mais ce n'est pas forcément le cas. Si vous mangez la bonne quantité de la bonne nourriture 5 à 6 fois par jour, vous perdrez plus de graisse et si vous maintenez une bonne ingestion de protéines à chaque repas, vous en tirerez également plus de muscle..";
    if (getMeals() == 3)
      return " Votre fréquence d'alimentation est correcte, mais vous devriez essayer de manger au moins une fois de plus dans la journée et toujours manger sainement avec une bonne portion de protéines et des portions modérées de glucides.";
    if (getMeals() == 4)
      return " C'est idéal, mangez toujours sainement avec des intervalles de 3 heures pour un meilleur gain musculaire et une meilleure perte de graisse.";
  }
  if ((language = "español")) {
    if (getMeals() == 1)
      return " Sé cómo va eso, piensas, y yo también, que si comes menos pierdes grasa, pero ese no es necesariamente el caso. Si come la cantidad correcta de la comida adecuada 5-6 veces al día, perderá más grasa y si mantiene una buena ingesta de proteínas en cada comida, también hará más músculo con ella.";
    if (getMeals() == 2)
      return " Sé cómo va eso, piensas, y yo también, que si comes menos pierdes grasa, pero ese no es necesariamente el caso. Si come la cantidad correcta de la comida adecuada 5-6 veces al día, perderá más grasa y si mantiene una buena ingesta de proteínas en cada comida, también hará más músculo con ella.";
    if (getMeals() == 3)
      return " Su frecuencia de alimentación es decente, pero debe intentar comer al menos una vez más durante el día, y siempre comer sano con una buena porción de proteínas y porciones moderadas de carbohidratos.";
    if (getMeals() == 4)
      return " Eso es ideal, siempre coma sano con intervalos de 3 horas para una mejor ganancia muscular y pérdida de grasa..";
  }
}
function setLinks() {
  if ((language = "english"))
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link to a whole food health tool</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link to a food calorie by general group</a>',
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link to a Harvard page about exercise calories</a>',
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link to best apps for workout advice</a>",
    ];
  if ((language = "português"))
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link a uma ferramenta de saúde alimentar completa</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link a uma caloria alimentar por grupo geral</a>',
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link a uma página de Harvard sobre calorias de exercícios</a>',
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link para os melhores aplicativos para conselhos de treino</a>",
    ];
  if ((language = "français"))
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link vers un outil de santé alimentaire complet</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link vers une calorie alimentaire par groupe général</a>',
      "<a id='finallink' href='https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities' target='_blank'>Link vers une page de Harvard sur les calories d'exercice</a>",
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Lien vers les meilleures applications pour obtenir des conseils d'entraînement</a>",
    ];
  if ((language = "español"))
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link a una herramienta de salud alimentaria integral</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link a una caloría alimentaria por grupo general</a>',
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link a una página de Harvard sobre las calorías del ejercicio</a>',
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link a las mejores aplicaciones para obtener consejos sobre ejercicios</a>",
    ];
}
function setGoalDistance() {
  let goalBodyDistance = getCurrentBody() - getGoalBody();
  if ((language = "english")) {
    if (goalBodyDistance == 1)
      return " Also, you are really close to your goal, which means that with focus and determination your run towards your goal will be short!";
    if (goalBodyDistance == 2)
      return " Also, you are close to your goal, which means that with focus and determination your run towards your goal will be short!";
    if (goalBodyDistance == 3)
      return " Also, you are not far from your goal, take ownership of your path and you'll get there soon!";
    if (goalBodyDistance == 4)
      return " It will be a bit difficult but with focus, besides the right training and diet, you'll get there!";
    if (goalBodyDistance == 5)
      return " It will be difficult but with focus, besides the right training and diet, you'll get there!";
    if (goalBodyDistance == 6)
      return " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
    if (goalBodyDistance == 7)
      return " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
    if (goalBodyDistance == 8)
      return " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
  }
  if ((language = "português")) {
    if (goalBodyDistance == 1)
      return " Além disso, você está muito perto de seu objetivo, o que significa que com foco e determinação sua corrida em direção ao objetivo será curta!";
    if (goalBodyDistance == 2)
      return " Além disso, você está perto de seu objetivo, o que significa que com foco e determinação sua corrida em direção ao objetivo será curta!";
    if (goalBodyDistance == 3)
      return " Além disso, você não está longe de seu objetivo, tome posse de seu caminho e você chegará lá em breve!";
    if (goalBodyDistance == 4)
      return " Vai ser um pouco difícil, mas com foco, além do treino e da dieta corretos, você vai chegar lá!";
    if (goalBodyDistance == 5)
      return " Vai ser difícil, mas com foco, além do treino e da dieta corretos, você vai chegar lá!";
    if (goalBodyDistance == 6)
      return " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
    if (goalBodyDistance == 7)
      return " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
    if (goalBodyDistance == 8)
      return " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
  }
  if ((language = "français")) {
    if (goalBodyDistance == 1)
      return " De plus, vous êtes très proche de votre objectif, ce qui signifie qu'avec concentration et détermination, votre course vers votre objectif sera courte!";
    if (goalBodyDistance == 2)
      return " De plus, vous êtes proche de votre objectif, ce qui signifie qu'avec de la concentration et de la détermination, votre course vers votre objectif sera courte!";
    if (goalBodyDistance == 3)
      return " Aussi, vous n'êtes pas loin de votre objectif, prenez en main votre chemin et vous y arriverez bientôt!";
    if (goalBodyDistance == 4)
      return " Ce sera un peu difficile mais avec de la concentration, en plus du bon entraînement et du bon régime, vous y arriverez!";
    if (goalBodyDistance == 5)
      return " Ce sera difficile mais avec de la concentration, en plus du bon entraînement et du bon régime, vous y arriverez!";
    if (goalBodyDistance == 6)
      return " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
    if (goalBodyDistance == 7)
      return " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
    if (goalBodyDistance == 8)
      return " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
  }
  if ((language = "español")) {
    if (goalBodyDistance == 1)
      return " Además, estás muy cerca de tu objetivo, lo que significa que con concentración y determinación, ¡tu carrera hacia tu objetivo será corta!";
    if (goalBodyDistance == 2)
      return " Además, estás cerca de tu objetivo, lo que significa que con concentración y determinación, ¡tu carrera hacia tu objetivo será corta!";
    if (goalBodyDistance == 3)
      return " Además, no está lejos de su objetivo, tome posesión de su camino y ¡llegará pronto!";
    if (goalBodyDistance == 4)
      return " Será un poco difícil, pero con concentración, además del entrenamiento y la dieta adecuados, ¡lo lograrás!";
    if (goalBodyDistance == 5)
      return " Será difícil, pero con concentración, además del entrenamiento y la dieta adecuados, ¡lo lograrás!";
    if (goalBodyDistance == 6)
      return " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
    if (goalBodyDistance == 7)
      return " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
    if (goalBodyDistance == 8)
      return " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
  }
}
function setGoalAdvices() {
  if ((language = "english")) {
    if (getGoal() == "bulking")
      return [
        " Since you are trying to bulk, you should focus the most on weight training, better with an instructor but it works anyway. Try increasing the weights and decreasing the movement speed. At your will for losing weight try some exercises like running, cycling, and so on. ",
        " For bulking, You should eat well, a lot of protein, a good portion of carbohydrates. And you should always try to have a slight calorie intake surplus. Your menu varies between eggs, protein shakes, chicken, meat and so on. Besides salads, fruits and vegetables.",
      ];
    if (getGoal() == "cutting")
      return [
        " Since you are trying to cut, you should focus on weight training, better with an instructor but it works anyway, for having the athletic shape, and also some exercises like running, cycling, and so on. Try increasing the weights and decreasing the movement speed, while in the gym workout, and try to increase the difficulty of the aerobic exercises gradually, every workout day.",
        " For cutting, You should eat in a controlled way, but with a good portion of proteins, not much carbohydrates and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit. ",
      ];
    if (getGoal() == "surplus")
      return [
        " Since you are trying to lose weight, you should focus on weight training and aerobic exercises, better with an instructor but it works anyway, for having the better shape. Try increasing the weights and decreasing the movement speed, while in the gym workout, and try to increase the difficulty of the aerobic exercises gradually, every workout day.",
        " For losing weight, You should eat in a controlled way, but with a decent portion of proteins, not much carbohydrates and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Since you are trying to muscle-up, you should focus on weight training, better with an instructor but it works anyway, for having the better shape. Try increasing the weights and decreasing the movement speed, while in the gym workout.",
        " For gaining weight, You should eat in a controlled way, but with a good portion of proteins and carbohydrates, and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit.",
      ];
  }
  if ((language = "português")) {
    if (getGoal() == "bulking")
      return [
        " Já que você está tentando ganhar massa, você deve se concentrar mais no treinamento com pesos, melhor com um instrutor, mas funciona de qualquer maneira. Experimente aumentar os pesos e diminuir a velocidade do movimento. Quando desejar, para perder peso, experimente alguns exercícios como corrida, ciclismo e assim por diante. ",
        " Para aumentar, você deve comer bem, muita proteína, uma boa porção de carboidratos. E você deve sempre tentar ter um pequeno excedente de ingestão de calorias. Seu menu varia entre ovos, shakes de proteína, frango, carne e assim por diante. Além de saladas, frutas e vegetais.",
      ];
    if (getGoal() == "cutting")
      return [
        " Já que você está tentando secar, você deve focar no treinamento com pesos, melhor com um instrutor, mas funciona mesmo assim, para ter a forma atlética, e também alguns exercícios como corrida, ciclismo e assim por diante. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante a malhação, e tente aumentar a dificuldade dos exercícios aeróbicos gradativamente, a cada dia de treino.",
        " Para secar, deve comer de forma controlada, mas com uma boa porção de proteínas, não muito carbohidratos e claro os nossos entes queridos: salada, fruta e vegetais. Mas você deve ter um déficit de ingestão de calorias. ",
      ];
    if (getGoal() == "surplus")
      return [
        " Já que você está tentando emagrecer, você deve focar no musculação e exercícios aeróbicos, melhor com um instrutor, mas funciona mesmo assim, para ter uma melhor forma. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante a ginástica, e tente aumentar a dificuldade dos exercícios aeróbicos gradativamente, a cada dia de treino.",
        " Para emagrecer, deve comer de forma controlada, mas com uma porção decente de proteínas, sem muitos carbohidratos e claro os nossos entes queridos: salada, fruta e vegetais. Mas você deve ter um déficit de ingestão calórica. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Já que você está tentando ganhar músculos, você deve se concentrar no treinamento com pesos, melhor com um instrutor, mas funciona de qualquer maneira, para ter a melhor forma. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante o treino de ginásio.",
        " Para ganhar peso, você deve comer de forma controlada, mas com uma boa porção de proteínas e carboidratos e, claro, nossos entes queridos: salada, frutas e vegetais. Mas você deve ter um déficit de ingestão calórica.",
      ];
  }
  if ((language = "français")) {
    if (getGoal() == "bulking")
      return [
        " Puisque vous essayez de prendre du volume, vous devriez vous concentrer le plus sur la musculation, mieux avec un instructeur, mais cela fonctionne quand même. Essayez d'augmenter les poids et de réduire la vitesse de déplacement. À votre guise pour perdre du poids, essayez des exercices comme la course à pied, le cyclisme, etc. ",
        " Pour le gonflement, vous devez bien manger, beaucoup de protéines, une bonne portion de glucides. Et vous devriez toujours essayer d'avoir un léger surplus d'apport calorique. Votre menu varie entre les œufs, les boissons protéinées, le poulet, la viande, etc. Outre les salades, les fruits et légumes.",
      ];
    if (getGoal() == "cutting")
      return [
        " Puisque vous essayez de couper, vous devriez vous concentrer sur la musculation, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la forme athlétique, et aussi certains exercices comme la course, le cyclisme, etc. Essayez d'augmenter les poids et de réduire la vitesse de mouvement, pendant que vous vous entraînez au gymnase, et essayez d'augmenter progressivement la difficulté des exercices d'aérobie, chaque jour d'entraînement.",
        " Pour la découpe, il faut manger de manière contrôlée, mais avec une bonne portion de protéines, peu de glucides et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique.",
      ];
    if (getGoal() == "surplus")
      return [
        " Puisque vous essayez de perdre du poids, vous devriez vous concentrer sur la musculation et les exercices d'aérobie, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la meilleure forme. Essayez d'augmenter les poids et de réduire la vitesse de mouvement, pendant que vous vous entraînez au gymnase, et essayez d'augmenter progressivement la difficulté des exercices d'aérobie, chaque jour d'entraînement.",
        " Pour perdre du poids, vous devez manger de manière contrôlée, mais avec une bonne portion de protéines, pas beaucoup de glucides et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Puisque vous essayez de vous muscler, vous devriez vous concentrer sur la musculation, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la meilleure forme. Essayez d'augmenter les poids et de réduire la vitesse de mouvement pendant que vous vous entraînez au gymnase.",
        " Pour prendre du poids, vous devez manger de manière contrôlée, mais avec une bonne portion de protéines et de glucides, et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique.",
      ];
  }
  if ((language = "español")) {
    if (getGoal() == "bulking")
      return [
        " Dado que está tratando de aumentar el volumen, debe concentrarse más en el entrenamiento con pesas, mejor con un instructor, pero de todos modos funciona. Intente aumentar los pesos y disminuir la velocidad de movimiento. Si desea perder peso, pruebe algunos ejercicios como correr, andar en bicicleta, etc. ",
        " Para aumentar el volumen, debes comer bien, mucha proteína, una buena porción de carbohidratos. Y siempre debe intentar tener un ligero exceso de ingesta calórica. Su menú varía entre huevos, batidos de proteínas, pollo, carne, etc. Además de ensaladas, frutas y verduras.",
      ];
    if (getGoal() == "cutting")
      return [
        " Ya que estás tratando desecar, debes enfocarte en el entrenamiento con pesas, mejor con un instructor pero de todos modos funciona, para tener la forma atlética, y también algunos ejercicios como correr, andar en bicicleta, etc. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras está en el gimnasio, e intente aumentar la dificultad de los ejercicios aeróbicos gradualmente, todos los días de entrenamiento.",
        " Parasecar, conviene comer de forma controlada, pero con una buena porción de proteínas, poco carbohidratos y por supuesto nuestros seres queridos: ensalada, frutas y verduras. Pero deberías tener un déficit de ingesta de calorías.. ",
      ];
    if (getGoal() == "surplus")
      return [
        " Ya que estás tratando de perder peso, debes concentrarte en el entrenamiento con pesas y ejercicios aeróbicos, mejor con un instructor pero de todos modos funciona, para tener la mejor forma. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras está en el gimnasio, y trate de aumentar la dificultad de los ejercicios aeróbicos gradualmente, todos los días de entrenamiento.",
        " Para adelgazar, conviene comer de forma controlada, pero con una buena porción de proteínas, poco carbohidratos y por supuesto nuestros seres queridos: ensalada, frutas y verduras. Pero debería tener un déficit de ingesta de calorías. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Ya que estás tratando de hacer musculación, debes concentrarte en el entrenamiento con pesas, mejor con un instructor pero de todos modos funciona, para tener la mejor forma. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras hace ejercicio en el gimnasio.",
        " Para subir de peso, conviene comer de forma controlada, pero con una buena porción de proteínas y carbohidratos, y por supuesto de nuestros seres queridos: ensalada, frutas y verduras. Pero deberías tener un déficit de ingesta de calorías..",
      ];
  }
}
//downloaded file message formation
function setDownloadableFileData() {
  let downloadResult;
  if ((language = "english"))
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Well <big style="font-family: Kaushan Script, cursive;">`;
  else if ((language = "português"))
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bem <big style="font-family: Kaushan Script, cursive;">`;
  else if ((language = "français"))
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bien <big style="font-family: Kaushan Script, cursive;">`;
  else if ((language = "español"))
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">¡Bueno! <big style="font-family: Kaushan Script, cursive;">`;

  downloadResult += `${getName()}</big><br>${setBodyTypeAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${getBodyTypeAdvantageAdvice()}${setGoalDistance()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setAgeAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${finalIdealWeightMsg}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setExeciseAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${
    setGoalAdvices()[0]
  }</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setHealthyAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setCheatAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setMealsAdvice()}${
    setGoalAdvices()[1]
  }</h3>${
    getEmotion() == "yes"
      ? `<br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${emotionAnswer}</h3>`
      : ""
  }<br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setCalorieIntake()}</h3><br><h4><i>${
    setLinks()[0]
  }</i></h4><br><h4><i>${setLinks()[1]}</i></h4><br><h4><i>${
    setLinks()[2]
  }</i></h4><br><h4><i>${setLinks()[3]}</i></h4></span>`;
  return downloadResult;
}

// result function
// all processing
function result() {
  idFooter.style.display = "none";
  getSuggestedBodyFat();
  getBodyFat();
  if (unit == "metric") metric();
  else if (unit == "imperial") imperial();
  setDownloadableFileData();
  resultTransition();
  storage();
}

const setLocalData = (idUser) => {
  contentArray.push({
    idUser,
    inputName: getName(),
    email: getEmail(),
    age: getAge(),
    language,
    theme,
    gender: getGender(),
    bodyTypeAdvice: setBodyTypeAdvice(),
    bodyTypeAdvantageAdvice: getBodyTypeAdvantageAdvice(),
    goalDistance: setGoalDistance(),
    ageAdvice: setAgeAdvice(),
    finalIdealWeightMsg,
    exerciseAdvice: setExeciseAdvice(),
    goalAdvice: setGoalAdvices()[0],
    healthyAdvice: setHealthyAdvice(),
    cheatAdvice: setCheatAdvice(),
    mealsAdvice: setMealsAdvice(),
    goalAdvice2: setGoalAdvices()[1],
    emotionAnswer,
    calorieIntakeAdvice: setCalorieIntake(),
    calorieCounterLink: setLinks()[0],
    caloriesLink: setLinks()[1],
    exerciseCaloriesLink: setLinks()[2],
    fitnessAppsLink: setLinks()[3],
    day: getDate(),
  });
  localStorage.setItem("contentArray", JSON.stringify(contentArray));
};
const storage = () =>
  JSON.parse(sessionStorage.getItem("tryNumber")) == 1
    ? setLocalData(1)
    : setLocalData(2);

let timeGaps = 0;
function resultTransition() {
  let timeInterval;
  let counter = 0;
  idBar.style.display = "block";
  const num = document.querySelectorAll(".number");
  setInterval(() => {
    if (counter == 5) h4Config.innerHTML = `${processing}.`;
    if (counter == 10) h4Config.innerHTML = `${processing}..`;
    if (counter == 15) h4Config.innerHTML = `${processing}...`;
    if (counter == 20) h4Config.innerHTML = `${processing}`;
    if (counter == 25) h4Config.innerHTML = `${processing}.`;
    if (counter == 30) h4Config.innerHTML = `${processing}..`;
    if (counter == 35) h4Config.innerHTML = `${processing}...`;
    if (counter == 40) h4Config.innerHTML = `${resultPossibilities}`;
    if (counter == 45) h4Config.innerHTML = `${resultPossibilities}.`;
    if (counter == 50) h4Config.innerHTML = `${resultPossibilities}..`;
    if (counter == 55) h4Config.innerHTML = `${resultPossibilities}...`;
    if (counter == 60) h4Config.innerHTML = `${resultPossibilities}`;
    if (counter == 65) h4Config.innerHTML = `${resultPossibilities}.`;
    if (counter == 70) h4Config.innerHTML = `${resultPossibilities}..`;
    if (counter == 75) h4Config.innerHTML = `${resultPossibilities}...`;
    if (counter == 80) h4Config.innerHTML = `${diagnosis}.`;
    if (counter == 85) h4Config.innerHTML = `${diagnosis}..`;
    if (counter == 90) h4Config.innerHTML = `${diagnosis}...`;
    if (counter == 95) h4Config.innerHTML = `${done}`;
    if (counter == 100) {
      timeInterval = setInterval(resultTime, 1);
      linkTitlea.setAttribute("href", "");
      titleLink.setAttribute("href", "");
      clearInterval();
    } else num.textContent = ++counter + "%";
  }, 200);
  if (
    (timeGaps === 0 && counter >= 100) ||
    (timeGaps === 0 && h4Config.innerHTML == "Done")
  )
    timeInterval = setInterval(() => resultTime(timeInterval), 1);
  if (timeGaps > 1500000) clearInterval(timeInterval);
}
function resultTime(timeInterval) {
  if (timeGaps > 1500000) clearInterval(timeInterval);
  if (timeGaps == 100) {
    idBar.style.display = "none";
    finalResultH3Id.style.display = "block";
    finalResultH3Id.innerHTML = resultBeginning;
    finalResultH3Id.innerHTML += `${getName()}</big>, ${setBodyTypeAdvice()}`;
  }
  timeGaps += 1;
  if (timeGaps == 1500)
    finalResultH3Id.innerHTML += `${getBodyTypeAdvantageAdvice()}${setGoalDistance()}<br><br>`;
  if (timeGaps == 2000)
    finalResultH3Id.innerHTML += `${setAgeAdvice()}<br><br>`;
  if (timeGaps == 3000)
    finalResultH3Id.innerHTML += `${finalIdealWeightMsg}<br><br>`;
  if (timeGaps == 4000)
    finalResultH3Id.innerHTML += `${setExeciseAdvice()}<br><br>`;
  if (timeGaps == 5000)
    finalResultH3Id.innerHTML += `${setGoalAdvices()[0]}<br><br>`;
  if (timeGaps == 6000)
    finalResultH3Id.innerHTML += `${setHealthyAdvice()}<br><br>`;
  if (timeGaps == 7000)
    finalResultH3Id.innerHTML += `${setCheatAdvice()}<br><br>`;
  if (timeGaps == 8000)
    finalResultH3Id.innerHTML += `${setMealsAdvice()}<br><br>${
      setGoalAdvices()[1]
    }<br><br>`;
  if (timeGaps == 10000 && getEmotion() == "yes")
    finalResultH3Id.innerHTML += `${emotionAnswer}<br><br>`;
  if (timeGaps == 11000)
    finalResultH3Id.innerHTML += `${setCalorieIntake()}<br><br><br>`;
  if (timeGaps == 12000) {
    finalResultH4Id.innerHTML = "";
    finalResultH4Id.style.display = "block";
    finalResultH4Id.innerHTML += `<i>${setLinks()[0]}<br><br>${
      setLinks()[1]
    }<br><br>${setLinks()[2]}<br><br>${setLinks()[3]}</i><br><br><br>`;
  }
  if (timeGaps == 13000) {
    finalResultH2Id.style.display = "block";
    if (!JSON.parse(sessionStorage.getItem("emailIn")))
      emailLinkColor.innerHTML = ``;
  }
  if (timeGaps == 14000) {
    idFooter.style.position = "relative";
    idFooter.style.marginBottom = "0";
    idFooter.style.display = "block";
  }
}
