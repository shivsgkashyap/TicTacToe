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
  const fieldElements = document.querySelectorAll();
})();
