const prompt = require('prompt-sync')();

function playGame() {
   for (let p = 0; p < players.length; p++) {
      console.log(`Player ${p+1} turn`);
      for (let i = 0; i < players[i].hand.length; i++)
         console.log(`Card: Suite ${players[i].hand[i].suite}, Number: ${players[i].hand[i].value}`);
      let inp = prompt(('h/s: '));
      if (inp == 'h') {
         let card = deck.pop();
         players[i].hand.push(card);
         players[i].points += card.value;
      }
   }
}

playGame();