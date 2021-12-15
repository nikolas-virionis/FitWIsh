package br.com.sptech.fitwish.constants.pages.languages;

public enum CheatEnum {
    ENGLISH("Cheat meal frequency:", "None", "1-2 times a week", "3-4 times a week", "5 or more times a week"),
    PORTUGUESE("Frequência de dias com comidas não saudáveis:", "Nenhuma", "1-2 vezes por semana",
            "3-4 vezes por semana", "5 ou mais vezes por semana"),
    FRENCH("Fréquence des jours de repas non sains:", "Aucun", "1-2 fois par semaine", "3-4 fois par semaine",
            "5 fois ou plus par semaine"),
    SPANISH("Frecuencia de días de comidas no saludables:", "Ninguno", "1-2 veces por semana", "3-4 veces por semana",
            "5 o más veces por semana");

    private String cheat;
    private String none;
    private String low;
    private String mid;
    private String high;

    private CheatEnum(String cheat, String none, String low, String mid, String high) {
        this.cheat = cheat;
        this.none = none;
        this.low = low;
        this.mid = mid;
        this.high = high;
    }

    public String getCheat() {
        return cheat;
    }

    public void setCheat(String cheat) {
        this.cheat = cheat;
    }

    public String getNone() {
        return none;
    }

    public void setNone(String none) {
        this.none = none;
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
