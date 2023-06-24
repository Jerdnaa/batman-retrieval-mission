class Quiz {
    constructor(){
        this.questions = [{
            question: "What is the chemical symbol for gold?",
            choices: ["Au", "Ag", "Fe", "Hg"],
            rightAnswer: "Au"
          },
          {
            question: "Which planet is known as the 'Red Planet'?",
            choices: ["Venus", "Mars", "Jupiter", "Saturn"],
            rightAnswer: "Mars"
          },
          {
            question: "Which country is home to the kangaroo?",
            choices: ["Australia", "Argentina", "South Africa", "Brazil"],
            rightAnswer: "Australia"
          },
          {
            question: "What is the largest organ in the human body?",
            choices: ["Heart", "Brain", "Liver", "Skin"],
            rightAnswer: "Skin"
          },
          {
            question: "Who painted the Mona Lisa?",
            choices: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
            rightAnswer: "Leonardo da Vinci"
          },
          {
            question: "What is the tallest mountain in the world?",
            choices: ["Mount Kilimanjaro", "Mount Everest", "Mount McKinley", "Mount Fuji"],
            rightAnswer: "Mount Everest"
          },
          {
            question: "What is the capital city of Spain?",
            choices: ["Barcelona", "Madrid", "Seville", "Valencia"],
            rightAnswer: "Madrid"
          },
          {
            question: "What is the chemical symbol for water?",
            choices: ["Wa", "Wo", "Wt", "H2O"],
            rightAnswer: "H2O"
          },
          {
            question: "Which famous scientist developed the theory of relativity?",
            choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            rightAnswer: "Albert Einstein"
          },
          {
            question: "What is the largest ocean on Earth?",
            choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            rightAnswer: "Pacific Ocean"
          }];
        this.question = document.getElementById("question")
        this.choices = document.getElementById("answers");
        this.answer = null;

        const random = Math.floor(Math.random() * this.questions.length);
        this.currentQuestion = this.questions[random];
        this.question.innerHTML = this.currentQuestion.question;
        this.updateChoices();
    }

    updateChoices(){
        this.choices.innerHTML = "";
        this.currentQuestion.choices.forEach((choice) => {
            const choiceElement = document.createElement("p");
            choiceElement.innerHTML = choice;
            choiceElement.addEventListener("click", () => {
                this.answer = choice;
            })
            this.choicesElement.appendChild(choiceElement);
        })
    }
}