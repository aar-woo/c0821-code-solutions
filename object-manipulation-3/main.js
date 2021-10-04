console.log('Lodash is loaded:', typeof _ !== 'undefined');

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

function createCard(cardRank, cardSuit) {
  var card = {
    suit: cardSuit,
    rank: cardRank
  };
  return card;
}
function createDeck() {
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
  return deck;
}

function runGame(playersArr, numCards) {
  var deck = createDeck();
  deck = _.shuffle(deck);

  for (var players = 0; players < playersArr.length; players++) {
    for (var cardsDealt = 0; cardsDealt < numCards; cardsDealt++) {
      playersArr[players].hand.push(deck[cardsDealt]);
    }
    deck.splice(0, numCards);
  }

  var highestHand = 0;
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
    playersArr[playerNum].playerHand = currentPlayerHand;
    if (currentPlayerHand > highestHand) {
      highestHand = currentPlayerHand;
      winningPlayer = playersArr[playerNum];
    }
  }

  console.log('Winner:', winningPlayer.name, winningPlayer);
}

runGame(players, 2);
