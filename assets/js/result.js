let language = sessionStorage.getItem("language");
let contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [];
let colorDownload = "#1F3B4D",
  backgroundColorDownload = "#12232A",
  processing,
  emotionAnswer,
  diagnosis,
  done,
  resultPossibilities,
  weightManagementProgramFinalResult,
  resultBeginning,
  topIdealWeight,
  idealWeight,
  bmi_state,
  bmr;
export {
  backgroundColorDownload,
  colorDownload,
  emotionAnswer,
  resultBeginning,
  weightManagementProgramFinalResult,
};

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
  result();
});

function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  weightManagementProgramFinalResult =
    "Fitness_Management_Program_Final_Result.html";
  emailLinkColor.innerHTML =
    "<strong style='cursor:pointer;'>Want to have a email sent to you with the main result data? Click here!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong style='cursor:pointer;'>Want to have a new document with all this last pages data? Click here!!</strong>";
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
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
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
    "<strong style='cursor:pointer;'>Deseja receber um e-mail com os principais dados do resultado? Clique aqui!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong style='cursor:pointer;'>Quer ter um novo documento com todos esses dados da última página? Clique aqui!!</strong>";
  emotionAnswer =
    'Para esse problema de comer demais emocionalmente, você deve tentar algumas maneiras de reduzi-lo, como: tente responder à pergunta, estou realmente com fome ou estou tentando comer minhas emoções ?; além disso, você deve tentar se acalmar com algumas técnicas de respiração, meditação ou ioga para reduzir o estresse; tente lutar contra o tédio encontrando um novo hobby, ou algo que "desperte" a vontade o faça de se levantar de manhã; não descarte a possibilidade de ver um terapeuta para ajudá-lo em mais áreas do que você pode imaginar; E para lutar contra a tentação, recompense-se periodicamente com uma dose de um alimento que você goste, talvez a cada 15% -25% de todo o caminho percorrido, assim você aprenderá a moderar a quantidade que ingere e assim tornar mais fácil para você manter seu corpo em forma quando você atingir seu objetivo.';
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
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
    "<strong style='cursor:pointer;'>Vous souhaitez recevoir un e-mail contenant les principales données de résultat? Cliquez ici!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong style='cursor:pointer;'>Vous voulez avoir un nouveau document avec toutes ces dernières pages de données? Cliquez ici!!</strong>";
  emotionAnswer =
    "Pour ce problème émotionnel de suralimentation, vous devriez essayer quelques moyens de le réduire comme: essayez de répondre à la question, ai-je vraiment faim ou est-ce que j'essaye de manger mes émotions ?; à part cela, vous devriez essayer de vous calmer avec des techniques de respiration, de méditation ou de yoga pour réduire le stress; essayez de lutter contre l'ennui en trouvant un nouveau passe-temps, ou quelque chose qui «réveille» la volonté de se lever le matin; ne pas écarter la possibilité de voir un thérapeute pour vous aider dans plus de domaines que vous ne pouvez l'imaginer; Et pour lutter contre la tentation, récompensez-vous périodiquement avec une dose d'un aliment que vous aimez, peut-être tous les 15% à 25% du chemin parcouru, de cette façon vous apprendrez à modérer la quantité que vous mangez et ainsi vous faciliterez le maintien. votre corps en forme lorsque vous atteignez votre objectif.";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
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
    "<strong style='cursor:pointer;'>¿Quiere que le envíen un correo electrónico con los principales datos de resultados? ¡¡Haga clic aquí!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong style='cursor:pointer;'>¿Quieres tener un nuevo documento con todos los datos de estas últimas páginas? ¡¡Haga clic aquí!!</strong>";
  emotionAnswer =
    'Para este problema emocional de comer en exceso, debe probar algunas formas de reducirlo, como: intente responder la pregunta, ¿tengo mucha hambre o estoy tratando de comerme mis emociones ?; aparte de eso, debes intentar calmarte con algunas técnicas de respiración, meditación o yoga para reducir el estrés; intenta luchar contra el aburrimiento encontrando un nuevo pasatiempo, o algo que  "despierte " la voluntad de levantarse por la mañana; no descarte la posibilidad de ver a un terapeuta para que le ayude en más áreas de las que pueda imaginar; Y para combatir la tentación, recompénsate periódicamente con una dosis de un alimento que te guste, tal vez cada 15% -25% de todo el camino recorrido, de esta forma aprenderás a moderar la cantidad que comes y así te será más fácil mantenerlo. tu cuerpo en forma cuando alcances tu objetivo.';
}
function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
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
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  colorDownload = "azure";
  backgroundColorDownload = "#12232A";
  divPushCircleId.style.backgroundColor = "#12232A";
  finalResultH3Id.style.color = "azure";
  document.getElementById("downloadLinkColor").style.color = "lightgreen";
  document.getElementById("emailLinkColor").style.color = "pink";
}
// global import
let getters = import("./modules/global/fieldGetter.js");
// //variable getters
const { getEmail } = await getters;
const { getAge } = await getters;
const { getBodyType } = await getters;
const { getCheat } = await getters;
const { getExercise } = await getters;
const { getGender } = await getters;
const { getUnit } = await getters;
const { getGoal } = await getters;
const { getHealthy } = await getters;
const { getMeals } = await getters;

export async function sendEmail() {
  let { weight, height } = await import("./modules/result/units.js");
  let { idealBodyFatPercentage } = await import(
    "./modules/result/variableSetters.js"
  );
  let { bodyFatPercentage } = await import(
    "./modules/result/variableSetters.js"
  );
  let { baseIdealWeight } = await import("./modules/result/idealWeight.js");
  let addup5, addup6;
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

const storage = () =>
  import("./modules/result/storage.js").then(({ setLocalData }) =>
    setLocalData(JSON.parse(sessionStorage.getItem("tryNumber")))
  );

function resultTransition() {
  let counter = 0;
  idBar.style.display = "block";
  const num = document.querySelector(".number");
  let counterInterval = setInterval(() => {
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
    if (counter >= 100) {
      import("./modules/result/resultAnimation.js").then(({ printResult }) =>
        printResult()
      );
      clearInterval(counterInterval);
    } else num.innerText = ++counter + "%";
  }, 200);
}
async function result() {
  idFooter.style.display = "none";
  await import("./modules/result/units.js").then(({ metric, imperial }) =>
    getUnit() == "metric" ? metric() : imperial()
  );
  await import("./modules/result/variableSetters.js").then(
    ({ getSuggestedBodyFat, getBodyFat }) => {
      getSuggestedBodyFat();
      getBodyFat();
    }
  );
  await import("./modules/result/downloadInfo.js").then(
    ({ setDownloadableFileData }) => setDownloadableFileData()
  );
  await resultTransition();
  storage();
}

downloadLinkColor.addEventListener("click", () =>
  import("./modules/result/downloadInfo.js").then(({ downloadData }) =>
    downloadData()
  )
);
emailLinkColor.addEventListener("click", () =>
  import("./modules/result/emailInfo.js").then(({ sendConfirm }) =>
    sendConfirm()
  )
);
