export let contentArray =
  JSON.parse(localStorage.getItem("contentArray")) ?? [];
export let triesMade = contentArray?.length;
export function numberBtnsOverwrite(language) {
  import(`./languages/${language}.js`).then(({ iniciate }) => {
    if (contentArray?.length >= 1) {
      firstPageBtn1stTry.value = iniciate.sameName.firstPageBtn1stTry;
      firstPageBtn1stTryOverwrite.value =
        iniciate.sameName.firstPageBtn1stTryOverwrite;
    }
    if (contentArray?.length == 2) {
      if (
        contentArray[0]?.inputName.toLowerCase() ==
        contentArray[1]?.inputName.toLowerCase()
      ) {
        firstPageH13rd.innerHTML = iniciate.sameName.firstPageH13rd;
        firstPageBtn2ndTry.value = iniciate.sameName.firstPageBtn2ndTry;
        firstPageBtn2ndTryOverwrite.value =
          iniciate.sameName.firstPageBtn2ndTryOverwrite;
      } else {
        firstPageH13rd.innerHTML = iniciate.differentName.firstPageH13rd;
        firstPageBtn1stTry.value = iniciate.differentName.firstPageBtn1stTry;
        firstPageBtn2ndTry.value = iniciate.differentName.firstPageBtn2ndTry;
        firstPageBtn1stTryOverwrite.value =
          iniciate.differentName.firstPageBtn1stTryOverwrite;
        firstPageBtn2ndTryOverwrite.value =
          iniciate.differentName.firstPageBtn2ndTryOverwrite;
      }
    }
  });
}
