const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answersArr = [
  "Nie wiem",
  "Tak",
  "Nie",
  "Nie chcesz wiedzieć",
  "Być może",
  "Ciężko powiedzieć...",
  "Może",
];

const randomNumber = () => {
  error.innerHTML = "";
  answer.innerHTML = `<span>Odpowiedź:</span> ${
    answersArr[Math.floor(Math.random() * (answersArr.length - 1))]
  }`;
};

const check = () => {
  ball.classList.remove("shake-animation");
  answer.innerHTML = "";
  if (input.value === "") {
    error.innerHTML = "Musisz zadać jakieś pytanie.";
  } else if (input.value.slice(-1) !== "?") {
    error.innerHTML = 'Pytanie musi być zakończone znakiem "?".';
  } else {
    randomNumber();
  }
};

const shakeBall = () => {
  ball.classList.add("shake-animation");
  setTimeout(check, 1000);
};

ball.addEventListener("click", shakeBall);
