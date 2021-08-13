let { contentArray } = await import("../iniciateIndexLang.js");
export const translations = {
  HidePrevious: "Ocultar Prueba Anterior",
  firstH1:
    "Nos alegra que nos haya brindado la oportunidad de ayudarlo a lograr el cuerpo de sus sueños, presione comenzar para continuar",
  secondTryH1: `Detectamos que ya ha realizado nuestra prueba una vez como ${contentArray[0]?.inputName}, hecho en ${contentArray[0]?.day}. Elija lo que le gustaría hacer a continuación`,
  start: "Comienzo",
  different: `Hacer una nueva prueba`,
  overwrite: `Sobrescribir una prueba anterior`,
  deleteAll: `Eliminar todas las pruebas anteriores realizadas`,
  seeAll: `Ver todas las pruebas anteriores`,
  seePrev: `Ver el resultado de la prueba anterior`,
  hideAll: `Ocultar todas las pruebas anteriores`,
};

export const iniciate = {
  sameName: {},
  differentName: {},
};
