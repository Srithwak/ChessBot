const faceValues = {
   '2':2,
   '3':3,
   '4':4,
   '5':5,
   '6':6,
   '7':7,
   '8':8,
   '9':9,
   'T':10,
   'J':10,
   'Q':10,
   'K':10,
   'A':11,
}

const createDeck = (numDecks = 1, shuffle = true) => {
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
         playerID: i + 1,
         points: 0,
         hand: [],
         state: 0, // 0 = playing, 1 = win, 2 = lose
         ace: false
      });
   }
   return players;
}

let deck = createDeck();
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
}

dealHand();

// checkAces();

// console.log(deck.length);
console.log(deck);
console.log(players[0]);
console.log(players[0].hand);
console.log(players[1]);
console.log(players[1].hand);