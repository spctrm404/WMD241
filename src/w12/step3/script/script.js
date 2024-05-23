let elemBody = document.body;
elemBody.style.backgroundColor = '#0000ff';
// let aCard = document.querySelector('.card');
// aCard.addEventListener('click', function () {
//   console.log('클릭!');
//   aCard.classList.toggle('card--state-clicked');
//   console.log(aCard.classList);
// });
let cards = document.querySelectorAll('.card');
console.log(cards);
for (let i = 0; i < cards.length; i++) {
  let eachCard = cards[i];
  eachCard.addEventListener('click', function () {
    eachCard.classList.toggle('card--state-clicked');
  });
}
