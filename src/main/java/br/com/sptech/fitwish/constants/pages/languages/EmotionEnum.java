package br.com.sptech.fitwish.constants.pages.languages;

public enum EmotionEnum {
    ENGLISH("Emotion-based Overeating<h3>(When experiencing sadness, happiness, boredom, loneliness, stress, dissapointment, concern, etc.)</h3>",
            "Yes", "No", "Result"),
    PORTUGUESE(
            "Comer demais baseado em emoção<h3>(Quando experenciando tristeza, felicidade, tédio, solidão, stress, decepção, preocupação, etc.)</h3>",
            "Sim", "Não", "Resultado"),
    FRENCH("Suralimentation basée sur les émotions<h3>(Lorsque vous ressentez de la tristesse, du bonheur, de l'ennui, de la solitude, du stress, de la déception, de l'inquiétude, etc.)</h3>",
            "Oui", "Non", "Résultat"),
    SPANISH("Comer en exceso basado en las emociones<h3>(Al experimentar tristeza, felicidad, aburrimiento, soledad, estrés, desilusión, preocupación, etc.)</h3>",
            "Sí", "No", "Resultado");

    private String emotion;
    private String yes;
    private String no;
    private String result;

    private EmotionEnum(String emotion, String yes, String no, String result) {
        this.emotion = emotion;
        this.yes = yes;
        this.no = no;
        this.result = result;
    }

    public String getEmotion() {
        return emotion;
    }

    public void setEmotion(String emotion) {
        this.emotion = emotion;
    }

    public String getYes() {
        return yes;
    }

    public void setYes(String yes) {
        this.yes = yes;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

}
