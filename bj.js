const prompt = require('prompt-sync')();

const faceValues = {
   '2': 2,
   '3': 3,
   '4': 4,
   '5': 5,
   '6': 6,
   '7': 7,
   '8': 8,
   '9': 9,
   'T': 10,
   'J': 10,
   'Q': 10,
   'K': 10,
   'A': 11,
}

const createDeck = (numDecks = 1, shuffle = false) => {
   let deck = [];
   for (let i = 0; i < numDecks; i++) {
      for (let j of 'SCDH'.split('')) {
         for (let k of '23456789TJQKA'.split('')) {
            deck.push({
               suit: j,
               value: faceValues[k]
            });
         }
      }
   }
   if (shuffle) {
      for (let i = 0; i < deck.length; i++) {
         randomI = Math.floor(Math.random() * deck.length);
         [deck[i], deck[randomI]] = [deck[randomI], deck[i]];
      }
   }
   return deck;
}

const createPlayers = numPlayers => {
   let players = [];
   for (let i = 0; i < numPlayers; i++) {
      players.push({
         points: 0,
         hand: [],
         ace: false
      });
   }
   return players;
}

// let deck = createDeck();
[
   { suit: 'S', value: 2 },
   { suit: 'S', value: 3 },
   { suit: 'S', value: 4 },
   { suit: 'S', value: 5 },
   { suit: 'S', value: 6 },
   { suit: 'S', value: 7 },
   { suit: 'S', value: 8 },
   { suit: 'S', value: 9 },
   { suit: 'S', value: 10 },
   { suit: 'S', value: 10 },
   { suit: 'S', value: 10 },
   { suit: 'S', value: 10 },
   { suit: 'S', value: 11 },
   { suit: 'C', value: 2 },
   { suit: 'C', value: 3 },
   { suit: 'C', value: 4 },
   { suit: 'C', value: 5 },
   { suit: 'C', value: 6 },
   { suit: 'C', value: 7 },
   { suit: 'C', value: 8 },
   { suit: 'C', value: 9 },
   { suit: 'C', value: 10 },
   { suit: 'C', value: 10 },
   { suit: 'C', value: 10 },
   { suit: 'C', value: 10 },
   { suit: 'C', value: 11 },
   { suit: 'D', value: 2 },
   { suit: 'D', value: 3 },
   { suit: 'D', value: 4 },
   { suit: 'D', value: 5 },
   { suit: 'D', value: 6 },
   { suit: 'D', value: 7 },
   { suit: 'D', value: 8 },
   { suit: 'D', value: 9 },
   { suit: 'D', value: 10 },
   { suit: 'D', value: 10 },
   { suit: 'D', value: 10 },
   { suit: 'D', value: 10 },
   { suit: 'D', value: 11 },
   { suit: 'H', value: 2 },
   { suit: 'H', value: 3 },
   { suit: 'H', value: 4 },
   { suit: 'H', value: 5 },
   { suit: 'H', value: 6 },
   { suit: 'H', value: 7 },
   { suit: 'H', value: 8 },
   { suit: 'H', value: 9 },
   { suit: 'H', value: 10 }
]
let players = createPlayers(2);

const checkAces = () => {
   for (let i = 0; i < players.length; i++) {
      for (let j = 0; j < players[i].hand.length; j++) {
         if (players[i].hand[j].value == 11) {
            players[i].ace = true;
         }
      }
   }
}

const dealHand = () => {
   for (let i = 0; i < 2; i++) {
      for (let j = 0; j < players.length; j++) {
         let card = deck.pop();
         players[j].hand.push(card);
         players[j].points += card.value;
         checkAces();
      }
   }
   for (let i = 0; i < players.length; i++) {
      checkForWin(i);
   }
}

dealHand();

const hit = playerID => {
   let card = deck.pop();
   players[playerID].hand.push(card);
   players[playerID].points += card.value;
   if (checkForWin(playerID)) {
      console.log(`Player ${playerID + 1} won.`);
   }
}

function checkForWin(id) {
   if (players[id].points == 21) return true;
}

function playGame() {
   for (let p = 0; p < players.length; p++) {
      console.log(`Player ${p + 1} turn`);
      let cardDisp = '';
      for (let i = 0; i < players[p].hand.length; i++)
         // color the input and change the letteer to icons
         cardDisp += `${players[p].hand[i].suit}${players[p].hand[i].value} `;
      console.log(cardDisp);
      console.log(players[p].points);

      let inp = prompt(('h/s: '));
      if (inp.toLowerCase == 'h' || inp.toLowerCase == 'hit')
         hit(p);
      else if (inp.toLowerCase() == 's' || inp.toLowerCase == 'stand')
         console.log(`Player ${p + 1} stood`);

   }
}

playGame();

console.log(deck)