package br.com.sptech.fitwish.constants.pages.themes;

public enum IntroEnum {
    LIGHT("blue", "red", "darkgreen"), DARK("cyan", "white", "gold");

    private String plan;
    private String bad;
    private String good;

    private IntroEnum(String plan, String bad, String good) {
        this.plan = plan;
        this.bad = bad;
        this.good = good;
    }

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public String getBad() {
        return bad;
    }

    public void setBad(String bad) {
        this.bad = bad;
    }

    public String getGood() {
        return good;
    }

    public void setGood(String good) {
        this.good = good;
    }

}
