function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("name").placeholder = "Name Example: Nick";
  document.getElementById("age").placeholder = "Age Example: 24";
  document.getElementById("email").placeholder =
    "Example: name.lastname@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Name:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Age:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
}
function portugûes() {
  import("./script").then(({ portugûes: defaultPortugûes }) =>
    defaultPortugûes()
  );
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function themeTypeDark() {
  import("./script").then(({ themeTypeDark: defaultDark }) => defaultDark());
}
function themeTypeLight() {
  import("./script").then(({ themeTypeLight: defaultLight }) => defaultLight());
}
function setAgeAdvice() {
  if (languageValue == 1) {
    if (age <= 12)
      ageAdvice =
        " Honestly, I like that you at this young age want to get in shape, but you know it's important that you understand that until you reach your teens 99,99% of your focus has to be in getting and keeping healthy. Relax, soon you will be able to get in shape easier than now and, more importantly, in a safer time of your life!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your early teen's the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Since you are at your best age range to get in shape, that does not mean it's gotta be easy but it means that you have the most amount of hormones that help you through the process!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, it is definitely important that you can maintain good health, but you're more than right on wanting to have a better body, and the healthier you are the easier to get in shape!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your late 40s, early 50s, and 60s the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    else if (age >= 61)
      ageAdvice =
        " Honestly, I like that you at this age want to get in shape, but you know it's important that you understand that 99% of your focus has to be in getting and then keeping healthy. Relax, it may be difficult but you're gonna make it, and also the healthier you are, the easier it will be to get a better body!";
  } else if (languageValue == 2) {
    if (age <= 12)
      ageAdvice =
        " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que, até chegar à adolescência, 99,99% do seu foco tem que ser em obter e se manter saudável. Relaxe, logo você poderá entrar em forma mais fácil do que agora e, mais importante, em um momento mais seguro da sua vida!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, no seu primeiro adolescente a coisa mais importante obviamente é a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Como você está na sua melhor faixa etária para entrar em forma, isso não significa que deva ser fácil, mas significa que você tem a maior quantidade de hormônios que o ajudam no processo!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, é definitivamente importante que você possa manter uma boa saúde, mas você está mais do que certo em querer ter um corpo melhor, e quanto mais saudável você estiver, mais fácil será entrar em forma!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, com quase 40, 50 e 60 anos, a coisa mais importante é obviamente a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    else if (age >= 61)
      ageAdvice =
        " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que 99% do seu foco tem que ser em ficar e então se manter saudável. Relaxe, pode ser difícil, mas você vai conseguir, e quanto mais saudável você for, mais fácil será conseguir um corpo melhor!";
  } else if (languageValue == 3) {
    if (age <= 12)
      ageAdvice =
        " Honnêtement, j'aime que vous, à ce jeune âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que jusqu'à ce que vous atteigniez votre adolescence, 99,99% de votre objectif doit être de rester en bonne santé. Détendez-vous, bientôt vous pourrez vous mettre en forme plus facilement que maintenant et, surtout, à un moment plus sûr de votre vie!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à votre jeune adolescent, la chose la plus importante est évidemment votre santé, mais vous avez plus que raison de vouloir avoir un meilleur corps!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Puisque vous êtes à votre meilleure tranche d'âge pour vous mettre en forme, cela ne signifie pas que ce doit être facile, mais cela signifie que vous avez le plus d'hormones qui vous aident tout au long du processus!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, il est vraiment important que vous puissiez rester en bonne santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps, et plus vous êtes en bonne santé, plus vous êtes en forme!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à la fin de la quarantaine, au début de la cinquantaine et au début de la soixantaine, la chose la plus importante est évidemment votre santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps!";
    else if (age >= 61)
      ageAdvice =
        " Honnêtement, j'aime le fait que vous, à cet âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que 99% de votre objectif doit être de devenir et de rester en bonne santé. Détendez-vous, cela peut être difficile mais vous y arriverez, et plus vous serez en santé, plus il sera facile d'avoir un meilleur corps!";
  } else if (languageValue == 4) {
    if (age <= 12)
      ageAdvice =
        " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que entiendas que hasta que llegues a la adolescencia, el 99,99% de tu enfoque debe estar en estar y mantenerte saludable. Relájate, pronto podrás ponerte en forma más fácilmente que ahora y, lo que es más importante, ¡en un momento más seguro de tu vida!";
    else if (age >= 13 && age <= 17)
      ageAdvice =
        " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, en la adolescencia temprana lo más importante es obviamente tu salud, ¡pero tienes más razón en querer tener un cuerpo mejor!";
    else if (age >= 18 && age <= 30)
      ageAdvice =
        " Ya que estás en tu mejor rango de edad para ponerte en forma, eso no significa que tenga que ser fácil, ¡pero significa que tienes la mayor cantidad de hormonas que te ayudan en el proceso!";
    else if (age >= 31 && age <= 45)
      ageAdvice =
        " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, definitivamente es importante que puedas mantener una buena salud, pero tienes más razón en querer tener un mejor cuerpo, ¡y cuanto más saludable estés, más fácil será ponerte en forma!";
    else if (age >= 46 && age <= 60)
      ageAdvice =
        " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, a finales de los 40, principios de los 50 y 60 lo más importante es obviamente su salud, ¡pero tiene más razón en querer tener un cuerpo mejor!";
    else if (age >= 61)
      ageAdvice =
        " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que comprendas que el 99% de tu enfoque tiene que estar en estar y luego en mantenerte saludable. Relájate, puede ser difícil, pero lo lograrás, y además, cuanto más saludable estés, ¡más fácil será tener un mejor cuerpo!";
  }
}
function ages() {
  age = document.getElementById("age").value;
  age = parseFloat(age);
  setAgeAdvice();
}
const names = () => (inputName = document.getElementById("name").value);
const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
function validate() {
  if (noEmailNeeded === 0) {
    if (validateEmail(emailaddrreturn)) {
    } else {
      if (emailaddrreturn == "" || emailaddrreturn == undefined) {
        if (languageValue == 1) {
          alert("No Email Written in the Email Field");
          var confirmWriteEmail = confirm(
            "Are you sure you don't want to write your email and receive a sum up later? If You Don't Just Click OK, and if you want to write your email Click Cancel!"
          );
        } else if (languageValue == 2) {
          alert("Nenhum email escrito no campo de email");
          var confirmWriteEmail = confirm(
            "Tem certeza de que não deseja escrever seu e-mail e receber um resumo depois? Se você não clicar em OK e quiser escrever seu e-mail, clique em Cancelar!"
          );
        } else if (languageValue == 3) {
          alert("Aucun e-mail écrit dans le champ e-mail");
          var confirmWriteEmail = confirm(
            "Êtes-vous sûr de ne pas vouloir écrire votre e-mail et recevoir un résumé plus tard? Si vous ne cliquez pas simplement sur OK, et si vous souhaitez écrire votre e-mail, cliquez sur Annuler!"
          );
        } else if (languageValue == 4) {
          alert(
            "No se ha escrito ningún correo electrónico en el campo de correo electrónico"
          );
          var confirmWriteEmail = confirm(
            "¿Estás seguro de que no quieres escribir tu correo electrónico y recibir un resumen más tarde? Si no lo hace, simplemente haga clic en Aceptar, y si desea escribir su correo electrónico, haga clic en Cancelar."
          );
        }
        if (confirmWriteEmail == true) noEmailNeeded += 1;
      } else {
        if (languageValue == 1) alert(emailaddrreturn + " is not valid");
        else if (languageValue == 2) alert(emailaddrreturn + " não é válido");
        else if (languageValue == 3)
          alert(emailaddrreturn + " n'est pas valide");
        else if (languageValue == 4) alert(emailaddrreturn + " No es válido");
        wrongEmailCount += 1;
        if (wrongEmailCount >= 2) {
          if (languageValue == "english")
            var confirmWriteEmail = confirm(
              "Are you sure you don't want to write your email and receive a sum up later? If You Don't Just Click OK, and if you want to write your email Click Cancel!"
            );
          else if (languageValue == "português")
            var confirmWriteEmail = confirm(
              "Tem certeza de que não deseja escrever seu e-mail e receber uma quantia depois? Se você não clicar em OK e quiser escrever seu e-mail, clique em Cancelar!"
            );
          else if (languageValue == "français")
            var confirmWriteEmail = confirm(
              "Êtes-vous sûr de ne pas vouloir écrire votre e-mail et recevoir un résumé plus tard? Si vous ne cliquez pas simplement sur OK, et si vous souhaitez écrire votre e-mail, cliquez sur Annuler!"
            );
          else if (languageValue == "español")
            var confirmWriteEmail = confirm(
              "¿Estás seguro de que no quieres escribir tu correo electrónico y recibir un resumen más tarde? Si no lo hace, simplemente haga clic en Aceptar, y si desea escribir su correo electrónico, haga clic en Cancelar."
            );
          if (confirmWriteEmail == true) noEmailNeeded += 1;
        }
      }
    }
    return false;
  }
}
