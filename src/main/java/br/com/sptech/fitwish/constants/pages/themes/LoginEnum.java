package br.com.sptech.fitwish.constants.pages.themes;

public enum LoginEnum {
    LIGHT("#1F3B4D"), DARK("#DDD");

    private String colorSwitch;

    private LoginEnum(String colorSwitch) {
        this.colorSwitch = colorSwitch;
    }

    public String getColorSwitch() {
        return colorSwitch;
    }

    public void setColorSwitch(String colorSwitch) {
        this.colorSwitch = colorSwitch;
    }

}
