let getters = import("../global/fieldGetter.js");
export let idealBodyFatPercentage;
export let bodyFatPercentage;
// let { idealWeight } = await import("./idealWeight.js");
//variable getters
const { getWeight } = await getters;
const { getBodyType } = await getters;
const { getGender } = await getters;
const { getGoal } = await getters;
const { getCurrentBody } = await getters;
const { getGoalBody } = await getters;
export function getBodyTypeAdvantage() {
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

export function getBodyFat() {
  let baseBodyFat;
  let topBodyFat;
  let bodyFat;
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
export function getSuggestedBodyFat() {
  let { idealWeight } = import("./idealWeight.js");
  let goalBaseBodyFat;
  let goalTopBodyFat;
  let suggestedBodyFat;
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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
    idealBodyFatPercentage = Number(idealBodyFatPercentage);
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

export async function getBMIstate(bmi) {
  let { language } = await import("../../script.js");
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
