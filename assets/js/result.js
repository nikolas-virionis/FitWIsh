language = sessionStorage.getItem("language");
let colorDownload = "#1F3B4D",
  backgroundColorDownload = "#12232A",
  contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [],
  processing,
  diagnosis,
  done,
  resultPossibilities,
  weightManagementProgramFinalResult,
  resultBeginning,
  baseIdealWeight,
  topIdealWeight,
  idealWeight,
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
  setLanguage(sessionStorage.getItem("language"));
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  result();
});

function english() {
  import("./modules/language.js").then(({ english: defaultEnglish }) =>
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
  import("./modules/language.js").then(({ português: defaultPortuguês }) =>
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
  import("./modules/language.js").then(({ français: defaultFrançais }) =>
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
  import("./modules/language.js").then(({ español: defaultEspañol }) =>
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
  import("./modules/theme.js").then(({ themeTypeLight: defaultLight }) =>
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
  import("./modules/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  colorDownload = "azure";
  backgroundColorDownload = "#12232A";
  divPushCircleId.style.backgroundColor = "#12232A";
  finalResultH3Id.style.color = "azure";
  document.getElementById("downloadLinkColor").style.color = "lightgreen";
  document.getElementById("emailLinkColor").style.color = "pink";
}
// global imports
import * as getters from "./modules/fieldGetter.js";
import * as advices from "./modules/advices.js";
//variable getters
const getEmotion = getters.getEmotion;
const getName = getters.getName;
const getEmail = getters.getEmail;
const getAge = getters.getAge;
const getWeight = getters.getWeight;
const getHeight = getters.getHeight;
const getBodyType = getters.getBodyType;
const getCheat = getters.getCheat;
const getExercise = getters.getExercise;
const getGender = getters.getGender;
const getUnit = getters.getUnit;
const getGoal = getters.getGoal;
const getHealthy = getters.getHealthy;
const getCurrentBody = getters.getCurrentBody;
const getGoalBody = getters.getGoalBody;
const getMeals = getters.getMeals;

//advice functions
const setBodyTypeAdvice = advices.setBodyTypeAdvice;
const setAgeAdvice = advices.setAgeAdvice;
const getBodyTypeAdvantageAdvice = advices.getBodyTypeAdvantageAdvice;
const setCalorieIntake = advices.setCalorieIntake;
const setExerciseAdvice = advices.setExerciseAdvice;
const setHealthyAdvice = advices.setHealthyAdvice;
const setCheatAdvice = advices.setCheatAdvice;
const setMealsAdvice = advices.setMealsAdvice;
const setGoalDistance = advices.setGoalDistance;
const setGoalAdvices = advices.setGoalAdvices;
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
    if (language == "english") {
      idealWeightMsgPunctuation = ", and ";
      idealWeightMsgBmiState = lbs + " distant from a normal&healthy state.";
      if (bmi_state == "underweight")
        advicedWeight = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "overweight" || bmi_state == "obese")
        advicedWeight = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if (language == "português") {
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
    } else if (language == "français") {
      idealWeightMsgPunctuation = ", et ";
      idealWeightMsgBmiState = lbs + " éloigné d'un état normal et sain.";
      if (bmi_state == "poids insuffisant")
        advicedWeight = (18.5 * height ** 2 - weight).toFixed(1);
      else if (bmi_state == "en surpoids" || bmi_state == "obèse")
        advicedWeight = ((weight - 24.9 * height ** 2) * lb).toFixed(1);
    } else if (language == "español") {
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
  if (language == "english") {
    idealWeightMsg = `Your ideal weight is, approximately, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</big>, being between the range of <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</big> and <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</big>, and therefore you are <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</big> apart from your ideal body, which has <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</big> of fat, and therefore, your ideal body fat percentage is <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</big>, as long as your current weight is <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</big>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</big> of which equals fat, and thus, your body fat percentage, right now, is around <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</big>, and according to WHO's body mass index, you are currently <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</big>`;
  } else if (language == "português") {
    idealWeightMsg = `Seu peso ideal é, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</big>, sendo entre <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</big> e <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</big>, e assim você está <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</big> distante do seu corpo ideal, que tem <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</big> de gordura, e assim, seu percentual de gordura ideal é <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</big>, já que seu peso atual é <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</big>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</big> desse de gordura e dessa forma seu percentual de gordura, agora, é, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</big>, e de acordo com o indice de massa corporal da OMS você esta atualmente em <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</big>`;
  } else if (language == "français") {
    idealWeightMsg = `Votre poids idéal est, environ, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</big>, se situant entre la gamme de <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</big> et <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</big>, et donc tu es <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</big> en dehors de votre corps idéal, qui a <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</big> de graisse, et par conséquent, votre pourcentage de graisse corporelle idéal est <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</big>, tant que votre poids actuel est <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</big>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</big> don't est égal à la graisse, et donc, votre pourcentage de graisse corporelle, actuellement, est d'environ <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</big>, et selon l'indice de masse corporelle de l'OMS, vous êtes actuellement <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</big>`;
  } else if (language == "español") {
    idealWeightMsg = `Tu peso ideal es, aproximadamente, <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeight * lb).toFixed(1) + lbs
    }</big>, estar entre el rango de <big style='font-family: Kaushan Script, cursive;' >${
      (baseIdealWeight * lb).toFixed(1) + lbs
    }</big> y <big style='font-family: Kaushan Script, cursive;' >${
      (topIdealWeight * lb).toFixed(1) + lbs
    }</big>, y por lo tanto eres <big style='font-family: Kaushan Script, cursive;' >${
      (idealWeightDistance * lb).toFixed(1) + lbs
    }</big> aparte de tu cuerpo ideal, que tiene <big style='font-family: Kaushan Script, cursive;' >${
      (((idealBodyFat * 10) / 1000) * lb).toFixed(1) + lbs
    }</big> de grasa y, por lo tanto, su porcentaje ideal de grasa corporal es <big style='font-family: Kaushan Script, cursive;' >${
      (idealBodyFatPercentage * 10) / 10
    }%</big>, siempre que su peso actual sea <big style='font-family: Kaushan Script, cursive;' >${
      (weight * lb).toFixed(1) + lbs
    }</big>, <big style='font-family: Kaushan Script, cursive;' >${
      (((bodyFatPercentage * weight) / 100) * lb).toFixed(1) + lbs
    }</big> de los cuales es igual a grasa y, por lo tanto, su porcentaje de grasa corporal, en este momento, es de alrededor <big style='font-family: Kaushan Script, cursive;' >${bodyFatPercentage}%</big>, y según el índice de masa corporal de la OMS, actualmente <big style='font-family: Kaushan Script, cursive;' >${bmi_state}</big>`;
  }
  finalIdealWeightMsg = idealWeightMsg;
  finalIdealWeightMsg += idealWeightMsgPunctuation;
  finalIdealWeightMsg += advicedWeight;
  finalIdealWeightMsg += idealWeightMsgBmiState;
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
  if (language == "english")
    redirectemail = confirm(
      "Are you sure you want to receive a main result email?"
    );
  else if (language == "português")
    redirectemail = confirm(
      "Tem certeza de que deseja receber um e-mail de resultado principal?"
    );
  else if (language == "français")
    redirectemail = confirm(
      "Voulez-vous vraiment recevoir un e-mail de résultat principal?"
    );
  else if (language == "español")
    redirectemail = confirm(
      "¿Está seguro de que desea recibir un correo electrónico con el resultado principal?"
    );
  if (redirectemail) sendEmail();
}
//more email sending information
function sendEmail() {
  if (language == "english") {
    addup5 = "kcal to ";
    addup6 = "kcal \n\n\n\n";
    var message = `Hi, this is just a way for you to have all the main data summed up saved in your email inbox.\n\n Gender: ${getGender()}\n\n Goal: ${getGoal()}\n\n
    getBodyType(): ${getBodyType()}\n\n Age: ${getAge()}\n\n Current Weight: ${
      getUnit() == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Current fat percentage: ${bodyFatPercentage}% \n\nIdeal weight range: ${
      getUnit() == "metric"
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
  } else if (language == "português") {
    addup5 = "kcal para ";
    addup6 = "kcal \n\n\n\n";
    var message = `Olá, esta é apenas uma forma de guardar todos os dados principais na sua caixa de entrada de email.\n\n Gênero: ${getGender()}\n\n Objetivo: ${getGoal()}\n\n
    Tipo de Corpo: ${getBodyType()}\n\n Idade: ${getAge()}\n\n Peso Atual: ${
      getUnit() == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Percentual de Gordura Atual: ${bodyFatPercentage}% \n\nVariação de peso ideal: ${
      getUnit() == "metric"
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
  } else if (language == "français") {
    addup5 = "kcal à ";
    addup6 = "kcal \n\n\n\n";
    var message = `Bonjour, c'est juste un moyen pour vous d'avoir toutes les données principales résumées enregistrées dans votre boîte de réception.\n\n 
    Genre: ${getGender()}\n\n Objectif: ${getGoal()}\n\n
    Type de corps: ${getBodyType()}\n\n Âge: ${getAge()}\n\n Poids actuel: ${
      getUnit() == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Pourcentage de graisse actuel: ${bodyFatPercentage}% \n\nGamme de poids idéale: ${
      getUnit() == "metric"
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
  } else if (language == "español") {
    addup5 = "kcal a ";
    addup6 = "kcal \n\n\n\n";
    var message = `Hola, esta es solo una manera de tener todos los datos principales resumidos guardados en la bandeja de entrada de su correo electrónico.\n\n 
    Género: ${getGender()}\n\n Objetivo: ${getGoal()}\n\n
    Tipo de Cuerpo: ${getBodyType()}\n\n Edad: ${getAge()}\n\n Peso Actual: ${
      getUnit() == "metric"
        ? `${weight}kg \n\n`
        : `${(weight * 2.205).toFixed(2)}lbs \n\n`
    } Porcentaje de grasa actual: ${bodyFatPercentage}% \n\nRango de peso ideal: ${
      getUnit() == "metric"
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
  if (language == "english") subject = "Fitness Management Program Main Data";
  else if (language == "português")
    subject =
      "Dados principais do programa de gestão de condicionamento físico";
  else if (language == "français")
    subject = "Données principales du programme de gestion du poids";
  else if (language == "español")
    subject = "Datos principales del programa de control de peso";
  let url =
    "mailto:" + getEmail() + "?subject=" + subject + "&body=" + finalmessage;
  window.open(url, "_blank");
}
function getDate() {
  let date = new Date();
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}
function getBodyTypeAdvantage() {
  if (
    (getBodyType() == "ecto" && getGoal() == "bulking") ||
    (getBodyType() == "ecto" && getGoal() == "muscle") ||
    (getBodyType() == "endo" && getGoal() == "cutting")
  )
    return 0;
  else if (
    (getBodyType() == "ecto" && getGoal() == "cutting") ||
    (getBodyType() == "meso" && getGoal() == "surplus") ||
    (getBodyType() == "endo" && getGoal() == "surplus")
  )
    return 1;
  else if (
    (getBodyType() == "ecto" && getGoal() == "surplus") ||
    (getBodyType() == "meso" && getGoal() == "bulking") ||
    (getBodyType() == "meso" && getGoal() == "cutting") ||
    (getBodyType() == "meso" && getGoal() == "muscle") ||
    (getBodyType() == "endo" && getGoal() == "bulking") ||
    (getBodyType() == "endo" && getGoal() == "muscle")
  )
    return 2;
}

function getBodyFat() {
  if (getCurrentBody() == 1) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.04;
      topBodyFat = getWeight() * 0.05;
      bodyFatPercentage = 4.5;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.12;
      topBodyFat = getWeight() * 0.14;
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
  } else if (getCurrentBody() == 2) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.06;
      topBodyFat = getWeight() * 0.07;
      bodyFatPercentage = 6.5;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.15;
      topBodyFat = getWeight() * 0.17;
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
  } else if (getCurrentBody() == 3) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.08;
      topBodyFat = getWeight() * 0.1;
      bodyFatPercentage = 9;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.18;
      topBodyFat = getWeight() * 0.2;
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
  } else if (getCurrentBody() == 4) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.11;
      topBodyFat = getWeight() * 0.12;
      bodyFatPercentage = 11.5;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.21;
      topBodyFat = getWeight() * 0.23;
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
  } else if (getCurrentBody() == 5) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.13;
      topBodyFat = getWeight() * 0.15;
      bodyFatPercentage = 14;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.24;
      topBodyFat = getWeight() * 0.26;
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
  } else if (getCurrentBody() == 6) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.16;
      topBodyFat = getWeight() * 0.19;
      bodyFatPercentage = 17.5;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.27;
      topBodyFat = getWeight() * 0.29;
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
  } else if (getCurrentBody() == 7) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.2;
      topBodyFat = getWeight() * 0.24;
      bodyFatPercentage = 22;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.3;
      topBodyFat = getWeight() * 0.35;
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
  } else if (getCurrentBody() == 8) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.25;
      topBodyFat = getWeight() * 0.3;
      bodyFatPercentage = 27.5;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.36;
      topBodyFat = getWeight() * 0.4;
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
  } else if (getCurrentBody() == 9) {
    if (getGender() == "male") {
      baseBodyFat = getWeight() * 0.35;
      topBodyFat = getWeight() * 0.4;
      bodyFatPercentage = 37.5;
    } else if (getGender() == "female") {
      baseBodyFat = getWeight() * 0.5;
      topBodyFat = getWeight() * 0.5;
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
  if (getGoalBody() == 1) {
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
  } else if (getGoalBody() == 2) {
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
  } else if (getGoalBody() == 3) {
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
  } else if (getGoalBody() == 4) {
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
  } else if (getGoalBody() == 5) {
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
  } else if (getGoalBody() == 6) {
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
  } else if (getGoalBody() == 7) {
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
  } else if (getGoalBody() == 8) {
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
  } else if (getGoalBody() == 9) {
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
  if (language == "english") {
    if (bmi < 18.5) return "underweight";
    if (bmi >= 18.5 && bmi <= 24.9) return "normal/healthy";
    if (bmi >= 25 && bmi <= 30) return "overweight";
    if (bmi > 30) return "obese";
  }
  if (language == "português") {
    if (bmi < 18.5) return "abaixo do peso";
    if (bmi >= 18.5 && bmi <= 24.9) return "normal/saudável";
    if (bmi >= 25 && bmi <= 30) return "sobrepeso";
    if (bmi > 30) return "obeso";
  }
  if (language == "français") {
    if (bmi < 18.5) return "poids insuffisant";
    if (bmi >= 18.5 && bmi <= 24.9) return "normal / sain";
    if (bmi >= 25 && bmi <= 30) return "en surpoids";
    if (bmi > 30) return "obèse";
  }
  if (language == "español") {
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

function setLinks() {
  if (language == "english")
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link to a whole food health tool</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link to a food calorie by general group</a>',
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link to a Harvard page about exercise calories</a>',
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link to best apps for workout advice</a>",
    ];
  if (language == "português")
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link a uma ferramenta de saúde alimentar completa</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link a uma caloria alimentar por grupo geral</a>',
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link a uma página de Harvard sobre calorias de exercícios</a>',
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link para os melhores aplicativos para conselhos de treino</a>",
    ];
  if (language == "français")
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link vers un outil de santé alimentaire complet</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link vers une calorie alimentaire par groupe général</a>',
      "<a id='finallink' href='https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities' target='_blank'>Link vers une page de Harvard sur les calories d'exercice</a>",
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Lien vers les meilleures applications pour obtenir des conseils d'entraînement</a>",
    ];
  if (language == "español")
    return [
      '<a id="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >Link a una herramienta de salud alimentaria integral</a>',
      '<a id="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >Link a una caloría alimentaria por grupo general</a>',
      '<a id="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">Link a una página de Harvard sobre las calorías del ejercicio</a>',
      "<a id='finallink' href='https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps' target='_blank'>Link a las mejores aplicaciones para obtener consejos sobre ejercicios</a>",
    ];
}

//downloaded file message formation
function setDownloadableFileData() {
  let downloadResult;
  if (language == "english")
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; text-align: center"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Well <big style="font-family: Kaushan Script, cursive;">`;
  else if (language == "português")
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex;  text-align: center"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bem <big style="font-family: Kaushan Script, cursive;">`;
  else if (language == "français")
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex;  text-align: center"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">Bien <big style="font-family: Kaushan Script, cursive;">`;
  else if (language == "español")
    downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex;  text-align: center"><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">¡Bueno! <big style="font-family: Kaushan Script, cursive;">`;

  downloadResult += `${getName()}</big><br>${setBodyTypeAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${getBodyTypeAdvantageAdvice()}${setGoalDistance()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setAgeAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${finalIdealWeightMsg}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${setExerciseAdvice()}</h3><br><h3 style="color:#1F3B4D; font-family: Quicksand, sans-serif; font-weight:150;">${
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
  if (getUnit() == "metric") metric();
  else if (getUnit() == "imperial") imperial();
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
    exerciseAdvice: setExerciseAdvice(),
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
  const num = document.querySelector(".number");
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
    } else num.innerText = ++counter + "%";
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
    finalResultH3Id.innerHTML += `${setExerciseAdvice()}<br><br>`;
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
  if (timeGaps == 13000) finalResultH2Id.style.display = "block";
  if (timeGaps == 14000) {
    idFooter.style.position = "relative";
    idFooter.style.marginBottom = "0";
    idFooter.style.display = "block";
  }
}
