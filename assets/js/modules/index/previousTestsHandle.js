let { contentArray } = await import("./overwriteBtns.js");
let language = sessionStorage.getItem("language");
export const showPrevTestResult = (resultTry) => {
  sessionStorage.setItem("resultTry", JSON.stringify(resultTry));
  window.location.href = "previousResult.html";
};

export const startNewTry = (tryN) => {
  sessionStorage.setItem("tryNumber", JSON.stringify(tryN));
  window.location.href = "intro.html";
};
export const overwriteTest2 = (testToBeOverwritten) => {
  let confirmOverwrite;
  if (language == "english")
    confirmOverwrite = confirm(
      `Are you sure you want to overwrite the test made as ${
        contentArray[testToBeOverwritten - 1].inputName
      }? It will be forever destroyed.`
    );
  else if (language == "português")
    confirmOverwrite = confirm(
      `Tem certeza que deseja sobrescrever o teste feito por ${
        contentArray[testToBeOverwritten - 1].inputName
      }? Esse teste será destruido para sempre.`
    );
  else if (language == "français")
    confirmOverwrite = confirm(
      `Voulez-vous vraiment remplacer le test effectué comme ${
        contentArray[testToBeOverwritten - 1].inputName
      }? Il sera détruit à jamais.`
    );
  else if (language == "español")
    confirmOverwrite = confirm(
      `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${
        contentArray[testToBeOverwritten - 1].inputName
      }? Será destruido para siempre.`
    );
  if (confirmOverwrite) {
    testToBeOverwritten == 1 ? contentArray.shift() : contentArray.pop();
    localStorage.setItem("contentArray", JSON.stringify(contentArray));
    startNewTry(testToBeOverwritten);
  }
};
export const overwriteTest = () =>
  import("./overwriteBtns.js").then(({ triesMade }) =>
    triesMade == 1 ? overwriteTest2(1) : seeAllTests(true)
  );

export function deleteTests() {
  let deletePrevTests;
  console.log(language);
  if (language == "english")
    deletePrevTests = confirm("Are you sure you want to delete all the tests?");
  else if (language == "português")
    deletePrevTests = confirm(
      "Tem certeza que deseja deletar todos os testes?"
    );
  else if (language == "français")
    deletePrevTests = confirm("Voulez-vous vraiment supprimer tous les tests?");
  else if (language == "español")
    deletePrevTests = confirm(
      "¿Estás seguro de que quieres eliminar todas las pruebas?"
    );
  if (deletePrevTests) {
    localStorage.removeItem("contentArray");
    window.location.reload();
  }
}
export function seePrevTests() {
  firstPageBtn1stTry.style.display = "block";
  firstPageBtnSeePrev.style.display = "none";
  firstPageBtnHidePrev.style.display = "block";
  firstPageBtnDelete.style.display = "block";
}
export function seeAllTests(showOverwrite = false) {
  firstPageBtn1stTry.style.display = "block";
  firstPageBtn2ndTry.style.display = "block";
  firstPageBtnSeeAll.style.display = "none";
  firstPageBtnHideAll.style.display = "block";
  firstPageBtnDelete.style.display = "block";
  if (showOverwrite) {
    firstPageBtn1stTryOverwrite.style.display = "block";
    firstPageBtn2ndTryOverwrite.style.display = "block";
  }
}
export function hidePrevTests() {
  firstPageBtn1stTry.style.display = "none";
  firstPageBtnSeePrev.style.display = "block";
  firstPageBtnHidePrev.style.display = "none";
}
export function hideAllTests() {
  firstPageBtn1stTry.style.display = "none";
  firstPageBtn2ndTry.style.display = "none";
  firstPageBtnSeeAll.style.display = "block";
  firstPageBtnHideAll.style.display = "none";
  firstPageBtnDelete.style.display = "block";
}
