package br.com.sptech.fitwish.constants.pages.themes;

public enum HealthyEnum {
    LIGHT("#1F3B4D"), DARK("azure");

    private String colorPallete;

    public String getColorPallete() {
        return colorPallete;
    }

    private HealthyEnum(String colorPallete) {
        this.colorPallete = colorPallete;
    }

}
