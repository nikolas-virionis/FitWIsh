let { contentArray } = await import("../overwriteBtns.js");
export const translations = {
  HidePrevious: "Hide Previous Test",
  firstH1:
    "We are glad you gave us a chance to help you achieve the body of your dreams, press start to continue",
  secondTryH1: `We detected that you have already tried our test once as ${contentArray[0]?.inputName}, made in ${contentArray[0]?.day}. Choose what you would like to do below`,
  start: "Start",
  different: `Do a Different Test`,
  overwrite: `Overwrite one Previous Test`,
  deleteAll: `Delete All Previous Tests Made`,
  seeAll: `See All Previous Tests`,
  seePrev: `See the Previous Test Result`,
  hideAll: `Hide All Previous Tests`,
};
export const iniciate = {
  sameName: {
    firstPageH13rd: `We detected that you have already tried our test twice, once as ${contentArray[0]?.inputName} made in ${contentArray[0]?.day}, and once as ${contentArray[1]?.inputName} made in ${contentArray[1]?.day}. Choose what you would like to do below`,
    firstPageBtn1stTry: `See the test made by ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTry: `See the test made by ${contentArray[1]?.inputName}`,
    firstPageBtn1stTryOverwrite: `Overwrite test made by ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTryOverwrite: `Overwrite test made by ${contentArray[1]?.inputName}`,
  },
  differentName: {
    firstPageH13rd: `We detected that you have already tried our test twice as ${contentArray[0]?.inputName}, once made in ${contentArray[0]?.day}, and once made in ${contentArray[1]?.day}. Choose what you would like to do below`,
    firstPageBtn1stTry: `See the test made in ${contentArray[0]?.day}`,
    firstPageBtn2ndTry: `See the test made in ${contentArray[1]?.day}`,
    firstPageBtn1stTryOverwrite: `Overwrite test made in ${contentArray[0]?.day}`,
    firstPageBtn2ndTryOverwrite: `Overwrite test made in ${contentArray[1]?.day}`,
  },
};
