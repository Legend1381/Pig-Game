"use strict";

const palyer0Element = document.querySelector(".player--0")
const palyer1Element = document.querySelector(".player--1");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

diceElement.classList.add("hidden");

btnRoll.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElement.src = `images/dice-${dice}.png`;
  diceElement.classList.remove("hidden");

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    palyer0Element.classList.toggle("player--active")
    palyer1Element.classList.toggle("player--active")
  }
});
