const prompt = require('prompt-sync')();

let hand = [];
let player0 = { hand: [{ suite: 'p' }] };
let player1 = { hand: [{ suite: 'q' }] };
let turn = true;

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

function playGame() {
   if (turn) {
      //code for player 1
      for (let i = 0; i < player0.hand.length; i++)
         console.log(`Card: Suite ${player0.hand[i].suite}, Number: ${player0.hand[i].value}`);
      let inp = prompt(('h/s: '));
      if (inp == 'h') {
         let rand = getRandomInt(0, hand.length);
         player0.hand.push(hand[rand]);
         deck.splice(rand, 1);
      }
   } else {
      //code for player2
   }
   turn = !turn;
}

playGame();