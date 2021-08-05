function english() {
  import("./modules/global/language.js").then(({ english: defaultEnglish }) =>
    defaultEnglish()
  );
  idContactH2.style.marginLeft = "37.5%";
  idContactH2.innerHTML = "How to Contact Us";
  idContactIntro.innerHTML =
    "We would love to hear from our users about possible feedback about what you experienced while using our service. To contact Us directly access the link to our CTO's email below, and to have more information on us access his LinkedIn link below.";
  idContactHeading.innerHTML = "Contact";
}
function português() {
  import("./modules/global/language.js").then(
    ({ português: defaultPortuguês }) => defaultPortuguês()
  );
  idContactH2.style.marginLeft = "30.5%";
  idContactH2.innerHTML = "Como entrar em contato conosco";
  idContactIntro.innerHTML =
    "Gostaríamos muito de ouvir de nossos usuários sobre possíveis comentários sobre o que você experimentou ao usar nosso serviço. Para entrar em contato conosco diretamente, acesse o link para o e-mail de nosso CTO abaixo, e para obter mais informações sobre nós acesse seu link do LinkedIn abaixo.";
  idContactHeading.innerHTML = "Contato";
}
function français() {
  import("./modules/global/language.js").then(({ français: defaultFrançais }) =>
    defaultFrançais()
  );
  idContactH2.style.marginLeft = "34.5%";
  idContactH2.innerHTML = "Comment nous contacter";
  idContactIntro.innerHTML =
    "Nous serions ravis d'entendre nos utilisateurs sur d'éventuels commentaires sur ce que vous avez vécu lors de l'utilisation de notre service. Pour nous contacter, accédez directement au lien vers l'e-mail de notre CTO ci-dessous, et pour avoir plus d'informations sur nous, accédez à son lien LinkedIn ci-dessous.";
  idContactHeading.innerHTML = "Contact";
}
function español() {
  import("./modules/global/language.js").then(({ español: defaultEspañol }) =>
    defaultEspañol()
  );
  idContactH2.style.marginLeft = "32.5%";
  idContactH2.innerHTML = "Como contactar con nosotros";
  idContactHeading.innerHTML = "Contacto";
  idContactIntro.innerHTML =
    "Nos encantaría saber de nuestros usuarios sobre posibles comentarios sobre lo que experimentó al utilizar nuestro servicio. Para contactarnos acceda directamente al enlace al correo electrónico de nuestro CTO a continuación, y para tener más información sobre nosotros acceda a su enlace de LinkedIn a continuación.";
}
function themeTypeLight() {
  import("./modules/global/theme.js").then(({ themeTypeLight: defaultLight }) =>
    defaultLight()
  );
  idContactHeading.style.color = "#1F3B4D";
  idContactLinkedIn.style.color = "#1F3B4D";
  idContactGmail.style.color = "#1F3B4D";
  idContactH2.style.color = "#1F3B4D";
  idContactIntro.style.color = "#1F3B4D";
}
function themeTypeDark() {
  import("./modules/global/theme.js").then(({ themeTypeDark: defaultDark }) =>
    defaultDark()
  );
  idContactHeading.style.color = "azure";
  idContactH2.style.color = "azure";
  idContactIntro.style.color = "azure";
  idContactLinkedIn.style.color = "azure";
  idContactGmail.style.color = "azure";
}

window.addEventListener("load", () => {
  if (!JSON.parse(sessionStorage.getItem("first"))) window.location.href = "/";
  eval(sessionStorage.getItem("language"))();
  sessionStorage.getItem("theme") == "light"
    ? themeTypeLight()
    : themeTypeDark();
  if (!localStorage.getItem("contentArray")) buttonFirst.style.display = "none";
});
