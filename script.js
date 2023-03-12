let getTriviabtn = document.getElementById('get-trivia-btn');
let randomTriviabtn = document.getElementById('random-trivia-btn');
let fact = document.querySelector('.fact');
const BASE_URL = `http://numbersapi.com/`;

let fetchTrivia = (num) => {
  fetch(`${BASE_URL}${num}`)
    .then((res) => res.text())
    .then((data) => {
      fact.style.display = 'block';
      fact.innerHTML = `
          <h2>${num}</h2>
          <p>${data}</p>
          `;
      document.querySelector('.container').append(fact);
    });
};

let getTrivia = () => {
  let num = document.getElementById('num').value;
  if (num) {
    if (num >= 0 && num <= 400) {
      fetchTrivia(num);
    } else {
      fact.style.display = 'block';
      fact.innerHTML = `
            <p class="msg">
                Please enter a number between 0 to 400!
            </p>
            `;
    }
  } else {
    fact.style.display = 'block';
    fact.innerHTML = `
      <p class="msg" > the input field cannot be empty! </p>
      `;
  }
};

let getRandomTrivia = () => {
  let num = Math.floor(Math.random() * 301);
  fetchTrivia(num);
};

getTriviabtn.addEventListener('click', getTrivia);
randomTriviabtn.addEventListener('click', getRandomTrivia);
window.addEventListener('load', getRandomTrivia);
