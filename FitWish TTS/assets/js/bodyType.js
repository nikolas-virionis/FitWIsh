function english() {
  import("./script.mjs").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  document.getElementById("headingObjInputIdBodyType").innerHTML = "Body Type";
  document.getElementById("colorChangeIdNoIdea").value = "No idea";
  document.getElementById("colorChangeIdEcto").value = "Ectomorph";
  document.getElementById("colorChangeIdMeso").value = "Mesomorph";
  document.getElementById("colorChangeIdEndo").value = "Endomorph";
}
function português() {
  import("./script.mjs").then(({ português: defaultPortuguês }) =>
    defaultPortuguês()
  );
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Tipo Corporal";
  document.getElementById("colorChangeIdNoIdea").value = "Sem ideia";
  document.getElementById("colorChangeIdEcto").value = "Ectomorfo";
  document.getElementById("colorChangeIdMeso").value = "Mesomorfo";
  document.getElementById("colorChangeIdEndo").value = "Endomorfo";
}
function français() {
  import("./script.mjs").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Type de corps";
  document.getElementById("colorChangeIdNoIdea").value = "Aucune idée";
  document.getElementById("colorChangeIdEcto").value = "Ectomorphe";
  document.getElementById("colorChangeIdMeso").value = "Mesomorphe";
  document.getElementById("colorChangeIdEndo").value = "Endomorphe";
}
function español() {
  import("./script.mjs").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Tipo de cuerpo";
  document.getElementById("colorChangeIdNoIdea").value = "Ni idea";
  document.getElementById("colorChangeIdEcto").value = "Ectomorfo";
  document.getElementById("colorChangeIdMeso").value = "Mesomorfo";
  document.getElementById("colorChangeIdEndo").value = "Endomorfo";
}
function themeTypeLight() {
  import("./script.mjs").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#D0FEFE";
}
function themeTypeDark() {
  import("./script.mjs").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  for (let el of document.querySelectorAll(".headingObjInputId"))
    el.style.backgroundColor = "#9DBCD4";
}

window.addEventListener("load", () => {
  if (getBodyType())
    document.getElementById(
      `colorChangeId${
        getBodyType().charAt(0).toUpperCase() + getBodyType().slice(1)
      }`
    ).style.backgroundColor = "#7395AE";
  window[sessionStorage.getItem("language")]();
  switch (sessionStorage.getItem("theme")) {
    case "light":
      themeTypeLight();
      break;
    default:
      themeTypeDark();
  }
});

function hoverOutColorChangeFunc(hoveredOutId) {
  document.getElementById(hoveredOutId).style.backgroundColor = "teal";
  if (getBodyType() == "ecto")
    colorChangeIdEcto.style.backgroundColor = "#7395AE";
  else if (getBodyType() == "meso")
    colorChangeIdMeso.style.backgroundColor = "#7395AE";
  else if (getBodyType() == "endo")
    colorChangeIdEndo.style.backgroundColor = "#7395AE";
}

// body type
const bodyType = (bodytype) => sessionStorage.setItem("bodytype", bodytype);
const getBodyType = () => sessionStorage.getItem("bodytype");
function nop() {
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
