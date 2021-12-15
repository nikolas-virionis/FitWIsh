package br.com.sptech.fitwish.constants.pages.languages;

public enum MealsEnum {
    ENGLISH("Meals a day:", "2 meals a day", "3 meals a day", "4 meals a day", "5 or 6 meals a day"),
    PORTUGUESE("Refeições por dia:", "2 refeições por dia", "3 refeições por dia", "4 refeições por dia",
            "5 ou 6 refeições por dia"),
    FRENCH("Repas par jour:", "2 repas par jour", "3 repas par jour", "4 repas par jour", "5 ou 6 repas par jour"),
    SPANISH("Comidas al dia:", "2 comidas al dia", "3 comidas al dia", "4 comidas al dia", "5 o 6 comidas al dia");

    private String meals;
    private String two;
    private String three;
    private String four;
    private String five;

    private MealsEnum(String meals, String two, String three, String four, String five) {
        this.meals = meals;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five = five;
    }

    public String getMeals() {
        return meals;
    }

    public void setMeals(String meals) {
        this.meals = meals;
    }

    public String getTwo() {
        return two;
    }

    public void setTwo(String two) {
        this.two = two;
    }

    public String getThree() {
        return three;
    }

    public void setThree(String three) {
        this.three = three;
    }

    public String getFour() {
        return four;
    }

    public void setFour(String four) {
        this.four = four;
    }

    public String getFive() {
        return five;
    }

    public void setFive(String five) {
        this.five = five;
    }

}
