package br.com.sptech.fitwish.constants.pages.languages;

public enum BodyTypeEnum {
    ENGLISH("Body Type", "No idea", "Ectomorph", "Mesomorph", "Endomorph"),
    PORTUGUESE("Tipo Corporal", "Sem ideia", "Ectomorfo", "Mesomorfo", "Endomorfo"),
    FRENCH("Type de corps", "Aucune idée", "Ectomorphe", "Mesomorphe", "Endomorphe"),
    SPANISH("Tipo de cuerpo", "Ni idea", "Ectomorfo", "Mesomorfo", "Endomorfo");

    private String bodyType;
    private String noIdea;
    private String ecto;
    private String meso;
    private String endo;

    private BodyTypeEnum(String bodyType, String noIdea, String ecto, String meso, String endo) {
        this.bodyType = bodyType;
        this.noIdea = noIdea;
        this.ecto = ecto;
        this.meso = meso;
        this.endo = endo;
    }

    public String getBodyType() {
        return bodyType;
    }

    public void setBodyType(String bodyType) {
        this.bodyType = bodyType;
    }

    public String getNoIdea() {
        return noIdea;
    }

    public void setNoIdea(String noIdea) {
        this.noIdea = noIdea;
    }

    public String getEcto() {
        return ecto;
    }

    public void setEcto(String ecto) {
        this.ecto = ecto;
    }

    public String getMeso() {
        return meso;
    }

    public void setMeso(String meso) {
        this.meso = meso;
    }

    public String getEndo() {
        return endo;
    }

    public void setEndo(String endo) {
        this.endo = endo;
    }

}
