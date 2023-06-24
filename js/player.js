class Player {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.height = 200;
        this.bottom = 95;
        this.left = 20;
        this.directionX = 0;
        this.element = document.createElement("img");
        this.quiz = new Quiz();
        this.hasQuestionDisplayed = false;

        this.element.src = "../images/spongebob.png";
        this.element.style.position = "absolute";
        this.element.style.height = `${this.height}px`;
        this.element.style.bottom = `${this.bottom}px`;
        this.element.style.left = `${this.left}px`;

        this.gameScreen.appendChild(this.element);
    }

    movement(){
        this.left += this.directionX;
        this.updatePosition();

        if (this.left < 10) {
            this.left = 10;
        }

        if (this.left > 1500 && !this.hasQuestionDisplayed) {
            this.quiz.updateChoices();
            this.hasQuestionDisplayed = true;
        }
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`
    }
}