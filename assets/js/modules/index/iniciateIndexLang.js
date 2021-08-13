export const initiateLang = (language) => {
  import("../../index.js").then(({ setLanguage }) => setLanguage(language));
  import(`./languages/${language}.js`).then(({ iniciate }) => {
    if (
      !(
        contentArray[0]?.inputName.toLowerCase() ==
        contentArray[1]?.inputName.toLowerCase()
      )
    ) {
      firstPageH13rd.innerHTML = iniciate.sameName.firstPageH13rd;
      firstPageBtn1stTry.value = iniciate.sameName.firstPageBtn1stTry;
      firstPageBtn2ndTry.value = iniciate.sameName.firstPageBtn2ndTry;
      firstPageBtn1stTryOverwrite.value =
        iniciate.sameName.firstPageBtn1stTryOverwrite;
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
  });
};
