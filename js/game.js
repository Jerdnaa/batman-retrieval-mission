class Game {
    constructor() {
        this.startScreen = document.getElementById("start-screen");
        this.firstBoss = document.getElementById("first-boss");
        this.player = new Player(this.firstBoss);
        this.isGameOver = false;
    }

    start(){
        this.startScreen.style.display = "none";
        this.firstBoss.style.display = "flex";
    }
}