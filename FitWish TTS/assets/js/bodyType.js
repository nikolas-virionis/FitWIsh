function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
  document.getElementById("headingObjInputIdBodyType").innerHTML = "Body Type";
  document.getElementById("colorChangeIdNoIdea").value = "No idea";
  document.getElementById("colorChangeIdEcto").value = "Ectomorph";
  document.getElementById("colorChangeIdMeso").value = "Mesomorph";
  document.getElementById("colorChangeIdEndo").value = "Endomorph";
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

// body type
const bodyType = (bodytt) => {
  bodytype = bodytt;
  if (languageValue == 1) {
    if (bodytype == "ecto")
      bodyTypeAdvice =
        "since you are an ectomorph, you gotta have in mind that you naturally have a condition that makes you skinnier, having less fat but also less muscle.";
    else if (bodytype == "meso")
      bodyTypeAdvice =
        "since you are a mesomorph, you gain muscle with moderate ease and lose fat also with some ease, genetically wise, so you got it 'easier than others', right? Yeah but nahh really. It's not because it's a little bit easier that it's easy to get seriously in shape, so then when you get it done you'll appreciate yourself even more, and that's what matters!";
    else if (bodytype == "endo")
      bodyTypeAdvice =
        "since you are an endomorph, you gain both muscle and fat easily, makes bulking easy but makes it a lot more difficult to cut and get your body in shape.";
  } else if (languageValue == 2) {
    if (bodytype == "ecto")
      bodyTypeAdvice =
        "já que você é um ectomorfo, é preciso ter em mente que você tem naturalmente uma condição que o torna mais magro, tendo menos gordura, mas também menos músculos.";
    else if (bodytype == "meso")
      bodyTypeAdvice =
        "como você é um mesomorfo, você ganha músculo com moderada facilidade e perde gordura também com alguma facilidade, geneticamente sábio, então você entendeu 'mais fácil do que os outros', certo? Sim, mas nahh realmente. Não é porque é um pouco mais fácil que é fácil entrar em forma seriamente, então, quando terminar, você se apreciará ainda mais, e é isso que importa!";
    else if (bodytype == "endo")
      bodyTypeAdvice =
        "como você é um(a) endomorfo(a), você ganha músculo e gordura facilmente, torna mais fácil aumentar o volume, mas torna muito mais difícil secar e colocar seu corpo em forma.";
  } else if (languageValue == 3) {
    if (bodytype == "ecto")
      bodyTypeAdvice =
        "puisque vous êtes un ectomorphe, vous devez garder à l'esprit que vous avez naturellement une maladie qui vous rend plus maigre, avec moins de graisse mais aussi moins de muscle.";
    else if (bodytype == "meso")
      bodyTypeAdvice =
        "puisque vous êtes un mésomorphe, vous gagnez du muscle avec une facilité modérée et perdez de la graisse également avec une certaine facilité, génétiquement sage, donc vous l'avez plus facile que les autres '', non? Ouais mais nahh vraiment. Ce n'est pas parce que c'est un peu plus facile qu'il est facile de se mettre sérieusement en forme, alors quand vous aurez terminé, vous vous apprécierez encore plus et c'est ce qui compte!";
    else if (bodytype == "endo")
      bodyTypeAdvice =
        "puisque vous êtes un endomorphe, vous gagnez facilement du muscle et de la graisse, ce qui facilite le gonflement, mais il est beaucoup plus difficile de couper et de remettre votre corps en forme.";
  } else if (languageValue == 4) {
    if (bodytype == "ecto")
      bodyTypeAdvice =
        "como eres un ectomorfo, debes tener en cuenta que naturalmente tienes una condición que te hace más delgado, con menos grasa pero también con menos músculo.";
    else if (bodytype == "meso")
      bodyTypeAdvice =
        "como eres mesomorfo, ganas músculo con moderada facilidad y pierdes grasa también con cierta facilidad, genéticamente, así que lo conseguiste 'más fácil que otros', ¿verdad? Sí, pero realmente no. No es porque sea un poco más fácil que sea fácil ponerse en forma seriamente, así que cuando lo termines te apreciarás aún más, ¡y eso es lo que importa!";
    else if (bodytype == "endo")
      bodyTypeAdvice =
        "como eres un endomorfo, ganas músculo y grasa fácilmente, facilita el volumen pero hace que sea mucho más difícil secar y poner tu cuerpo en forma.";
  }
};
function nop() {
  if (languageValue == 1)
    alert(
      "Copy the first link to a 10-minute video explaining it: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, or take a Google test on this link: https://www.bodybuilding.com/fun/becker3.htm. But basically ecto does not have much ease in gaining muscle nor fat, meso has ease in gaining muscle and losing fat and endo has ease to gain both. And btw you can click on the body type you are without having to rerun the code"
    );
  else if (languageValue == 2)
    alert(
      "Copie o primeiro link para um vídeo de 10 minutos explicando-o: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, ou faça um teste do Google neste link: https://www.bodybuilding.com/fun/becker3.htm. Mas basicamente o ecto não tem muita facilidade em ganhar músculo nem gordura, o meso tem facilidade em ganhar músculo e perder gordura e o endo tem facilidade em ganhar ambos. E inclusive você pode clicar no tipo de corpo que você é, sem ter que executar o código novamente"
    );
  else if (languageValue == 3)
    alert(
      "Copiez le premier lien vers une vidéo de 10 minutes expliquant: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, ou faites un test Google sur ce lien: https://www.bodybuilding.com/fun/becker3.htm. Mais fondamentalement, ecto n'a pas beaucoup de facilité à gagner du muscle ni de la graisse, le méso a la facilité de gagner du muscle et de perdre de la graisse et l'endo a la facilité de gagner les deux. Et au fait, vous pouvez cliquer sur le type de corps que vous êtes sans avoir à réexécuter le code"
    );
  else if (languageValue == 4)
    alert(
      "Copie el primer enlace a un video de 10 minutos que lo explique: https://www.youtube.com/watch?v=iW6QeqA_iD4&t=446s, o haz una prueba de Google en este enlace: https://www.bodybuilding.com/fun/becker3.htm. Pero básicamente ecto no tiene mucha facilidad para ganar músculo ni grasa, meso tiene facilidad para ganar músculo y perder grasa y endo tiene facilidad para ganar ambos. Y, por cierto, puede hacer clic en el tipo de cuerpo que tiene sin tener que volver a ejecutar el código."
    );
}
