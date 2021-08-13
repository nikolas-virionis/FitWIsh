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

export const iniciate = {
  sameName: {
    firstPageH13rd: `Detectamos que você já tentou nosso teste duas vezes, uma vez como ${contentArray[0]?.inputName} feito em ${contentArray[0]?.day}, e uma vez como ${contentArray[1]?.inputName} feito em ${contentArray[1]?.day}. Escolha o que você gostaria de fazer abaixo`,
    firstPageBtn1stTry: `Ver o teste feito por ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTry: `Ver o teste feito por ${contentArray[1]?.inputName}`,
    firstPageBtn1stTryOverwrite: `Sobrescrever o teste de ${contentArray[0]?.inputName}`,
    firstPageBtn2ndTryOverwrite: `Sobrescrever o teste de ${contentArray[1]?.inputName}`,
  },
  differentName: {
    firstPageH13rd: `Detectamos que você já tentou nosso teste duas vezes como ${contentArray[0]?.inputName}, uma vez feito em ${contentArray[0]?.day}, e uma vez feito em ${contentArray[1]?.day}. Escolha o que você gostaria de fazer abaixo`,
    firstPageBtn1stTry: `Ver o teste feito em ${contentArray[0]?.day}`,
    firstPageBtn2ndTry: `Ver o teste feito em ${contentArray[1]?.day}`,
    firstPageBtn1stTryOverwrite: `Sobrescrever o teste de ${contentArray[0]?.day}`,
    firstPageBtn2ndTryOverwrite: `Sobrescrever o teste de ${contentArray[1]?.day}`,
  },
};
