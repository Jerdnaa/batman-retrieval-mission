class Game {
    constructor() {
        this.startScreen = document.getElementById("start-screen");
        this.firstBoss = document.getElementById("first-boss");
        this.player = new Player(this.firstBoss);
        this.quiz = new Quiz();
        this.isGameOver = false;
        this.timer = document.querySelector(".timer");
        this.timeRemaining = 10;
        this.gameOver = document.getElementById("game-over");
        this.roomTwo = document.querySelector(".room-two")
        this.timeIntervalId = null;
    }

    start(){
        this.startScreen.style.display = "none";
        this.firstBoss.style.display = "block";
        this.gameLoop();
    }

    startTimer() {
        if (!this.timerIntervalId) {
            this.timerIntervalId = setInterval(() => {
              this.timeRemaining--;
              this.timer.textContent = this.timeRemaining;
      
              if (this.timeRemaining === 0) {
                this.roomTwo.style.display = "none";
                this.gameOver.style.display = "flex";
                clearInterval(this.timerIntervalId);
                this.timerIntervalId = null;
                this.quiz.audio.pause();
                this.quiz.loseAudio.play();
              }
            }, 1000);
          }
    }

    stopTimer() {
        clearInterval(this.timerIntervalId);
        this.timerIntervalId = null;
      }

    gameLoop() {
        if (this.isGameOver) {
            return;
        }
        this.update();
        requestAnimationFrame(() => this.gameLoop());
    }

    update(){
        this.player.movement();
    }
}