export const setTranslations = async (language) => {
  await import("./script.js").then(({ globalLang }) => globalLang(language));
  await import(`./modules/bodyType/languages/${language}.js`).then(
    ({ translations }) => {
      headingObjInputIdBodyType.innerHTML = translations.bodyType;
      colorChangeIdNoIdea.value = translations.noIdea;
      colorChangeIdEcto.value = translations.ecto;
      colorChangeIdMeso.value = translations.meso;
      colorChangeIdEndo.value = translations.endo;
    }
  );
};
const setLanguage = (language) => {
  sessionStorage.setItem("language", language);
  setTranslations(language);
};
export const setThemes = async (theme) => {
  await import("./script.js").then(({ globalTheme }) => globalTheme(theme));
  await import(`./modules/bodyType/themes/${theme}.js`).then(
    ({ colorSwitch }) => {
      for (let el of document.querySelectorAll(".headingObjInputId"))
        el.style.backgroundColor = colorSwitch.elementsColor;
    }
  );
};
const setTheme = (theme) => {
  sessionStorage.setItem("theme", theme);
  setThemes(theme);
};
window.addEventListener("load", async () => {
  const { getBodyType } = await import("./modules/global/fieldGetter.js");
  let { buttons } = await import("./script.js");
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  if (document.querySelectorAll(".nationBtns")) {
    let nations = ["english", "português", "français", "español"];
    document
      .querySelectorAll(".nationBtns")
      .forEach((btn) =>
        btn.addEventListener("click", (e) =>
          setLanguage(
            nations[
              [...document.querySelectorAll(".nationBtns")].indexOf(e.target)
            ]
          )
        )
      );
  }

  if (document.querySelectorAll(".listnav"))
    document.querySelectorAll(".listnav").forEach((element) => {
      element.addEventListener("click", (e) =>
        setTheme(e.target.id.slice(0, -11))
      );
    });
  if (getBodyType())
    document.getElementById(
      `colorChangeId${
        getBodyType().charAt(0).toUpperCase() + getBodyType().slice(1)
      }`
    ).style.backgroundColor = "#7395AE";
  setLanguage(sessionStorage.getItem("language"));
  setTheme(sessionStorage.getItem("theme"));
  const { getSiblings } = await import("./script.js");
  for (let button of buttons) {
    button.addEventListener(`click`, (e) => {
      let element = e.target;
      element.style.backgroundColor = "#7395AE";
      for (let el of getSiblings(element)) el.style.backgroundColor = "teal";
    });
  }
});

async function hoverOutColorChangeFunc(hoveredOutId) {
  const { getBodyType } = await import("./modules/global/fieldGetter.js");
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getBodyType() == "ecto")
    colorChangeIdEcto.style.backgroundColor = "#7395AE";
  else if (getBodyType() == "meso")
    colorChangeIdMeso.style.backgroundColor = "#7395AE";
  else if (getBodyType() == "endo")
    colorChangeIdEndo.style.backgroundColor = "#7395AE";
}

// body type
async function nop() {
  let { language } = await import("./script.js");
  sessionStorage.removeItem("bodytype");
  if (language == "english")
    alert(
      "Copy the first link to a 10-minute video explaining it: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, or take a Google test on this link: https://www.bodybuilding.com/fun/becker3.htm. But basically ecto does not have much ease in gaining muscle nor fat, meso has ease in gaining muscle and losing fat and endo has ease to gain both. And btw you can click on the body type you are without having to rerun the code"
    );
  else if (language == "português")
    alert(
      "Copie o primeiro link para um vídeo de 10 minutos explicando-o: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, ou faça um teste do Google neste link: https://www.bodybuilding.com/fun/becker3.htm. Mas basicamente o ecto não tem muita facilidade em ganhar músculo nem gordura, o meso tem facilidade em ganhar músculo e perder gordura e o endo tem facilidade em ganhar ambos. E inclusive você pode clicar no tipo de corpo que você é, sem ter que executar o código novamente"
    );
  else if (language == "français")
    alert(
      "Copiez le premier lien vers une vidéo de 10 minutes expliquant: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, ou faites un test Google sur ce lien: https://www.bodybuilding.com/fun/becker3.htm. Mais fondamentalement, ecto n'a pas beaucoup de facilité à gagner du muscle ni de la graisse, le méso a la facilité de gagner du muscle et de perdre de la graisse et l'endo a la facilité de gagner les deux. Et au fait, vous pouvez cliquer sur le type de corps que vous êtes sans avoir à réexécuter le code"
    );
  else if (language == "español")
    alert(
      "Copie el primer enlace a un video de 10 minutos que lo explique: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, o haz una prueba de Google en este enlace: https://www.bodybuilding.com/fun/becker3.htm. Pero básicamente ecto no tiene mucha facilidad para ganar músculo ni grasa, meso tiene facilidad para ganar músculo y perder grasa y endo tiene facilidad para ganar ambos. Y, por cierto, puede hacer clic en el tipo de cuerpo que tiene sin tener que volver a ejecutar el código."
    );
}

const bodyType = (bodytype) => sessionStorage.setItem("bodytype", bodytype);
let { buttons } = await import("./script.js");
buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    e.target.id.endsWith("NoIdea")
      ? nop()
      : bodyType(e.target.id.slice(13).toLowerCase())
  );
  button.addEventListener("mouseout", (e) =>
    hoverOutColorChangeFunc(e.target.id)
  );
});
