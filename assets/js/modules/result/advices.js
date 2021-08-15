let { weight } = await import("./units.js");

let getters = await import("../global/fieldGetter.js");
let { language } = await import("../../script.js");
// //variable getters
const { getAge } = await getters;
const { getBodyType } = await getters;
const { getCheat } = await getters;
const { getExercise } = await getters;
const { getGender } = await getters;
const { getGoal } = await getters;
const { getHealthy } = await getters;
const { getCurrentBody } = await getters;
const { getGoalBody } = await getters;
const { getMeals } = await getters;
export let bmr;
export function setBodyTypeAdvice() {
  if (language == "english") {
    if (getBodyType() == "ecto")
      return "since you are an ectomorph, you gotta have in mind that you naturally have a condition that makes you skinnier, having less fat but also less muscle.";
    if (getBodyType() == "meso")
      return "since you are a mesomorph, you gain muscle with moderate ease and lose fat also with some ease, genetically wise, so you got it 'easier than others', right? Yeah but nahh really. It's not because it's a little bit easier that it's easy to get seriously in shape, so then when you get it done you'll appreciate yourself even more, and that's what matters!";
    if (getBodyType() == "endo")
      return "since you are an endomorph, you gain both muscle and fat easily, makes bulking easy but makes it a lot more difficult to cut and get your body in shape.";
  }
  if (language == "português") {
    if (getBodyType() == "ecto")
      return "já que você é um ectomorfo, é preciso ter em mente que você tem naturalmente uma condição que o torna mais magro, tendo menos gordura, mas também menos músculos.";
    if (getBodyType() == "meso")
      return "como você é um mesomorfo, você ganha músculo com moderada facilidade e perde gordura também com alguma facilidade, geneticamente sábio, então você entendeu 'mais fácil do que os outros', certo? Sim, mas nahh realmente. Não é porque é um pouco mais fácil que é fácil entrar em forma seriamente, então, quando terminar, você se apreciará ainda mais, e é isso que importa!";
    if (getBodyType() == "endo")
      return "como você é um(a) endomorfo(a), você ganha músculo e gordura facilmente, torna mais fácil aumentar o volume, mas torna muito mais difícil secar e colocar seu corpo em forma.";
  }
  if (language == "français") {
    if (getBodyType() == "ecto")
      return "puisque vous êtes un ectomorphe, vous devez garder à l'esprit que vous avez naturellement une maladie qui vous rend plus maigre, avec moins de graisse mais aussi moins de muscle.";
    if (getBodyType() == "meso")
      return "puisque vous êtes un mésomorphe, vous gagnez du muscle avec une facilité modérée et perdez de la graisse également avec une certaine facilité, génétiquement sage, donc vous l'avez plus facile que les autres '', non? Ouais mais nahh vraiment. Ce n'est pas parce que c'est un peu plus facile qu'il est facile de se mettre sérieusement en forme, alors quand vous aurez terminé, vous vous apprécierez encore plus et c'est ce qui compte!";
    if (getBodyType() == "endo")
      return "puisque vous êtes un endomorphe, vous gagnez facilement du muscle et de la graisse, ce qui facilite le gonflement, mais il est beaucoup plus difficile de couper et de remettre votre corps en forme.";
  }
  if (language == "español") {
    if (getBodyType() == "ecto")
      return "como eres un ectomorfo, debes tener en cuenta que naturalmente tienes una condición que te hace más delgado, con menos grasa pero también con menos músculo.";
    if (getBodyType() == "meso")
      return "como eres mesomorfo, ganas músculo con moderada facilidad y pierdes grasa también con cierta facilidad, genéticamente, así que lo conseguiste 'más fácil que otros', ¿verdad? Sí, pero realmente no. No es porque sea un poco más fácil que sea fácil ponerse en forma seriamente, así que cuando lo termines te apreciarás aún más, ¡y eso es lo que importa!";
    if (getBodyType() == "endo")
      return "como eres un endomorfo, ganas músculo y grasa fácilmente, facilita el volumen pero hace que sea mucho más difícil secar y poner tu cuerpo en forma.";
  }
}
export function setAgeAdvice() {
  if (language == "english") {
    if (getAge() <= 12)
      return " Honestly, I like that you at this young age want to get in shape, but you know it's important that you understand that until you reach your teens 99,99% of your focus has to be in getting and keeping healthy. Relax, soon you will be able to get in shape easier than now and, more importantly, in a safer time of your life!";
    if (getAge() >= 13 && getAge() <= 17)
      return " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your early teen's the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Since you are at your best age range to get in shape, that does not mean it's gotta be easy but it means that you have the most amount of hormones that help you through the process!";
    if (getAge() >= 31 && getAge() <= 45)
      return " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, it is definitely important that you can maintain good health, but you're more than right on wanting to have a better body, and the healthier you are the easier to get in shape!";
    if (getAge() >= 46 && getAge() <= 60)
      return " It's cool that you want to get in shape, but still, it's important that yada yada of -you gotta keep healthy and that's all that matters-? Well, kinda, I mean, at your late 40s, early 50s, and 60s the most important thing is obviously your health, but you're more than right on wanting to have a better body!";
    if (getAge() >= 61)
      return " Honestly, I like that you at this age want to get in shape, but you know it's important that you understand that 99% of your focus has to be in getting and then keeping healthy. Relax, it may be difficult but you're gonna make it, and also the healthier you are, the easier it will be to get a better body!";
  }
  if (language == "português") {
    if (getAge() <= 12)
      return " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que, até chegar à adolescência, 99,99% do seu foco tem que ser em obter e se manter saudável. Relaxe, logo você poderá entrar em forma mais fácil do que agora e, mais importante, em um momento mais seguro da sua vida!";
    if (getAge() >= 13 && getAge() <= 17)
      return " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, no seu primeiro adolescente a coisa mais importante obviamente é a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Como você está na sua melhor faixa etária para entrar em forma, isso não significa que deva ser fácil, mas significa que você tem a maior quantidade de hormônios que o ajudam no processo!";
    if (getAge() >= 31 && getAge() <= 45)
      return " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, é definitivamente importante que você possa manter uma boa saúde, mas você está mais do que certo em querer ter um corpo melhor, e quanto mais saudável você estiver, mais fácil será entrar em forma!";
    if (getAge() >= 46 && getAge() <= 60)
      return " É legal que você queira entrar em forma, mas ainda assim, é importante aquele blá-blá-blá de -você tem que se manter saudável e isso é tudo que importa-? Bem, tipo, quero dizer, com quase 40, 50 e 60 anos, a coisa mais importante é obviamente a sua saúde, mas você está mais do que certo em querer ter um corpo melhor!";
    if (getAge() >= 61)
      return " Honestamente, eu gosto que você nesta idade queira entrar em forma, mas você sabe que é importante entender que 99% do seu foco tem que ser em ficar e então se manter saudável. Relaxe, pode ser difícil, mas você vai conseguir, e quanto mais saudável você for, mais fácil será conseguir um corpo melhor!";
  }
  if (language == "français") {
    if (getAge() <= 12)
      return " Honnêtement, j'aime que vous, à ce jeune âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que jusqu'à ce que vous atteigniez votre adolescence, 99,99% de votre objectif doit être de rester en bonne santé. Détendez-vous, bientôt vous pourrez vous mettre en forme plus facilement que maintenant et, surtout, à un moment plus sûr de votre vie!";
    if (getAge() >= 13 && getAge() <= 17)
      return " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à votre jeune adolescent, la chose la plus importante est évidemment votre santé, mais vous avez plus que raison de vouloir avoir un meilleur corps!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Puisque vous êtes à votre meilleure tranche d'âge pour vous mettre en forme, cela ne signifie pas que ce doit être facile, mais cela signifie que vous avez le plus d'hormones qui vous aident tout au long du processus!";
    if (getAge() >= 31 && getAge() <= 45)
      return " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, il est vraiment important que vous puissiez rester en bonne santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps, et plus vous êtes en bonne santé, plus vous êtes en forme!";
    if (getAge() >= 46 && getAge() <= 60)
      return " C'est cool que vous vouliez vous mettre en forme, mais quand même, c'est important que yada yada de -vous devez rester en bonne santé et c'est tout ce qui compte-? Eh bien, un peu, je veux dire, à la fin de la quarantaine, au début de la cinquantaine et au début de la soixantaine, la chose la plus importante est évidemment votre santé, mais vous avez tout à fait raison de vouloir avoir un meilleur corps!";
    if (getAge() >= 61)
      return " Honnêtement, j'aime le fait que vous, à cet âge, vouliez vous mettre en forme, mais vous savez qu'il est important que vous compreniez que 99% de votre objectif doit être de devenir et de rester en bonne santé. Détendez-vous, cela peut être difficile mais vous y arriverez, et plus vous serez en santé, plus il sera facile d'avoir un meilleur corps!";
  }
  if (language == "español") {
    if (getAge() <= 12)
      return " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que entiendas que hasta que llegues a la adolescencia, el 99,99% de tu enfoque debe estar en estar y mantenerte saludable. Relájate, pronto podrás ponerte en forma más fácilmente que ahora y, lo que es más importante, ¡en un momento más seguro de tu vida!";
    if (getAge() >= 13 && getAge() <= 17)
      return " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, en la adolescencia temprana lo más importante es obviamente tu salud, ¡pero tienes más razón en querer tener un cuerpo mejor!";
    if (getAge() >= 18 && getAge() <= 30)
      return " Ya que estás en tu mejor rango de edad para ponerte en forma, eso no significa que tenga que ser fácil, ¡pero significa que tienes la mayor cantidad de hormonas que te ayudan en el proceso!";
    if (getAge() >= 31 && getAge() <= 45)
      return " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, definitivamente es importante que puedas mantener una buena salud, pero tienes más razón en querer tener un mejor cuerpo, ¡y cuanto más saludable estés, más fácil será ponerte en forma!";
    if (getAge() >= 46 && getAge() <= 60)
      return " Es genial que quieras ponerte en forma, pero aún así, es importante que yada yada de -tienes que mantenerte saludable y eso es todo lo que importa-. Bueno, un poco, quiero decir, a finales de los 40, principios de los 50 y 60 lo más importante es obviamente su salud, ¡pero tiene más razón en querer tener un cuerpo mejor!";
    if (getAge() >= 61)
      return " Honestamente, me gusta que a esta edad quieras ponerte en forma, pero sabes que es importante que comprendas que el 99% de tu enfoque tiene que estar en estar y luego en mantenerte saludable. Relájate, puede ser difícil, pero lo lograrás, y además, cuanto más saludable estés, ¡más fácil será tener un mejor cuerpo!";
  }
}
export const getBodyTypeAdvantageAdvice = async () => {
  const {
    getBodyTypeAdvantageAdviceEcto,
    getBodyTypeAdvantageAdviceMeso,
    getBodyTypeAdvantageAdviceEndo,
  } = await import("./bodyTypeAdvices.js");
  const { getBodyTypeAdvantage } = await import("./variableSetters.js");
  if (getBodyType() == "ecto")
    return getBodyTypeAdvantageAdviceEcto(getBodyTypeAdvantage());
  if (getBodyType() == "meso")
    return getBodyTypeAdvantageAdviceMeso(getBodyTypeAdvantage());
  return getBodyTypeAdvantageAdviceEndo(getBodyTypeAdvantage());
};

export async function setCalorieIntake() {
  let { weight } = await import("./units.js");
  let { height } = await import("./units.js");
  if (language == "english") {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return `Since you trying to bulk, you should try to get a small calorie intake surplus, like 100-300 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.1
        ).toFixed(
          0
        )}kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.15
        ).toFixed(
          0
        )}kcal</big> besides the calories you burn through exercises.`;
      if (getGoal() == "cutting")
        return `Since you are trying to cut, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, such as breathing, circulation and cell production a day, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.7
        ).toFixed(
          0
        )}kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.8
        ).toFixed(
          0
        )}kcal</big> besides the calories you burn through exercises. Also you have to have in mind that a good catalyst to all this is training, you can eat more as soon as you burn through exercise, always maintaining that same calorie intake deficit.`;
      if (getGoal() == "surplus")
        return `Since you are trying to lose weight, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.7
        ).toFixed(
          0
        )}kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          0.8
        ).toFixed(
          0
        )}kcal</big> besides the calories you burn through exercises.`;
      if (getGoal() == "muscle")
        return `Since you trying to gain weight through mostly muscle, you should try to get a decent calorie intake surplus, like 250-450 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours, once you will get muscle and weight in general you gotta workout, mainly in the gym. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.1
        ).toFixed(
          0
        )}kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() + 5) *
          1.15
        ).toFixed(
          0
        )}kcal</big> besides the calories you burn through exercises.`;
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return `Since you trying to bulk, you should try to get a small calorie intake surplus, like 100-300 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >${bmr}</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() - 161) *
          1.05
        ).toFixed(
          0
        )}kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >${(
          (10 * weight + 625 * height - 5 * getAge() - 161) *
          1.1
        ).toFixed(
          0
        )}kcal</big> besides the calories you burn through exercises.`;
      if (getGoal() == "cutting")
        return (
          "Since you are trying to cut, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.65).toFixed(
            0
          ) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.75).toFixed(
            0
          ) +
          "kcal</big> besides the calories you burn through exercises. Also you have to have in mind that a good catalyst to all this is training, you can eat more as soon as you burn through exercise, always maintaining that same calorie intake deficit."
        );
      if (getGoal() == "surplus")
        return (
          "Since you are trying to lose weight, you should have a decent calorie deficit, nothing much but 250-500kcal under your basal metabolic rate would be fine, this rate is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides a decent amount of low calorie and low glycemic index rate carbohydrates, and you'd better consider some brown rice, wholemeal pasta and sweet potato. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.7).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.8).toFixed(0) +
          "kcal</big> besides the calories you burn through exercises."
        );
      if (getGoal() == "muscle")
        return (
          "Since you trying to gain weight through mostly muscle, you should try to get a decent calorie intake surplus, like 250-450 kcal above your basal metabolic rate, which is basically how many calories you burn for your basal body functions, a day, such as breathing, circulation and cell production, is <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. A good slice of that amount of intake calories would be better being proteins, fruits and vegetables, besides good and lower glycemic index rate carbohydrates, mainly before your workouts, that will play a huge role in this path of yours, once you will get muscle and weight in general you gotta workout, mainly in the gym. You should try to get a whole day calorie intake from about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.1).toFixed(0) +
          "kcal</big> to about <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.15).toFixed(
            0
          ) +
          "kcal</big> besides the calories you burn through exercises."
        );
    }
  }
  if (language == "português") {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Já que você está tentando aumentar o volume, deve tentar obter um pequeno excedente de ingestão de calorias, como 100-300 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para as funções corporais basais, por dia, como respiração, circulação e a produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que vão desempenhar um grande papel neste seu caminho. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "cutting")
        return (
          "Já que você está tentando secar, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, como respiração, circulação e a produção de células por dia, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios. Também é preciso ter em mente que um bom catalisador para tudo isso é o treinamento, você pode comer mais assim que se queimar com o exercício, mantendo sempre esse mesmo déficit calórico."
        );
      if (getGoal() == "surplus")
        return (
          "Já que você está tentando perder peso, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, tal como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "muscle")
        return (
          "Já que você está tentando ganhar peso principalmente através dos músculos, você deve tentar obter um excedente de ingestão de calorias decente, como 250-450 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que terão um grande papel nesse seu caminho, pois você vai ganhar músculos. e peso em geral você tem que treinar, principalmente na academia. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios."
        );
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Já que você está tentando aumentar o volume, deve tentar obter um pequeno excedente de ingestão de calorias, como 100-300 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para as funções corporais basais, por dia, como respiração, circulação e a produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que vão desempenhar um grande papel neste seu caminho. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.05).toFixed(
            0
          ) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.1).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "cutting")
        return (
          "Já que você está tentando secar, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.65).toFixed(
            0
          ) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.75).toFixed(
            0
          ) +
          "kcal</big> além das calorias que você queima com os exercícios. Também é preciso ter em mente que um bom catalisador para tudo isso é o treinamento, você pode comer mais assim que se queimar com o exercício, mantendo sempre esse mesmo déficit calórico."
        );
      if (getGoal() == "surplus")
        return (
          "Já que você está tentando perder peso, você deve ter um déficit calórico decente, nada além de 250-500kcal abaixo de sua taxa metabólica basal seria bom, esta taxa é basicamente quantas calorias você queima para suas funções corporais basais, por dia, tal como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas seria melhor sendo proteínas, frutas e vegetais, além de uma quantidade decente de carboidratos de baixa caloria e baixo índice glicêmico, e é melhor considerar um pouco de arroz integral, macarrão integral e batata doce. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.8).toFixed(0) +
          "kcal</big> além das calorias que você queima com os exercícios."
        );
      if (getGoal() == "muscle")
        return (
          "Já que você está tentando ganhar peso principalmente através dos músculos, você deve tentar obter um excedente de ingestão de calorias decente, como 250-450 kcal acima de sua taxa metabólica basal, que é basicamente quantas calorias você queima para suas funções corporais basais, por dia, como como respiração, circulação e produção de células, é <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Uma boa parte dessascalorias ingeridas ficaria melhor sendo proteínas, frutas e vegetais, além de carboidratos bons e com índice glicêmico mais baixo, principalmente antes dos treinos, que terão um grande papel nesse seu caminho, pois você vai ganhar músculos. e peso em geral você tem que treinar, principalmente na academia. Você deve tentar obter uma ingestão de calorias para um dia inteiro de cerca de <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.1).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.15).toFixed(
            0
          ) +
          "kcal</big> além das calorias que você queima com os exercícios."
        );
    }
  }
  if (language == "français") {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Puisque vous essayez de prendre du volume, vous devriez essayer d'obtenir un petit surplus d'apport calorique, comme 100 à 300 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour les fonctions basales de votre corps, par jour, comme la respiration, la circulation. et la production cellulaire, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "cutting")
        return (
          "Puisque vous essayez de couper, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, telles que la respiration, la circulation et la production de cellules par jour est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices. Vous devez également garder à l'esprit qu'un bon catalyseur de tout cela est l'entraînement, vous pouvez manger plus dès que vous brûlez en faisant de l'exercice, en maintenant toujours le même déficit calorique."
        );
      if (getGoal() == "surplus")
        return (
          "Puisque vous essayez de perdre du poids, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, un jour, tel comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "muscle")
        return (
          "Puisque vous essayez de prendre du poids principalement par vos muscles, vous devriez essayer d'obtenir un excédent calorique décent, comme 250 à 450 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, par exemple. comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin, une fois que vous aurez du muscle. et le poids en général, vous devez vous entraîner, principalement dans le gymnase. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices."
        );
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Puisque vous essayez de prendre du volume, vous devriez essayer d'obtenir un petit surplus d'apport calorique, comme 100 à 300 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour les fonctions basales de votre corps, par jour, comme la respiration, la circulation. et la production cellulaire, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.05).toFixed(
            0
          ) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.1).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "cutting")
        return (
          "Puisque vous essayez de réduire, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est fondamentalement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, comme la respiration, la circulation et la production de cellules, <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.65).toFixed(
            0
          ) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.75).toFixed(
            0
          ) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices. Vous devez également garder à l'esprit qu'un bon catalyseur de tout cela est l'entraînement, vous pouvez manger plus dès que vous brûlez en faisant de l'exercice, en maintenant toujours le même déficit calorique."
        );
      if (getGoal() == "surplus")
        return (
          "Puisque vous essayez de perdre du poids, vous devriez avoir un déficit calorique décent, rien de plus que 250-500kcal sous votre taux métabolique basal serait bien, ce taux est essentiellement le nombre de calories que vous brûlez pour vos fonctions corporelles basales, un jour, tel comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories serait mieux constituée de protéines, de fruits et de légumes, en plus d'une quantité décente de glucides à faible teneur en calories et à faible indice glycémique, et vous feriez mieux d'envisager du riz brun, des pâtes complètes et des patates douces. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.7).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.8).toFixed(0) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices."
        );
      if (getGoal() == "muscle")
        return (
          "Puisque vous essayez de prendre du poids principalement par vos muscles, vous devriez essayer d'obtenir un excédent calorique décent, comme 250 à 450 kcal au-dessus de votre taux métabolique de base, qui correspond essentiellement au nombre de calories que vous brûlez pour vos fonctions corporelles basales, par jour, par exemple. comme la respiration, la circulation et la production de cellules, est <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Une bonne part de cette quantité de calories d'apport serait préférable d'être des protéines, des fruits et des légumes, en plus des glucides à indice glycémique bon et inférieur, principalement avant vos entraînements, qui joueront un rôle énorme dans votre chemin, une fois que vous aurez du muscle. et le poids en général, vous devez vous entraîner, principalement dans le gymnase. Vous devriez essayer d'obtenir un apport calorique d'une journée entière d'environ <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.1).toFixed(0) +
          "kcal</big> à <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.15).toFixed(
            0
          ) +
          "kcal</big> en plus des calories que vous brûlez grâce aux exercices."
        );
    }
  }
  if (language == "español") {
    if (getGender() == "male") {
      bmr = (10 * weight + 625 * height - 5 * getAge() + 5).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Dado que está tratando de aumentar el volumen, debe intentar obtener un pequeño excedente de ingesta de calorías, como 100-300 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, al día, como la respiración, la circulación. y la producción de células, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de menor índice glucémico, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "cutting")
        return (
          "Ya que está tratando de reducir, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, como la respiración, la circulación. y la producción de células al día, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios. También debes tener en cuenta que un buen catalizador de todo esto es el entrenamiento, puedes comer más en cuanto te quemas a través del ejercicio, manteniendo siempre ese mismo déficit de ingesta calórica."
        );
      if (getGoal() == "surplus")
        return (
          "Dado que está tratando de perder peso, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.7).toFixed(0) +
          "kcal</big> a <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 0.8).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "muscle")
        return (
          "Dado que intenta ganar peso principalmente a través de los músculos, debe tratar de obtener un excedente de ingesta de calorías decente, como 250-450 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de índice glucémico más bajo, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo, una vez que obtengas músculo. y peso en general tienes que hacer ejercicio, principalmente en el gimnasio. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.1).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() + 5) * 1.15).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios."
        );
    }
    if (getGender() == "female") {
      bmr =
        (10 * weight + 625 * height - 5 * getAge() - 161).toFixed(1) + "kcal";
      if (getGoal() == "bulking")
        return (
          "Dado que está tratando de aumentar el volumen, debe intentar obtener un pequeño excedente de ingesta de calorías, como 100-300 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, al día, como la respiración, la circulación. y la producción de células, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de menor índice glucémico, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.05).toFixed(
            0
          ) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.1).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "cutting")
        return (
          "Dado que está tratando de reducir, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, como la respiración, la circulación y la producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.65).toFixed(
            0
          ) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.75).toFixed(
            0
          ) +
          "kcal</big> además de las calorías que quema con los ejercicios. También debes tener en cuenta que un buen catalizador de todo esto es el entrenamiento, puedes comer más en cuanto te quemas a través del ejercicio, manteniendo siempre ese mismo déficit de ingesta calórica."
        );
      if (getGoal() == "surplus")
        return (
          "Dado que está tratando de perder peso, debe tener un déficit de calorías decente, nada más que 250-500 kcal por debajo de su tasa metabólica basal estaría bien, esta tasa es básicamente la cantidad de calorías que quema para sus funciones corporales basales, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de una cantidad decente de carbohidratos bajos en calorías y con índice glucémico bajo, y es mejor que considere un poco de arroz integral, pasta integral y batata. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.7).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 0.8).toFixed(0) +
          "kcal</big> además de las calorías que quema con los ejercicios."
        );
      if (getGoal() == "muscle")
        return (
          "Dado que intenta ganar peso principalmente a través de los músculos, debe tratar de obtener un excedente de ingesta de calorías decente, como 250-450 kcal por encima de su tasa metabólica basal, que es básicamente la cantidad de calorías que quema para las funciones basales del cuerpo, un día, por ejemplo. como respiración, circulación y producción celular, es <big style='font-family: Kaushan Script, cursive;' >" +
          bmr +
          "</big>. Una buena porción de esa cantidad de calorías ingeridas sería mejor si fueran proteínas, frutas y verduras, además de carbohidratos buenos y de índice glucémico más bajo, principalmente antes de tus entrenamientos, que jugarán un papel muy importante en este camino tuyo, una vez que obtengas músculo. y peso en general tienes que hacer ejercicio, principalmente en el gimnasio. Debería intentar obtener una ingesta de calorías de un día <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.1).toFixed(0) +
          "kcal</big> a  <big style='font-family: Kaushan Script, cursive;' >" +
          ((10 * weight + 625 * height - 5 * getAge() - 161) * 1.15).toFixed(
            0
          ) +
          "kcal</big> además de las calorías que quema con los ejercicios."
        );
    }
  }
}
export function setExerciseAdvice() {
  if (language == "english") {
    if (getExercise() == 1)
      return " Well, it does not matter what is your goal, your current weight, nor your body type, if you don't exercise, it will be basically impossible for you to reach your goal. It can be run, cycling, powerlifting, or any high-intensity workout you want to do, because it helps you to grow on muscle, burn calories, get rid of water surplus your body can store, plus a lot of health improvements exercising can provide you. The recommended is at least 3-4 times a week, but of course that if you, for example, workout 5 times a week, it won't be bad it will actually help you more, so you know what to do!";
    if (getExercise() == 2)
      return " Well, I suppose, sometimes, you wonder why are you stagnant in the body you're and that you don't like. I can tell you. You are working out too little. Yeah I get it, but it's necessary for you, to get a healthier and prettier body, at least 3-4 high-intensity workouts a week, if you do more, it will still be good and, as a matter of fact, it will be better.";
    if (getExercise() == 3)
      return " Well, you already do the minimal workout frequency for a diet plan, but if you still feel like more can be done in the path of your dream body, you're totally right, then you can do 5, 6 or, if you really want to do this, 7 times a week, the more the better. ";
    if (getExercise() == 4)
      return " Well, that's good. you already do more workouts than required for a regular diet plan. If you want to elevate it even more try doing 7 heavy workouts a week, besides a good diet food plan.";
  }
  if (language == "português") {
    if (getExercise() == 1)
      return " Bem, não importa qual é a sua meta, seu peso atual, nem seu tipo de corpo, se você não se exercitar, será basicamente impossível atingir sua meta. Pode ser corrida, ciclismo, levantamento de peso ou qualquer treino de alta intensidade que você queira fazer, porque ajuda a aumentar os músculos, queimar calorias, se livrar do excesso de água que seu corpo pode armazenar, além de muitas melhorias para a saúde que os exercícios podem te fornecer. O recomendado é pelo menos 3-4 vezes por semana, mas é claro que se você, por exemplo, treinar 5 vezes por semana, não será ruim, na verdade irá ajudá-lo mais, então você sabe o que fazer!";
    if (getExercise() == 2)
      return " Bem, suponho que, às vezes, você se pergunte por que está estagnado no corpo que está e de que não gosta. Eu posso te contar. Você está malhando muito pouco. Sim, entendi, mas é necessário para você ter um corpo mais saudável e bonito, pelo menos 3-4 treinos de alta intensidade por semana, se você fizer mais, ainda será bom e, na verdade, é será melhor.";
    if (getExercise() == 3)
      return " Bem, você já faz a frequência mínima de treino para um plano de dieta, mas se ainda sente que mais pode ser feito no caminho do seu corpo de sonho, você está totalmente certo, então você pode fazer 5, 6 ou, se você realmente quero fazer isso, 7 vezes por semana, quanto mais, melhor. ";
    if (getExercise() == 4)
      return " Bem, isso é bom. você já faz mais exercícios do que o necessário para um plano de dieta regular. Se quiser elevá-la ainda mais experimente fazer 7 treinos pesados por semana, além de um bom plano alimentar dietético.";
  }
  if (language == "français") {
    if (getExercise() == 1)
      return " Eh bien, peu importe votre objectif, votre poids actuel ou votre type de corps, si vous ne faites pas d'exercice, il vous sera pratiquement impossible d'atteindre votre objectif. Il peut s'agir de course, de cyclisme, de dynamophilie ou de tout entraînement de haute intensité que vous souhaitez faire, car il vous aide à développer vos muscles, à brûler des calories, à vous débarrasser du surplus d'eau que votre corps peut stocker, ainsi que de nombreuses améliorations de la santé que l'exercice peut vous fournir. Le recommandé est au moins 3 à 4 fois par semaine, mais bien sûr, si vous vous entraînez, par exemple, 5 fois par semaine, ce ne sera pas mal, cela vous aidera davantage, alors vous savez quoi faire!";
    if (getExercise() == 2)
      return " Eh bien, je suppose que parfois, vous vous demandez pourquoi vous stagnez dans le corps que vous et que vous n'aimez pas. Je peux vous dire. Vous travaillez trop peu. Ouais je comprends, mais c'est nécessaire pour toi, pour avoir un corps plus sain et plus joli, au moins 3-4 séances d'entraînement de haute intensité par semaine, si tu en fais plus, ce sera toujours bon et, en fait, ça sera mieux.";
    if (getExercise() == 3)
      return " Eh bien, vous faites déjà la fréquence minimale d'entraînement pour un régime alimentaire, mais si vous pensez toujours que plus peut être fait sur le chemin de votre corps de rêve, vous avez tout à fait raison, alors vous pouvez faire 5, 6 ou, si vous vraiment veulent faire cela, 7 fois par semaine, plus il y en a, mieux c'est. ";
    if (getExercise() == 4)
      return " Bon, c'est bien. vous faites déjà plus de séances d'entraînement que nécessaire pour un régime alimentaire régulier. Si vous voulez l'augmenter encore plus, essayez de faire 7 séances d'entraînement intensives par semaine, en plus d'un bon régime alimentaire.";
  }
  if (language == "español") {
    if (getExercise() == 1)
      return " Bueno, no importa cuál sea tu objetivo, tu peso actual ni tu tipo de cuerpo, si no haces ejercicio, será básicamente imposible que lo alcance. Puede ser correr, andar en bicicleta, levantar pesas o cualquier entrenamiento de alta intensidad que desee hacer, ya que le ayuda a desarrollar músculo, quemar calorías, eliminar el exceso de agua que su cuerpo puede almacenar, además de muchas mejoras para la salud que puede hacer el ejercicio. proporcionarle. Lo recomendado es al menos 3-4 veces a la semana, pero por supuesto que si, por ejemplo, haces ejercicio 5 veces a la semana, no será malo, en realidad te ayudará más, ¡así que sabes qué hacer!";
    if (getExercise() == 2)
      return " Bueno, supongo que a veces te preguntas por qué estás estancado en el cuerpo que eres y que no te gusta. Te puedo decir. Está haciendo muy poco ejercicio. Sí, lo entiendo, pero es necesario para ti, para tener un cuerpo más sano y bonito, al menos 3-4 entrenamientos de alta intensidad a la semana, si haces más, seguirá siendo bueno y, de hecho, será será mejor.";
    if (getExercise() == 3)
      return " Bueno, ya tiene la frecuencia mínima de entrenamiento para un plan de dieta, pero si todavía siente que se puede hacer más en el camino del cuerpo de sus sueños, tiene toda la razón, entonces puede hacer 5, 6 o, si realmente lo desea. quiero hacer esto, 7 veces a la semana, cuanto más, mejor. ";
    if (getExercise() == 4)
      return " Bueno, eso es bueno. ya haces más entrenamientos de los necesarios para un plan de dieta regular. Si quieres elevarlo aún más intenta hacer 7 entrenamientos pesados a la semana, además de un buen plan alimenticio dietético.";
  }
}
export function setHealthyAdvice() {
  if (language == "english") {
    if (getHealthy() == 1)
      return " I probably shouldn't believe you, but I will. Please, you have to have complete meals, nutrient wise, besides healthy food in it like salad, good protein, choosing cleverly between 'similar options', for example, on weekdays choose chicken breast over red meat. But on weekends don't put everything to lose but free yourself to eat something you like more. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    if (getHealthy() == 2)
      return " That's ok, but still, you need more healthy and complete, nutrient wise, meal days a week, like salad, good protein, choosing cleverly between 'similar options', for example, on weekdays choose chicken breast over red meat. But on weekends don't put everything to lose but free yourself to eat something you like more. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    if (getHealthy() == 3)
      return " You have a decent frequency of good meal days a week but I think that you can complete 5 days a week of it, this way you will have more nutrients on your blood, and then you are going to start seeing the effects on your body shortly. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
    if (getHealthy() == 4)
      return " It's good that you have a good healthy meal day frequency, this will help you a lot on your path to your body goal. Well, you still gotta combine that with good training and workouts to maximize your health and fitness gains.";
  }
  if (language == "português") {
    if (getHealthy() == 1)
      return " Eu provavelmente não deveria acreditar em você, mas vou. Por favor, você tem que fazer refeições completas, em termos de nutrientes, além de alimentos saudáveis como salada, boa proteína, escolhendo habilmente entre 'opções semelhantes', por exemplo, nos dias de semana prefira peito de frango à carne vermelha. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    if (getHealthy() == 2)
      return " Tudo bem, mas ainda assim, você precisa de refeições mais saudáveis e completas, em termos de nutrientes, dias de refeição por semana, como salada, boa proteína, escolher habilmente entre 'opções semelhantes', por exemplo, nos dias de semana escolha peito de frango em vez de carne vermelha. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    if (getHealthy() == 3)
      return " Você tem uma frequência decente de bons dias de refeição por semana, mas eu acho que você pode completar 5 dias por semana, assim você terá mais nutrientes no seu sangue, e então você começará a ver os efeitos no seu corpo em breve . Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
    if (getHealthy() == 4)
      return " É bom que você tenha uma boa frequência de refeições saudáveis, isso vai te ajudar muito no seu caminho para o seu objetivo corporal. Bem, você ainda precisa combinar isso com um bom treinamento e exercícios para maximizar seus ganhos de saúde e fitness.";
  }
  if (language == "français") {
    if (getHealthy() == 1)
      return " Je ne devrais probablement pas te croire, mais je le ferai. S'il vous plaît, vous devez avoir des repas complets, en termes de nutriments, en plus des aliments sains comme une salade, de bonnes protéines, en choisissant intelligemment entre des options similaires '', par exemple, en semaine, choisissez la poitrine de poulet plutôt que la viande rouge. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    if (getHealthy() == 2)
      return " Ce n'est pas grave, mais vous avez quand même besoin de repas plus sains et complets, en termes de nutriments, chaque semaine, comme une salade, de bonnes protéines, en choisissant intelligemment entre des options similaires '', par exemple, en semaine, choisissez la poitrine de poulet plutôt que la viande rouge. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    if (getHealthy() == 3)
      return " Vous avez une fréquence décente de bons repas jours par semaine, mais je pense que vous pouvez en terminer 5 jours par semaine, de cette façon, vous aurez plus de nutriments dans votre sang, et ensuite vous allez commencer à voir les effets sur votre corps sous peu. . Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
    if (getHealthy() == 4)
      return " Il est bon que vous ayez une bonne fréquence quotidienne de repas sains, cela vous aidera beaucoup sur votre chemin vers votre objectif corporel. Eh bien, vous devez toujours combiner cela avec un bon entraînement et des séances d'entraînement pour maximiser vos gains de santé et de forme physique.";
  }
  if (language == "español") {
    if (getHealthy() == 1)
      return " Probablemente no debería creerte, pero lo haré. Por favor, debe tener comidas completas, en cuanto a nutrientes, además de alimentos saludables como ensaladas, buenas proteínas, eligiendo inteligentemente entre 'opciones similares', por ejemplo, los días de semana elija pechuga de pollo sobre carne roja. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    if (getHealthy() == 2)
      return " Está bien, pero aún así, necesita días de comida a la semana más saludables y completos, en cuanto a nutrientes, como ensalada, buenas proteínas, eligiendo inteligentemente entre 'opciones similares', por ejemplo, los días de semana elija pechuga de pollo en lugar de carne roja. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    if (getHealthy() == 3)
      return " Tienes una frecuencia decente de buenos días de comida a la semana, pero creo que puedes completar 5 días a la semana, de esta manera tendrás más nutrientes en tu sangre y luego comenzarás a ver los efectos en tu cuerpo en breve. . Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
    if (getHealthy() == 4)
      return " Es bueno que tengas una buena frecuencia diaria de comidas saludables, esto te ayudará mucho en tu camino hacia tu objetivo corporal. Bueno, aún debes combinar eso con un buen entrenamiento y entrenamientos para maximizar tus ganancias de salud y estado físico.";
  }
}
export function setCheatAdvice() {
  if (language == "english") {
    if (getCheat() == 1)
      return " It's good that you have a practically null cheat meal regularity, this will be helpful in your path to your body goal.";
    if (getCheat() == 2)
      return " You have a decent frequency cheat meal days a week but I think that you can shorten it to 1 cheat meal day a week of it, this way you will have more ease on maintaining your diet plan and sustaining it you are going to start seeing the effects on your body shortly.";
    if (getCheat() == 3)
      return " That's ok, but still, you need to shorten the number of cheat meals you eat try to only do it on weekends and when you feel like it, try doing it only on Sundays. But on weekends don't put everything to lose but free yourself to eat something you like more.";
    if (getCheat() == 4)
      return " You need to gradually shorten the number of cheat meals you eat, because that enormous amount of cheat meals are not good at all for your health, therefore try doing it only on Fridays, Saturdays, and Sundays, then when you feel like it, try to only do it on weekends and when you feel like it, try doing it only on Sundays. But on weekends don't put everything to lose but free yourself to eat something you like more.";
  }
  if (language == "português") {
    if (getCheat() == 1)
      return " É bom que você tenha uma regularidade de refeição de trapaça praticamente nula, isso será útil em seu caminho para seu objetivo corporal.";
    if (getCheat() == 2)
      return " Você tem uma frequência decente de refeições diárias por semana, mas acho que pode encurtá-la para 1 refeição diária normal por semana, dessa forma você terá mais facilidade em manter seu plano de dieta e sustentá-lo, você começará a ver o efeitos em seu corpo em breve.";
    if (getCheat() == 3)
      return " Tudo bem, mas ainda assim, você precisa encurtar o número de cheats que você faz, tente fazer apenas nos finais de semana e quando quiser, tente fazer apenas aos domingos. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais.";
    if (getCheat() == 4)
      return " Você precisa diminuir gradativamente o número de refeições casuais que você faz, porque essa quantidade enorme de refeições casuais não faz bem à sua saúde, portanto, tente fazê-lo apenas às sextas, sábados e domingos, então quando tiver vontade, tente para fazer apenas nos finais de semana e quando quiser, tente fazer apenas aos domingos. Mas nos finais de semana não coloque tudo a perder, mas libere-se para comer o que você gosta mais.";
  }
  if (language == "français") {
    if (getCheat() == 1)
      return " Il est bon que vous ayez une régularité de repas malsains pratiquement nulle, cela vous sera utile sur votre chemin vers votre objectif corporel.";
    if (getCheat() == 2)
      return " Vous avez une fréquence de repas de triche décente jours par semaine, mais je pense que vous pouvez le raccourcir à 1 repas de triche par semaine, de cette façon, vous aurez plus de facilité à maintenir votre régime alimentaire et à le maintenir, vous allez commencer à voir le effets sur votre corps sous peu.";
    if (getCheat() == 3)
      return " C'est correct, mais quand même, vous devez réduire le nombre de repas de triche que vous mangez, essayez de ne le faire que le week-end et lorsque vous en avez envie, essayez de le faire uniquement le dimanche. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus.";
    if (getCheat() == 4)
      return " Vous devez réduire progressivement le nombre de repas de triche que vous mangez, car cette énorme quantité de repas de triche n'est pas du tout bonne pour votre santé, essayez donc de le faire uniquement les vendredis, samedis et dimanches, puis quand vous en avez envie, essayez pour ne le faire que le week-end et quand vous en avez envie, essayez de le faire uniquement le dimanche. Mais le week-end, ne mettez pas tout à perdre mais libérez-vous pour manger quelque chose que vous aimez plus.";
  }
  if (language == "español") {
    if (getCheat() == 1)
      return " Es bueno que tengas una regularidad de comidas poco saludables que sea prácticamente nula, esto te será útil en tu camino hacia tu meta corporal.";
    if (getCheat() == 2)
      return " Tiene una frecuencia decente para hacer trampas los días de la semana, pero creo que puede acortarla a 1 comida trampa al día a la semana, de esta manera tendrá más facilidad para mantener su plan de dieta y mantenerlo, comenzará a ver el efectos en su cuerpo en breve.";
    if (getCheat() == 3)
      return " Eso está bien, pero aún así, debes acortar la cantidad de comidas trampa que comes, intenta hacerlo solo los fines de semana y, cuando te apetezca, intenta hacerlo solo los domingos. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más.";
    if (getCheat() == 4)
      return " Necesita acortar gradualmente la cantidad de comidas trampa que come, porque esa enorme cantidad de comidas trampa no es nada bueno para su salud, por lo tanto, intente hacerlo solo los viernes, sábados y domingos, luego, cuando lo desee, intente a hacerlo solo los fines de semana y cuando te apetezca, intenta hacerlo solo los domingos. Pero los fines de semana no pongas todo para perder, sino libérate para comer algo que te guste más.";
  }
}
export function setMealsAdvice() {
  if (language == "english") {
    if (getMeals() == 1)
      return " I know how that goes, you think, and i did too, that if you eat less you lose fat, but that is not necessarily the case. If you eat the right amount of the right food 5-6 times a day you will lose more fat and if you maintain a good protein ingestion in every meal, you will also make more muscle out of it.";
    if (getMeals() == 2)
      return " I know how that goes, you think, and i did too, that if you eat less you lose fat, but that is not necessarily the case. If you eat the right amount of the right food 5-6 times a day you will lose more fat and if you maintain a good protein ingestion in every meal, you will also make more muscle out of it.";
    if (getMeals() == 3)
      return " Your eating frequency is decent but you should try to eat at least once more through the day, and always eating healthy with a good portion of proteins and moderate portions of carbohydrates";
    if (getMeals() == 4)
      return " That's ideal, always eat healthy with 3-hour intervals for better muscle gain and fat loss.";
  }
  if (language == "português") {
    if (getMeals() == 1)
      return " Sei o que acontece, você pensa, e eu também, que se comer menos perderá gordura, mas não é necessariamente o caso. Se você comer a quantidade certa da comida certa 5-6 vezes ao dia, perderá mais gordura e se mantiver uma boa ingestão de proteína em todas as refeições, também ganhará mais músculos.";
    if (getMeals() == 2)
      return " Sei o que acontece, você pensa, e eu também, que se comer menos perderá gordura, mas não é necessariamente o caso. Se você comer a quantidade certa da comida certa 5-6 vezes ao dia, perderá mais gordura e se mantiver uma boa ingestão de proteína em todas as refeições, também ganhará mais músculos.";
    if (getMeals() == 3)
      return " Sua frequência alimentar é decente, mas você deve tentar comer pelo menos mais uma vez ao longo do dia, e sempre comendo saudável com uma boa porção de proteínas e porções moderadas de carboidratos";
    if (getMeals() == 4)
      return " Isso é ideal, sempre alimente-se de forma saudável com intervalos de 3 horas para melhor ganho muscular e perda de gordura.";
  }
  if (language == "français") {
    if (getMeals() == 1)
      return " Je sais comment ça se passe, vous pensez, et moi aussi, que si vous mangez moins, vous perdez du gras, mais ce n'est pas forcément le cas. Si vous mangez la bonne quantité de la bonne nourriture 5 à 6 fois par jour, vous perdrez plus de graisse et si vous maintenez une bonne ingestion de protéines à chaque repas, vous en tirerez également plus de muscle..";
    if (getMeals() == 2)
      return " Je sais comment ça se passe, vous pensez, et moi aussi, que si vous mangez moins, vous perdez du gras, mais ce n'est pas forcément le cas. Si vous mangez la bonne quantité de la bonne nourriture 5 à 6 fois par jour, vous perdrez plus de graisse et si vous maintenez une bonne ingestion de protéines à chaque repas, vous en tirerez également plus de muscle..";
    if (getMeals() == 3)
      return " Votre fréquence d'alimentation est correcte, mais vous devriez essayer de manger au moins une fois de plus dans la journée et toujours manger sainement avec une bonne portion de protéines et des portions modérées de glucides.";
    if (getMeals() == 4)
      return " C'est idéal, mangez toujours sainement avec des intervalles de 3 heures pour un meilleur gain musculaire et une meilleure perte de graisse.";
  }
  if (language == "español") {
    if (getMeals() == 1)
      return " Sé cómo va eso, piensas, y yo también, que si comes menos pierdes grasa, pero ese no es necesariamente el caso. Si come la cantidad correcta de la comida adecuada 5-6 veces al día, perderá más grasa y si mantiene una buena ingesta de proteínas en cada comida, también hará más músculo con ella.";
    if (getMeals() == 2)
      return " Sé cómo va eso, piensas, y yo también, que si comes menos pierdes grasa, pero ese no es necesariamente el caso. Si come la cantidad correcta de la comida adecuada 5-6 veces al día, perderá más grasa y si mantiene una buena ingesta de proteínas en cada comida, también hará más músculo con ella.";
    if (getMeals() == 3)
      return " Su frecuencia de alimentación es decente, pero debe intentar comer al menos una vez más durante el día, y siempre comer sano con una buena porción de proteínas y porciones moderadas de carbohidratos.";
    if (getMeals() == 4)
      return " Eso es ideal, siempre coma sano con intervalos de 3 horas para una mejor ganancia muscular y pérdida de grasa..";
  }
}
export function setGoalDistance() {
  let goalBodyDistance = getCurrentBody() - getGoalBody();
  if (language == "english") {
    if (goalBodyDistance == 1)
      return " Also, you are really close to your goal, which means that with focus and determination your run towards your goal will be short!";
    if (goalBodyDistance == 2)
      return " Also, you are close to your goal, which means that with focus and determination your run towards your goal will be short!";
    if (goalBodyDistance == 3)
      return " Also, you are not far from your goal, take ownership of your path and you'll get there soon!";
    if (goalBodyDistance == 4)
      return " It will be a bit difficult but with focus, besides the right training and diet, you'll get there!";
    if (goalBodyDistance == 5)
      return " It will be difficult but with focus, besides the right training and diet, you'll get there!";
    if (goalBodyDistance == 6)
      return " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
    if (goalBodyDistance == 7)
      return " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
    if (goalBodyDistance == 8)
      return " This is gonna be a long, but well rewarding, run, that requires a lot of will, determination, and focus!";
  }
  if (language == "português") {
    if (goalBodyDistance == 1)
      return " Além disso, você está muito perto de seu objetivo, o que significa que com foco e determinação sua corrida em direção ao objetivo será curta!";
    if (goalBodyDistance == 2)
      return " Além disso, você está perto de seu objetivo, o que significa que com foco e determinação sua corrida em direção ao objetivo será curta!";
    if (goalBodyDistance == 3)
      return " Além disso, você não está longe de seu objetivo, tome posse de seu caminho e você chegará lá em breve!";
    if (goalBodyDistance == 4)
      return " Vai ser um pouco difícil, mas com foco, além do treino e da dieta corretos, você vai chegar lá!";
    if (goalBodyDistance == 5)
      return " Vai ser difícil, mas com foco, além do treino e da dieta corretos, você vai chegar lá!";
    if (goalBodyDistance == 6)
      return " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
    if (goalBodyDistance == 7)
      return " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
    if (goalBodyDistance == 8)
      return " Vai ser uma corrida longa, mas bem recompensadora, que exige muita vontade, determinação e foco!";
  }
  if (language == "français") {
    if (goalBodyDistance == 1)
      return " De plus, vous êtes très proche de votre objectif, ce qui signifie qu'avec concentration et détermination, votre course vers votre objectif sera courte!";
    if (goalBodyDistance == 2)
      return " De plus, vous êtes proche de votre objectif, ce qui signifie qu'avec de la concentration et de la détermination, votre course vers votre objectif sera courte!";
    if (goalBodyDistance == 3)
      return " Aussi, vous n'êtes pas loin de votre objectif, prenez en main votre chemin et vous y arriverez bientôt!";
    if (goalBodyDistance == 4)
      return " Ce sera un peu difficile mais avec de la concentration, en plus du bon entraînement et du bon régime, vous y arriverez!";
    if (goalBodyDistance == 5)
      return " Ce sera difficile mais avec de la concentration, en plus du bon entraînement et du bon régime, vous y arriverez!";
    if (goalBodyDistance == 6)
      return " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
    if (goalBodyDistance == 7)
      return " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
    if (goalBodyDistance == 8)
      return " Ce sera une course longue, mais bien enrichissante, qui demandera beaucoup de volonté, de détermination et de concentration!";
  }
  if (language == "español") {
    if (goalBodyDistance == 1)
      return " Además, estás muy cerca de tu objetivo, lo que significa que con concentración y determinación, ¡tu carrera hacia tu objetivo será corta!";
    if (goalBodyDistance == 2)
      return " Además, estás cerca de tu objetivo, lo que significa que con concentración y determinación, ¡tu carrera hacia tu objetivo será corta!";
    if (goalBodyDistance == 3)
      return " Además, no está lejos de su objetivo, tome posesión de su camino y ¡llegará pronto!";
    if (goalBodyDistance == 4)
      return " Será un poco difícil, pero con concentración, además del entrenamiento y la dieta adecuados, ¡lo lograrás!";
    if (goalBodyDistance == 5)
      return " Será difícil, pero con concentración, además del entrenamiento y la dieta adecuados, ¡lo lograrás!";
    if (goalBodyDistance == 6)
      return " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
    if (goalBodyDistance == 7)
      return " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
    if (goalBodyDistance == 8)
      return " ¡Esta será una carrera larga, pero gratificante, que requiere mucha voluntad, determinación y concentración!";
  }
}
export function setGoalAdvices() {
  if (language == "english") {
    if (getGoal() == "bulking")
      return [
        " Since you are trying to bulk, you should focus the most on weight training, better with an instructor but it works anyway. Try increasing the weights and decreasing the movement speed. At your will for losing weight try some exercises like running, cycling, and so on. ",
        " For bulking, You should eat well, a lot of protein, a good portion of carbohydrates. And you should always try to have a slight calorie intake surplus. Your menu varies between eggs, protein shakes, chicken, meat and so on. Besides salads, fruits and vegetables.",
      ];
    if (getGoal() == "cutting")
      return [
        " Since you are trying to cut, you should focus on weight training, better with an instructor but it works anyway, for having the athletic shape, and also some exercises like running, cycling, and so on. Try increasing the weights and decreasing the movement speed, while in the gym workout, and try to increase the difficulty of the aerobic exercises gradually, every workout day.",
        " For cutting, You should eat in a controlled way, but with a good portion of proteins, not much carbohydrates and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit. ",
      ];
    if (getGoal() == "surplus")
      return [
        " Since you are trying to lose weight, you should focus on weight training and aerobic exercises, better with an instructor but it works anyway, for having the better shape. Try increasing the weights and decreasing the movement speed, while in the gym workout, and try to increase the difficulty of the aerobic exercises gradually, every workout day.",
        " For losing weight, You should eat in a controlled way, but with a decent portion of proteins, not much carbohydrates and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Since you are trying to muscle-up, you should focus on weight training, better with an instructor but it works anyway, for having the better shape. Try increasing the weights and decreasing the movement speed, while in the gym workout.",
        " For gaining weight, You should eat in a controlled way, but with a good portion of proteins and carbohydrates, and of course our loved ones: salad, fruits and vegetables. But you should have a calorie intake deficit.",
      ];
  }
  if (language == "português") {
    if (getGoal() == "bulking")
      return [
        " Já que você está tentando ganhar massa, você deve se concentrar mais no treinamento com pesos, melhor com um instrutor, mas funciona de qualquer maneira. Experimente aumentar os pesos e diminuir a velocidade do movimento. Quando desejar, para perder peso, experimente alguns exercícios como corrida, ciclismo e assim por diante. ",
        " Para aumentar, você deve comer bem, muita proteína, uma boa porção de carboidratos. E você deve sempre tentar ter um pequeno excedente de ingestão de calorias. Seu menu varia entre ovos, shakes de proteína, frango, carne e assim por diante. Além de saladas, frutas e vegetais.",
      ];
    if (getGoal() == "cutting")
      return [
        " Já que você está tentando secar, você deve focar no treinamento com pesos, melhor com um instrutor, mas funciona mesmo assim, para ter a forma atlética, e também alguns exercícios como corrida, ciclismo e assim por diante. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante a malhação, e tente aumentar a dificuldade dos exercícios aeróbicos gradativamente, a cada dia de treino.",
        " Para secar, deve comer de forma controlada, mas com uma boa porção de proteínas, não muito carbohidratos e claro os nossos entes queridos: salada, fruta e vegetais. Mas você deve ter um déficit de ingestão de calorias. ",
      ];
    if (getGoal() == "surplus")
      return [
        " Já que você está tentando emagrecer, você deve focar no musculação e exercícios aeróbicos, melhor com um instrutor, mas funciona mesmo assim, para ter uma melhor forma. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante a ginástica, e tente aumentar a dificuldade dos exercícios aeróbicos gradativamente, a cada dia de treino.",
        " Para emagrecer, deve comer de forma controlada, mas com uma porção decente de proteínas, sem muitos carbohidratos e claro os nossos entes queridos: salada, fruta e vegetais. Mas você deve ter um déficit de ingestão calórica. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Já que você está tentando ganhar músculos, você deve se concentrar no treinamento com pesos, melhor com um instrutor, mas funciona de qualquer maneira, para ter a melhor forma. Experimente aumentar os pesos e diminuir a velocidade do movimento, durante o treino de ginásio.",
        " Para ganhar peso, você deve comer de forma controlada, mas com uma boa porção de proteínas e carboidratos e, claro, nossos entes queridos: salada, frutas e vegetais. Mas você deve ter um déficit de ingestão calórica.",
      ];
  }
  if (language == "français") {
    if (getGoal() == "bulking")
      return [
        " Puisque vous essayez de prendre du volume, vous devriez vous concentrer le plus sur la musculation, mieux avec un instructeur, mais cela fonctionne quand même. Essayez d'augmenter les poids et de réduire la vitesse de déplacement. À votre guise pour perdre du poids, essayez des exercices comme la course à pied, le cyclisme, etc. ",
        " Pour le gonflement, vous devez bien manger, beaucoup de protéines, une bonne portion de glucides. Et vous devriez toujours essayer d'avoir un léger surplus d'apport calorique. Votre menu varie entre les œufs, les boissons protéinées, le poulet, la viande, etc. Outre les salades, les fruits et légumes.",
      ];
    if (getGoal() == "cutting")
      return [
        " Puisque vous essayez de couper, vous devriez vous concentrer sur la musculation, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la forme athlétique, et aussi certains exercices comme la course, le cyclisme, etc. Essayez d'augmenter les poids et de réduire la vitesse de mouvement, pendant que vous vous entraînez au gymnase, et essayez d'augmenter progressivement la difficulté des exercices d'aérobie, chaque jour d'entraînement.",
        " Pour la découpe, il faut manger de manière contrôlée, mais avec une bonne portion de protéines, peu de glucides et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique.",
      ];
    if (getGoal() == "surplus")
      return [
        " Puisque vous essayez de perdre du poids, vous devriez vous concentrer sur la musculation et les exercices d'aérobie, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la meilleure forme. Essayez d'augmenter les poids et de réduire la vitesse de mouvement, pendant que vous vous entraînez au gymnase, et essayez d'augmenter progressivement la difficulté des exercices d'aérobie, chaque jour d'entraînement.",
        " Pour perdre du poids, vous devez manger de manière contrôlée, mais avec une bonne portion de protéines, pas beaucoup de glucides et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Puisque vous essayez de vous muscler, vous devriez vous concentrer sur la musculation, mieux avec un instructeur mais cela fonctionne quand même, pour avoir la meilleure forme. Essayez d'augmenter les poids et de réduire la vitesse de mouvement pendant que vous vous entraînez au gymnase.",
        " Pour prendre du poids, vous devez manger de manière contrôlée, mais avec une bonne portion de protéines et de glucides, et bien sûr nos proches: salade, fruits et légumes. Mais vous devriez avoir un déficit calorique.",
      ];
  }
  if (language == "español") {
    if (getGoal() == "bulking")
      return [
        " Dado que está tratando de aumentar el volumen, debe concentrarse más en el entrenamiento con pesas, mejor con un instructor, pero de todos modos funciona. Intente aumentar los pesos y disminuir la velocidad de movimiento. Si desea perder peso, pruebe algunos ejercicios como correr, andar en bicicleta, etc. ",
        " Para aumentar el volumen, debes comer bien, mucha proteína, una buena porción de carbohidratos. Y siempre debe intentar tener un ligero exceso de ingesta calórica. Su menú varía entre huevos, batidos de proteínas, pollo, carne, etc. Además de ensaladas, frutas y verduras.",
      ];
    if (getGoal() == "cutting")
      return [
        " Ya que estás tratando desecar, debes enfocarte en el entrenamiento con pesas, mejor con un instructor pero de todos modos funciona, para tener la forma atlética, y también algunos ejercicios como correr, andar en bicicleta, etc. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras está en el gimnasio, e intente aumentar la dificultad de los ejercicios aeróbicos gradualmente, todos los días de entrenamiento.",
        " Parasecar, conviene comer de forma controlada, pero con una buena porción de proteínas, poco carbohidratos y por supuesto nuestros seres queridos: ensalada, frutas y verduras. Pero deberías tener un déficit de ingesta de calorías.. ",
      ];
    if (getGoal() == "surplus")
      return [
        " Ya que estás tratando de perder peso, debes concentrarte en el entrenamiento con pesas y ejercicios aeróbicos, mejor con un instructor pero de todos modos funciona, para tener la mejor forma. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras está en el gimnasio, y trate de aumentar la dificultad de los ejercicios aeróbicos gradualmente, todos los días de entrenamiento.",
        " Para adelgazar, conviene comer de forma controlada, pero con una buena porción de proteínas, poco carbohidratos y por supuesto nuestros seres queridos: ensalada, frutas y verduras. Pero debería tener un déficit de ingesta de calorías. ",
      ];
    if (getGoal() == "muscle")
      return [
        " Ya que estás tratando de hacer musculación, debes concentrarte en el entrenamiento con pesas, mejor con un instructor pero de todos modos funciona, para tener la mejor forma. Intente aumentar los pesos y disminuir la velocidad de movimiento, mientras hace ejercicio en el gimnasio.",
        " Para subir de peso, conviene comer de forma controlada, pero con una buena porción de proteínas y carbohidratos, y por supuesto de nuestros seres queridos: ensalada, frutas y verduras. Pero deberías tener un déficit de ingesta de calorías..",
      ];
  }
}
