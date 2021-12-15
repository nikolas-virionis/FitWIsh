package br.com.sptech.fitwish.constants.pages.themes;

public enum GlobalEnum {
    LIGHT("background-color:white; color:#1F3B4D;", "black", "#42B395", "#000", "aboutContactBtn", "contactAboutBtn"),
    DARK("background-color:#12232A; color:#1F3B4D;", "aliceblue", "#000", "#fff", "contactAboutBtn", "aboutContactBtn");

    private String bodyCssText;
    private String structColor;
    private String navBackgroundColor;
    private String navfooterColor;
    private String buttonClassRemove;
    private String buttonClassAdd;

    private GlobalEnum(String bodyCssText, String structColor, String navBackgroundColor, String navfooterColor,
            String buttonClassRemove, String buttonClassAdd) {
        this.bodyCssText = bodyCssText;
        this.structColor = structColor;
        this.navBackgroundColor = navBackgroundColor;
        this.navfooterColor = navfooterColor;
        this.buttonClassRemove = buttonClassRemove;
        this.buttonClassAdd = buttonClassAdd;
    }

    public String getBodyCssText() {
        return bodyCssText;
    }

    public void setBodyCssText(String bodyCssText) {
        this.bodyCssText = bodyCssText;
    }

    public String getStructColor() {
        return structColor;
    }

    public void setStructColor(String structColor) {
        this.structColor = structColor;
    }

    public String getNavBackgroundColor() {
        return navBackgroundColor;
    }

    public void setNavBackgroundColor(String navBackgroundColor) {
        this.navBackgroundColor = navBackgroundColor;
    }

    public String getNavfooterColor() {
        return navfooterColor;
    }

    public void setNavfooterColor(String navfooterColor) {
        this.navfooterColor = navfooterColor;
    }

    public String getButtonClassRemove() {
        return buttonClassRemove;
    }

    public void setButtonClassRemove(String buttonClassRemove) {
        this.buttonClassRemove = buttonClassRemove;
    }

    public String getButtonClassAdd() {
        return buttonClassAdd;
    }

    public void setButtonClassAdd(String buttonClassAdd) {
        this.buttonClassAdd = buttonClassAdd;
    }

}
