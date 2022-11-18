"use strict";

const Player = (sign) => {
  this.sign = sign;

  const getSign = () => {
    return sign;
  };

  return { getSign };
};

const gameBoard = (() => {
  const board = Array(9);

  const setField = (index, sign) => {
    board[index] = sign;
  };

  const getField = (index) => {
    return board[index];
  };

  const reset = () => {
    board.forEach((element, i, boardArray) => {
      boardArray[i] = "";
    });
  };

  return { setField, getField, reset };
})();

const displayController = (() => {
  const fieldElements = document.querySelectorAll(".board-item");
  const messageElement = document.getElementById("message");
  const restartButton = document.getElementById("restart-button");

  fieldElements.forEach((field) => {
    field.addEventListener("click", handleClick);
  });

  restartButton.addEventListener("click", restartClick);

  const handleClick = (e) => {
    if (gameController.getIsOver() || e.target.textContent !== "") return;
    gameController.playRound(parseInt(e.target.dataset.index));
    updateGameboard();
  };

  const restartClick = () => {
    gameBoard.reset;
    gameController.reset;
    updateGameboard();
  };

  const updateGameboard = () => {
    fieldElements.forEach((element, i, fieldArray) => {
      fieldArray[i].textContent = gameBoard.getField[i];
    });
  };

  const setMessageElement = (message) => {
    messageElement.textContent = message;
  };

  const setResultsMessage = (winner) => {
    if (winner === "Draw") {
      setMessageElement("It's a draw!");
    } else {
      setMessageElement(`Player ${winner} wins the game!`);
    }
  };

  return { setMessageElement, setResultsMessage };
})();

const gameController = (() => {})();
