package br.com.sptech.fitwish.constants.pages.languages;

public enum GlobalEnum {
    ENGLISH("FitWish Home Page", "Attempt's Menu", "How it Works", "About", "Contact", "2.355vw", "Language:",
            "Already in page", "Pages:", "Introduction", "Login", "Gender/Unit", "Goal", "Weight/Height", "Body Type",
            "Body Fat Evaluation", "Exercise Evaluation", "Healthy Meals", "Cheat Meals", "Meals/Day",
            "Emotion-based Overeating", "Next", "Previous", "Light Theme", "Dark Theme (default)", "DISCLAIMER",
            "All Rights Reserved",
            "DISCLAIMER: This is not a medical nor nutritionist advice and not only does not exclude a medical consultation, but also, me as this code creator, encourage and support YOU to get to see your doctor for anything YOU think YOU should improve in YOUR health life. Peace!"),
    PORTUGUESE("Página inicial do FitWish", "Menu de Tentativas", "Como Funciona", "Sobre", "Contato", "2.105vw",
            "Idioma:",
            "Já nessa página", "Páginas:", "Introdução", "Login", "Gênero/Unidade", "Objetivo", "Peso/Altura",
            "Tipo Corporal", "Avaliação da Gordura Corporal", "Avaliação de Exercícios", "Refeições Saudáveis",
            "Refeições não Saudáveis", "Refeições/Dia", "Comer demais por conta de emoções", "Próximo", "Anterior",
            "Tema Claro", "Tema Escuro (padrão)", "AVISO LEGAL", "Todos direitos reservados",
            "AVISO LEGAL: Este não é um conselho médico ou nutricionista e não só não exclui uma consulta médica, como também, eu, como criador deste código, encorajo e apoio VOCÊ a procurar seu médico para qualquer coisa que você acha que deveria melhorar em sua vida saudável."),
    FRENCH("Page d'accueil FitWish", "Menu des tentatives", "Comment ça fonctionne", "À propos", "Contact", "2.2vw",
            "Langue:", "Déjà en page", "Pages:", "Introduction", "Login", "Genre / Unité", "Objectif", "Poids/Hauteur",
            "Type de corps", "Évaluation de la graisse corporelle", "Évaluation de l'exercice", "Repas sains",
            "Repas de triche", "Repas / jour", "Suralimentation basée sur les émotions", "Suivant", "Précédent",
            "Thème léger", "Thème sombre (par défaut)", "AVIS DE NON-RESPONSABILITÉ", "Tous les droits sont réservés",
            "AVIS DE NON-RESPONSABILITÉ: Ce n'est pas un conseil médical ou nutritionniste et non seulement n'exclut pas une consultation médicale, mais aussi, moi en tant que créateur de code, je vous encourage et vous soutenez à voir votre médecin pour tout ce que VOUS pensez que VOUS devriez améliorer dans VOTRE vie de santé . Paix!"),
    SPANISH("Página de inicio de FitWish", "Menú de intentos", "Cómo funciona", "Sobre", "Contacto", "2.025vw",
            "Idioma:", "Ya en la pagina", "Paginas:", "Introducción", "Login", "Género / Unidad", "Objetivo",
            "Peso/Altura", "Tipo de cuerpo", "Evaluación de la grasa corporal", "Evaluación del ejercicio",
            "Comidas saludables", "Comidas no saludables", "Comidas / Día", "Comer en exceso basado en las emociones",
            "Próximo", "Previo", "Tema Claro", "Tema oscuro (predeterminado)", "DESCARGO DE RESPONSABILIDAD",
            "Todos los derechos reservados",
            "DESCARGO DE RESPONSABILIDAD: Este no es un consejo médico ni nutricionista y no solo no excluye una consulta médica, sino que también, como creador de este código, lo animo y lo apoyo para que vea a su médico por cualquier cosa que usted crea que debe mejorar en su vida de salud.");

    private String homePage;
    private String buttonFirst;
    private String howItWorks;
    private String about;
    private String contact;
    private String rightNavFontSize;
    private String languageInput;
    private String alreadyInPage;
    private String page;
    private String introPage;
    private String loginPage;
    private String genderUnitPage;
    private String goalPage;
    private String dataPage;
    private String bodyTypePage;
    private String imagePage;
    private String exercisePage;
    private String healthyPage;
    private String cheatPage;
    private String mealsPage;
    private String emotionPage;
    private String buttonNext;
    private String buttonPrev;
    private String lightTheme;
    private String darkTheme;
    private String DISCLAIMER;
    private String allRights;
    private String firstAlert;

    private GlobalEnum(String homePage, String buttonFirst, String howItWorks, String about, String contact,
            String rightNavFontSize, String languageInput, String alreadyInPage, String page, String introPage,
            String loginPage, String genderUnitPage, String goalPage, String dataPage, String bodyTypePage,
            String imagePage, String exercisePage, String healthyPage, String cheatPage, String mealsPage,
            String emotionPage, String buttonNext, String buttonPrev, String lightTheme, String darkTheme,
            String dISCLAIMER, String allRights, String firstAlert) {
        this.homePage = homePage;
        this.buttonFirst = buttonFirst;
        this.howItWorks = howItWorks;
        this.about = about;
        this.contact = contact;
        this.rightNavFontSize = rightNavFontSize;
        this.languageInput = languageInput;
        this.alreadyInPage = alreadyInPage;
        this.page = page;
        this.introPage = introPage;
        this.loginPage = loginPage;
        this.genderUnitPage = genderUnitPage;
        this.goalPage = goalPage;
        this.dataPage = dataPage;
        this.bodyTypePage = bodyTypePage;
        this.imagePage = imagePage;
        this.exercisePage = exercisePage;
        this.healthyPage = healthyPage;
        this.cheatPage = cheatPage;
        this.mealsPage = mealsPage;
        this.emotionPage = emotionPage;
        this.buttonNext = buttonNext;
        this.buttonPrev = buttonPrev;
        this.lightTheme = lightTheme;
        this.darkTheme = darkTheme;
        DISCLAIMER = dISCLAIMER;
        this.allRights = allRights;
        this.firstAlert = firstAlert;
    }

    public String getHomePage() {
        return homePage;
    }

    public void setHomePage(String homePage) {
        this.homePage = homePage;
    }

    public String getButtonFirst() {
        return buttonFirst;
    }

    public void setButtonFirst(String buttonFirst) {
        this.buttonFirst = buttonFirst;
    }

    public String getHowItWorks() {
        return howItWorks;
    }

    public void setHowItWorks(String howItWorks) {
        this.howItWorks = howItWorks;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getRightNavFontSize() {
        return rightNavFontSize;
    }

    public void setRightNavFontSize(String rightNavFontSize) {
        this.rightNavFontSize = rightNavFontSize;
    }

    public String getLanguageInput() {
        return languageInput;
    }

    public void setLanguageInput(String languageInput) {
        this.languageInput = languageInput;
    }

    public String getAlreadyInPage() {
        return alreadyInPage;
    }

    public void setAlreadyInPage(String alreadyInPage) {
        this.alreadyInPage = alreadyInPage;
    }

    public String getPage() {
        return page;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public String getIntroPage() {
        return introPage;
    }

    public void setIntroPage(String introPage) {
        this.introPage = introPage;
    }

    public String getLoginPage() {
        return loginPage;
    }

    public void setLoginPage(String loginPage) {
        this.loginPage = loginPage;
    }

    public String getGenderUnitPage() {
        return genderUnitPage;
    }

    public void setGenderUnitPage(String genderUnitPage) {
        this.genderUnitPage = genderUnitPage;
    }

    public String getGoalPage() {
        return goalPage;
    }

    public void setGoalPage(String goalPage) {
        this.goalPage = goalPage;
    }

    public String getDataPage() {
        return dataPage;
    }

    public void setDataPage(String dataPage) {
        this.dataPage = dataPage;
    }

    public String getBodyTypePage() {
        return bodyTypePage;
    }

    public void setBodyTypePage(String bodyTypePage) {
        this.bodyTypePage = bodyTypePage;
    }

    public String getImagePage() {
        return imagePage;
    }

    public void setImagePage(String imagePage) {
        this.imagePage = imagePage;
    }

    public String getExercisePage() {
        return exercisePage;
    }

    public void setExercisePage(String exercisePage) {
        this.exercisePage = exercisePage;
    }

    public String getHealthyPage() {
        return healthyPage;
    }

    public void setHealthyPage(String healthyPage) {
        this.healthyPage = healthyPage;
    }

    public String getCheatPage() {
        return cheatPage;
    }

    public void setCheatPage(String cheatPage) {
        this.cheatPage = cheatPage;
    }

    public String getMealsPage() {
        return mealsPage;
    }

    public void setMealsPage(String mealsPage) {
        this.mealsPage = mealsPage;
    }

    public String getEmotionPage() {
        return emotionPage;
    }

    public void setEmotionPage(String emotionPage) {
        this.emotionPage = emotionPage;
    }

    public String getButtonNext() {
        return buttonNext;
    }

    public void setButtonNext(String buttonNext) {
        this.buttonNext = buttonNext;
    }

    public String getButtonPrev() {
        return buttonPrev;
    }

    public void setButtonPrev(String buttonPrev) {
        this.buttonPrev = buttonPrev;
    }

    public String getLightTheme() {
        return lightTheme;
    }

    public void setLightTheme(String lightTheme) {
        this.lightTheme = lightTheme;
    }

    public String getDarkTheme() {
        return darkTheme;
    }

    public void setDarkTheme(String darkTheme) {
        this.darkTheme = darkTheme;
    }

    public String getDISCLAIMER() {
        return DISCLAIMER;
    }

    public void setDISCLAIMER(String dISCLAIMER) {
        DISCLAIMER = dISCLAIMER;
    }

    public String getAllRights() {
        return allRights;
    }

    public void setAllRights(String allRights) {
        this.allRights = allRights;
    }

    public String getFirstAlert() {
        return firstAlert;
    }

    public void setFirstAlert(String firstAlert) {
        this.firstAlert = firstAlert;
    }

}
