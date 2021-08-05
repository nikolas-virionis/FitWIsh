export const setLocalData = (idUser) => {
  import("./modules/result/links.js").then(({ setLinks }) =>
    import("./modules/result/date.js").then(({ getDate }) =>
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
      })
    )
  );
  localStorage.setItem("contentArray", JSON.stringify(contentArray));
};
