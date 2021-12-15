package br.com.sptech.fitwish.constants.pages.languages;

public enum GoalEnum {
    ENGLISH("Goal", "Bulking", "Cutting", "Get rid of fat surplus", "Gaining Weight and Muscle"),
    PORTUGUESE("Objetivo", "Ganhar Massa", "Secar", "Emagrecer", "Ganhar peso"),
    FRENCH("Objectif", "Gagner du muscle", "Obtenez déchiqueté", "Perdre du poids", "Gagner de poids"),
    SPANISH("Objetivo", "Ganar músculo", "Hacerse Rasgado", "Perder peso", "Ganar peso");

    private String goal;
    private String bulking;
    private String cutting;
    private String surplus;
    private String muscle;

    private GoalEnum(String goal, String bulking, String cutting, String surplus, String muscle) {
        this.goal = goal;
        this.bulking = bulking;
        this.cutting = cutting;
        this.surplus = surplus;
        this.muscle = muscle;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getBulking() {
        return bulking;
    }

    public void setBulking(String bulking) {
        this.bulking = bulking;
    }

    public String getCutting() {
        return cutting;
    }

    public void setCutting(String cutting) {
        this.cutting = cutting;
    }

    public String getSurplus() {
        return surplus;
    }

    public void setSurplus(String surplus) {
        this.surplus = surplus;
    }

    public String getMuscle() {
        return muscle;
    }

    public void setMuscle(String muscle) {
        this.muscle = muscle;
    }

}
