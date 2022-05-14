class Card {
    constructor (value, name) {
    this.value = value;
    this.name = name;
    }
}

class Deck {
    constructor(cards = freshDeck()) {
    this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length
    }

    shuffle() {
        for (let i = this.numberOfCards -1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
    dealCard(){
        return this.cards.pop();
    }
}


class Player {
    constructor(score, name) {
    this.score = score;
    this.name = name;
    }
}


const suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']
const types = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

//this creates a standard 52 card deck
function freshDeck() {
    let deck = new Array();
    for(let i = 0; i < suits.length; i ++) {
        for(let x = 0; x < types.length; x ++) {
            let cardName = types[x] + ' of ' + suits[i];
            let value = x + 1;
            let card = new Card(value, cardName);
            deck.push(card);
        }
    }
    return deck;
}

//this creates a hand of 26 cards for each player from the deck we make
function playerHand(deck) {
    let hand = new Array();
    for(let i = 0; i < 26; i++) {
        hand.push(deck.dealCard())
    }
    return hand
}


let gameDeck = new Deck;
let player1 = new Player();
let player2 = new Player();


startGame()
function startGame() {
    const player1 = new Player(0, 'Brad');
    const player2 = new Player(0, 'Janet');

    const deck = new Deck();
    deck.shuffle();

    //this splits the deck in two, half for each player    
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2);
    player1Deck = new Deck(deck.cards.slice(0, deckMidpoint));
    player2Deck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards));

    // console.log(player1Deck);
    // console.log(player2Deck);
    for(let i = 0; i < 26; i++) {

    //Deubug line below:    
    //console.log('Player 1: ' + player1Deck.cards[i].name + ' vs. Player 2: ' + player2Deck.cards[i].name);
        if (player1Deck.cards[i].value > player2Deck.cards[i].value) {
            player1.score += 1;
        }
        else if (player1Deck.cards[i].value < player2Deck.cards[i].value) {
            player2.score += 1;
        }
    }
    console.log(player1.name + ': ' + player1.score);
    console.log(player2.name + ': ' + player2.score);

    if (player1.score > player2.score) {
        console.log(player1.name + ' Wins!!');
    } else if(player1.score < player2.score) {
        console.log(player2.name + ' Wins!!');
    } else {
        console.log('It was a tie!');
    }
 }

