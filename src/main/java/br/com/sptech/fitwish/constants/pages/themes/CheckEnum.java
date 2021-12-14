package br.com.sptech.fitwish.constants.pages.themes;

public enum CheckEnum {
    LIGHT("#1F3B4D"), DARK("azure");

    private String colorPallete;

    public String getColorPallete() {
        return colorPallete;
    }

    private CheckEnum(String colorPallete) {
        this.colorPallete = colorPallete;
    }

}
