package br.com.sptech.fitwish.constants.pages.themes;

public enum GenderUnitEnum {
    LIGHT("#1F3B4D"), DARK("azure");

    private String colorPallete;

    public String getColorPallete() {
        return colorPallete;
    }

    private GenderUnitEnum(String colorPallete) {
        this.colorPallete = colorPallete;
    }

}
