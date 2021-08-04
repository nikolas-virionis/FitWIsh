let language = sessionStorage.getItem("language");
let theme = sessionStorage.getItem("theme"),
  buttons = document.querySelectorAll(".button"),
  alreadyInPage,
  firstAlert;

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
  window.location.pathname.split("/").pop().slice(0, -5) != "index" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "intro" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "result" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "previousResult" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "about" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "contact" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "howTo" &&
  window.location.pathname.split("/").pop().slice(0, -5) != ""
) {
  buttons.forEach((button) => {
    button.addEventListener("mouseover", (e) => {
      let element = e.target;
      element.style.backgroundColor = "#2ECC71";
    });

    button.addEventListener(`click`, (e) => {
      let element = e.target;
      element.style.backgroundColor = "#7395AE";
      for (let el of getSiblings(element)) el.style.backgroundColor = "teal";
    });
  });
}
if (document.getElementById("listRightNav"))
  [...listRightNav.children].forEach((pageButton) =>
    pageButton.addEventListener("click", (e) =>
      window.location.pathname.split("/").pop().slice(0, -5) ==
      e.target.id.slice(0, -6)
        ? inPage()
        : (window.location.href = `${e.target.id.slice(0, -6)}.html`)
    )
  );

if (document.getElementById("pageBtnsId"))
  [...pageBtnsId.children].forEach((button) =>
    button.addEventListener(
      "click",
      (e) =>
        (window.location.href =
          e.target.name == "attempt" ? "/" : `${e.target.name}.html`)
    )
  );

if (document.querySelectorAll(".sideBarButtons"))
  document
    .querySelectorAll(".sideBarButtons")
    .forEach((sideBtn) =>
      sideBtn.addEventListener("click", (e) =>
        e.target.id.slice(0, 4) == "left" ? openNav() : rightNavInterpreter()
      )
    );

if (document.getElementById("rightCloseBtn"))
  rightCloseBtn.addEventListener("click", () => rightNavInterpreter());
if (document.getElementById("leftCloseBtn"))
  leftCloseBtn.addEventListener("click", () => closeNav());
if (document.getElementById("disclaimerId"))
  disclaimerId.addEventListener("click", () => disclaimer());
if (
  window.location.pathname.split("/").pop().slice(0, -5) != "index" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "previousResult"
)
  linkTitle.addEventListener(
    "click",
    () => (window.location.href = "intro.html")
  );

if (document.querySelectorAll(".nationBtns")) {
  let nations = ["english", "português", "français", "español"];
  document
    .querySelectorAll(".nationBtns")
    .forEach((btn) =>
      btn.addEventListener("click", (e) =>
        eval(
          nations[
            [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
          ]
        )()
      )
    );
}

if (document.querySelectorAll(".listnav"))
  document.querySelectorAll(".listnav").forEach((element) => {
    element.addEventListener("click", (e) =>
      eval(
        `themeType${
          e.target.id.slice(0, -11).charAt(0).toUpperCase() +
          e.target.id.slice(1, -11)
        }`
      )()
    );
  });

if (document.querySelectorAll(".listnav2"))
  document.querySelectorAll(".listnav2").forEach((element) => {
    element.addEventListener(
      "click",
      (e) =>
        (window.location.href =
          e.target.id.slice(0, -2) == "about"
            ? "about.html"
            : e.target.id.slice(0, -2) == "contact"
            ? "contact.html"
            : "howTo.html")
    );
  });

if (document.querySelectorAll(".btnNextPrev"))
  document.querySelectorAll(".btnNextPrev").forEach((button) =>
    button.addEventListener("click", (e) => {
      let pages = [
        "intro",
        "login",
        "genderUnit",
        "data",
        "goal",
        "bodyType",
        "image",
        "exercise",
        "healthy",
        "cheat",
        "meals",
        "emotion",
      ];
      for (let index in pages) {
        if (
          pages[index] == window.location.pathname.split("/").pop().slice(0, -5)
        ) {
          window.location.href = e.target.id.endsWith("Next")
            ? `${pages[Number(index) + 1]}.html`
            : `${pages[Number(index) - 1]}.html`;
          break;
        }
      }
    })
  );
