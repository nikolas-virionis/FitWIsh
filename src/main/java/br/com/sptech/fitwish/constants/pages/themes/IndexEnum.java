package br.com.sptech.fitwish.constants.pages.themes;

public enum IndexEnum {
    LIGHT("#1F3B4D"), DARK("azure");

    private String colorSwitch;

    public String getColorSwitch() {
        return colorSwitch;
    }

    private IndexEnum(String colorSwitch) {
        this.colorSwitch = colorSwitch;
    }

}
