package br.com.sptech.fitwish.constants.pages.languages;

public enum DataEnum {
    ENGLISH("Example: 80.5", "Example: 1.85", "Example: 200.5", "Example: 70", "Weight", "Height",
            "Unit: kilograms (kg)", "Unit: meters (m)", "Unit: pounds (lbs)", "Unit: inches (in)"),
    PORTUGUESE("Exemplo: 80.5", "Exemplo: 1.85", "Exemplo: 200.5", "Exemplo: 70", "Peso", "Altura",
            "Unidade: kilogramas (kg)", "Unidade: metros (m)", "Unidade: libras (lbs)", "Unidade: polegadas (in)"),
    FRENCH("Exemple: 80.5", "Exemple: 1.85", "Exemple: 200.5", "Exemple: 70", "Poids", "Hauteur",
            "Unité: kilogrammes (kg)", "Unité: mètres (m)", "Unité: livres sterling (lbs)", "Unité: pouces (in)"),
    SPANISH("Ejemplo: 80.5", "Ejemplo: 1.85", "Ejemplo: 200.5", "Ejemplo: 70", "Peso", "Altura",
            "Unidad: kilogramos (kg)", "Unidad: metros (m)", "Unidad: libras (lbs)", "Unidad: pulgadas (in)");

    private String weightMetricPlaceholder;
    private String heightMetricPlaceholder;
    private String weightImperialPlaceholder;
    private String heightImperialPlaceholder;
    private String weight;
    private String height;
    private String weightMetric;
    private String heightMetric;
    private String weightImperial;
    private String heightImperial;

    private DataEnum(String weightMetricPlaceholder, String heightMetricPlaceholder, String weightImperialPlaceholder,
            String heightImperialPlaceholder, String weight, String height, String weightMetric, String heightMetric,
            String weightImperial, String heightImperial) {
        this.weightMetricPlaceholder = weightMetricPlaceholder;
        this.heightMetricPlaceholder = heightMetricPlaceholder;
        this.weightImperialPlaceholder = weightImperialPlaceholder;
        this.heightImperialPlaceholder = heightImperialPlaceholder;
        this.weight = weight;
        this.height = height;
        this.weightMetric = weightMetric;
        this.heightMetric = heightMetric;
        this.weightImperial = weightImperial;
        this.heightImperial = heightImperial;
    }

    public String getWeightMetricPlaceholder() {
        return weightMetricPlaceholder;
    }

    public void setWeightMetricPlaceholder(String weightMetricPlaceholder) {
        this.weightMetricPlaceholder = weightMetricPlaceholder;
    }

    public String getHeightMetricPlaceholder() {
        return heightMetricPlaceholder;
    }

    public void setHeightMetricPlaceholder(String heightMetricPlaceholder) {
        this.heightMetricPlaceholder = heightMetricPlaceholder;
    }

    public String getWeightImperialPlaceholder() {
        return weightImperialPlaceholder;
    }

    public void setWeightImperialPlaceholder(String weightImperialPlaceholder) {
        this.weightImperialPlaceholder = weightImperialPlaceholder;
    }

    public String getHeightImperialPlaceholder() {
        return heightImperialPlaceholder;
    }

    public void setHeightImperialPlaceholder(String heightImperialPlaceholder) {
        this.heightImperialPlaceholder = heightImperialPlaceholder;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeightMetric() {
        return weightMetric;
    }

    public void setWeightMetric(String weightMetric) {
        this.weightMetric = weightMetric;
    }

    public String getHeightMetric() {
        return heightMetric;
    }

    public void setHeightMetric(String heightMetric) {
        this.heightMetric = heightMetric;
    }

    public String getWeightImperial() {
        return weightImperial;
    }

    public void setWeightImperial(String weightImperial) {
        this.weightImperial = weightImperial;
    }

    public String getHeightImperial() {
        return heightImperial;
    }

    public void setHeightImperial(String heightImperial) {
        this.heightImperial = heightImperial;
    }

}
