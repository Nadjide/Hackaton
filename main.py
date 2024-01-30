def enigme_technologique():
    print("Bienvenue dans notre magnifique énigme ! ")

    questions = [
        {"question": "Je suis essentiel dans la programmation moderne, souvent utilisé pour répéter des tâches. Qui suis-je ?", 
         "choix": ["Variable", "Boucle", "Fonction", "Classe"], "reponse": "Boucle"},
        {"question": "Je peux être séquentiel ou aléatoire, mais je suis toujours essentiel pour stocker vos souvenirs. Qui suis-je ?", 
         "choix": ["Disque dur", "Processeur", "Clavier", "Mémoire"], "reponse": "Mémoire"},
        {"question": "Je suis à la fois une ancienne invention et un concept moderne dans la cryptographie. Qui suis-je ?", 
         "choix": ["Code", "Clé", "Algorithme", "Virus"], "reponse": "Clé"},
        {"question": "Invisible, je voyage à travers le monde en un instant, transportant des données. Qui suis-je ?", 
         "choix": ["Câble", "Satellite", "Signal Wi-Fi", "Écran"], "reponse": "Signal Wi-Fi"},
        {"question": "Je suis le cerveau de votre machine, interprétant et exécutant vos commandes. Qui suis-je ?", 
         "choix": ["Disque dur", "Processeur", "Batterie", "Carte mère"], "reponse": "Processeur"}
    ]

    reponses_correctes = 0
    while reponses_correctes < len(questions):
        reponses_correctes = 0
        for q in questions:
            print(q["question"])
            for i, choix in enumerate(q["choix"], 1):
                print(f"{i}. {choix}")
            reponse_utilisateur = input("Votre réponse (1-4) : ")
            if q["choix"][int(reponse_utilisateur) - 1] == q["reponse"]:
                reponses_correctes += 1

        if reponses_correctes == len(questions):
            print("Bravo ! Votre quête ne s'arrête pas ici. "
                  "Cherchez la clé cachée dans la mémoire local web. "
                  "Votre recompense vous attend !")
        else:
            print("Certaines réponses sont incorrectes. Veuillez recommencer.")

enigme_technologique()
