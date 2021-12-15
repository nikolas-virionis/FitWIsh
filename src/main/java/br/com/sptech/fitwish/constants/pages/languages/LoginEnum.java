package br.com.sptech.fitwish.constants.pages.languages;

public enum LoginEnum {
    ENGLISH("Name Example: Nick", "Age Example: 24", "Example: name.lastname@email.com", "Name:", "Age:", "Email:"),
    PORTUGUESE("Exemplo de Nome: Nick", "Exemplo de idade: 24", "Exemplo: nome.sobrenome@email.com", "Nome:", "Idade:",
            "Email:"),
    FRENCH("Exemple de nom: Nick", "Exemple d'âge: 24", "Exemple: name.lastname@email.com", "Nom:", "Âge:", "Email:"),
    SPANISH("Ejemplo de nombre: Nick", "Ejemplo de edad: 24", "Ejemplo: name.lastname@email.com", "Nombre:", "Edad:",
            "Correo electrónico:");

    private String name;
    private String age;
    private String email;
    private String inputName;
    private String inputAge;
    private String inputEmail;

    private LoginEnum(String name, String age, String email, String inputName, String inputAge, String inputEmail) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.inputName = inputName;
        this.inputAge = inputAge;
        this.inputEmail = inputEmail;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getInputName() {
        return inputName;
    }

    public void setInputName(String inputName) {
        this.inputName = inputName;
    }

    public String getInputAge() {
        return inputAge;
    }

    public void setInputAge(String inputAge) {
        this.inputAge = inputAge;
    }

    public String getInputEmail() {
        return inputEmail;
    }

    public void setInputEmail(String inputEmail) {
        this.inputEmail = inputEmail;
    }

}
