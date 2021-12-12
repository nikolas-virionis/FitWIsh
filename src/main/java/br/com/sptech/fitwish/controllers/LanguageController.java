package br.com.sptech.fitwish.controllers;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sptech.fitwish.util.FormattedLanguage;
import br.com.sptech.fitwish.util.Language;
// import br.com.sptech.fitwish.util.Response;

@RestController
@RequestMapping("/language")
public class LanguageController {

    @PostMapping(value = "/set", consumes = "application/json")
    public String setLanguage(@RequestBody Map<String, Object> language) {
        Language.setLanguage(language.get("objName").toString());
        return "ok";

    }

    @GetMapping("/get")
    public String getLanguage() {
        return new FormattedLanguage(Language.getLanguage()).getObjName();
    }
}
