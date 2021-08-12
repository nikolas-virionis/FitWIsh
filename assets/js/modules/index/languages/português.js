let { contentArray } = await import("../iniciateIndexLang.js");
export const translations = {
  HidePrevious: "Ocultar Teste Anterior",
  firstH1:
    "Estamos felizes por você ter nos dado a chance de ajudá-lo a alcançar o corpo dos seus sonhos, pressione iniciar para continuar",
  secondTryH1: `Detectamos que você já tentou nosso teste uma vez como ${contentArray[0]?.inputName}, feito em ${contentArray[0]?.day}. Escolha o que você gostaria de fazer abaixo`,
  start: "Iniciar",
  different: `Fazer um novo Teste`,
  overwrite: `Sobrescrever um Teste Anterior`,
  deleteAll: `Deletar Todos os Testes Feitos Anteriormente`,
  seeAll: `Ver Todos os Testes Anteriores`,
  seePrev: `Ver o Resultado do Teste Anterior`,
  hideAll: `Ocultar Testes Anteriores`,
};
