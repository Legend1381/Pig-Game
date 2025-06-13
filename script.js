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


diceElement.classList.add("hidden");
const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = () => {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    palyer0Element.classList.toggle("player--active");
    palyer1Element.classList.toggle("player--active");
}

btnRoll.addEventListener("click", () => {
  const dice = Math.trunc(Math.random() * 6) + 1;

  diceElement.src = `images/dice-${dice}.png`;
  diceElement.classList.remove("hidden");

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener("click", () => {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
    
    if (totalScores[activePlayer] >= 10) {
        btnHold.classList.add("hidden");
        btnRoll.classList.add("hidden");
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--active");
    } else {
        switchPlayer();
    }
})

btnNew.addEventListener("click", () => {
    diceElement.classList.add("hidden");
    palyer0Element.classList.add("player--active");
    palyer0Element.classList.remove("player--winner");
    palyer1Element.classList.remove("player--active", "player--winner");
    btnHold.classList.remove("hidden");
    btnRoll.classList.remove("hidden");

    current0Element.textContent = 0;
    current1Element.textContent = 0;
    score0Element.textContent = 0;
    score1Element.textContent = 0;


    totalScores[0] = totalScores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
})