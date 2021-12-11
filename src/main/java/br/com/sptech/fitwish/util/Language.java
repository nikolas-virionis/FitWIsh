package br.com.sptech.fitwish.util;

public class Language {
    private static LanguageEnum language;

    public static LanguageEnum getLanguage() {
        return language;
    }

    public static void setLanguage(String langName) {
        for (LanguageEnum lang : LanguageEnum.values()) {
            if (langName == lang.getObjName()) {
                language = lang;
                break;
            }
        }
    }
}
