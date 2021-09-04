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
for (var playerNum = 0; playerNum < players.length; playerNum++) {
  for (var cardInDeck = 0; cardInDeck < 2; cardInDeck++) {
    players[playerNum].hand.push(deck[cardInDeck]);
  }
  deck.splice(0, 2);
}

console.log(players);

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

winner(players);
