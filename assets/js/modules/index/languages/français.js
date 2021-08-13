let { contentArray } = await import("../iniciateIndexLang.js");
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
  sameName: {},
  differentName: {},
};
