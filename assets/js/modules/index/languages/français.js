let { contentArray } = await import("../overwriteBtns.js");
export const translations = {
  HidePrevious: "Masquer le test précédent",
  firstH1:
    "Nous sommes heureux que vous nous ayez donné une chance de vous aider à réaliser le corps de vos rêves, appuyez sur Début pour continuer",
  secondTryH1: `Nous avons détecté que vous avez déjà essayé notre test une fois car ${contentArray[0]?.inputName}, fabriqué en ${contentArray[0]?.day}. Choisissez ce que vous souhaitez faire ci-dessous`,
  start: "Début",
  different: `Faites un nouveau test`,
  overwrite: `Écraser un test précédent`,
  deleteAll: `Supprimer tous les tests précédents effectués`,
  seeAll: `Voir tous les tests précédents`,
  seePrev: `Voir le résultat du test précédent`,
  hideAll: `Masquer tous les tests précédents`,
};

export const iniciate = {
  sameName: {
    firstPageH13rd: `Nous avons détecté que vous avez déjà essayé notre test deux fois, une fois comme ${contentArray[0]?.inputName} fabriqué en ${contentArray[0]?.day}, et une fois comme ${contentArray[1]?.inputName} fabriqué en ${contentArray[1]?.day}. Choisissez ce que vous souhaitez faire ci-dessous`,
    firstPageBtn1stTry: `Voir le test ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTry: `Voir le test ${contentArray[1]?.inputName}`,
    firstPageBtn1stTryOverwrite: `Écraser le test ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTryOverwrite: `Écraser le test ${contentArray[1]?.inputName}`,
  },
  differentName: {
    firstPageH13rd: `Nous avons détecté que vous avez déjà essayé notre test deux fois plus ${contentArray[0]?.inputName}, une fois fait en ${contentArray[0]?.day}, et une fois fait en ${contentArray[1]?.day}. Choisissez ce que vous souhaitez faire ci-dessous`,
    firstPageBtn1stTry: `Voir le test réalisé en ${contentArray[0]?.day}`,
    firstPageBtn2ndTry: `Voir le test réalisé en ${contentArray[1]?.day}`,
    firstPageBtn1stTryOverwrite: `Écraser le test dans ${contentArray[0]?.day}`,
    firstPageBtn2ndTryOverwrite: `Écraser le test dans ${contentArray[1]?.day}`,
  },
};
