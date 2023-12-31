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
    const endCredits = document.querySelector(".endCredits");
    const theEndBtn = document.querySelector(".theEndBtn");
    const playAgain = document.querySelector(".play-again-button");
    const audio = document.getElementById("audio");
    const endAudio = document.getElementById("creditMusic");
    const explosionAudio = document.getElementById("endScreenAudio")
    audio.volume = 0.1;

    let game = new Game();
    let catcher = new Catcher();

    startBtn.addEventListener("click", () => {
        startGame();
        audio.play();
    })


    restartBtn.addEventListener("click", () => {
        location.reload();
    })

    playAgain.addEventListener("click", () => {
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
        catcher.playAudio();
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
         endCredits.style.display = "flex";
         explosionAudio.pause();
         endAudio.play();
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