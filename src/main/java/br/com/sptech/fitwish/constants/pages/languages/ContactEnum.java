package br.com.sptech.fitwish.constants.pages.languages;

public enum ContactEnum {
    ENGLISH("37.5%", "How to Contact Us",
            "We would love to hear from our users about possible feedback about what you experienced while using our service. To contact Us directly access the link to our CTO's email below, and to have more information on us access his LinkedIn link below.",
            "Contact"),
    PORTUGUESE("30.5%", "Como entrar em contato conosco",
            "Gostaríamos muito de ouvir de nossos usuários sobre possíveis comentários sobre o que você experimentou ao usar nosso serviço. Para entrar em contato conosco diretamente, acesse o link para o e-mail de nosso CTO abaixo, e para obter mais informações sobre nós acesse seu link do LinkedIn abaixo.",
            "Contato"),
    FRENCH("34.5%", "Comment nous contacter",
            "Nous serions ravis d'entendre nos utilisateurs sur d'éventuels commentaires sur ce que vous avez vécu lors de l'utilisation de notre service. Pour nous contacter, accédez directement au lien vers l'e-mail de notre CTO ci-dessous, et pour avoir plus d'informations sur nous, accédez à son lien LinkedIn ci-dessous.",
            "Contact"),
    SPANISH("32.5%", "Como contactar con nosotros",
            "Nos encantaría saber de nuestros usuarios sobre posibles comentarios sobre lo que experimentó al utilizar nuestro servicio. Para contactarnos acceda directamente al enlace al correo electrónico de nuestro CTO a continuación, y para tener más información sobre nosotros acceda a su enlace de LinkedIn a continuación.",
            "Contacto");

    private String h2MarginLeft;
    private String h2;
    private String intro;
    private String heading;

    private ContactEnum(String h2MarginLeft, String h2, String intro, String heading) {
        this.h2MarginLeft = h2MarginLeft;
        this.h2 = h2;
        this.intro = intro;
        this.heading = heading;
    }

    public String getH2MarginLeft() {
        return h2MarginLeft;
    }

    public void setH2MarginLeft(String h2MarginLeft) {
        this.h2MarginLeft = h2MarginLeft;
    }

    public String getH2() {
        return h2;
    }

    public void setH2(String h2) {
        this.h2 = h2;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

}
