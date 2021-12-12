package br.com.sptech.fitwish.util;

public class FormattedLanguage {
    private String language;
    private String objName;
    private Integer code;

    public String getLanguage() {
        return language;
    }

    public String getObjName() {
        return objName;
    }

    public Integer getCode() {
        return code;
    }

    public FormattedLanguage(String language) {
        this.setLanguage(language);
    }

    public FormattedLanguage(LanguageEnum language) {
        this.setLanguage(language);
    }

    public void setLanguage(LanguageEnum language) {
        this.objName = language.getObjName();
        this.language = language.getLanguage();
        this.code = language.getCode();
    }

    public void setLanguage(String langName) {
        for (LanguageEnum lang : LanguageEnum.values()) {
            if (langName.equals(lang.getObjName())) {
                this.objName = langName;
                this.language = lang.getLanguage();
                this.code = lang.getCode();
            }
        }
    }

}
