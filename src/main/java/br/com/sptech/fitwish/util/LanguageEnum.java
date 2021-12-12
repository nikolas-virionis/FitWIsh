package br.com.sptech.fitwish.util;

public enum LanguageEnum {
    ENGLISH("English", "english", 1),
    PORTUGUESE("Português", "portugues", 2),
    FRENCH("Français", "francais", 3),
    SPANISH("Español", "espanol", 4);

    private LanguageEnum(String language, String objName, Integer code) {
        this.language = language;
        this.objName = objName;
        this.code = code;
    }

    private String language;
    private String objName;
    private Integer code;

    public String getObjName() {
        return objName;
    }

    public void setObjName(String objName) {
        this.objName = objName;
    }

    public Integer getCode() {
        return code;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public void setCode(Integer code) {
        this.code = code;
    }
}
