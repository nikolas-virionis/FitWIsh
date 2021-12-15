package br.com.sptech.fitwish.constants.pages.languages;

public enum IntroEnum {
    ENGLISH("2.2vw", "43%", "auto", "Our Plan:", "23%",
            "You might be struggling with your current health state, disliking the situation but not entirely committed to change it",
            "But now you started a path in which you take ownership of yourself, and I am going to help you out",
            "Sooner than you'd expect, you'll be used to looking just as good as you want, and healthier too!"),
    PORTUGUESE("2.1vw", "41.5%", "auto", "Nosso Plano:", "19.1%",
            "Você pode estar tendo dificuldades e decepções com seu atual estado de saúde, não gostando da situação mas não completamente comprometido a mudar",
            "Mas agora você começou um caminho no qual você tomou responsabilidade sobre você mesmo, e eu vou te ajudar",
            "Antes do que você pode esperar, você já estará aconstumado a ter a aparência que você quiser, e também mais saudável!"),
    FRENCH("2.2vw", "41.75%", "auto", "Notre Plan:", "21.05%",
            "Vous avez peut-être des difficultés avec votre état de santé actuel, vous n'aimez pas la situation, mais vous n'êtes pas entièrement déterminé à la changer",
            "Mais maintenant tu as commencé un chemin dans lequel tu prends possession de toi-même, et je vais t'aider",
            "Plus tôt que prévu, vous serez habitué à avoir l'air aussi beau que vous le souhaitez, et en meilleure santé aussi!"),
    SPANISH("2.2vw", "41%", "2.55%", "Nuestro Plan:", "17.9%",
            "Es posible que esté luchando con su estado de salud actual, no le guste la situación, pero no esté completamente comprometido a cambiarla.Es posible que esté luchando con su estado de salud actual, no le guste la situación, pero no esté completamente comprometido a cambiarla.",
            "Pero ahora iniciaste un camino en el que te apropiaste de ti mismo, y yo te voy a ayudar",
            "¡Antes de lo que esperabas, estarás acostumbrado a verte tan bien como quieras y más saludable también!");

    private String planTxtFontSize;
    private String planMarginLeft;
    private String planMarginRight;
    private String plan;
    private String checkImgMarginLeft;
    private String badHabits;
    private String planMsg;
    private String goodHabits;

    private IntroEnum(String planTxtFontSize, String planMarginLeft, String planMarginRight, String plan,
            String checkImgMarginLeft, String badHabits, String planMsg, String goodHabits) {
        this.planTxtFontSize = planTxtFontSize;
        this.planMarginLeft = planMarginLeft;
        this.planMarginRight = planMarginRight;
        this.plan = plan;
        this.checkImgMarginLeft = checkImgMarginLeft;
        this.badHabits = badHabits;
        this.planMsg = planMsg;
        this.goodHabits = goodHabits;
    }

    public String getPlanTxtFontSize() {
        return planTxtFontSize;
    }

    public void setPlanTxtFontSize(String planTxtFontSize) {
        this.planTxtFontSize = planTxtFontSize;
    }

    public String getPlanMarginLeft() {
        return planMarginLeft;
    }

    public void setPlanMarginLeft(String planMarginLeft) {
        this.planMarginLeft = planMarginLeft;
    }

    public String getPlanMarginRight() {
        return planMarginRight;
    }

    public void setPlanMarginRight(String planMarginRight) {
        this.planMarginRight = planMarginRight;
    }

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public String getCheckImgMarginLeft() {
        return checkImgMarginLeft;
    }

    public void setCheckImgMarginLeft(String checkImgMarginLeft) {
        this.checkImgMarginLeft = checkImgMarginLeft;
    }

    public String getBadHabits() {
        return badHabits;
    }

    public void setBadHabits(String badHabits) {
        this.badHabits = badHabits;
    }

    public String getPlanMsg() {
        return planMsg;
    }

    public void setPlanMsg(String planMsg) {
        this.planMsg = planMsg;
    }

    public String getGoodHabits() {
        return goodHabits;
    }

    public void setGoodHabits(String goodHabits) {
        this.goodHabits = goodHabits;
    }

}
