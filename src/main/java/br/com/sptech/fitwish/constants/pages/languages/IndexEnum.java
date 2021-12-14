package br.com.sptech.fitwish.constants.pages.languages;

public enum IndexEnum {
    ENGLISH("1em", "40%", "Who are we?",
            "Well, we are FitWish, a new startup with the goal to, as our Name says, fulfill your wish in the fitness sector, we don't charge for your first diagnosis because we believe that wellness shouldn't have more hurdles than it already does. Therefore by committing to this quick quiz you will have a sort of guidance towards achieving your goal in this fitness field.",
            "About",
            "We at FitWish acknowledge the effort put into getting your body the way you want it to be, and because of that, we appreciate your valuable decision to stand your ground and act upon what you should, your health."),
    PORTUGUESE("1em", "37%", "Quem somos nós?",
            "Pois bem, somos a FitWish, uma nova startup com o objetivo de, como nosso nome diz, cumprir o seu desejo no setor fitness Não cobramos pelo seu primeiro diagnóstico porque acreditamos que o bem-estar não deve ter mais obstáculos do que já tem. Portanto, ao se comprometer com este teste rápido, você terá uma espécie de orientação para atingir seu objetivo neste campo fitness.",
            "Sobre",
            "Nós da FitWish reconhecemos o esforço feito para deixar seu corpo do jeito que você deseja e, por isso, apreciamos sua valiosa decisão de defender sua posição e agir de acordo com o que você deve, sua saúde."),
    FRENCH("0.9em", "38.75%", "Qui sommes nous?",
            "Eh bien, nous sommes FitWish, une nouvelle startup avec pour objectif, comme notre nom l'indique, de réaliser votre souhait dans le secteur du fitness, nous ne facturons pas votre premier diagnostic car nous pensons que le bien-être ne devrait pas avoir plus d'obstacles qu'il ne le fait déjà. Est-ce que. Par conséquent, en vous engageant à ce quiz rapide, vous aurez une sorte de conseils pour atteindre votre objectif dans ce domaine du fitness.",
            "À propos",
            "Chez FitWish, nous reconnaissons l'effort déployé pour que votre corps soit tel que vous le souhaitez, et pour cette raison, nous apprécions votre précieuse décision de défendre votre position et d'agir en fonction de ce que vous devriez, votre santé."),
    SPANISH("1em", "33.5%", "Quienes somos nosotros?",
            "Bueno, somos FitWish, una nueva startup con el objetivo de, como dice nuestro Nombre, cumplir tu deseo en el sector del fitness, no cobramos por tu primer diagnóstico porque creemos que el bienestar no debería tener más obstáculos de los que ya tiene. hace. Por lo tanto, al comprometerse con este cuestionario rápido, tendrá una especie de guía para lograr su objetivo en este campo del fitness.",
            "Sobre",
            "En FitWish reconocemos el esfuerzo realizado para lograr que su cuerpo esté de la manera que desea que sea, y por eso, apreciamos su valiosa decisión de defender su posición y actuar de acuerdo con lo que debe, su salud.");

    private String txtLeftFontSize;
    private String h2MarginLeft;
    private String h2;
    private String txtLeft;
    private String heading;
    private String txtRight;

    private IndexEnum(String txtLeftFontSize, String h2MarginLeft, String h2, String txtLeft, String heading,
            String txtRight) {
        this.txtLeftFontSize = txtLeftFontSize;
        this.h2MarginLeft = h2MarginLeft;
        this.h2 = h2;
        this.txtLeft = txtLeft;
        this.heading = heading;
        this.txtRight = txtRight;
    }

    public String getTxtLeftFontSize() {
        return txtLeftFontSize;
    }

    public String getH2MarginLeft() {
        return h2MarginLeft;
    }

    public String getH2() {
        return h2;
    }

    public String getTxtLeft() {
        return txtLeft;
    }

    public String getHeading() {
        return heading;
    }

    public String getTxtRight() {
        return txtRight;
    }

}
