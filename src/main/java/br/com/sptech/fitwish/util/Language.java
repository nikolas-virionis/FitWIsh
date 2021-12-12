package br.com.sptech.fitwish.util;

import br.com.sptech.fitwish.constants.LanguageEnum;

public class Language {
    private static LanguageEnum language;

    public static LanguageEnum getLanguage() {
        return language;
    }

    public static void setLanguage(String langName) {
        for (LanguageEnum lang : LanguageEnum.values()) {
            if (langName.equals(lang.getObjName())) {
                language = lang;
                break;
            }
        }
    }
}
