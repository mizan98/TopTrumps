let card = [
    {name: "pichu",  strength: 40},
    {name: "pikachu", strength: 50},
    {name : "raichu", strength: 60},
    {name : "bulbasaur", strength: 40},
    {name: "ivysaur", strength: 50},
    {name: "venusaur", strength: 60},
    {name: "charmander", strength: 40},
    {name: "charmeleon", strength: 50},
    {name: "charizard", strength: 60},
    {name: "squirtle", strength: 40},
    {name: "wartortle", strength: 50},
    {name: "blastoise", strength: 60},
    {name: "onyx", strength: 70},
    {name: "steelix", strength: 80},
    {name: "ponyta", strength: 60},
    {name: "caterpee", strength: 20},
    {name: "caterpod", strength: 30},
    {name: "taurus", strength: 60},
    {name: "tentacool", strength: 50},
    {name: "tentacruel", strength: 60},
    {name: "koffing", strength: 30},
    {name: "weeaing", strength: 40},
    {name: "snorlax", strength: 70},
    {name: "pidgey", strength: 20},
    {name: "pidgeotto", strength: 30},
    {name: "pidget", strength: 40},
    {name: "ekans", strength: 50},
    {name: "arbok", strength: 60},
    {name: "lickitung", strength: 50},
    {name: "meowth", strength: 40}
]

const shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    {    
    return a;
    }
}

let plyr1Deck = []
let plyr2Deck = []
let limbo = []
let player1Hand = []
let player2Hand = []

class NewGame {
    constructor(players1, players2){
        this._players1 = players1
        this._players2 = players2
    }
    drawCards() {
        player1Hand = plyr1Deck.splice(0, 1);
        alert(`${this._players1} has drawn ${player1Hand[0].name}`)
        player2Hand = plyr2Deck.splice(0, 1)
        alert (`${this._players2} has drawn ${player2Hand[0].name}`)
        
        if (player1Hand[0].strength > player2Hand[0].strength){
            plyr1Deck.push(player1Hand, player2Hand)
            alert(`${this._players1} wins this round. ${this._players1} starts the next round`)
            this.checkVictory()
        }
        else if (player2Hand[0].strength > player1Hand[0].strength){
            plyr2Deck.push(player2Hand, player1Hand)
            alert(`${this._players2} wins this round. ${this._players2} starts the next round`)
            this.checkVictory()
        }
        else if (player1Hand[0].strength == player2Hand[0].strength) {
            limbo.push(player1Hand, player2Hand)
            alert("It is a draw. Cards are now in limbo")
            this.limboRound()
        }
        
    }

    checkVictory() {
        if (plyr1Deck.length == card.length){
            alert(`${this._players1} wins the game`)
        }
        else if(plyr2Deck.lrngth == card.length){
           alert(`${this._players2} wins the game`)
        }
        else {
            this.drawCards()
        }
    }

    checkVictoryP2() {
        if (plyr1Deck.length == card.length){
            alert(`${this._players1} wins the game`)
        }
        else if(plyr2Deck.lrngth == card.length){
           alert(`${this._players2} wins the game`)
        }
        else {
            this.player2Turn()
        }
    }

    player2Turn (){
        player2Hand = plyr2Deck.slice(0, 1)
        alert (`${this._players2} has drawn ${player2Hand[0]}`)
        player1Hand = plyr1Deck.slice(0, 1);
        alert(`${this._players1} has drawn ${player1Hand[0]}`)
        if (player1Hand[0].strength > player2Hand[0].strength){
            plyr1Deck.push(player1Hand)
            plyr1Deck.push(player2Hand)
            alert(`${this._players1} wins this round. ${this._players1} starts the next round.`)
            this.checkVictory()
        }
        else if (player2Hand[0].strength > player1Hand[0].strength){
            plyr2Deck.push(player2Hand)
            plyr2Deck.push(player1Hand)
            alert(`${this._players2} wins this round. ${this._players2} starts the next round`)
            this.checkVictoryP2()
        }
        else if (player1Hand[0].strength == player2Hand[0].strength) {
            limbo.push(player1Hand)
            limbo.push(player2Hand)
            alert("It is a draw. Cards are now in limbo")
            this.limboRound()
        }
    }

    limboRound() {
        alert("limbo round has begun. win the round to win the limbo deck")
        player1Hand = plyr1Deck.slice(0, 1)
        alert(`${this._players1} has drawn ${player1Hand[0]}`)
        player2Hand = plyr2Deck.slice(0, 1) 
        alert (`${this._players2} has drawn ${player2Hand[0]}`)
    
        if (player1Hand[0].strength > player2Hand[0].strength){
            plyr1Deck.push(player1Hand)
            plyr1Deck.push(player2Hand)
            plyr1Deck.push(limbo)
            alert(`${this._players1} wins this round. ${this._players1} starts the next round`)
            this.checkVictory()
        }
        else if (player2Hand[0].strength > player1Hand[0].strength){
            plyr2Deck.push(player2Hand)
            plyr2Deck.push(player1Hand)
            plyr2Deck.push(limbo)
            alert(`${this._players2} wins this round. ${this._players2} starts the next round`)
            this.checkVictoryP2()
        }
        else if (player1Hand[0].strength == player2Hand[0].strength) {
            limbo.push(player1Hand)
            limbo.push(player2Hand)
            alert("It is a draw. Cards are now in limbo")
            this.limboRound()
        } 
    }

}


let plyr1 = prompt ("welcome to TopTrumps. Please enter your name:")
            alert(`Welcome ${plyr1}`)
let plyr2 = prompt ("Welcome player 2, please enter your name")

const play1 = new NewGame (plyr1, plyr2)
            alert("Its time to shuffle the deck")            
let test1 = shuffle(card)
            alert("Now that the deck has been shuffled its time to deal the cards")

let plyr1Deck = test1.slice(0, 15)

let plyr2Deck = test1.slice(15)             //maybe can just push halfdeck into class
            
            alert ("The cards have been dealt. The game begins")

play1.drawCards()


