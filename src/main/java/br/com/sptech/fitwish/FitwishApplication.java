package br.com.sptech.fitwish;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.sptech.fitwish.util.Language;

@SpringBootApplication
public class FitwishApplication {

    public static void main(String[] args) {
        SpringApplication.run(FitwishApplication.class, args);
        Language.setLanguage("english");
    }

}
