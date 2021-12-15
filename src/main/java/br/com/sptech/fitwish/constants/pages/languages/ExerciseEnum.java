package br.com.sptech.fitwish.constants.pages.languages;

public enum ExerciseEnum {
    ENGLISH("High intensity exercise frequency:", "None", "1-2 times a week", "3-4 times a week",
            "5 or more times a week"),
    PORTUGUESE("Frequência de exercício de alta intensidade:", "Nenhuma", "1-2 vezes por semana",
            "3-4 vezes por semana",
            "5 ou mais vezes por semana"),
    FRENCH("Fréquence d'exercice à haute intensité:", "Aucun", "1-2 fois par semaine", "3-4 fois par semaine",
            "5 fois ou plus par semaine"),
    SPANISH("Frecuencia de ejercicio de alta intensidad:", "Ninguno", "1-2 veces por semana", "3-4 veces por semana",
            "5 o mas veces por semana");

    private String exercise;
    private String nonde;
    private String low;
    private String mid;
    private String high;

    private ExerciseEnum(String exercise, String nonde, String low, String mid, String high) {
        this.exercise = exercise;
        this.nonde = nonde;
        this.low = low;
        this.mid = mid;
        this.high = high;
    }

    public String getExercise() {
        return exercise;
    }

    public void setExercise(String exercise) {
        this.exercise = exercise;
    }

    public String getNonde() {
        return nonde;
    }

    public void setNonde(String nonde) {
        this.nonde = nonde;
    }

    public String getLow() {
        return low;
    }

    public void setLow(String low) {
        this.low = low;
    }

    public String getMid() {
        return mid;
    }

    public void setMid(String mid) {
        this.mid = mid;
    }

    public String getHigh() {
        return high;
    }

    public void setHigh(String high) {
        this.high = high;
    }

}
