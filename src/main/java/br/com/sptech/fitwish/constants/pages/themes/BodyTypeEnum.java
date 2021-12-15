package br.com.sptech.fitwish.constants.pages.themes;

public enum BodyTypeEnum {
    LIGHT("#D0FEFE"), DARK("#9DBCD4");

    private String elementsColor;

    private BodyTypeEnum(String elementsColor) {
        this.elementsColor = elementsColor;
    }

    public String getElementsColor() {
        return elementsColor;
    }

    public void setElementsColor(String elementsColor) {
        this.elementsColor = elementsColor;
    }

}
