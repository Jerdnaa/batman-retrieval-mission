window.addEventListener("load", () => {
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    let game = new Game();
    let quiz = new Quiz();

    startBtn.addEventListener("click", () => {
        startGame();
    })

    restartBtn.addEventListener("click", () => {
        location.reload();
    })

    function startGame() {
        // game = new Game();
        game.start();
    }

    document.addEventListener("keydown", (event) => {
        const key = event.key;
        console.log(key)

        if (key === "ArrowLeft") {
            game.player.directionX = -4;
        } else if (key === "ArrowRight") {
            game.player.directionX = 4;
        }
    })
    document.addEventListener("keyup", (event) => {
        const key = event.key;

        if (key === "ArrowLeft" || key === "ArrowRight") {
            game.player.directionX = 0;
        }
    });

})