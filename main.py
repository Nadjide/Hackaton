import tkinter as tk
from tkinter import messagebox

def enigme_technologique():
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

    def evaluate_answer(q_idx, user_choice):
        nonlocal reponses_correctes
        if questions[q_idx]["choix"][user_choice] == questions[q_idx]["reponse"]:
            reponses_correctes += 1
        if q_idx == len(questions) - 1:
            if reponses_correctes == len(questions):
                messagebox.showinfo("Résultat", "Bravo ! Votre quête ne s'arrête pas ici. "
                                                "Cherchez la clé cachée dans la mémoire local web. "
                                                "Votre recompense vous attend !")
            else:
                messagebox.showerror("Résultat", "Certaines réponses sont incorrectes. Veuillez recommencer.")
            reponses_correctes = 0
            show_question(0)
        else:
            show_question(q_idx + 1)

    def show_question(q_idx):
        question_label.config(text=questions[q_idx]["question"])
        for idx, choix in enumerate(questions[q_idx]["choix"]):
            answer_buttons[idx].config(text=choix, command=lambda idx=idx: evaluate_answer(q_idx, idx))

    reponses_correctes = 0
    root = tk.Tk()
    root.title("Enigme Technologique")
    root.geometry("720x480")
    root.configure(bg='#333945')

    question_label = tk.Label(root, text="", font=("Arial", 18, "bold"), wraplength=700, bg='#333945', fg='white')
    question_label.pack(pady=(50, 20))
    
    def on_enter(e):
        e.widget['background'] = '#687A8F'

    def on_leave(e):
        e.widget['background'] = '#4E5D6C'

    answer_buttons = []
    for _ in range(4):
        btn = tk.Button(root, text="", font=("Arial", 14), width=20, padx=10, pady=5, 
                        bg='#4E5D6C', fg='white', borderwidth=0, highlightthickness=0, 
                        activebackground='#687A8F', activeforeground='white', cursor='hand2')
        btn.pack(pady=10)
        btn.bind("<Enter>", on_enter)
        btn.bind("<Leave>", on_leave)
        answer_buttons.append(btn)

    show_question(0)

    root.mainloop()

enigme_technologique()
