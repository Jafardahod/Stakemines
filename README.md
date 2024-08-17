# Stake Diamond Game Prototype

This repository contains a prototype of a stake diamond game developed using HTML, CSS, and JavaScript. The game is designed to simulate a simple betting game where players can add amounts, click on tiles, and potentially win based on random outcomes.

## Table of Contents

- [Game Overview](#game-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Play](#how-to-play)
- [Game Logic](#game-logic)
- [Contributing](#contributing)
- [License](#license)

## Game Overview

The stake diamond game is a web-based game where players can add a monetary amount, then click on tiles in an attempt to win additional money. The game ends when a player either clicks on a losing tile or successfully clicks through all the tiles.

## Features

- **Add Amount**: Players can add an amount of money before starting the game.
- **Tile Clicking**: Each tile can be clicked to either win or lose based on a random outcome.
- **Game Over**: Displays a "GAME OVER!" message and a restart button when the game ends.
- **Responsive Design**: The game is designed to be responsive and works across different screen sizes.

## Technologies Used

- **HTML5**: Structure of the game.
- **CSS3**: Styling the game and making it responsive.
- **JavaScript (ES6+)**: Game logic and interactivity.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Jafardahod/stake-diamond-game.git
   ```
2. Navigate to the project directory:
    ```bash
   cd stake-diamond-game
   ```
4. Open the `index.html` file in your web browser to start the game.

5. **How to Play**
   - **Add Amount**: Enter an amount in the input field and click "Add Amount" to start playing.
   - **Click Tiles**: Click on the tiles. Each click may result in a win or a game over.
   - **Game Over**: If you click on a losing tile, the game will display a "GAME OVER!" message. You can restart the game by clicking the "Restart" button.

6. **Game Logic**
   - A random number between 1 and 12 is generated at the start of the game.
   - The player clicks on one of the 12 tiles.
   - If the player clicks on the tile corresponding to the random number, the game ends in a loss.
   - If the player avoids the losing tile, they can win money based on the number of tiles clicked.

7. **Contributing**
   Contributions are welcome! If you have ideas for improvements or additional features, feel free to fork the repository, make changes, and submit a pull request.

8. **License**
   This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
