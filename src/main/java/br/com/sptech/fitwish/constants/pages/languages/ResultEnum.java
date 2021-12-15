package br.com.sptech.fitwish.constants.pages.languages;

public enum ResultEnum {
    ENGLISH("Fitness_Management_Program_Final_Result.html",
            "<strong>Want to have a email sent to you with the main result data? Click here!!</strong>",
            "<strong>Want to have a new document with all this last pages data? Click here!!</strong>",
            "For this emotional overeating issue you should try some ways to reduce it like: try to answer the question, am i really hungry or am i trying to eat my emotions?; aside from that you should try to calm yourself down with some breathing techniques, meditation or yoga to reduce stress; try to fight the boredom finding a new hobby, or something that \"awakens\" the  will do get up in the morning; don't discard the possibility of seeing a therapist to help you out in more areas than you can imagine; And to fight temptation, reward yourself periodically with a dose of a food you like, maybe every 15%-25% of the whole path completed, this way you will learn to moderate the amout you eat and thus make it easier for you to maintain your body in shape when you reach your goal.",
            "Processing", "Finishing Diagnosis", "Loading Result Possibilities", "Done!",
            "Well <big style=\"font-family: Kaushan Script, cursive;\">"),
    PORTUGUESE("Resultado_final_do_programa_de_controle_de_peso.html",
            "<strong>Deseja receber um e-mail com os principais dados do resultado? Clique aqui!!</strong>",
            "<strong>Quer ter um novo documento com todos esses dados da última página? Clique aqui!!</strong>",
            "Para esse problema de comer demais emocionalmente, você deve tentar algumas maneiras de reduzi-lo, como: tente responder à pergunta, estou realmente com fome ou estou tentando comer minhas emoções ?; além disso, você deve tentar se acalmar com algumas técnicas de respiração, meditação ou ioga para reduzir o estresse; tente lutar contra o tédio encontrando um novo hobby, ou algo que \"desperte\" a vontade o faça de se levantar de manhã; não descarte a possibilidade de ver um terapeuta para ajudá-lo em mais áreas do que você pode imaginar; E para lutar contra a tentação, recompense-se periodicamente com uma dose de um alimento que você goste, talvez a cada 15% -25% de todo o caminho percorrido, assim você aprenderá a moderar a quantidade que ingere e assim tornar mais fácil para você manter seu corpo em forma quando você atingir seu objetivo.",
            "Processando", "Terminando Diagnóstico", "Carregando Possibilidades de Resultado", "Pronto!",
            "Bem <big style=\"font-family: Kaushan Script, cursive;\">"),
    FRENCH("Résultat_final_du_programme_de_gestion_du_poids.html",
            "<strong>Vous souhaitez recevoir un e-mail contenant les principales données de résultat? Cliquez ici!!</strong>",
            "<strong>Vous voulez avoir un nouveau document avec toutes ces dernières pages de données? Cliquez ici!!</strong>",
            "Pour ce problème émotionnel de suralimentation, vous devriez essayer quelques moyens de le réduire comme: essayez de répondre à la question, ai-je vraiment faim ou est-ce que j'essaye de manger mes émotions ?; à part cela, vous devriez essayer de vous calmer avec des techniques de respiration, de méditation ou de yoga pour réduire le stress; essayez de lutter contre l'ennui en trouvant un nouveau passe-temps, ou quelque chose qui «réveille» la volonté de se lever le matin; ne pas écarter la possibilité de voir un thérapeute pour vous aider dans plus de domaines que vous ne pouvez l'imaginer; Et pour lutter contre la tentation, récompensez-vous périodiquement avec une dose d'un aliment que vous aimez, peut-être tous les 15% à 25% du chemin parcouru, de cette façon vous apprendrez à modérer la quantité que vous mangez et ainsi vous faciliterez le maintien. votre corps en forme lorsque vous atteignez votre objectif.",
            "Traitement", "Fin du diagnostic", "Chargement des possibilités de résultat", "Fait!",
            "Bien <big style=\"font-family: Kaushan Script, cursive;\">"),
    SPANISH("Resultado_final_del_programa_de_control_de_peso.html",
            "<strong>¿Quiere que le envíen un correo electrónico con los principales datos de resultados? ¡¡Haga clic aquí!!</strong>",
            "<strong>¿Quieres tener un nuevo documento con todos los datos de estas últimas páginas? ¡¡Haga clic aquí!!</strong>",
            "Para este problema emocional de comer en exceso, debe probar algunas formas de reducirlo, como: intente responder la pregunta, ¿tengo mucha hambre o estoy tratando de comerme mis emociones ?; aparte de eso, debes intentar calmarte con algunas técnicas de respiración, meditación o yoga para reducir el estrés; intenta luchar contra el aburrimiento encontrando un nuevo pasatiempo, o algo que  \"despierte\" la voluntad de levantarse por la mañana; no descarte la posibilidad de ver a un terapeuta para que le ayude en más áreas de las que pueda imaginar; Y para combatir la tentación, recompénsate periódicamente con una dosis de un alimento que te guste, tal vez cada 15% -25% de todo el camino recorrido, de esta forma aprenderás a moderar la cantidad que comes y así te será más fácil mantenerlo. tu cuerpo en forma cuando alcances tu objetivo.",
            "Procesando", "Diagnóstico final", "Cargando Posibilidades de Resultados", "¡Hecho!",
            "¡Bueno! <big style=\"font-family: Kaushan Script, cursive;\">");

    private String fileName;
    private String email;
    private String download;
    private String emotion;
    private String processing;
    private String diagnosis;
    private String result;
    private String done;
    private String resultBeginning;

    private ResultEnum(String fileName, String email, String download, String emotion, String processing,
            String diagnosis, String result, String done, String resultBeginning) {
        this.fileName = fileName;
        this.email = email;
        this.download = download;
        this.emotion = emotion;
        this.processing = processing;
        this.diagnosis = diagnosis;
        this.result = result;
        this.done = done;
        this.resultBeginning = resultBeginning;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDownload() {
        return download;
    }

    public void setDownload(String download) {
        this.download = download;
    }

    public String getEmotion() {
        return emotion;
    }

    public void setEmotion(String emotion) {
        this.emotion = emotion;
    }

    public String getProcessing() {
        return processing;
    }

    public void setProcessing(String processing) {
        this.processing = processing;
    }

    public String getDiagnosis() {
        return diagnosis;
    }

    public void setDiagnosis(String diagnosis) {
        this.diagnosis = diagnosis;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getDone() {
        return done;
    }

    public void setDone(String done) {
        this.done = done;
    }

    public String getResultBeginning() {
        return resultBeginning;
    }

    public void setResultBeginning(String resultBeginning) {
        this.resultBeginning = resultBeginning;
    }

}
