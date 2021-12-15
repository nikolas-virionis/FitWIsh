package br.com.sptech.fitwish.constants.pages.languages;

public enum GenderUnitEnum {
    ENGLISH("Gender", "Male", "Female", "Unit", "Metric", "Imperial"),
    PORTUGUESE("Gênero", "Masculino", "Feminino", "Unidade", "Métrico", "Imperial"),
    FRENCH("Genre", "Mâle", "Femelle", "Unité", "Métrique", "Impérial"),
    SPANISH("Género", "Masculino", "Femenino", "Unidad", "Métrico", "Imperial");

    private String gender;
    private String male;
    private String female;
    private String unit;
    private String metric;
    private String imperial;

    private GenderUnitEnum(String gender, String male, String female, String unit, String metric, String imperial) {
        this.gender = gender;
        this.male = male;
        this.female = female;
        this.unit = unit;
        this.metric = metric;
        this.imperial = imperial;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMale() {
        return male;
    }

    public void setMale(String male) {
        this.male = male;
    }

    public String getFemale() {
        return female;
    }

    public void setFemale(String female) {
        this.female = female;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getMetric() {
        return metric;
    }

    public void setMetric(String metric) {
        this.metric = metric;
    }

    public String getImperial() {
        return imperial;
    }

    public void setImperial(String imperial) {
        this.imperial = imperial;
    }

}
