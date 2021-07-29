const enterFuncMid = (event, blur, focus) => {
  if (event.key === "Enter") {
    document.getElementById(blur).blur();
    document.getElementById(focus).focus();
  }
};
const enterFunc = (event) =>
  event.key === "Enter" ? nextPageInterpreter() : "";

function firstPageLogin() {
  buttonFirst.style.display = "none";
  idFooter.style.display = "block";
  idFooter.style.position = "absolute";
  idFooter.style.bottom = "0";
  idFirstSubmit.style.display = "block";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
}

const firstPage = () => {
  if (differentPage != 1) {
    pageSwitcher(1);
    closeNav();
    closeRightNav();
    idHowToPage.style.display = "none";
    idHowToHeading.style.display = "none";
    idContactHeading.style.display = "none";
    idAboutHeading.style.display = "none";
    rightsidebarButton.style.display = "block";
    idFirstSubmit.style.display = "none";
    linkTitlea.href = "javascript:window.location.href = 'intro.html';";
    titleLink.href = "javascript:window.location.href = 'intro.html';";
    pagesNavId.onclick = rightNavInterpreter;
    pagesNavId.onclick();
    rightNavInterpreter();
  }
};
function rightNavInterpreter() {
  if (myRightSidenav.style.width == "250px")
    document.getElementById("myRightSidenav").style.width = "0";
  else document.getElementById("myRightSidenav").style.width = "250px";
}
const inPage = () => alert(alreadyInPage);
function openNav() {
  document.getElementById("myLeftSidenav").style.width = "250px";
}

const closeNav = () =>
  (document.getElementById("myLeftSidenav").style.width = "0");
const closeRightNav = () =>
  (document.getElementById("myRightSidenav").style.width = "0");
const disclaimer = () => alert(firstAlert);
const hoverColorChangeFunc = (hoveredId) =>
  (document.getElementById(hoveredId).style.backgroundColor = "#2ECC71");

function changeColor2(clickedId, idleId) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId).style.backgroundColor = "teal";
}
function changeColor4(clickedId, idleId1, idleId2, idleId3) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId1).style.backgroundColor = "teal";
  document.getElementById(idleId2).style.backgroundColor = "teal";
  document.getElementById(idleId3).style.backgroundColor = "teal";
}
