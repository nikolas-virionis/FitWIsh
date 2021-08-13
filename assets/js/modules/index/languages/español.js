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
  sameName: {
    firstPageH13rd: `Detectamos que ya ha realizado nuestra prueba dos veces, una vez como ${contentArray[0]?.inputName} hecho en ${contentArray[0]?.day}, y una vez como ${contentArray[1]?.inputName} hecho en ${contentArray[1]?.day}. Elija lo que le gustaría hacer a continuación`,
    firstPageBtn1stTry: `Ver la prueba de ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTry: `Ver la prueba de ${contentArray[1]?.inputName}`,
    firstPageBtn1stTryOverwrite: `Sobrescribir la prueba de ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTryOverwrite: `Sobrescribir la prueba de ${contentArray[1]?.inputName}`,
  },
  differentName: {
    firstPageH13rd: `Detectamos que ya ha realizado nuestra prueba dos veces más ${contentArray[0]?.inputName}, una vez hecho en ${contentArray[0]?.day}, y una vez hecho en ${contentArray[1]?.day}. Elija lo que le gustaría hacer a continuación`,
    firstPageBtn1stTry: `Ver la prueba de ${contentArray[0]?.day}`,
    firstPageBtn2ndTry: `Ver la prueba de ${contentArray[1]?.day}`,
    firstPageBtn1stTryOverwrite: `Sobrescribir la prueba de ${contentArray[0]?.day}`,
    firstPageBtn2ndTryOverwrite: `Sobrescribir la prueba de ${contentArray[1]?.day}`,
  },
};
