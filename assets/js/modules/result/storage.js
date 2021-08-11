let contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [];
export const setLocalData = async (idUser) => {
  await import("./date.js").then(({ getDate }) =>
    import("../../result.js").then(({ emotionAnswer }) =>
      import("../global/language.js").then(({ language }) =>
        import("../global/theme.js").then(({ theme }) =>
          import("./idealWeight.js").then(({ finalIdealWeightMsg }) =>
            import("./links.js").then(({ setLinks }) =>
              setLinks().then((links) =>
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
                        getBodyTypeAdvantageAdvice().then((bodyTypeAdv) =>
                          setCalorieIntake().then((calorieAdv) =>
                            contentArray.push({
                              idUser,
                              inputName: getName(),
                              email: getEmail(),
                              age: getAge(),
                              language,
                              theme,
                              gender: getGender(),
                              bodyTypeAdvice: setBodyTypeAdvice(),
                              bodyTypeAdvantageAdvice: bodyTypeAdv,
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
                              calorieIntakeAdvice: calorieAdv,
                              calorieCounterLink: links[0],
                              caloriesLink: links[1],
                              exerciseCaloriesLink: links[2],
                              fitnessAppsLink: links[3],
                              day: getDate(),
                            })
                          )
                        )
                    )
                )
              )
            )
          )
        )
      )
    )
  );
  console.log(contentArray);
  window.localStorage.setItem("contentArray", JSON.stringify(contentArray));
};
