window.addEventListener("load", () => {
    const startBtn = document.getElementById("start-btn");
    let game = new Game();

    startBtn.addEventListener("click", () => {
        startGame();
    })

    function startGame() {
        // game = new Game();
        game.start();
    }

    document.addEventListener("keydown", (event) => {
        const key = event.key;
        console.log(key)

        if (key === "ArrowLeft") {
            game.player.directionX = -1;
        } else if (key === "ArrowRight") {
            game.player.directionX = 1;
        }
    })
    document.addEventListener("keyup", (event) => {
        const key = event.key;

        if (key === "ArrowLeft" || key === "ArrowRight") {
            game.player.directionX = 0;
        }
    });
})