package br.com.sptech.fitwish.constants.pages.languages;

public enum CheckEnum {
    ENGLISH("<i>Are you sure you want to seethe results?<h5> The data inputted cannot be changed after this</h5></i>",
            "No", "Yes"),
    PORTUGUESE(
            "<i>Tem certeza de que deseja ver os resultados? <h5> Os dados inseridos não podem ser alterados depois disso</h5></i>",
            "Não", "Sim"),
    FRENCH("<i>Êtes-vous sûr de vouloir voir les résultats ?<h5> Les données saisies ne peuvent pas être modifiées après cela</h5></i>",
            "Non", "Oui"),
    SPANISH("<i>¿Está seguro de que desea ver los resultados? <h5> Los datos ingresados no se pueden cambiar después de esto</h5></i>",
            "No", "Sí");

    private String check;
    private String no;
    private String yes;

    private CheckEnum(String check, String no, String yes) {
        this.check = check;
        this.no = no;
        this.yes = yes;
    }

    public String getCheck() {
        return check;
    }

    public void setCheck(String check) {
        this.check = check;
    }

    public String getNo() {
        return no;
    }

    public void setNo(String no) {
        this.no = no;
    }

    public String getYes() {
        return yes;
    }

    public void setYes(String yes) {
        this.yes = yes;
    }
}
