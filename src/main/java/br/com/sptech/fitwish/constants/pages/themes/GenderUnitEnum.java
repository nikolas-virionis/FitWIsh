package br.com.sptech.fitwish.constants.pages.themes;

public enum GenderUnitEnum {
    LIGHT("#D0FEFE"), DARK("#9DBCD4");

    private String elementsColor;

    private GenderUnitEnum(String elementsColor) {
        this.elementsColor = elementsColor;
    }

    public String getElementsColor() {
        return elementsColor;
    }

    public void setElementsColor(String elementsColor) {
        this.elementsColor = elementsColor;
    }

}
