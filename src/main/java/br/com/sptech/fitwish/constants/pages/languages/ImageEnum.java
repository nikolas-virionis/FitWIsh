package br.com.sptech.fitwish.constants.pages.languages;

public enum ImageEnum {
    ENGLISH("&#9776; Show Image", "Reference Image:", "Which one of these you think represent you the most?",
            "Which one of these you think represent your goal the most?"),
    PORTUGUESE("&#9776; Exibir Imagem", "Imagem de Referência:",
            "Qual dessas imagens representa melhor seu estado atual?",
            "Qual dessas imagens representa melhor seu objetivo corporal?"),
    FRENCH("&#9776; Afficher l'image", "Image de référence:", "Lequel de ceux-ci vous représente le plus?",
            "Selon vous, lequel de ces éléments représente le plus votre objectif?"),
    SPANISH("&#9776; Mostrar imagen", "Imagen de referencia:", "¿Cuál de estos crees que te representa más?",
            "¿Cuál de estos crees que representa más tu objetivo?");

    private String imgBtn;
    private String referenceImg;
    private String body;
    private String goal;

    private ImageEnum(String imgBtn, String referenceImg, String body, String goal) {
        this.imgBtn = imgBtn;
        this.referenceImg = referenceImg;
        this.body = body;
        this.goal = goal;
    }

    public String getImgBtn() {
        return imgBtn;
    }

    public void setImgBtn(String imgBtn) {
        this.imgBtn = imgBtn;
    }

    public String getReferenceImg() {
        return referenceImg;
    }

    public void setReferenceImg(String referenceImg) {
        this.referenceImg = referenceImg;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

}
