package br.com.sptech.fitwish.constants.pages.themes;

public enum ResultEnum {
    LIGHT("white", "#1F3B4D", "green", "#E50278"),
    DARK("#12232A", "azure", "lightgreen", "pink");

    private String backgroundColor;
    private String colorDownload;
    private String download;
    private String email;

    private ResultEnum(String backgroundColor, String colorDownload, String download, String email) {
        this.backgroundColor = backgroundColor;
        this.colorDownload = colorDownload;
        this.download = download;
        this.email = email;
    }

    public String getBackgroundColor() {
        return backgroundColor;
    }

    public void setBackgroundColor(String backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    public String getColorDownload() {
        return colorDownload;
    }

    public void setColorDownload(String colorDownload) {
        this.colorDownload = colorDownload;
    }

    public String getDownload() {
        return download;
    }

    public void setDownload(String download) {
        this.download = download;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
