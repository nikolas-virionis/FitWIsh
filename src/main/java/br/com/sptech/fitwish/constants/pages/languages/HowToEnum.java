package br.com.sptech.fitwish.constants.pages.languages;

public enum HowToEnum {
    ENGLISH("What you will do", "What we will do",
            "First, if you haven't already, check the theme and language that you prefer in the three bar button on the left. Then answer the test... candidly, yes, I know, its harsh but this is crucial for this to be as helpful as it can to you, then in some time from now you can repeat this test and compare the numbers.",
            "Well, we are going to evaluate you in a comprehensive way and tell you the distance to your goals in your path to them, then you can come back to this very site and redo the test, having up to two previous test results stored locally and safely in your computer.",
            "How it Works"),
    PORTUGUESE("O que você vai fazer", "O que nós vamos fazer",
            "Primeiro, se ainda não o fez, verifique o tema e o idioma de sua preferência no botão de três barras à esquerda. Então responda o teste ... francamente, sim, eu sei, é duro, mas isso é crucial para ser o mais útil possível para você, então em algum tempo você pode repetir este teste e comparar os números.",
            "Bem, vamos avaliá-lo de uma forma compreensiva e dizer-lhe a distância de seus objetivos em seu caminho até eles, então você pode voltar a este mesmo site e refazer o teste, tendo até dois resultados de testes anteriores armazenados localmente e com segurança em seu computador.",
            "Como Funciona"),
    FRENCH("Que vas tu faire", "Qu'allons nous faire",
            "Tout d'abord, si vous ne l'avez pas déjà fait, vérifiez le thème et la langue que vous préférez dans le bouton à trois barres sur la gauche. Alors répondez au test ... franchement, oui, je sais, c'est dur, mais c'est crucial pour que cela vous soit aussi utile que possible, puis dans un certain temps, vous pourrez répéter ce test et comparer les chiffres.",
            "Eh bien, nous allons vous évaluer de manière complète et vous indiquer la distance qui vous sépare de vos objectifs sur votre chemin vers eux, puis vous pouvez revenir sur ce site même et refaire le test, en ayant jusqu'à deux résultats de test précédents stockés localement et en toute sécurité dans votre ordinateur.",
            "Comment ça fonctionne"),
    SPANISH("Qué harás", "Lo que haremos",
            "Primero, si aún no lo ha hecho, marque el tema y el idioma que prefiera en el botón de tres barras a la izquierda. Luego responda la prueba ... con franqueza, sí, lo sé, es duro, pero esto es crucial para que esto sea lo más útil posible para usted, luego, en algún momento a partir de ahora, puede repetir esta prueba y comparar los números.",
            "Bueno, lo evaluaremos de manera integral y le diremos la distancia a sus objetivos en su camino hacia ellos, luego puede regresar a este mismo sitio y rehacer la prueba, teniendo hasta dos resultados de pruebas anteriores almacenados localmente y de forma segura en su computadora.",
            "Cómo funciona");

    private String h2;
    private String h3;
    private String txt1;
    private String txt2;
    private String heading;

    private HowToEnum(String h2, String h3, String txt1, String txt2, String heading) {
        this.h2 = h2;
        this.h3 = h3;
        this.txt1 = txt1;
        this.txt2 = txt2;
        this.heading = heading;
    }

    public String getH2() {
        return h2;
    }

    public void setH2(String h2) {
        this.h2 = h2;
    }

    public String getH3() {
        return h3;
    }

    public void setH3(String h3) {
        this.h3 = h3;
    }

    public String getTxt1() {
        return txt1;
    }

    public void setTxt1(String txt1) {
        this.txt1 = txt1;
    }

    public String getTxt2() {
        return txt2;
    }

    public void setTxt2(String txt2) {
        this.txt2 = txt2;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

}
