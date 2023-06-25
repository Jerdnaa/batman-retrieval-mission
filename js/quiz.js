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
      this.currentQuestionIndex = null;
      this.question = document.getElementById("question")
      this.choices = document.querySelector("#answers");
      this.answer = null;
      this.quizScreen = document.querySelector(".quiz")
      this.selectedAnswer = null;
      this.correctAnswerCount = 0;
      this.firstBoss = document.getElementById("first-boss");
      this.roomOne = document.querySelector(".room-one")
      this.gameOver = document.getElementById("game-over");
  }

  
  updateChoices(){
      this.quizScreen.style.display = "flex";
      const random = Math.floor(Math.random() * this.questions.length);
      this.currentQuestionIndex = random;
      const chosenQuestion = this.questions[random];
      const theQuestion = chosenQuestion.question;
      const answerArr = chosenQuestion.choices;
      const p = this.question
      p.innerHTML = theQuestion;
      this.choices.innerHTML = "";
      answerArr.forEach((choice) => {
          const oneAnswer = document.createElement("button");
          oneAnswer.innerHTML = choice;
          this.choices.appendChild(oneAnswer);
          oneAnswer.addEventListener("click", () => {
              this.selectedAnswer = choice;
              this.checkAnswer();
          })
      }) 
  }

  checkAnswer() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      const correctAnswer = currentQuestion.rightAnswer;

      if (this.selectedAnswer === correctAnswer) {
          this.correctAnswerCount++;
          console.log(this.correctAnswerCount);
          if(this.correctAnswerCount === 1 || this.correctAnswerCount === 2) {
              this.selectedAnswer = null;
              this.updateChoices();
          } else if (this.correctAnswerCount === 3) {
              console.log("Going to the next level pog")
              this.firstBoss.style.display = "none";
              this.roomOne.style.display = "flex";
          } 
      } else if (this.selectedAnswer !== correctAnswer) {
        console.log("Game Over");
        this.firstBoss.style.display = "none";
        this.gameOver.style.display = "flex";
      }
  }

}
