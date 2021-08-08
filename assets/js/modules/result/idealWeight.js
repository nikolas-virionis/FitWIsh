export let idealWeight;
export let finalIdealWeightMsg;
export let baseIdealWeight;
export let topIdealWeight;
let getters = import("../global/fieldGetter.js");
const { getBodyType } = await getters;
const { getGender } = await getters;
const { getGoal } = await getters;

export async function setIdealWeight(lbs, lb, weight, height) {
  let { bmi_state } = await import("./units.js");
  let { idealBodyFatPercentage } = await import("./variableSetters.js");
  let { bodyFatPercentage } = await import("./variableSetters.js");
  let idealWeightMsg;
  let idealWeightDistance;
  let advicedWeight;
  let idealWeightMsgPunctuation;
  let idealWeightMsgBmiState;
  let idealBodyFat;
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
