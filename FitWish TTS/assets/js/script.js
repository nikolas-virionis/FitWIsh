var bodyTypeAdvice,
  buttons = document.querySelectorAll(".button"),
  resultBeginning,
  contentArray = JSON.parse(localStorage.getItem("contentArray")) ?? [],
  idUser,
  exercise,
  healthy,
  cheat,
  meals,
  resultBeginning2,
  day,
  triesMade,
  tryNumber,
  counter = 0,
  timeInterval,
  metricDefault,
  metricVerify = 0,
  imperialDefault,
  metricNoDefault,
  resultPossibilities,
  defaultUnit,
  colorDownload = "#1F3B4D",
  backgroundColorDownload = "#12232A",
  done,
  processing,
  diagnosis,
  alreadyInPage,
  local,
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Select a gender to see the reference Image',
  weightManagementProgramFinalResult,
  language,
  theme,
  emailLinkFunc,
  downloadLinkFunc,
  emotionans,
  emotion,
  baseIdealWeight,
  topIdealWeight,
  weight,
  height,
  unit,
  advicedWeight,
  idealBodyFat,
  idealWeightMsgPunctuation,
  idealWeightMsgBmiState,
  bodyFatPercentage,
  bodyFat,
  confirmWriteEmail,
  exerciseAdvice,
  healthyAdvice,
  cheatAdvice,
  mealsAdvice,
  goalAdvice,
  goalAdvice2,
  bmr,
  calorieIntakeAdvice,
  calorieCounterLink,
  caloriesLink,
  baseBodyFat,
  topBodyFat,
  addup1,
  addup2,
  addup3,
  addup4,
  addup5,
  addup6,
  emailaddrreturnfinal,
  inputName,
  age,
  ageAdvice,
  languageValue = 1,
  fullresult = "",
  timeGaps = 0,
  firstAlert =
    "DISCLAIMER: This is not a medical nor nutritionist advice and not only does not exclude a medical consultation, but also, me as this code creator, encourage and support YOU to get to see your doctor for anything YOU think YOU should improve in YOUR health life. Peace!",
  bmi_state = "",
  gender = "",
  goal = "",
  bodyTypeAdvantage,
  bodyTypeAdvantageAdvice = "",
  finalIdealWeightMsg = "",
  bodytype = "",
  idealWeightMsg = "",
  idealWeight,
  idealWeightDistance = 0,
  bmi = 0,
  currentBody = 0,
  goalBody = 0,
  goalBodyDistance = 0,
  goalBaseBodyFat = 0,
  goalTopBodyFat = 0,
  suggestedBodyFat = 0,
  idealBodyFatPercentage = 0,
  noEmailNeeded = 0,
  wrongEmailCount = 0,
  goalDistance = "";
unitSystem("metric");
english();
document.addEventListener("keypress", (event) =>
  event.key === "Enter" &&
  idDataSubmit.style.display === "none" &&
  idLoginSubmit.style.display === "none"
    ? nextPageInterpreter()
    : true
);
buttons.forEach((item) => {
  item.addEventListener("keypress", (event) =>
    event.key === "Enter" &&
    idDataSubmit.style.display === "none" &&
    idLoginSubmit.style.display === "none"
      ? nextPageInterpreter()
      : true
  );
});
const enterFuncMid = (event, blur, focus) => {
  if (event.key === "Enter") {
    document.getElementById(blur).blur();
    document.getElementById(focus).focus();
  }
};
const enterFunc = (event) =>
  event.key === "Enter" ? nextPageInterpreter() : "";
export function english() {
  language = "english";
  languageValue = 1;
  resultBeginning2 =
    'Welcome back <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Attempt's Menu";
  howItWorksId.innerHTML = "How it Works";
  idHowToHeading.innerHTML = "How it Works";
  idAboutTxtLeft.style.fontSize = "1em";
  resultBeginning = 'Well <big style="font-family: Kaushan Script, cursive;">';
  idAboutH2.style.marginLeft = "40%";
  idContactH2.style.marginLeft = "37.5%";
  idContactH2.innerHTML = "How to Contact Us";
  idContactIntro.innerHTML =
    "We would love to hear from our users about possible feedback about what you experienced while using our service. To contact Us directly access the link to our CTO's email below, and to have more information on us access his LinkedIn link below.";
  idAboutH2.innerHTML = "Who are we?";
  idAboutTxtLeft.innerHTML =
    "Well, we are FitWish, a new startup with the goal to, as our Name says, fulfill your wish in the fitness sector, we don't charge for your first diagnosis because we believe that wellness shouldn't have more hurdles than it already does. Therefore by committing to this quick quiz you will have a sort of guidance towards achieving your goal in this fitness field.";
  idAboutTxtRight.innerHTML =
    "We at FitWish acknowledge the effort put into getting your body the way you want it to be, and because of that, we appreciate your valuable decision to stand your ground and act upon what you should, your health.";
  buttonAbout.value = "About";
  buttonHome.value = "Home Page";
  buttonContact.value = "Contact";
  idAboutHeading.innerHTML = "About";
  idContactHeading.innerHTML = "Contact";
  idBadHabits.style.fontSize = "2.2vw";
  idPlanMsg.style.fontSize = "2.2vw";
  idGoodHabits.style.fontSize = "2.2vw";
  aboutId.innerHTML = "About";
  contactId.innerHTML = "Contact";
  planId.style.marginLeft = "43%";
  planId.style.marginRight = "auto";
  introPageId.style.fontSize = "2.355vw";
  loginPageId.style.fontSize = "2.355vw";
  genderUnitPageId.style.fontSize = "2.355vw";
  dataPageId.style.fontSize = "2.355vw";
  goalPageId.style.fontSize = "2.355vw";
  bodyTypePageId.style.fontSize = "2.355vw";
  bodyImagePageId.style.fontSize = "2.355vw";
  xercisePageId.style.fontSize = "2.355vw";
  healthyPageId.style.fontSize = "2.355vw";
  cheatPageId.style.fontSize = "2.355vw";
  mealsPageId.style.fontSize = "2.355vw";
  emotionPageId.style.fontSize = "2.355vw";
  weightMetric.placeholder = "Example: 80.5";
  heightMetric.placeholder = "Example: 1.85";
  weightImperial.placeholder = "Example: 200.5";
  heightImperial.placeholder = "Example: 70";
  dataPageId.innerHTML = "Weight/Height";
  defaultUnit = " - Default -";
  headingTextInputIdWeightMetric.innerHTML = "Weight";
  headingTextInputIdHeightMetric.innerHTML = "Height";
  headingTextInputIdWeightImperial.innerHTML = "Weight";
  headingTextInputIdHeightImperial.innerHTML = "Height";
  metricDefault = "Metric - Default -";
  metricNoDefault = "Metric";
  imperialDefault = "Imperial";
  checkImgId.style.marginLeft = "23%";
  pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  languageInput.innerHTML = "Language:";
  h4Config.innerHTML = "Processing";
  processing = "Processing";
  diagnosis = "Finishing Diagnosis";
  resultPossibilities = "Loading Result Possibilities";
  done = "Done!";
  alreadyInPage = "Already in page";
  pageId.innerHTML = "Pages:";
  planId.innerHTML = "Our Plan:";
  idBadHabits.innerHTML =
    "You might be struggling with your current health state, disliking the situation but not entirely committed to change it";
  idPlanMsg.innerHTML =
    "But now you started a path in which you take ownership of yourself, and I am going to help you out";
  idGoodHabits.innerHTML =
    "Sooner than you'd expect, you'll be used to looking just as good as you want, and healthier too!";
  introPageId.innerHTML = "Introduction";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Gender/Unit";
  goalPageId.innerHTML = "Goal";
  bodyTypePageId.innerHTML = "Body Type";
  bodyImagePageId.innerHTML = "Body Fat Evaluation";
  xercisePageId.innerHTML = "Exercise Evaluation";
  healthyPageId.innerHTML = "Healthy Meals";
  cheatPageId.innerHTML = "Cheat Meals";
  mealsPageId.innerHTML = "Meals/Day";
  emotionPageId.innerHTML = "Emotion-based Overeating";
  buttonNext.value = "Next";
  buttonPrev.value = "Previous";
  showImgBtn.innerHTML = "&#9776; Show Image";
  referenceImgTxt.innerHTML = "Reference Image:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Select a gender to see the reference Image';
  weightManagementProgramFinalResult =
    "Fitness_Management_Program_Final_Result.html";
  document.getElementById("lightThemeButton").innerHTML = "Light Theme";
  document.getElementById("darkThemeButton").innerHTML = "Dark Theme (default)";
  emailLinkColor.innerHTML =
    "<strong>Want to have a email sent to you with the main result data? Click here!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>Want to have a new document with all this last pages data? Click here!!</strong>";
  emotionans =
    'For this emotional overeating issue you should try some ways to reduce it like: try to answer the question, am i really hungry or am i trying to eat my emotions?; aside from that you should try to calm yourself down with some breathing techniques, meditation or yoga to reduce stress; try to fight the boredom finding a new hobby, or something that "awakens" the  will do get up in the morning; don\'t discard the possibility of seeing a therapist to help you out in more areas than you can imagine; And to fight temptation, reward yourself periodically with a dose of a food you like, maybe every 15%-25% of the whole path completed, this way you will learn to moderate the amout you eat and thus make it easier for you to maintain your body in shape when you reach your goal.';
  document.getElementById("disclaimerId").innerHTML = "DISCLAIMER";
  firstAlert =
    "DISCLAIMER: This is not a medical nor nutritionist advice and not only does not exclude a medical consultation, but also, me as this code creator, encourage and support YOU to get to see your doctor for anything YOU think YOU should improve in YOUR health life. Peace!";
  document.getElementById("name").placeholder = "Name Example: Nick";
  document.getElementById("age").placeholder = "Age Example: 24";
  document.getElementById("email").placeholder =
    "Example: name.lastname@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Name:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Age:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Gender";
  document.getElementById("colorChangeIdMale").value = "Male";
  document.getElementById("colorChangeIdFemale").value = "Female";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Emotion-based Overeating<h3>(When experiencing sadness, happiness, boredom, loneliness, stress, dissapointment, concern, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Yes";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unit";
  document.getElementById("colorChangeIdMetric").value = `Metric${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Goal";
  document.getElementById("colorChangeIdBulk").value = "Bulking";
  document.getElementById("colorChangeIdCut").value = "Cutting";
  document.getElementById("colorChangeIdSurp").value = "Get rid of fat surplus";
  document.getElementById("colorChangeIdMuscle").value =
    "Gaining Weight and Muscle";
  document.getElementById("headingObjInputIdBodyType").innerHTML = "Body Type";
  document.getElementById("colorChangeIdNoIdea").value = "No idea";
  document.getElementById("colorChangeIdEcto").value = "Ectomorph";
  document.getElementById("colorChangeIdMeso").value = "Mesomorph";
  document.getElementById("colorChangeIdEndo").value = "Endomorph";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Which one of these you think represent you the most?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Which one of these you think represent your goal the most?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "High intensity exercise frequency:";
  document.getElementById("colorChangeIdNoneXercise").value = "None";
  document.getElementById("colorChangeIdLowXercise").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidXercise").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 or more times a week";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Good and healthy meal days frequency:";
  document.getElementById("colorChangeIdNoneHealthy").value = "None";
  document.getElementById("colorChangeIdLowHealthy").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidHealthy").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 or more times a week";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Cheat meals days frequency:";
  document.getElementById("colorChangeIdNoneCheat").value = "None";
  document.getElementById("colorChangeIdLowCheat").value = "1-2 times a week";
  document.getElementById("colorChangeIdMidCheat").value = "3-4 times a week";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 or more times a week";
  document.getElementById("headingObjInputIdMeals").innerHTML = "Meals a day:";
  document.getElementById("colorChangeId2Meals").value = "2 meals a day";
  document.getElementById("colorChangeId3Meals").value = "3 meals a day";
  document.getElementById("colorChangeId4Meals").value = "4 meals a day";
  document.getElementById("colorChangeId5Meals").value = "5 or 6 meals a day";
  document.getElementById("buttonResult").value = "Result";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML = "All Rights Reserved";
  returnUpdatedValues();
}
export function português() {
  if (contentArray.length == 2) numberBtnsOverwritePt();
  language = "português";
  languageValue = 2;
  linkTitle.title = "Página inicial do FitWish";
  firstPageBtnSeePrev.innerHTML = "Ocultar Teste Anterior";
  idHowToH2.innerHTML = "O que você vai fazer";
  idHowToH3.innerHTML = "O que nós vamos fazer";
  idHowToTxt1.innerHTML =
    "Primeiro, se ainda não o fez, verifique o tema e o idioma de sua preferência no botão de três barras à esquerda. Então responda o teste ... francamente, sim, eu sei, é duro, mas isso é crucial para ser o mais útil possível para você, então em algum tempo você pode repetir este teste e comparar os números.";
  idHowToTxt2.innerHTML =
    "Bem, vamos avaliá-lo de uma forma compreensiva e dizer-lhe a distância de seus objetivos em seu caminho até eles, então você pode voltar a este mesmo site e refazer o teste, tendo até dois resultados de testes anteriores armazenados localmente e com segurança em seu computador.";
  firstPageH1.innerHTML =
    "Estamos felizes por você ter nos dado a chance de ajudá-lo a alcançar o corpo dos seus sonhos, pressione iniciar para continuar";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `Detectamos que você já tentou nosso teste uma vez como ${contentArray[0].name}, feito em ${contentArray[0].day}. Escolha o que você gostaria de fazer abaixo`;
  firstPageBtnStart.value = `Iniciar`;
  firstPageBtnDifferent.value = `Fazer um novo Teste`;
  firstPageBtnOverwrite.value = `Sobrescrever um Teste Anterior`;
  firstPageBtnDelete.value = `Deletar Todos os Testes Feitos Anteriormente`;
  firstPageBtnSeeAll.value = `Ver Todos os Testes Anteriores`;
  firstPageBtnSeePrev.value = `Ver o Resultado do Teste Anterior`;
  firstPageBtnHideAll.value = `Ocultar Testes Anteriores`;
  resultBeginning2 =
    'Bem vindo de Volta <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Menu de Tentativas";
  howItWorksId.innerHTML = "Como Funciona";
  idHowToHeading.innerHTML = "Como Funciona";
  resultBeginning = 'Bem <big style="font-family: Kaushan Script, cursive;">';
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "37%";
  idContactH2.style.marginLeft = "30.5%";
  idContactH2.innerHTML = "Como entrar em contato conosco";
  idContactIntro.innerHTML =
    "Gostaríamos muito de ouvir de nossos usuários sobre possíveis comentários sobre o que você experimentou ao usar nosso serviço. Para entrar em contato conosco diretamente, acesse o link para o e-mail de nosso CTO abaixo, e para obter mais informações sobre nós acesse seu link do LinkedIn abaixo.";
  idAboutH2.innerHTML = "Quem somos nós?";
  idAboutTxtLeft.innerHTML =
    "Pois bem, somos a FitWish, uma nova startup com o objetivo de, como nosso nome diz, cumprir o seu desejo no setor fitness Não cobramos pelo seu primeiro diagnóstico porque acreditamos que o bem-estar não deve ter mais obstáculos do que já tem. Portanto, ao se comprometer com este teste rápido, você terá uma espécie de orientação para atingir seu objetivo neste campo fitness.";
  idAboutTxtRight.innerHTML =
    "Nós da FitWish reconhecemos o esforço feito para deixar seu corpo do jeito que você deseja e, por isso, apreciamos sua valiosa decisão de defender sua posição e agir de acordo com o que você deve, sua saúde.";
  buttonAbout.value = "Sobre";
  buttonHome.value = "Página Inicial";
  buttonContact.value = "Contato";
  idAboutHeading.innerHTML = "Sobre";
  idContactHeading.innerHTML = "Contato";
  idBadHabits.style.fontSize = "2.1vw";
  idPlanMsg.style.fontSize = "2.1vw";
  idGoodHabits.style.fontSize = "2.1vw";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contato";
  planId.style.marginLeft = "41.5%";
  planId.style.marginRight = "auto";
  introPageId.style.fontSize = "2.105vw";
  loginPageId.style.fontSize = "2.105vw";
  genderUnitPageId.style.fontSize = "2.105vw";
  dataPageId.style.fontSize = "2.105vw";
  goalPageId.style.fontSize = "2.105vw";
  bodyTypePageId.style.fontSize = "2.105vw";
  bodyImagePageId.style.fontSize = "2.105vw";
  xercisePageId.style.fontSize = "2.105vw";
  healthyPageId.style.fontSize = "2.105vw";
  cheatPageId.style.fontSize = "2.105vw";
  mealsPageId.style.fontSize = "2.105vw";
  emotionPageId.style.fontSize = "2.105vw";
  weightMetric.placeholder = "Exemplo: 80.5";
  heightMetric.placeholder = "Exemplo: 1.85";
  weightImperial.placeholder = "Exemplo: 200.5";
  heightImperial.placeholder = "Exemplo: 70";
  dataPageId.innerHTML = "Peso/Altura";
  defaultUnit = " - Padrão -";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
  metricDefault = "Métrico - Padrão -";
  metricNoDefault = "Métrico";
  imperialDefault = "Imperial";
  checkImgId.style.marginLeft = "19.1%";
  pagesNavId.innerHTML = "Páginas/Seções(&sect;)";
  languageInput.innerHTML = "Idioma:";
  h4Config.innerHTML = "Processando";
  processing = "Processando";
  diagnosis = "Terminando Diagnóstico";
  resultPossibilities = "Carregando Possibilidades de Resultado";
  done = "Pronto!";
  alreadyInPage = "Já nessa página";
  pageId.innerHTML = "Páginas:";
  planId.innerHTML = "Nosso Plano:";
  idBadHabits.innerHTML =
    "Você pode estar tendo dificuldades e decepções com seu atual estado de saúde, não gostando da situação mas não completamente comprometido a mudar";
  idPlanMsg.innerHTML =
    "Mas agora você começou um caminho no qual você tomou responsabilidade sobre você mesmo, e eu vou te ajudar";
  idGoodHabits.innerHTML =
    "Antes do que você pode esperar, você já estará aconstumado a ter a aparência que você quiser, e também mais saudável!";
  introPageId.innerHTML = "Introdução";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Gênero/Unidade";
  goalPageId.innerHTML = "Objetivo";
  bodyTypePageId.innerHTML = "Tipo Corporal";
  bodyImagePageId.innerHTML = "Avaliação da Gordura Corporal";
  xercisePageId.innerHTML = "Avaliação de Exercícios";
  healthyPageId.innerHTML = "Refeições Saudáveis";
  cheatPageId.innerHTML = "Refeições não Saudáveis";
  mealsPageId.innerHTML = "Refeições/Dia";
  emotionPageId.innerHTML = "Comer demais por conta de emoções";
  buttonNext.value = "Próximo";
  buttonPrev.value = "Anterior";
  showImgBtn.innerHTML = "&#9776; Exibir Imagem";
  referenceImgTxt.innerHTML = "Imagem de Referência:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Escolha um gênero para ver a imagem de referência';
  weightManagementProgramFinalResult =
    "Resultado_final_do_programa_de_controle_de_peso.html";
  document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
  document.getElementById("darkThemeButton").innerHTML = "Tema Escuro (padrão)";
  emailLinkColor.innerHTML =
    "<strong>Deseja receber um e-mail com os principais dados do resultado? Clique aqui!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>Quer ter um novo documento com todos esses dados da última página? Clique aqui!!</strong>";
  emotionans =
    'Para esse problema de comer demais emocionalmente, você deve tentar algumas maneiras de reduzi-lo, como: tente responder à pergunta, estou realmente com fome ou estou tentando comer minhas emoções ?; além disso, você deve tentar se acalmar com algumas técnicas de respiração, meditação ou ioga para reduzir o estresse; tente lutar contra o tédio encontrando um novo hobby, ou algo que "desperte" a vontade o faça de se levantar de manhã; não descarte a possibilidade de ver um terapeuta para ajudá-lo em mais áreas do que você pode imaginar; E para lutar contra a tentação, recompense-se periodicamente com uma dose de um alimento que você goste, talvez a cada 15% -25% de todo o caminho percorrido, assim você aprenderá a moderar a quantidade que ingere e assim tornar mais fácil para você manter seu corpo em forma quando você atingir seu objetivo.';
  document.getElementById("disclaimerId").innerHTML = "AVISO LEGAL";
  firstAlert =
    "AVISO LEGAL: Este não é um conselho médico ou nutricionista e não só não exclui uma consulta médica, como também, eu, como criador deste código, encorajo e apoio VOCÊ a procurar seu médico para qualquer coisa que você acha que deveria melhorar em sua vida saudável.";
  document.getElementById("name").placeholder = "Exemplo de Nome: Nick";
  document.getElementById("age").placeholder = "Exemplo de idade: 24";
  document.getElementById("email").placeholder =
    "Exemplo: nome.sobrenome@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nome:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Idade:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Gênero";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Feminino";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer demais por conta de emoções<h3>(Ao experimentar tristeza, felicidade, tédio, solidão, estresse, desapontamento, preocupação, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Sim";
  document.getElementById("colorChangeIdEmoNo").value = "Não";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidade";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrico${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objetivo";
  document.getElementById("colorChangeIdBulk").value = "Ganhar Massa";
  document.getElementById("colorChangeIdCut").value = "Secar";
  document.getElementById("colorChangeIdSurp").value = "Emagrecer";
  document.getElementById("colorChangeIdMuscle").value = "Ganhar peso";
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Tipo Corporal";
  document.getElementById("colorChangeIdNoIdea").value = "Sem ideia";
  document.getElementById("colorChangeIdEcto").value = "Ectomorfo";
  document.getElementById("colorChangeIdMeso").value = "Mesomorfo";
  document.getElementById("colorChangeIdEndo").value = "Endomorfo";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Qual dessas imagens representa melhor seu estado atual?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Qual dessas imagens representa melhor seu objetivo corporal?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Frequência de exercício de alta intensidade:";
  document.getElementById("colorChangeIdNoneXercise").value = "Nenhuma";
  document.getElementById("colorChangeIdLowXercise").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidXercise").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 ou mais vezes por semana";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Frequencia de dias com alimentação saudável:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Nenhuma";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 ou mais vezes por semana";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Frequência de dias com comidas não saudáveis:";
  document.getElementById("colorChangeIdNoneCheat").value = "Nenhuma";
  document.getElementById("colorChangeIdLowCheat").value =
    "1-2 vezes por semana";
  document.getElementById("colorChangeIdMidCheat").value =
    "3-4 vezes por semana";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 ou mais vezes por semana";
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Refeições por dias:";
  document.getElementById("colorChangeId2Meals").value = "2 refeições por dia";
  document.getElementById("colorChangeId3Meals").value = "3 refeições por dia";
  document.getElementById("colorChangeId4Meals").value = "4 refeições por dia";
  document.getElementById("colorChangeId5Meals").value =
    "5 ou 6 refeições por dia";
  document.getElementById("buttonResult").value = "Resultado";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML = "Todos direitos reservados";
  returnUpdatedValues();
}
export function français() {
  if (contentArray.length == 2) numberBtnsOverwriteFr();
  language = "français";
  languageValue = 3;
  linkTitle.title = "Page d'accueil FitWish";
  firstPageBtnSeePrev.innerHTML = "Masquer le test précédent";
  idHowToH2.innerHTML = "Que vas tu faire";
  idHowToH3.innerHTML = "Qu'allons nous faire";
  idHowToTxt1.innerHTML =
    "Tout d'abord, si vous ne l'avez pas déjà fait, vérifiez le thème et la langue que vous préférez dans le bouton à trois barres sur la gauche. Alors répondez au test ... franchement, oui, je sais, c'est dur, mais c'est crucial pour que cela vous soit aussi utile que possible, puis dans un certain temps, vous pourrez répéter ce test et comparer les chiffres.";
  idHowToTxt2.innerHTML =
    "Eh bien, nous allons vous évaluer de manière complète et vous indiquer la distance qui vous sépare de vos objectifs sur votre chemin vers eux, puis vous pouvez revenir sur ce site même et refaire le test, en ayant jusqu'à deux résultats de test précédents stockés localement et en toute sécurité dans votre ordinateur.";
  firstPageH1.innerHTML =
    "Nous sommes heureux que vous nous ayez donné une chance de vous aider à réaliser le corps de vos rêves, appuyez sur Début pour continuer";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test une fois car ${contentArray[0].inputName}, fabriqué en ${contentArray[0].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
  firstPageBtnStart.value = `Début`;
  firstPageBtnDifferent.value = `Faites un nouveau test`;
  firstPageBtnOverwrite.value = `Écraser un test précédent`;
  firstPageBtnDelete.value = `Supprimer tous les tests précédents effectués`;
  firstPageBtnSeeAll.value = `Voir tous les tests précédents`;
  firstPageBtnSeePrev.value = `Voir le résultat du test précédent`;
  firstPageBtnHideAll.value = `Masquer tous les tests précédents`;
  resultBeginning2 =
    'Content de te revoir <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Menu des tentatives";
  howItWorksId.innerHTML = "Comment ça fonctionne";
  idHowToHeading.innerHTML = "Comment ça fonctionne";
  resultBeginning = 'Bien <big style="font-family: Kaushan Script, cursive;">';
  idAboutTxtLeft.style.fontSize = "0.9em";
  idAboutH2.style.marginLeft = "38.75%";
  idContactH2.style.marginLeft = "34.5%";
  idContactH2.innerHTML = "Comment nous contacter";
  idContactIntro.innerHTML =
    "Nous serions ravis d'entendre nos utilisateurs sur d'éventuels commentaires sur ce que vous avez vécu lors de l'utilisation de notre service. Pour nous contacter, accédez directement au lien vers l'e-mail de notre CTO ci-dessous, et pour avoir plus d'informations sur nous, accédez à son lien LinkedIn ci-dessous.";
  idAboutH2.innerHTML = "Qui sommes nous?";
  idAboutTxtLeft.innerHTML =
    "Eh bien, nous sommes FitWish, une nouvelle startup avec pour objectif, comme notre nom l'indique, de réaliser votre souhait dans le secteur du fitness, nous ne facturons pas votre premier diagnostic car nous pensons que le bien-être ne devrait pas avoir plus d'obstacles qu'il ne le fait déjà. Est-ce que. Par conséquent, en vous engageant à ce quiz rapide, vous aurez une sorte de conseils pour atteindre votre objectif dans ce domaine du fitness.";
  idAboutTxtRight.innerHTML =
    "Chez FitWish, nous reconnaissons l'effort déployé pour que votre corps soit tel que vous le souhaitez, et pour cette raison, nous apprécions votre précieuse décision de défendre votre position et d'agir en fonction de ce que vous devriez, votre santé.";
  buttonAbout.value = "À propos";
  buttonHome.value = "Page d'accueil";
  buttonContact.value = "Contact";
  idAboutHeading.innerHTML = "À propos";
  idContactHeading.innerHTML = "Contact";
  idBadHabits.style.fontSize = "2.2vw";
  idPlanMsg.style.fontSize = "2.2vw";
  idGoodHabits.style.fontSize = "2.2vw";
  contactId.innerHTML = "Contact";
  aboutId.innerHTML = "À propos";
  planId.style.marginLeft = "41.75%";
  planId.style.marginRight = "auto";
  introPageId.style.fontSize = "2.2vw";
  loginPageId.style.fontSize = "2.2vw";
  genderUnitPageId.style.fontSize = "2.2vw";
  dataPageId.style.fontSize = "2.2vw";
  goalPageId.style.fontSize = "2.2vw";
  bodyTypePageId.style.fontSize = "2.2vw";
  bodyImagePageId.style.fontSize = "2.2vw";
  xercisePageId.style.fontSize = "2.2vw";
  healthyPageId.style.fontSize = "2.2vw";
  cheatPageId.style.fontSize = "2.2vw";
  mealsPageId.style.fontSize = "2.2vw";
  emotionPageId.style.fontSize = "2.2vw";
  weightMetric.placeholder = "Exemple: 80.5";
  heightMetric.placeholder = "Exemple: 1.85";
  weightImperial.placeholder = "Exemple: 200.5";
  heightImperial.placeholder = "Exemple: 70";
  dataPageId.innerHTML = "Poids/Hauteur";
  headingTextInputIdWeightMetric.innerHTML = "Poids";
  headingTextInputIdHeightMetric.innerHTML = "Hauteur";
  headingTextInputIdWeightImperial.innerHTML = "Poids";
  headingTextInputIdHeightImperial.innerHTML = "Hauteur";
  defaultUnit = " - Défaut -";
  metricDefault = "Métrique - Défaut -";
  metricNoDefault = "Métrique";
  imperialDefault = "Impérial";
  checkImgId.style.marginLeft = "21.05%";
  pagesNavId.innerHTML = "Pages/Sections(&sect;)";
  languageInput.innerHTML = "Langue:";
  h4Config.innerHTML = "Traitement";
  processing = "Traitement";
  diagnosis = "Fin du diagnostic";
  resultPossibilities = "Chargement des possibilités de résultat";
  done = "Fait!";
  alreadyInPage = "Déjà en page";
  pageId.innerHTML = "Pages:";
  planId.innerHTML = "Notre Plan:";
  idBadHabits.innerHTML =
    "Vous avez peut-être des difficultés avec votre état de santé actuel, vous n'aimez pas la situation, mais vous n'êtes pas entièrement déterminé à la changer";
  idPlanMsg.innerHTML =
    "Mais maintenant tu as commencé un chemin dans lequel tu prends possession de toi-même, et je vais t'aider";
  idGoodHabits.innerHTML =
    "Plus tôt que prévu, vous serez habitué à avoir l'air aussi beau que vous le souhaitez, et en meilleure santé aussi!";
  introPageId.innerHTML = "Introduction";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Genre / Unité";
  goalPageId.innerHTML = "Objectif";
  bodyTypePageId.innerHTML = "Type de corps";
  bodyImagePageId.innerHTML = "Évaluation de la graisse corporelle";
  xercisePageId.innerHTML = "Évaluation de l'exercice";
  healthyPageId.innerHTML = "Repas sains";
  cheatPageId.innerHTML = "Repas de triche";
  mealsPageId.innerHTML = "Repas / jour";
  emotionPageId.innerHTML = "Suralimentation basée sur les émotions";
  buttonNext.value = "Suivant";
  buttonPrev.value = "Précédent";
  showImgBtn.innerHTML = "&#9776; Afficher l'image";
  referenceImgTxt.innerHTML = "Image de référence:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Sélectionnez un sexe pour voir l\'image de référence';
  weightManagementProgramFinalResult =
    "Résultat_final_du_programme_de_gestion_du_poids.html";
  document.getElementById("lightThemeButton").innerHTML = "Thème léger";
  document.getElementById("darkThemeButton").innerHTML =
    "Thème sombre (par défaut)";
  emailLinkColor.innerHTML =
    "<strong>Vous souhaitez recevoir un e-mail contenant les principales données de résultat? Cliquez ici!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>Vous voulez avoir un nouveau document avec toutes ces dernières pages de données? Cliquez ici!!</strong>";
  emotionans =
    "Pour ce problème émotionnel de suralimentation, vous devriez essayer quelques moyens de le réduire comme: essayez de répondre à la question, ai-je vraiment faim ou est-ce que j'essaye de manger mes émotions ?; à part cela, vous devriez essayer de vous calmer avec des techniques de respiration, de méditation ou de yoga pour réduire le stress; essayez de lutter contre l'ennui en trouvant un nouveau passe-temps, ou quelque chose qui «réveille» la volonté de se lever le matin; ne pas écarter la possibilité de voir un thérapeute pour vous aider dans plus de domaines que vous ne pouvez l'imaginer; Et pour lutter contre la tentation, récompensez-vous périodiquement avec une dose d'un aliment que vous aimez, peut-être tous les 15% à 25% du chemin parcouru, de cette façon vous apprendrez à modérer la quantité que vous mangez et ainsi vous faciliterez le maintien. votre corps en forme lorsque vous atteignez votre objectif.";
  document.getElementById("disclaimerId").innerHTML =
    "AVIS DE NON-RESPONSABILITÉ";
  firstAlert =
    "AVIS DE NON-RESPONSABILITÉ: Ce n'est pas un conseil médical ou nutritionniste et non seulement n'exclut pas une consultation médicale, mais aussi, moi en tant que créateur de code, je vous encourage et vous soutenez à voir votre médecin pour tout ce que VOUS pensez que VOUS devriez améliorer dans VOTRE vie de santé . Paix!";
  document.getElementById("name").placeholder = "Exemple de nom: Nick";
  document.getElementById("age").placeholder = "Exemple d'âge: 24 ";
  document.getElementById("email").placeholder =
    "Exemple d'email: nom.nom@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nom:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Âge:";
  document.getElementById("headingTextInputIdEmail").innerHTML = "Email:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Genre";
  document.getElementById("colorChangeIdMale").value = "Mâle";
  document.getElementById("colorChangeIdFemale").value = "Femelle";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Suralimentation basée sur les émotions<h3>(Lorsque vous ressentez de la tristesse, du bonheur, de l'ennui, de la solitude, du stress, de la déception, de l'inquiétude, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Oui";
  document.getElementById("colorChangeIdEmoNo").value = "Non";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unité";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrique${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Impérial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objectif";
  document.getElementById("colorChangeIdBulk").value = "Gagner du muscle";
  document.getElementById("colorChangeIdCut").value = "Obtenez déchiqueté";
  document.getElementById("colorChangeIdSurp").value = "Perdre du poids";
  document.getElementById("colorChangeIdMuscle").value = "Gagner de poids";
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Type de corps";
  document.getElementById("colorChangeIdNoIdea").value = "Aucune idée";
  document.getElementById("colorChangeIdEcto").value = "Ectomorphe";
  document.getElementById("colorChangeIdMeso").value = "Mesomorphe";
  document.getElementById("colorChangeIdEndo").value = "Endomorphe";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "Lequel de ceux-ci vous représente le plus?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "Selon vous, lequel de ces éléments représente le plus votre objectif?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Fréquence d'exercice à haute intensité:";
  document.getElementById("colorChangeIdNoneXercise").value = "Aucun";
  document.getElementById("colorChangeIdLowXercise").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidXercise").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 fois ou plus par semaine";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Fréquence des jours de repas bons et sains:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Aucun";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 fois ou plus par semaine";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Fréquence des jours de repas non sains:";
  document.getElementById("colorChangeIdNoneCheat").value = "Aucun";
  document.getElementById("colorChangeIdLowCheat").value =
    "1 à 2 fois par semaine";
  document.getElementById("colorChangeIdMidCheat").value =
    "3 à 4 fois par semaine";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 fois ou plus par semaine";
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Repas par jour:";
  document.getElementById("colorChangeId2Meals").value = "2 repas par jour";
  document.getElementById("colorChangeId3Meals").value = "3 repas par jour";
  document.getElementById("colorChangeId4Meals").value = "4 repas par jour";
  document.getElementById("colorChangeId5Meals").value =
    "5 ou 6 repas par jour";
  document.getElementById("buttonResult").value = "Résultat";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML =
    "Tous les droits sont réservés";
  returnUpdatedValues();
}
export function español() {
  if (contentArray.length == 2) numberBtnsOverwriteEs();
  language = "español";
  languageValue = 4;
  linkTitle.title = "Página de inicio de FitWish";
  firstPageBtnSeePrev.innerHTML = "Ocultar Prueba Anterior";
  idHowToH2.innerHTML = "Qué harás";
  idHowToH3.innerHTML = "Lo que haremos";
  idHowToTxt1.innerHTML =
    "Primero, si aún no lo ha hecho, marque el tema y el idioma que prefiera en el botón de tres barras a la izquierda. Luego responda la prueba ... con franqueza, sí, lo sé, es duro, pero esto es crucial para que esto sea lo más útil posible para usted, luego, en algún momento a partir de ahora, puede repetir esta prueba y comparar los números.";
  idHowToTxt2.innerHTML =
    "Bueno, lo evaluaremos de manera integral y le diremos la distancia a sus objetivos en su camino hacia ellos, luego puede regresar a este mismo sitio y rehacer la prueba, teniendo hasta dos resultados de pruebas anteriores almacenados localmente y de forma segura en su computadora.";
  firstPageH1.innerHTML =
    "Nos alegra que nos haya brindado la oportunidad de ayudarlo a lograr el cuerpo de sus sueños, presione comenzar para continuar";
  if (contentArray.length > 0)
    firstPageH12nd.innerHTML = `Detectamos que ya ha realizado nuestra prueba una vez como ${contentArray[0].inputName}, hecho en ${contentArray[0].day}. Elija lo que le gustaría hacer a continuación`;
  firstPageBtnStart.value = `Comienzo`;
  firstPageBtnDifferent.value = `Hacer una nueva prueba`;
  firstPageBtnOverwrite.value = `Sobrescribir una prueba anterior`;
  firstPageBtnDelete.value = `Eliminar todas las pruebas anteriores realizadas`;
  firstPageBtnSeeAll.value = `Ver todas las pruebas anteriores`;
  firstPageBtnSeePrev.value = `Ver el resultado de la prueba anterior`;
  firstPageBtnHideAll.value = `Ocultar todas las pruebas anteriores`;
  resultBeginning2 =
    'Bienvenido de nuevo <big style="font-family: Kaushan Script, cursive;">';
  buttonFirst.value = "Menú de intentos";
  howItWorksId.innerHTML = "Cómo funciona";
  idHowToHeading.innerHTML = "Cómo funciona";
  resultBeginning =
    '¡Bueno! <big style="font-family: Kaushan Script, cursive;">';
  idAboutTxtLeft.style.fontSize = "1em";
  idAboutH2.style.marginLeft = "33.5%";
  idContactH2.style.marginLeft = "32.5%";
  idContactH2.innerHTML = "Como contactar con nosotros";
  idContactIntro.innerHTML =
    "Nos encantaría saber de nuestros usuarios sobre posibles comentarios sobre lo que experimentó al utilizar nuestro servicio. Para contactarnos acceda directamente al enlace al correo electrónico de nuestro CTO a continuación, y para tener más información sobre nosotros acceda a su enlace de LinkedIn a continuación.";
  idAboutH2.innerHTML = "Quienes somos nosotros?";
  idAboutTxtLeft.innerHTML =
    "Bueno, somos FitWish, una nueva startup con el objetivo de, como dice nuestro Nombre, cumplir tu deseo en el sector del fitness, no cobramos por tu primer diagnóstico porque creemos que el bienestar no debería tener más obstáculos de los que ya tiene. hace. Por lo tanto, al comprometerse con este cuestionario rápido, tendrá una especie de guía para lograr su objetivo en este campo del fitness.";
  idAboutTxtRight.innerHTML =
    "En FitWish reconocemos el esfuerzo realizado para lograr que su cuerpo esté de la manera que desea que sea, y por eso, apreciamos su valiosa decisión de defender su posición y actuar de acuerdo con lo que debe, su salud.";
  buttonAbout.value = "Sobre";
  buttonHome.value = "Pagina de Inicio";
  buttonContact.value = "Contacto";
  idAboutHeading.innerHTML = "Sobre";
  idContactHeading.innerHTML = "Contacto";
  idBadHabits.style.fontSize = "2.2vw";
  idPlanMsg.style.fontSize = "2.2vw";
  idGoodHabits.style.fontSize = "2.2vw";
  aboutId.innerHTML = "Sobre";
  contactId.innerHTML = "Contacto";
  planId.style.marginLeft = "41%";
  planId.style.marginRight = "2.55%";
  introPageId.style.fontSize = "2.025vw";
  loginPageId.style.fontSize = "2.025vw";
  genderUnitPageId.style.fontSize = "2.025vw";
  dataPageId.style.fontSize = "2.025vw";
  goalPageId.style.fontSize = "2.025vw";
  bodyTypePageId.style.fontSize = "2.025vw";
  bodyImagePageId.style.fontSize = "2.025vw";
  xercisePageId.style.fontSize = "2.025vw";
  healthyPageId.style.fontSize = "2.025vw";
  cheatPageId.style.fontSize = "2.025vw";
  mealsPageId.style.fontSize = "2.025vw";
  emotionPageId.style.fontSize = "2.025vw";
  weightMetric.placeholder = "Ejemplo: 80.5";
  heightMetric.placeholder = "Ejemplo: 1.85";
  weightImperial.placeholder = "Ejemplo: 200.5";
  heightImperial.placeholder = "Ejemplo: 70";
  dataPageId.innerHTML = "Peso/Altura";
  headingTextInputIdWeightMetric.innerHTML = "Peso";
  headingTextInputIdHeightMetric.innerHTML = "Altura";
  headingTextInputIdWeightImperial.innerHTML = "Peso";
  headingTextInputIdHeightImperial.innerHTML = "Altura";
  defaultUnit = " - Defecto -";
  metricDefault = "Métrico - Defecto -";
  metricNoDefault = "Métrico";
  imperialDefault = "Imperial";
  checkImgId.style.marginLeft = "17.9%";
  pagesNavId.innerHTML = "Paginas/Secciones(&sect;)";
  languageInput.innerHTML = "Idioma:";
  h4Config.innerHTML = "Procesando";
  processing = "Procesando";
  diagnosis = "Diagnóstico final";
  resultPossibilities = "Cargando Posibilidades de Resultados";
  done = "¡Hecho!";
  alreadyInPage = "Ya en la pagina";
  pageId.innerHTML = "Paginas:";
  planId.innerHTML = "Nuestro Plan:";
  idBadHabits.innerHTML =
    "Es posible que esté luchando con su estado de salud actual, no le guste la situación, pero no esté completamente comprometido a cambiarla.";
  idPlanMsg.innerHTML =
    "Pero ahora iniciaste un camino en el que te apropiaste de ti mismo, y yo te voy a ayudar";
  idGoodHabits.innerHTML =
    "¡Antes de lo que esperabas, estarás acostumbrado a verte tan bien como quieras y más saludable también!";
  introPageId.innerHTML = "Introducción";
  loginPageId.innerHTML = "Login";
  genderUnitPageId.innerHTML = "Género / Unidad";
  goalPageId.innerHTML = "Objetivo";
  bodyTypePageId.innerHTML = "Tipo de cuerpo";
  bodyImagePageId.innerHTML = "Evaluación de la grasa corporal";
  xercisePageId.innerHTML = "Evaluación del ejercicio";
  healthyPageId.innerHTML = "Comidas saludables";
  cheatPageId.innerHTML = "Comidas no saludables";
  mealsPageId.innerHTML = "Comidas / Día";
  emotionPageId.innerHTML = "Comer en exceso basado en las emociones";
  buttonNext.value = "Próximo";
  buttonPrev.value = "Previo";
  showImgBtn.innerHTML = "&#9776; Mostrar imagen";
  referenceImgTxt.innerHTML = "Imagen de referencia:";
  backupGenderImg =
    '<br><br><br><br><br><span style="font-size: 40px; font-variant:all-caps; color:white; display: grid; place-items: center;">Seleccione un género para ver la imagen de referencia';
  weightManagementProgramFinalResult =
    "Resultado_final_del_programa_de_control_de_peso.html";
  document.getElementById("lightThemeButton").innerHTML = "Tema Claro";
  document.getElementById("darkThemeButton").innerHTML =
    "Tema oscuro (predeterminado)";
  emailLinkColor.innerHTML =
    "<strong>¿Quiere que le envíen un correo electrónico con los principales datos de resultados? ¡¡Haga clic aquí!!</strong>";
  downloadLinkColor.innerHTML =
    "<strong>¿Quieres tener un nuevo documento con todos los datos de estas últimas páginas? ¡¡Haga clic aquí!!</strong>";
  emotionans =
    'Para este problema emocional de comer en exceso, debe probar algunas formas de reducirlo, como: intente responder la pregunta, ¿tengo mucha hambre o estoy tratando de comerme mis emociones ?; aparte de eso, debes intentar calmarte con algunas técnicas de respiración, meditación o yoga para reducir el estrés; intenta luchar contra el aburrimiento encontrando un nuevo pasatiempo, o algo que  "despierte " la voluntad de levantarse por la mañana; no descarte la posibilidad de ver a un terapeuta para que le ayude en más áreas de las que pueda imaginar; Y para combatir la tentación, recompénsate periódicamente con una dosis de un alimento que te guste, tal vez cada 15% -25% de todo el camino recorrido, de esta forma aprenderás a moderar la cantidad que comes y así te será más fácil mantenerlo. tu cuerpo en forma cuando alcances tu objetivo.';
  document.getElementById("disclaimerId").innerHTML =
    "DESCARGO DE RESPONSABILIDAD";
  firstAlert =
    "DESCARGO DE RESPONSABILIDAD: Este no es un consejo médico ni nutricionista y no solo no excluye una consulta médica, sino que también, como creador de este código, lo animo y lo apoyo para que vea a su médico por cualquier cosa que usted crea que debe mejorar en su vida de salud. . ¡Paz!";
  document.getElementById("name").placeholder = "Ejemplo de nombre: Nick";
  document.getElementById("age").placeholder = "Ejemplo de edad: 24";
  document.getElementById("email").placeholder =
    "Ejemplo: nombre.apellido@email.com";
  document.getElementById("headingTextInputIdName").innerHTML = "Nombre:";
  document.getElementById("headingTextInputIdAge").innerHTML = "Edad:";
  document.getElementById("headingTextInputIdEmail").innerHTML =
    "Correo electrónico:";
  document.getElementById("headingObjInputIdGender").innerHTML = "Género";
  document.getElementById("colorChangeIdMale").value = "Masculino";
  document.getElementById("colorChangeIdFemale").value = "Femenino";
  document.getElementById("headingObjInputIdEmotion").innerHTML =
    "Comer en exceso basado en las emociones<h3>(Al experimentar tristeza, felicidad, aburrimiento, soledad, estrés, desilusión, preocupación, etc.)</h3>";
  document.getElementById("colorChangeIdEmoYes").value = "Si";
  document.getElementById("colorChangeIdEmoNo").value = "No";
  document.getElementById("headingObjInputIdUnit").innerHTML = "Unidad";
  document.getElementById(
    "colorChangeIdMetric"
  ).value = `Métrico${defaultUnit}`;
  document.getElementById("colorChangeIdImperial").value = "Imperial";
  document.getElementById("headingObjInputIdGoal").innerHTML = "Objetivo";
  document.getElementById("colorChangeIdBulk").value = "Ganar músculo";
  document.getElementById("colorChangeIdCut").value = "Hacerse Rasgado";
  document.getElementById("colorChangeIdSurp").value = "Perder peso";
  document.getElementById("colorChangeIdMuscle").value = "Ganar peso";
  document.getElementById("headingObjInputIdBodyType").innerHTML =
    "Tipo de cuerpo";
  document.getElementById("colorChangeIdNoIdea").value = "Ni idea";
  document.getElementById("colorChangeIdEcto").value = "Ectomorfo";
  document.getElementById("colorChangeIdMeso").value = "Mesomorfo";
  document.getElementById("colorChangeIdEndo").value = "Endomorfo";
  document.getElementById("headingObjInputIdBodyImage").innerHTML =
    "¿Cuál de estos crees que te representa más?";
  document.getElementById("headingObjInputIdGoalImage").innerHTML =
    "¿Cuál de estos crees que representa más tu objetivo?";
  document.getElementById("headingObjInputIdXercise").innerHTML =
    "Frecuencia de ejercicio de alta intensidad:";
  document.getElementById("colorChangeIdNoneXercise").value = "Ninguno";
  document.getElementById("colorChangeIdLowXercise").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidXercise").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighXercise").value =
    "5 o más veces por semana";
  document.getElementById("headingObjInputIdHealthy").innerHTML =
    "Frecuencia de días de comidas buenas y saludables:";
  document.getElementById("colorChangeIdNoneHealthy").value = "Ninguno";
  document.getElementById("colorChangeIdLowHealthy").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidHealthy").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighHealthy").value =
    "5 o más veces por semana";
  document.getElementById("headingObjInputIdCheat").innerHTML =
    "Frecuencia de días de comidas no saludables:";
  document.getElementById("colorChangeIdNoneCheat").value = "Ninguno";
  document.getElementById("colorChangeIdLowCheat").value =
    "1-2 veces por semana";
  document.getElementById("colorChangeIdMidCheat").value =
    "3-4 veces por semana";
  document.getElementById("colorChangeIdHighCheat").value =
    "5 o más veces por semana";
  document.getElementById("headingObjInputIdMeals").innerHTML =
    "Comidas al dia:";
  document.getElementById("colorChangeId2Meals").value = "2 comidas al dia";
  document.getElementById("colorChangeId3Meals").value = "3 comidas al dia";
  document.getElementById("colorChangeId4Meals").value = "4 comidas al dia";
  document.getElementById("colorChangeId5Meals").value = "5 o 6 comidas al dia";
  document.getElementById("buttonResult").value = "Resultado";
  downloadResult = `<span style="background-color: ${backgroundColorDownload}; color: ${colorDownload};"><div style="display: flex; "><img id="imageLogo" src="https://www.pngkey.com/png/full/211-2118619_healthy-army-communities-healthy-apple-logo.png" alt="logo" style="float: left; width: 60px; margin-left: ${imageLogo.style.marginLeft};"><h1 class="classHeading" id="headingObjInputIdHead" style="border: none; background: none; color: ${colorDownload}; place-items: left;"><i>${headingObjInputIdHead.innerHTML}</i></h1></div>`;
  document.getElementById("allRights").innerHTML =
    "Todos los derechos reservados";
  returnUpdatedValues();
}
function themeTypeLight() {
  theme = "light";
  leftsidebarButton.style.color = "black";
  rightsidebarButton.style.color = "black";
  planId.style.color = "blue";
  idBadHabits.style.color = "red";
  idPlanMsg.style.color = "blue";
  idGoodHabits.style.color = "darkgreen";
  colorDownload = "#1F3B4D";
  backgroundColorDownload = "white";
  divPushCircleId.style.backgroundColor = "white";
  finalResultH3Id.style.color = "#1F3B4D";
  headingTextInputIdWeightMetric.style.color = "#1F3B4D";
  headingTextInputIdHeightMetric.style.color = "#1F3B4D";
  headingTextInputIdWeightImperial.style.color = "#1F3B4D";
  headingTextInputIdHeightImperial.style.color = "#1F3B4D";
  idAboutHeading.style.color = "#1F3B4D";
  idContactHeading.style.color = "#1F3B4D";
  buttonAbout.classList.remove("aboutContactBtn");
  buttonContact.classList.remove("aboutContactBtn");
  buttonHome.classList.remove("aboutContactBtn");
  buttonFirst.classList.remove("aboutContactBtn");
  buttonAbout.classList.add("contactAboutBtn");
  buttonContact.classList.add("contactAboutBtn");
  buttonHome.classList.add("contactAboutBtn");
  buttonFirst.classList.add("contactAboutBtn");
  idAboutH2.style.color = "#1F3B4D";
  idAboutTxtRight.style.color = "#1F3B4D";
  idAboutTxtLeft.style.color = "#1F3B4D";
  idContactLinkedIn.style.color = "#1F3B4D";
  idContactGmail.style.color = "#1F3B4D";
  idContactH2.style.color = "#1F3B4D";
  idContactIntro.style.color = "#1F3B4D";
  firstPageH1.style.color = "#1F3B4D";
  firstPageH12nd.style.color = "#1F3B4D";
  firstPageH13rd.style.color = "#1F3B4D";
  idHowToHeading.style.color = "#1F3B4D";
  idHowToH2.style.color = "#1F3B4D";
  idHowToH3.style.color = "#1F3B4D";
  idHowToTxt1.style.color = "#1F3B4D";
  idHowToTxt2.style.color = "#1F3B4D";
  document.getElementById("bodyBgColorId").style.cssText =
    "background-color:white; color:#1F3B4D;";
  document.getElementById("headingTextInputIdName").style.cssText =
    "color: #1F3B4D;";
  document.getElementById("headingTextInputIdAge").style.cssText =
    "color: #1F3B4D;";
  document.getElementById("headingTextInputIdEmail").style.cssText =
    "color: #1F3B4D;";
  document.getElementById("headingObjInputIdHead").style.color = "black";
  document.getElementById("headingObjInputIdGender").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdUnit").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdGoal").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdBodyType").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdBodyImage").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdXercise").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdHealthy").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdCheat").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdMeals").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdGoalImage").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("headingObjInputIdEmotion").style.backgroundColor =
    "#D0FEFE";
  document.getElementById("downloadLinkColor").style.color = "green";
  document.getElementById("emailLinkColor").style.color = "#E50278";
}
function themeTypeDark() {
  theme = "dark";
  leftsidebarButton.style.color = "aliceblue";
  rightsidebarButton.style.color = "aliceblue";
  planId.style.color = "cyan";
  idBadHabits.style.color = "white";
  idPlanMsg.style.color = "cyan";
  idGoodHabits.style.color = "gold";
  colorDownload = "azure";
  backgroundColorDownload = "#12232A";
  divPushCircleId.style.backgroundColor = "#12232A";
  finalResultH3Id.style.color = "azure";
  headingTextInputIdWeightMetric.style.color = "#DDD";
  headingTextInputIdHeightMetric.style.color = "#DDD";
  headingTextInputIdWeightImperial.style.color = "#DDD";
  headingTextInputIdHeightImperial.style.color = "#DDD";
  idAboutHeading.style.color = "azure";
  idContactHeading.style.color = "azure";
  buttonAbout.classList.add("aboutContactBtn");
  buttonContact.classList.add("aboutContactBtn");
  buttonHome.classList.add("aboutContactBtn");
  buttonFirst.classList.add("aboutContactBtn");
  buttonAbout.classList.remove("contactAboutBtn");
  buttonContact.classList.remove("contactAboutBtn");
  buttonHome.classList.remove("contactAboutBtn");
  buttonFirst.classList.remove("contactAboutBtn");
  idAboutH2.style.color = "azure";
  idAboutTxtRight.style.color = "azure";
  idAboutTxtLeft.style.color = "azure";
  idContactH2.style.color = "azure";
  idContactIntro.style.color = "azure";
  idContactLinkedIn.style.color = "azure";
  idContactGmail.style.color = "azure";
  firstPageH1.style.color = "azure";
  firstPageH12nd.style.color = "azure";
  firstPageH13rd.style.color = "azure";
  idHowToHeading.style.color = "azure";
  idHowToH2.style.color = "azure";
  idHowToH3.style.color = "azure";
  idHowToTxt1.style.color = "azure";
  idHowToTxt2.style.color = "azure";
  document.getElementById("bodyBgColorId").style.cssText =
    "background-color:#12232A; color:#1F3B4D;";
  document.getElementById("headingTextInputIdName").style.cssText =
    "color: #DDD;";
  document.getElementById("headingTextInputIdAge").style.cssText =
    "color: #DDD;";
  document.getElementById("headingTextInputIdEmail").style.cssText =
    "color: #DDD;";
  document.getElementById("headingObjInputIdHead").style.color = "aliceblue";
  document.getElementById("headingObjInputIdGender").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdUnit").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdGoal").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdBodyType").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdBodyImage").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdXercise").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdHealthy").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdCheat").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdMeals").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdGoalImage").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("headingObjInputIdEmotion").style.backgroundColor =
    "#9DBCD4";
  document.getElementById("downloadLinkColor").style.color = "lightgreen";
  document.getElementById("emailLinkColor").style.color = "pink";
}
const setLocalData = (idParameter) => {
  idUser = idParameter;
  contentArray.push({
    idUser,
    inputName,
    emailaddrreturn,
    age,
    language,
    theme,
    genderreturn,
    resultBeginning2,
    bodyTypeAdvice,
    bodyTypeAdvantageAdvice,
    goalDistance,
    ageAdvice,
    finalIdealWeightMsg,
    exerciseAdvice,
    goalAdvice,
    healthyAdvice,
    cheatAdvice,
    mealsAdvice,
    goalAdvice2,
    emotionans,
    calorieIntakeAdvice,
    calorieCounterLink,
    caloriesLink,
    exerciseCaloriesLink,
    fitnessAppsLink,
    day,
  });
  localStorage.setItem("contentArray", JSON.stringify(contentArray));
};
const storage = () => (tryNumber == 1 ? setLocalData(1) : setLocalData(2));
const showPrevTestResult = (resultTry) => {
  if (resultTry == 1) {
    clearScreen();
    idFooter.style.display = "none";
    buttonFirst.style.display = "block";
    finalResultH3Id.style.display = "block";
    finalResultH3Id.innerHTML = `${contentArray[0].resultBeginning2} ${contentArray[0].inputName}</strong>, ${contentArray[0].bodyTypeAdvice} <br> ${contentArray[0].bodyTypeAdvantageAdvice}${contentArray[0].goalDistance}<br><br>${contentArray[0].ageAdvice}<br><br>${contentArray[0].finalIdealWeightMsg}<br><br>${contentArray[0].exerciseAdvice}<br><br>${contentArray[0].goalAdvice}<br><br>${contentArray[0].healthyAdvice}<br><br>${contentArray[0].cheatAdvice}<br><br>${contentArray[0].mealsAdvice}<br><br>${contentArray[0].goalAdvice2}<br><br>${contentArray[0].emotionans}<br><br>${contentArray[0].calorieIntakeAdvice}<br><br><br>`;
    finalResultH4Id.style.display = "block";
    finalResultH4Id.innerHTML = `<i>${contentArray[0].calorieCounterLink}<br><br>${contentArray[0].caloriesLink}<br><br>${contentArray[0].exerciseCaloriesLink}<br><br>${contentArray[0].fitnessAppsLink}</i><br><br><br>`;
    idFooter.style.position = "relative";
    idFooter.style.marginBottom = "0";
    idFooter.style.display = "block";
  } else if (resultTry == 2) {
    clearScreen();
    idFooter.style.display = "none";
    buttonFirst.style.display = "block";
    finalResultH3Id.style.display = "block";
    finalResultH3Id.innerHTML = `${contentArray[1].resultBeginning2} ${contentArray[1].inputName}</strong>, ${contentArray[1].bodyTypeAdvice} <br> ${contentArray[1].bodyTypeAdvantageAdvice}${contentArray[1].goalDistance}<br><br>${contentArray[1].ageAdvice}<br><br>${contentArray[1].finalIdealWeightMsg}<br><br>${contentArray[1].exerciseAdvice}<br><br>${contentArray[1].goalAdvice}<br><br>${contentArray[1].healthyAdvice}<br><br>${contentArray[1].cheatAdvice}<br><br>${contentArray[1].mealsAdvice}<br><br>${contentArray[1].goalAdvice2}<br><br>${contentArray[1].emotionans}<br><br>${contentArray[1].calorieIntakeAdvice}<br><br><br>`;
    finalResultH4Id.style.display = "block";
    finalResultH4Id.innerHTML = `<i>${contentArray[1].calorieCounterLink}<br><br>${contentArray[1].caloriesLink}<br><br>${contentArray[1].exerciseCaloriesLink}<br><br>${contentArray[1].fitnessAppsLink}</i><br><br><br>`;
    idFooter.style.position = "relative";
    idFooter.style.marginBottom = "0";
    idFooter.style.display = "block";
  }
};
const startNewTry = (tryN) => {
  tryNumber = tryN;
  window.location.href = "intro.html";
};
const overwriteTest2 = (paramas) => {
  if (paramas == 1) {
    if (language == "english")
      var confirmOverwrite = confirm(
        `Are you sure you want to overwrite the test made as ${contentArray[0].inputName}? It will be forever destroyed.`
      );
    else if (language == "português")
      var confirmOverwrite = confirm(
        `Tem certeza que deseja sobrescrever o teste feito por ${contentArray[0].inputName}? Esse teste será destruido para sempre.`
      );
    else if (language == "français")
      var confirmOverwrite = confirm(
        `Voulez-vous vraiment remplacer le test effectué comme ${contentArray[0].inputName}? Il sera détruit à jamais.`
      );
    else if (language == "español")
      var confirmOverwrite = confirm(
        `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${contentArray[0].inputName}? Será destruido para siempre.`
      );
    if (confirmOverwrite == true) {
      contentArray.shift();
      localStorage.setItem("contentArray", JSON.stringify(contentArray));
      startNewTry(1);
      firstPageBtn1stTry.style.display = "none";
      firstPageBtn1stTryOverwrite.style.display = "none";
      firstPageBtn2ndTry.style.display = "none";
      firstPageBtn2ndTryOverwrite.style.display = "none";
      firstPageBtnOverwrite.style.display = "none";
      firstPageBtnSeeAll.style.display = "none";
      firstPageBtnDelete.style.display = "none";
      firstPageBtnStart.style.display = "none";
    }
  } else if (paramas == 2) {
    if (language == "english")
      var confirmOverwrite = confirm(
        `Are you sure you want to overwrite the test made as ${contentArray[1].inputName}? It will be forever destroyed.`
      );
    else if (language == "português")
      var confirmOverwrite = confirm(
        `Tem certeza que deseja sobrescrever o teste feito por ${contentArray[1].inputName}? Esse teste será destruido para sempre.`
      );
    else if (language == "français")
      var confirmOverwrite = confirm(
        `Voulez-vous vraiment remplacer le test effectué comme ${contentArray[1].inputName}? Il sera détruit à jamais.`
      );
    else if (language == "español")
      var confirmOverwrite = confirm(
        `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${contentArray[1].inputName}? Será destruido para siempre.`
      );
    if (confirmOverwrite == true) {
      contentArray.pop();
      localStorage.setItem("contentArray", JSON.stringify(contentArray));
      startNewTry(2);
    }
  }
};
function overwriteTest() {
  if (triesMade == 1) {
    if (language == "english")
      var confirmOverwrite = confirm(
        `Are you sure you want to overwrite the test made as ${contentArray[0].inputName}? It will be forever destroyed.`
      );
    else if (language == "português")
      var confirmOverwrite = confirm(
        `Tem certeza que deseja sobrescrever o teste feito por ${contentArray[0].inputName}? Esse teste será destruido para sempre.`
      );
    else if (language == "français")
      var confirmOverwrite = confirm(
        `Voulez-vous vraiment remplacer le test effectué comme ${contentArray[0].inputName}? Il sera détruit à jamais.`
      );
    else if (language == "español")
      var confirmOverwrite = confirm(
        `¿Estás seguro de que quieres sobrescribir la prueba realizada como ${contentArray[0].inputName}? Será destruido para siempre.`
      );
    if (confirmOverwrite == true) {
      contentArray.shift();
      localStorage.setItem("contentArray", JSON.stringify(contentArray));
      startNewTry(1);
    }
  } else if (triesMade == 2) {
    seeAllTests();
    firstPageBtn1stTryOverwrite.style.display = "block";
    firstPageBtn2ndTryOverwrite.style.display = "block";
  } else firstPageBtnOverwrite.style.display = "none";
}
function deleteTests() {
  if (language == "english")
    var deletePrevTests = confirm(
      "Are you sure you want to delete all the tests?"
    );
  else if (language == "português")
    var deletePrevTests = confirm(
      "Tem certeza que deseja deletar todos os testes?"
    );
  else if (language == "français")
    var deletePrevTests = confirm(
      "Voulez-vous vraiment supprimer tous les tests?"
    );
  else if (language == "español")
    var deletePrevTests = confirm(
      "¿Estás seguro de que quieres eliminar todas las pruebas?"
    );
  if (deletePrevTests == true) {
    localStorage.removeItem("contentArray");
    window.location.reload();
  }
}
function hidePrevTests() {
  firstPageBtn1stTry.style.display = "none";
  firstPageBtnSeePrev.style.display = "block";
  firstPageBtnHidePrev.style.display = "none";
}
function seePrevTest() {
  firstPageBtn1stTry.style.display = "block";
  firstPageBtnSeePrev.style.display = "none";
  firstPageBtnHidePrev.style.display = "block";
  firstPageBtnDelete.style.display = "block";
}
function seeAllTests() {
  firstPageBtn1stTry.style.display = "block";
  firstPageBtn2ndTry.style.display = "block";
  firstPageBtnSeeAll.style.display = "none";
  firstPageBtnHideAll.style.display = "block";
  firstPageBtnDelete.style.display = "block";
}
function hideAllTests() {
  firstPageBtn1stTry.style.display = "none";
  firstPageBtn2ndTry.style.display = "none";
  firstPageBtnSeeAll.style.display = "block";
  firstPageBtnHideAll.style.display = "none";
  firstPageBtnDelete.style.display = "block";
}
function firstPageLogin() {
  buttonFirst.style.display = "none";
  idFooter.style.display = "block";
  idFooter.style.position = "absolute";
  idFooter.style.bottom = "0";
  idFirstSubmit.style.display = "block";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
}
const firstPage = () => {
  if (differentPage != 1) {
    pageSwitcher(1);
    closeNav();
    closeRightNav();
    idHowToPage.style.display = "none";
    idHowToHeading.style.display = "none";
    idContactHeading.style.display = "none";
    idAboutHeading.style.display = "none";
    rightsidebarButton.style.display = "block";
    idFirstSubmit.style.display = "none";
    linkTitlea.href = "javascript:window.location.href = 'index.html';";
    titleLink.href = "javascript:window.location.href = 'index.html';";
    pagesNavId.onclick = rightNavInterpreter;
    pagesNavId.onclick();
    rightNavInterpreter();
  }
};
const clearScreen = () => {
  closeNav();
  closeRightNav();
  idFirstSubmit.style.display = "none";
  idIntroSubmit.style.display = "none";
  idLoginSubmit.style.display = "none";
  idGenderUnitSubmit.style.display = "none";
  idDataSubmit.style.display = "none";
  idGoalSubmit.style.display = "none";
  idBodyTypeSubmit.style.display = "none";
  idImageSubmit.style.display = "none";
  idXerciseSubmit.style.display = "none";
  idHealthySubmit.style.display = "none";
  idCheatSubmit.style.display = "none";
  idMealsSubmit.style.display = "none";
  idEmotionSubmit.style.display = "none";
  buttonNext.style.display = "none";
  buttonResult.style.display = "none";
  buttonPrev.style.display = "none";
  idAboutPage.style.display = "none";
  idContactPage.style.display = "none";
  idFirstSubmit.style.display = "none";
  idFirstSubmit.style.display = "none";
  finalResultH3Id.style.display = "none";
  finalResultH4Id.style.display = "none";
  finalResultH2Id.style.display = "none";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
  differentPage = 0;
};
function titleMid() {
  linkTitle.style.marginLeft = "40%";
  imageLogo.style.marginTop = "1.5vh";
  imageLogo.style.marginTop = "1.5vh";
  imageLogo.style.width = "4vw";
  imageLogo.style.height = "10vh";
  idAboutPage.style.display = "none";
  idContactPage.style.display = "none";
  headingObjInputIdHead.style.fontSize = "2.3em";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
}
function titleLeft() {
  linkTitle.style.marginLeft = "4vw";
  linkTitle.style.marginTop = "0";
  imageLogo.style.marginTop = "0";
  imageLogo.style.width = "3vw";
  imageLogo.style.height = "7vh";
  headingObjInputIdHead.style.fontSize = "1.35em";
  buttonsId.style.display = "block";
  buttonFirst.style.display = "block";
  aboutId.style.display = "block";
  contactId.style.display = "block";
  howItWorksId.style.display = "block";
}
function about() {
  clearScreen();
  titleLeft();
  aboutId.style.display = "none";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
  idContactPage.style.display = "none";
  idAboutPage.style.display = "block";
  buttonAbout.style.display = "none";
  buttonContact.style.display = "block";
  buttonHome.style.display = "block";
  idAboutHeading.style.display = "block";
  idFirstSubmit.style.display = "none";
}
function howTo() {
  clearScreen();
  titleLeft();
  howItWorksId.style.display = "none";
  idHowToPage.style.display = "block";
  idHowToHeading.style.display = "block";
  idContactPage.style.display = "none";
  idAboutPage.style.display = "none";
  buttonAbout.style.display = "block";
  buttonContact.style.display = "block";
  buttonHome.style.display = "block";
  idAboutHeading.style.display = "block";
  idFirstSubmit.style.display = "none";
}
function contact() {
  clearScreen();
  titleLeft();
  contactId.style.display = "none";
  idHowToPage.style.display = "none";
  idHowToHeading.style.display = "none";
  idAboutPage.style.display = "none";
  idContactPage.style.display = "block";
  buttonAbout.style.display = "block";
  buttonContact.style.display = "none";
  buttonHome.style.display = "block";
  idContactHeading.style.display = "block";
  idFirstSubmit.style.display = "none";
}
const metricUnit = () => (colorChangeIdMetric.value += ` (kg / m)`);
function metricUnitCloak() {
  if ((unit == "metric" && metricVerify >= 2) || unit == "imperial")
    colorChangeIdMetric.value = `${metricNoDefault}`;
  else colorChangeIdMetric.value = `${metricDefault}`;
}
const imperialUnit = () => (colorChangeIdImperial.value += ` (lbs / in)`);
const imperialUnitCloak = () =>
  (colorChangeIdImperial.value = ` ${imperialDefault}`);
function rightNavInterpreter() {
  if (myRightSidenav.style.width == "250px")
    document.getElementById("myRightSidenav").style.width = "0";
  else document.getElementById("myRightSidenav").style.width = "250px";
}
const openNav = () =>
  (document.getElementById("myLeftSidenav").style.width = "250px");
const closeNav = () =>
  (document.getElementById("myLeftSidenav").style.width = "0");
const closeRightNav = () =>
  (document.getElementById("myRightSidenav").style.width = "0");
function openGenderCenterNav() {
  document.getElementById("myGenderCenterNav").style.width = "70vw";
  document.getElementById("myGenderCenterNav").style.height = "70vh";
  if (gender != "male" && gender != "female")
    document.getElementById("backupReferenceImg").innerHTML = backupGenderImg;
}
function closeGenderCenterNav() {
  document.getElementById("myGenderCenterNav").style.width = "0";
  document.getElementById("myGenderCenterNav").style.height = "0";
  if (gender != "male" && gender != "female") backupReferenceImg.innerHTML = "";
}
function returnUpdatedValues() {
  if (gender == "male") returnGender("colorChangeIdMale");
  else if (gender == "female") returnGender("colorChangeIdFemale");
  if (bodytype == "ecto") {
    returnBody("colorChangeIdEcto");
    bodyType("ecto");
  } else if (bodytype == "meso") {
    returnBody("colorChangeIdMeso");
    bodyType("meso");
  } else if (bodytype == "endo") {
    returnBody("colorChangeIdEndo");
    bodyType("endo");
  }
  if (goal == "bulking") returnGoal("colorChangeIdBulk");
  else if (goal == "cutting") returnGoal("colorChangeIdCut");
  else if (goal == "surplus") returnGoal("colorChangeIdSurp");
  else if (goal == "muscle") returnGoal("colorChangeIdMuscle");
}
const pageSwitcher = (numpage) => {
  if (differentPage == numpage) alert(alreadyInPage);
  else {
    if (numpage == 1) {
    } else if (numpage == 2) {
    } else if (numpage == 3) {
    } else if (numpage == 4) {
    } else if (numpage == 5) {
    } else if (numpage == 6) {
    } else if (numpage == 7) {
    } else if (numpage == 8) {
    } else if (numpage == 9) {
    } else if (numpage == 10) {
    } else if (numpage == 11) {
    } else if (numpage == 12) {
    }
  }
};
const nextPageInterpreter = () => pageSwitcher(differentPage - 1);
const prevPageInterpreter = () => pageSwitcher(differentPage + 1);
//disclaimer button callable function
const disclaimer = () => alert(firstAlert);
//functions that define the color change when the cursor is on or out of a button
const hoverColorChangeFunc = (hoveredId) =>
  (document.getElementById(hoveredId).style.backgroundColor = "#2ECC71");

function hoverOutColorChangeFunc(g, gg) {
  var g = document.getElementById(gg);
  g.style.backgroundColor = "teal";
  if (emotion == "yes") colorChangeIdEmoYes.style.backgroundColor = "#7395AE";
  else if (emotion == "no")
    colorChangeIdEmoNo.style.backgroundColor = "#7395AE";
  if (gender == "male") colorChangeIdMale.style.backgroundColor = "#7395AE";
  else if (gender == "female")
    colorChangeIdFemale.style.backgroundColor = "#7395AE";
  if (unit == "metric" && metricVerify >= 2)
    colorChangeIdMetric.style.backgroundColor = "#7395AE";
  else if (unit == "imperial")
    colorChangeIdImperial.style.backgroundColor = "#7395AE";
  if (goal == "bulking") colorChangeIdBulk.style.backgroundColor = "#7395AE";
  else if (goal == "cutting")
    colorChangeIdCut.style.backgroundColor = "#7395AE";
  else if (goal == "surplus")
    colorChangeIdSurp.style.backgroundColor = "#7395AE";
  else if (goal == "muscle")
    colorChangeIdMuscle.style.backgroundColor = "#7395AE";
  if (bodytype == "ecto") colorChangeIdEcto.style.backgroundColor = "#7395AE";
  else if (bodytype == "meso")
    colorChangeIdMeso.style.backgroundColor = "#7395AE";
  else if (bodytype == "endo")
    colorChangeIdEndo.style.backgroundColor = "#7395AE";
  if (currentBody == 1) colorChangeIdBody1.style.backgroundColor = "#7395AE";
  else if (currentBody == 2)
    colorChangeIdBody2.style.backgroundColor = "#7395AE";
  else if (currentBody == 3)
    colorChangeIdBody3.style.backgroundColor = "#7395AE";
  else if (currentBody == 4)
    colorChangeIdBody4.style.backgroundColor = "#7395AE";
  else if (currentBody == 5)
    colorChangeIdBody5.style.backgroundColor = "#7395AE";
  else if (currentBody == 6)
    colorChangeIdBody6.style.backgroundColor = "#7395AE";
  else if (currentBody == 7)
    colorChangeIdBody7.style.backgroundColor = "#7395AE";
  else if (currentBody == 8)
    colorChangeIdBody8.style.backgroundColor = "#7395AE";
  else if (currentBody == 9)
    colorChangeIdBody9.style.backgroundColor = "#7395AE";
  if (goalBody == 1) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal1.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal1.style.backgroundColor = "teal";
  } else if (goalBody == 2) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal2.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal2.style.backgroundColor = "teal";
  } else if (goalBody == 3) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal3.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal3.style.backgroundColor = "teal";
  } else if (goalBody == 4) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal4.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal4.style.backgroundColor = "teal";
  } else if (goalBody == 5) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal5.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal5.style.backgroundColor = "teal";
  } else if (goalBody == 6) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal6.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal6.style.backgroundColor = "teal";
  } else if (goalBody == 7) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal7.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal7.style.backgroundColor = "teal";
  } else if (goalBody == 8) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal8.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal8.style.backgroundColor = "teal";
  } else if (goalBody == 9) {
    if (
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
      colorChangeIdGoal9.style.backgroundColor = "#7395AE";
    else colorChangeIdGoal9.style.backgroundColor = "teal";
  }
  if (exercise == 1) colorChangeIdNoneXercise.style.backgroundColor = "#7395AE";
  else if (exercise == 2)
    colorChangeIdLowXercise.style.backgroundColor = "#7395AE";
  else if (exercise == 3)
    colorChangeIdMidXercise.style.backgroundColor = "#7395AE";
  else if (exercise == 4)
    colorChangeIdHighXercise.style.backgroundColor = "#7395AE";
  if (healthy == 1) colorChangeIdNoneHealthy.style.backgroundColor = "#7395AE";
  else if (healthy == 2)
    colorChangeIdLowHealthy.style.backgroundColor = "#7395AE";
  else if (healthy == 3)
    colorChangeIdMidHealthy.style.backgroundColor = "#7395AE";
  else if (healthy == 4)
    colorChangeIdHighHealthy.style.backgroundColor = "#7395AE";
  if (cheat == 1) colorChangeIdNoneCheat.style.backgroundColor = "#7395AE";
  else if (cheat == 2) colorChangeIdLowCheat.style.backgroundColor = "#7395AE";
  else if (cheat == 3) colorChangeIdMidCheat.style.backgroundColor = "#7395AE";
  else if (cheat == 4) colorChangeIdHighCheat.style.backgroundColor = "#7395AE";
  if (meals == 1) colorChangeId2Meals.style.backgroundColor = "#7395AE";
  else if (meals == 2) colorChangeId3Meals.style.backgroundColor = "#7395AE";
  else if (meals == 3) colorChangeId4Meals.style.backgroundColor = "#7395AE";
  else if (meals == 4) colorChangeId5Meals.style.backgroundColor = "#7395AE";
}
function changeColor2(clickedId, idleId) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId).style.backgroundColor = "teal";
}
function changeColor4(clickedId, idleId1, idleId2, idleId3) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId1).style.backgroundColor = "teal";
  document.getElementById(idleId2).style.backgroundColor = "teal";
  document.getElementById(idleId3).style.backgroundColor = "teal";
}
