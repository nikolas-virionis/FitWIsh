export const initiateLang = (language) => {
  import("../../index.js").then(({ setLanguage }) => setLanguage(language));
  import(`./languages/${language}.js`).then(({ initiate }) => {
    if (
      !(
        contentArray[0]?.inputName.toLowerCase() ==
        contentArray[1]?.inputName.toLowerCase()
      )
    ) {
      firstPageH13rd.innerHTML = initiate.sameName.firstPageH13rd;
      firstPageBtn1stTry.value = initiate.sameName.firstPageBtn1stTry;
      firstPageBtn2ndTry.value = initiate.sameName.firstPageBtn2ndTry;
      firstPageBtn1stTryOverwrite.value =
        initiate.sameName.firstPageBtn1stTryOverwrite;
      firstPageBtn2ndTryOverwrite.value =
        initiate.sameName.firstPageBtn2ndTryOverwrite;
    } else {
      firstPageH13rd.innerHTML = initiate.differentName.firstPageH13rd;
      firstPageBtn1stTry.value = initiate.differentName.firstPageBtn1stTry;
      firstPageBtn2ndTry.value = initiate.differentName.firstPageBtn2ndTry;
      firstPageBtn1stTryOverwrite.value =
        initiate.differentName.firstPageBtn1stTryOverwrite;
      firstPageBtn2ndTryOverwrite.value =
        initiate.differentName.firstPageBtn2ndTryOverwrite;
    }
  });
};
