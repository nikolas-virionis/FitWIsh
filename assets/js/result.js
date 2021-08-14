let language = sessionStorage.getItem("language");
let colorDownload = "#1F3B4D",
  backgroundColorDownload = "#12232A",
  processing,
  emotionAnswer,
  diagnosis,
  done,
  resultPossibilities,
  weightManagementProgramFinalResult,
  resultBeginning;
export {
  backgroundColorDownload,
  colorDownload,
  emotionAnswer,
  resultBeginning,
  weightManagementProgramFinalResult,
};
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

export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/result/languages/${language}.js`).then(
    ({ translations }) => {
      weightManagementProgramFinalResult = translations.fileName;
      emailLinkColor.innerHTML = translations.email;
      downloadLinkColor.innerHTML = translations.download;
      emotionAnswer = translations.emotion;
      h4Config.innerHTML = translations.processing;
      processing = translations.processing;
      diagnosis = translations.diagnosis;
      resultPossibilities = translations.result;
      done = translations.done;
      resultBeginning = translations.resultBeginning;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/result/themes/${theme}.js`).then(
    ({ colorSwitch }) => {
      backgroundColorDownload = colorSwitch.backgroundColor;
      divPushCircleId.style.backgroundColor = colorSwitch.backgroundColor;
      colorDownload = colorSwitch.colorDownload;
      finalResultH3Id.style.color = colorSwitch.colorDownload;
      downloadLinkColor.style.color = colorSwitch.download;
      emailLinkColor.style.color = colorSwitch.email;
    }
  );
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
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
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  result();
});

// result function
// all processing
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
  storage();
  resultTransition();
}
export async function sendEmail() {
  let { weight, height, bmi_state } = await import("./modules/result/units.js");
  let { translations } = await import(
    `./modules/goal/languages/${language}.js`
  );
  let { translations: genders } = await import(
    `./modules/genderUnit/languages/${language}.js`
  );
  let { idealBodyFatPercentage, bodyFatPercentage } = await import(
    "./modules/result/variableSetters.js"
  );
  let { baseIdealWeight, topIdealWeight, idealWeight } = await import(
    "./modules/result/idealWeight.js"
  );
  let { bmr } = await import("./modules/result/advices.js");
  let addup5, addup6, message;
  if (language == "english") {
    addup5 = "kcal to ";
    addup6 = "kcal \n\n\n\n";
    message = `Hi, this is just a way for you to have all the main data summed up saved in your email inbox.\n\n Gender: ${
      genders[getGender()]
    }\n\n Goal: ${translations[getGoal()]}\n\nBody type: ${
      getBodyType() == "ecto"
        ? "Ectomorph"
        : getBodyType() == "meso"
        ? "Mesomorph"
        : "Endomorph"
    }\n\n Age: ${getAge()}\n\n Current Weight: ${
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
    }Goal's fat percentage: ${
      (idealBodyFatPercentage * 10) / 10
    }% \n\nExercise Situation: ${
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
    message = `Olá, esta é apenas uma forma de guardar todos os dados principais na sua caixa de entrada de email.\n\n Gênero: ${
      genders[getGender()]
    }\n\n Objetivo: ${translations[getGoal()]}\n\nTipo de Corpo: ${
      getBodyType() == "ecto"
        ? "Ectomorfo"
        : getBodyType() == "meso"
        ? "Mesomorfo"
        : "Endomorfo"
    }\n\n Idade: ${getAge()}\n\n Peso Atual: ${
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
    }Percentual de Gordura do seu Objetivo: ${
      (idealBodyFatPercentage * 10) / 10
    }% \n\nSituação de Exercício: ${
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
    message = `Bonjour, c'est juste un moyen pour vous d'avoir toutes les données principales résumées enregistrées dans votre boîte de réception.\n\nGenre: ${
      genders[getGender()]
    }\n\n Objectif: ${translations[getGoal()]}\n\nType de corps: ${
      getBodyType() == "ecto"
        ? "Ectomorphe"
        : getBodyType() == "meso"
        ? "Mésomorphe"
        : "Endomorphe"
    }\n\n Âge: ${getAge()}\n\n Poids actuel: ${
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
    }% \n\nSituation d'exercice: ${
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
    message = `Hola, esta es solo una manera de tener todos los datos principales resumidos guardados en la bandeja de entrada de su correo electrónico.\n\nGénero: ${
      genders[getGender()]
    }\n\n Objetivo: ${translations[getGoal()]}\n\nTipo de Cuerpo: ${
      getBodyType() == "ecto"
        ? "Ectomorfo"
        : getBodyType() == "meso"
        ? "Mesomorfo"
        : "Endomorfo"
    }\n\n Edad: ${getAge()}\n\n Peso Actual: ${
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
    }Porcentaje de grasa del objetivo: ${
      (idealBodyFatPercentage * 10) / 10
    }% \n\nSituación del ejercicio: ${
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
  if (language == "english") subject = "FitWish Main Data";
  else if (language == "português") subject = "Dados principais - FitWish";
  else if (language == "français") subject = "Données principales - FitWish";
  else if (language == "español") subject = "Datos principales - FitWish";
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
