class Catcher {
    constructor() {
        this.finalBoss = document.querySelector(".finalBoss")
        this.gameOverScreen = document.querySelector(".game-over-screen")
        this.catchGameStart = document.querySelector(".catchStartScreen")
        this.catchGameScreen = document.querySelector(".catchGameScreen")
        this.endScreen = document.querySelector(".endScreen");
        this.lava = document.querySelector(".lava");
        this.cat = document.createElement("img")
        this.basket = document.createElement("img")
        this.leftBasket = 0
        this.cats = [];
        this.catsCought = 0;
        this.catRainIntervalId = null;
        

        this.basket.src = "./images/basket.png"
        this.basket.style.height = "90px";
        this.basket.style.position = "absolute"
        this.basket.style.bottom = "45px";
        this.basket.style.left = `${this.leftBasket}px`

        this.cat.src = "../images/cat.png"
        this.cat.style.height = "90px";
        
        
        
        this.catchGameScreen.appendChild(this.basket);
    }

    startCatchGame() {
        this.catchGameStart.style.display = "none"
        this.catchGameScreen.style.display = "block"
        this.moveBasket();
        this.catRain();
    }

    moveBasket() {
        const gameScreen = document.querySelector(".catchGameScreen");
  const gameScreenWidth = gameScreen.offsetWidth;
  const basketWidth = this.basket.offsetWidth;

  document.addEventListener("keydown", (event) => {
    const key = event.key;
    const basketPosition = parseInt(this.basket.style.left, 10);

    if (key === "ArrowLeft" && basketPosition > 0) {
      this.basket.style.left = basketPosition - 15 + "px";
    } else if (key === "ArrowRight" && basketPosition + basketWidth < gameScreenWidth) {
      this.basket.style.left = basketPosition + 15 + "px";
    }
  });
      }

    catRain() {
        this.catRainIntervalId = setInterval(() => {
            const cat = document.createElement("img");
            cat.src = "./images/cat.png";
            cat.style.height = "90px";
            cat.style.position = "absolute";
            cat.style.top = "-90px";
            cat.style.left = `${this.getRandomPosition()}px`;
      
            this.catchGameScreen.appendChild(cat);
            this.cats.push(cat);
      
            const moveIntervalId = setInterval(() => {
              const currentPosition = parseInt(cat.style.top, 10);
              const newPosition = currentPosition + 3; // Adjust the speed of falling cats here
      
              if (newPosition >= this.catchGameScreen.offsetHeight) {
                clearInterval(moveIntervalId);
                this.catchGameScreen.removeChild(cat);
                this.cats = this.cats.filter((c) => c !== cat);
              } else {
                cat.style.top = newPosition + "px";
                this.didCollide(cat)
              }
            }, 20); // Adjust the interval duration for smoother animation
      
            if (this.cats.length >= 10) {
              clearInterval(this.catRainIntervalId);
            }
          }, 1500); // Adjust the interval duration between cats
        }

        didCollide(cat) {  
            const catRect = cat.getBoundingClientRect();
            const basketRect = this.basket.getBoundingClientRect();
            const lavaRect = this.lava.getBoundingClientRect();

            if (
                (catRect.left < basketRect.right &&
                catRect.right > basketRect.left &&
                catRect.top < basketRect.bottom &&
                catRect.bottom > basketRect.top) || 
                (catRect.bottom >= lavaRect.top)
                ) {
                if (this.catchGameScreen.contains(cat)) {
                    this.catchGameScreen.removeChild(cat);
                    this.cats = this.cats.filter((c) => c !== cat);
                  }  
                    
                if (catRect.bottom >= lavaRect.top) {
                        this.finalBoss.style.display = "none";
                        this.gameOverScreen.style.display = "flex";
                    } else {
                        this.catsCought += 1;
                        console.log(this.catsCought);
                        if (this.catsCought === 10) {
                            this.endGame();
                        }
                    }    
                }
        }

        endGame() {
            this.finalBoss.style.display = "none";
            this.endScreen.style.display = "block";
            clearInterval(this.catRainIntervalId);
        }
      
        getRandomPosition() {
          const gameScreenWidth = this.catchGameScreen.offsetWidth;
          const basketWidth = this.basket.offsetWidth;
          const maxPosition = gameScreenWidth - basketWidth;
      
          return Math.floor(Math.random() * maxPosition);
        }
    }
