export const getEmotion = () => sessionStorage.getItem("emotion");
export const getName = () => sessionStorage.getItem("name");
export const getEmail = () => sessionStorage.getItem("email");
export const getAge = () => JSON.parse(sessionStorage.getItem("age"));
export const getWeight = () => JSON.parse(sessionStorage.getItem("weight"));
export const getHeight = () => JSON.parse(sessionStorage.getItem("height"));
export const getBodyType = () => sessionStorage.getItem("bodytype");
export const getCheat = () => JSON.parse(sessionStorage.getItem("cheat"));
export const getExercise = () => JSON.parse(sessionStorage.getItem("exercise"));
export const getGender = () => sessionStorage.getItem("gender");
export const getUnit = () => sessionStorage.getItem("unit");
export const getGoal = () => sessionStorage.getItem("goal");
export const getHealthy = () => JSON.parse(sessionStorage.getItem("healthy"));
export const getCurrentBody = () =>
  JSON.parse(sessionStorage.getItem("currentBody"));
export const getGoalBody = () => JSON.parse(sessionStorage.getItem("goalBody"));
export const getMeals = () => JSON.parse(sessionStorage.getItem("meals"));
