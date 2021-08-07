export let theme;
export function themeTypeLight() {
  theme = "light";
  sessionStorage.setItem("theme", theme);
  document.body.style.cssText = "background-color:white; color:#1F3B4D;";
  if (document.getElementById("leftsidebarButton"))
    leftsidebarButton.style.color = "black";
  if (document.getElementById("rightsidebarButton"))
    rightsidebarButton.style.color = "black";
  if (document.getElementById("headingObjInputIdHead"))
    document.getElementById("headingObjInputIdHead").style.color = "black";
  if (document.querySelectorAll(".headingTextInputId"))
    for (let element of document.querySelectorAll(".headingTextInputId"))
      element.style.color = "black";
  for (let nav of document.querySelectorAll(".leftsidenav, .rightsidenav")) {
    nav.style.backgroundColor = "#42B395";
    nav.style.color = "#000";
  }
  if (document.querySelector("#pageBtnsId")) {
    for (let button of document.querySelector("#pageBtnsId").children) {
      button.classList.remove("aboutContactBtn");
      button.classList.add("contactAboutBtn");
    }
  }
  document
    .querySelectorAll(".classFooter")
    .forEach((el) => (el.style.color = "#000"));
}
export function themeTypeDark() {
  theme = "dark";
  sessionStorage.setItem("theme", theme);
  if (document.getElementById("leftsidebarButton"))
    leftsidebarButton.style.color = "aliceblue";
  if (document.getElementById("rightsidebarButton"))
    rightsidebarButton.style.color = "aliceblue";
  document.body.style.cssText = "background-color:#12232A; color:#1F3B4D;";
  if (document.getElementById("headingObjInputIdHead"))
    document.getElementById("headingObjInputIdHead").style.color = "aliceblue";
  if (document.querySelectorAll(".headingTextInputId"))
    for (let element of document.querySelectorAll(".headingTextInputId"))
      element.style.color = "aliceblue";
  for (let nav of document.querySelectorAll(".leftsidenav, .rightsidenav")) {
    nav.style.backgroundColor = "#000";
    nav.style.color = "#fff";
  }
  if (document.querySelector("#pageBtnsId"))
    for (let button of document.querySelector("#pageBtnsId").children) {
      button.classList.add("aboutContactBtn");
      button.classList.remove("contactAboutBtn");
    }
  document
    .querySelectorAll(".classFooter")
    .forEach((el) => (el.style.color = "#fff"));
}
