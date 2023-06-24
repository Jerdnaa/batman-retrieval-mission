window.addEventListener("load", () => {
    const startBtn = document.getElementById("start-btn");
    let game;

    startBtn.addEventListener("click", () => {
        startGame();
    })

    function startGame() {
        game = new Game();
        game.start();
    }



})