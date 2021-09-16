console.log('Lodash is loaded:', typeof _ !== 'undefined');

// Players
var players = [
  {
    name: 'Ken',
    hand: []
  },
  {
    name: 'Kenny',
    hand: []
  },
  {
    name: 'Kenneth',
    hand: []
  },
  {
    name: 'Peter',
    hand: []
  }
];
// create card function
function createCard(cardRank, cardSuit) {
  var card = {
    suit: cardSuit,
    rank: cardRank
  };
  return card;
}

// deck creation
var deck = [];
var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
var faces = ['Jack', 'Queen', 'King', 'Ace'];
for (var i = 0; i < suits.length; i++) {
  for (var val = 2; val <= 10; val++) {
    deck.push(createCard(val, suits[i]));
  }
  for (var faceCards = 0; faceCards < 4; faceCards++) {
    deck.push(createCard(faces[faceCards], suits[i]));
  }
}

// shuffle deck
deck = _.shuffle(deck);

// deal cards
/*
  - for each player
    - add the first two cards in deck to player's hand
    - delete those cards from deck
*/
// for (var playerNum = 0; playerNum < players.length; playerNum++) {
//   for (var cardInDeck = 0; cardInDeck < 2; cardInDeck++) {
//     players[playerNum].hand.push(deck[cardInDeck]);
//   }
//   deck.splice(0, 2);
// }

// console.log(players);

// Find Player with highest score
/*
  - highestHand
  - winning player
  - look at each player in players
    - create storage for hand value set to 0
    - look at each card in player hand
      - if card.rank is equal to jack, queen or king,
        - add 10 to hand value
      - else if card.rank is equal to ace
        - add 11 to hand value
      - otherwise
        - add card.rank to hand value
    - if hand value is greater than highest hand
      - set highest hand equal to current hand value
      - set winning player to current player
  - return winning player
*/

function winner(players) {
  var highestHand = 0;
  var winningPlayer;
  for (var playerNum = 0; playerNum < players.length; playerNum++) {
    var currentPlayerHand = 0;
    for (var cardNum = 0; cardNum < players[playerNum].hand.length; cardNum++) {
      if (players[playerNum].hand[cardNum].rank === 'Jack' || players[playerNum].hand[cardNum].rank === 'Queen' ||
      players[playerNum].hand[cardNum].rank === 'King') {
        currentPlayerHand += 10;
      } else if (players[playerNum].hand[cardNum].rank === 'Ace') {
        currentPlayerHand += 11;
      } else {
        currentPlayerHand += players[playerNum].hand[cardNum].rank;
      }
    }
    if (currentPlayerHand > highestHand) {
      highestHand = currentPlayerHand;
      winningPlayer = players[playerNum];
    }
  }
  return winningPlayer;
}

// console.log(winner(players));
// Generalize so any number of cards can be dealt

function runGame(playersArr, numCards) {
  for (var players = 0; players < playersArr.length; players++) {
    for (var cardsDealt = 0; cardsDealt < numCards; cardsDealt++) {
      playersArr[players].hand.push(deck[cardsDealt]);
    }
    deck.splice(0, numCards);
  }

  var highestHand = 0;
  var allHands = [];
  var tieValue = 0;
  var tiedPlayers = [];
  var winningPlayer;
  for (var playerNum = 0; playerNum < playersArr.length; playerNum++) {
    var currentPlayerHand = 0;
    for (var cardNum = 0; cardNum < playersArr[playerNum].hand.length; cardNum++) {
      if (playersArr[playerNum].hand[cardNum].rank === 'Jack' || playersArr[playerNum].hand[cardNum].rank === 'Queen' ||
        playersArr[playerNum].hand[cardNum].rank === 'King') {
        currentPlayerHand += 10;
      } else if (playersArr[playerNum].hand[cardNum].rank === 'Ace') {
        currentPlayerHand += 11;
      } else {
        currentPlayerHand += playersArr[playerNum].hand[cardNum].rank;
      }
    }
    // allHands[playersArr[playerNum].name] = currentPlayerHand;
    allHands.push(currentPlayerHand);
    if (currentPlayerHand > highestHand) {
      highestHand = currentPlayerHand;
      winningPlayer = playersArr[playerNum];
    }
  }
  var isTie = false;

  for (var hand = 0; hand < allHands.length; hand++) {
    if (allHands[hand] === Math.max(allHands)) {
      isTie = true;
      tiedPlayers.push(playersArr[hand]);
      tiedPlayers.push(winningPlayer);
    }
  }
  if (isTie) {
    console.log('tie');
    winner(tiedPlayers);
  }

  console.log('all hands', allHands);
  return winningPlayer;
}
console.log('deck before:', deck);
console.log(runGame(players, 4));
// console.log('deck after:', deck);
