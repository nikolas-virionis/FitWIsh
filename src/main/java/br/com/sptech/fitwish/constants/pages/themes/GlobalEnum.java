package br.com.sptech.fitwish.constants.pages.themes;

public enum GlobalEnum {
    LIGHT("#1F3B4D"), DARK("azure");

    private String colorPallete;

    public String getColorPallete() {
        return colorPallete;
    }

    private GlobalEnum(String colorPallete) {
        this.colorPallete = colorPallete;
    }

}
