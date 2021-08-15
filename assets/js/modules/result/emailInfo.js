export async function sendConfirm() {
  let redirectemail;
  let { language } = await import("../../script.js");
  if (language == "english")
    redirectemail = confirm(
      "Are you sure you want to receive a main result email?"
    );
  else if (language == "português")
    redirectemail = confirm(
      "Tem certeza de que deseja receber um e-mail de resultado principal?"
    );
  else if (language == "français")
    redirectemail = confirm(
      "Voulez-vous vraiment recevoir un e-mail de résultat principal?"
    );
  else if (language == "español")
    redirectemail = confirm(
      "¿Está seguro de que desea recibir un correo electrónico con el resultado principal?"
    );
  if (redirectemail)
    import("../../result.js").then(({ sendEmail }) => sendEmail());
}
