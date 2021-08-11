export const setLinks = () =>
  import("../global/language.js").then(({ language }) => [
    `<a class="finallink" href="https://www.webmd.com/diet/healthtool-food-calorie-counter" target="_blank" >${
      language == "português"
        ? "Link a uma ferramenta de saúde alimentar completa"
        : language == "français"
        ? "Link vers un outil de santé alimentaire complet"
        : language == "español"
        ? "Link a una herramienta de salud alimentaria integral"
        : "Link to a whole food health tool"
    }</a>`,
    `<a class="finallink" href="https://www.calories.info/food/candy-sweets" target="_blank" >${
      language == "português"
        ? "Link a uma caloria alimentar por grupo geral"
        : language == "français"
        ? "Link vers une calorie alimentaire par groupe général"
        : language == "español"
        ? "Link a una caloría alimentaria por grupo general"
        : "Link to a food calorie by general group"
    }</a>`,
    `<a class="finallink" href="https://www.health.harvard.edu/diet-and-weight-loss/calories-burned-in-30-minutes-of-leisure-and-routine-activities" target="_blank">${
      language == "português"
        ? "Link a uma página de Harvard sobre calorias de exercícios"
        : language == "français"
        ? "Link vers une page de Harvard sur les calories d'exercice"
        : language == "español"
        ? "Link a una página de Harvard sobre las calorías del ejercicio"
        : "Link to a Harvard page about exercise calories"
    }</a>`,
    `<a class="finallink" href="https://www.healthline.com/health/fitness-exercise/top-iphone-android-apps" target="_blank">${
      language == "português"
        ? "Link para os melhores aplicativos para conselhos de treino"
        : language == "français"
        ? "Lien vers les meilleures applications pour obtenir des conseils d'entraînement"
        : language == "español"
        ? "Link a una página de Harvard sobre las calorías del ejercicio"
        : "Link to best apps for workout advice"
    }</a>`,
  ]);
