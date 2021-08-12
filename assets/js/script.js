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

export const globalTranslations = async (language) => {
  await import(`./modules/global/languages/${language}.js`).then(
    ({ translations }) => {
      linkTitle.title = translations.homePage;
      if (document.getElementById("buttonFirst"))
        buttonFirst.value = translations.buttonFirst;
      if (document.getElementById("buttonAbout"))
        buttonAbout.value = translations.about;
      if (document.getElementById("buttonContact"))
        buttonContact.value = translations.contact;
      if (document.getElementById("howItWorksId"))
        howItWorksId.innerHTML = translations.howItWorks;
      if (document.getElementById("aboutId"))
        aboutId.innerHTML = translations.about;
      if (document.getElementById("contactId"))
        contactId.innerHTML = translations.contact;
      if (
        document.getElementById("listRightNav") &&
        window.location.pathname.split("/").pop() != "index.html"
      )
        for (let element of listRightNav.children)
          element.style.fontSize = translations.rightNavFontSize;
      if (document.getElementById("languageInput"))
        languageInput.innerHTML = translations.languageInput;
      alreadyInPage = translations.alreadyInPage;
      if (document.getElementById("pageId"))
        pageId.innerHTML = translations.page;
      if (document.getElementById("introPageId"))
        introPageId.innerHTML = translations.introPage;
      if (document.getElementById("loginPageId"))
        loginPageId.innerHTML = translations.loginPage;
      if (document.getElementById("genderUnitPageId"))
        genderUnitPageId.innerHTML = translations.genderUnitPage;
      if (document.getElementById("goalPageId"))
        goalPageId.innerHTML = translations.goalPage;
      if (document.getElementById("dataPageId"))
        dataPageId.innerHTML = translations.dataPage;
      if (document.getElementById("bodyTypePageId"))
        bodyTypePageId.innerHTML = translations.bodyTypePage;
      if (document.getElementById("imagePageId"))
        imagePageId.innerHTML = translations.imagePage;
      if (document.getElementById("exercisePageId"))
        exercisePageId.innerHTML = translations.exercisePage;
      if (document.getElementById("healthyPageId"))
        healthyPageId.innerHTML = translations.healthyPage;
      if (document.getElementById("cheatPageId"))
        cheatPageId.innerHTML = translations.cheatPage;
      if (document.getElementById("mealsPageId"))
        mealsPageId.innerHTML = translations.mealsPage;
      if (document.getElementById("emotionPageId"))
        emotionPageId.innerHTML = translations.emotionPage;
      if (document.getElementById("buttonNext"))
        buttonNext.value = translations.buttonNext;
      if (document.getElementById("buttonPrev"))
        buttonPrev.value = translations.buttonPrev;
      if (window.location.pathname.split("/").pop().slice(0, -5) != "result") {
        document.getElementById("lightThemeButton").innerHTML =
          translations.lightTheme;
        document.getElementById("darkThemeButton").innerHTML =
          translations.darkTheme;
        document.getElementById("disclaimerId").innerHTML =
          translations.DISCLAIMER;
        firstAlert = translations.firstAlert;
      }
      document.getElementById("allRights").innerHTML = translations.allRights;
    }
  );
};

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
  disclaimerId.addEventListener("click", () => alert(firstAlert));
if (
  window.location.pathname.split("/").pop().slice(0, -5) != "index" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "" &&
  window.location.pathname.split("/").pop().slice(0, -5) != "previousResult"
)
  linkTitle.addEventListener(
    "click",
    () => (window.location.href = "intro.html")
  );

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
