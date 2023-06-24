class Game {
    constructor() {
        this.startScreen = document.getElementById("start-screen");
        this.firstBoss = document.getElementById("first-boss");
        this.player = new Player(this.firstBoss);
        this.quiz = new Quiz();
        this.isGameOver = false;
    }

    start(){
        this.startScreen.style.display = "none";
        this.firstBoss.style.display = "flex";
        this.gameLoop();
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