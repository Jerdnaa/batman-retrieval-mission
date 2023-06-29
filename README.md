# Batman Retrieval Mission

---

## [Play the game](https://jerdnaa.github.io/batman-retrieval-mission/)

## Description

---

Batman Retrieval Mission is the first instalment of a series in which the main objective is to save Batman. The game has a few levels which can be passed by playing and winning a minigame. It ends either beating all the minigames, which brings the player to the end credits screen, or by failing in one of the minigames, which brings the player to a game over screen in which they can restart the game.

## Main Functionalities

---

- In level 1 the player moves left or right until he triggers a minigame.
- First minigame is a quiz in which the player clicks on the answer he thinks is the correct one.
- To go to the next level, 3 correct answers are needed.
- If the player answers incorrectly it game over.
- Level 2 is a 3 sceen level.
- In the first scene the player only needs to click the button.
- In the second scene the player needs to find the switch to advance before the timer runs out.
- If the timer runs out its game over.
- In the third scene the player the player needs to click on the button to go to the last level.
- The last level has 1 minigame which is triggered by pressing the "CATCH THE CATS" button.
- Here cats spawn and fall from random locations in set intervals.
- The player moves by pressing left or right.
- The player needs to catch 10 cats to go to the next scene.
- If a cat falls into lava its game over.
- The last scene is a cliffhanger scene for the next game.
- Click on the End of Part 1 to go to the credit scene.
- In the credit scene it is possible to restart the game.

## Backlog

---

- Improve the UI and add some animations
- Add some music

## Technologies Used

---

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes

## States

---

- Start Screen
- Different game screenes for different levels
- Game over screen
- End credit screen

## Data Structure

---

### script.js

---

- startGame();

### game.js

---

- class Game;
- start();
- startTimer();
- stopTimer();
- gameLoop();
- update();

### player.js

---

- class Player;
- movement();
- updatePosition();

### quiz.js

---

- class Quiz;
- updateChoices();
- checkAnswer();
- getRandomQuestionIndex();

### catcher.js

---

- class Catcher;
- startCatchGame();
- moveBasket();
- catRain();
- didCollide();
- endGame();
- getRandomPosition();

## Links

- [Deployment](https://jerdnaa.github.io/batman-retrieval-mission/)
- [GitHub Repository](https://github.com/Jerdnaa/batman-retrieval-mission)
- [Presentation](https://docs.google.com/presentation/d/133utz6JxBCICXhh-twWf7M8XFz38jXAxxR-6TIzQqAc/edit?usp=sharing)
