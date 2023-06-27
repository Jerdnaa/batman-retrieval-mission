window.addEventListener("load", () => {
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const whitenessBtn = document.querySelector(".whitenessBtn");
    const roomOne = document.querySelector(".room-one");
    const roomTwo = document.querySelector(".room-two");
    const roomThree = document.querySelector(".room-three");
    const switchBtn = document.querySelector(".switch");
    const startCatchBtn = document.querySelector(".catchStartBtn");
    const toFinalBossBtn = document.querySelector(".toFinalBossBtn");
    const finalBoss = document.querySelector(".finalBoss");
    const endScreen = document.querySelector(".endScreen");
    const endCredits = document.querySelector(".endCredits")
    const theEndBtn = document.querySelector(".theEndBtn")
    let game = new Game();
    let catcher = new Catcher();

    startBtn.addEventListener("click", () => {
        startGame();
    })

    restartBtn.addEventListener("click", () => {
        location.reload();
    })

    whitenessBtn.addEventListener("click", () => {
        roomOne.style.display = "none"
        roomTwo.style.display = "flex"
        game.startTimer();
    })

    toFinalBossBtn.addEventListener("click", () => {
        roomThree.style.display = "none"
        finalBoss.style.display = "block"
    })

    switchBtn.addEventListener("click", () => {
        roomTwo.style.display = "none"
        roomThree.style.display = "flex"
        game.stopTimer();
    })

    startCatchBtn.addEventListener("click", () => {
        catcher.startCatchGame();
    })

     theEndBtn.addEventListener("click", () => {
         endScreen.style.display = "none";
         endCredits.style.display = "block";
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