let language = sessionStorage.getItem("language"),
  theme = sessionStorage.getItem("theme"),
  buttons = document.querySelectorAll(".button"),
  alreadyInPage,
  firstAlert;
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
const rightNavInterpreter = () =>
  myRightSidenav.style.width == "250px"
    ? (myRightSidenav.style.width = "0")
    : (myRightSidenav.style.width = "250px");
const inPage = () => alert(alreadyInPage);
const openNav = () => (myLeftSidenav.style.width = "250px");
const closeNav = () => (myLeftSidenav.style.width = "0");
const closeRightNav = () =>
  (document.getElementById("myRightSidenav").style.width = "0");
const disclaimer = () => alert(firstAlert);

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

const getSiblings = (element) => {
  let siblings = [];
  let sibling = element.parentElement.firstChild;
  while (sibling) {
    if (
      sibling.nodeType === 1 &&
      sibling !== element &&
      sibling.tagName == "INPUT"
    )
      siblings.push(sibling);
    sibling = sibling.nextSibling;
  }
  return siblings;
};
if (
  window.location.pathname.split("/").pop().slice(0, -5) !== "index" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "intro" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "result"
) {
  for (let button of buttons) {
    button.addEventListener("mouseover", (e) => {
      let element = e.target;
      element.style.backgroundColor = "#2ECC71";
    });

    button.addEventListener(`click`, (e) => {
      let element = e.target;
      element.style.backgroundColor = "#7395AE";
      console.log(getSiblings(element));
      for (let el of getSiblings(element)) el.style.backgroundColor = "teal";
    });
  }
}
