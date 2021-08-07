let { contentArray } = await import("../index/iniciateIndexLang.js");
export const setLocalData = (idUser) => {
  import("./links.js").then(({ setLinks }) =>
    import("./date.js").then(({ getDate }) =>
      import("../../result.js").then(({ emotionAnswer }) =>
        import("../global/language.js").then(({ language }) =>
          import("../global/theme.js").then(({ theme }) =>
            import("./idealWeight.js").then(({ finalIdealWeightMsg }) =>
              import("../global/fieldGetter.js").then(
                ({ getName, getEmail, getAge, getGender }) =>
                  import("./advices.js").then(
                    ({
                      setBodyTypeAdvice,
                      getBodyTypeAdvantageAdvice,
                      setGoalDistance,
                      setAgeAdvice,
                      setExerciseAdvice,
                      setGoalAdvices,
                      setHealthyAdvice,
                      setCheatAdvice,
                      setMealsAdvice,
                      setCalorieIntake,
                    }) =>
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
              )
            )
          )
        )
      )
    )
  );
  localStorage.setItem("contentArray", JSON.stringify(contentArray));
};
