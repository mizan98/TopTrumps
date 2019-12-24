let card = [
    {name: "pichu",  strength: 40, defence: 30},
    {name: "pikachu", strength: 50, defenece: 40},
    {name: "raichu", strength: 60, defence: 50},
    {name: "bulbasaur", strength: 40, defence: 50},
    {name: "ivysaur", strength: 50, defence: 70},
    {name: "venusaur", strength: 60, defence: 80},
    {name: "charmander", strength: 40, defence: 30},
    {name: "charmeleon", strength: 50, defence: 40},
    {name: "charizard", strength: 60, defence: 70},
    {name: "squirtle", strength: 40, defence: 30},
    {name: "wartortle", strength: 50, defence: 50},
    {name: "blastoise", strength: 60, defence:80},
    {name: "onyx", strength: 70, defence: 75},
    {name: "steelix", strength: 80, defence: 90},
    {name: "ponyta", strength: 60, defence: 60},
    {name: "caterpee", strength: 20, defence: 20},
    {name: "metapod", strength: 30, defence: 30},
    {name: "taurus", strength: 60, defence: 50},
    {name: "tentacool", strength: 50, defence: 40},
    {name: "tentacruel", strength: 60, defence: 50},
    {name: "koffing", strength: 30, defence: 30},
    {name: "weezing", strength: 40, defence: 20},
    {name: "snorlax", strength: 70, defence: 100},
    {name: "pidgey", strength: 20, defence: 10},
    {name: "pidgeotto", strength: 30, defence: 20},
    {name: "pidget", strength: 40, defence: 30},
    {name: "ekans", strength: 50, defence: 40},
    {name: "arbok", strength: 60, defence: 50},
    {name: "lickitung", strength: 50, defence: 50},
    {name: "meowth", strength: 40, defence: 20}
]

const shuffle = (a) => {
        let j, x, i;
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
        alert(`${this._players1} has drawn ${player1Hand[0].name} with a strength of ${player1Hand[0].strength}`)
        player2Hand = plyr2Deck.splice(0, 1)
        alert (`${this._players2} has drawn ${player2Hand[0].name} with a strength of ${player2Hand[0].strength}`)
        
        if (player1Hand[0].strength > player2Hand[0].strength){
            plyr1Deck.push(...player1Hand, ...player2Hand)
            alert(`${this._players1} wins this round.`)
            alert(`${this._players1} now has ${plyr1Deck.length} cards. ${this._players1} starts the next round.`)
            console.log(`this is player1 deck on p1 turn ${plyr1Deck.length}`)
            alert(`${this._players2} now has ${plyr2Deck.length} cards.`)
            this.checkVictory()
        }
        else if (player2Hand[0].strength > player1Hand[0].strength){
            plyr2Deck.push(...player2Hand, ...player1Hand)
            alert(`${this._players2} wins this round.`)
            alert(`${this._players2} now has ${plyr2Deck.length} cards. ${this._players2} starts the next round.`)
            console.log(`this is p2 deck after loss ${plyr2Deck.length}`)
            alert(`${this._players1} now has ${plyr1Deck.length} cards.`)
            this.checkVictory()
        }
    }

    checkVictory() {
        if (plyr1Deck.length == card.length){
            alert(`${this._players1} wins the game`)
        }
        else if(plyr2Deck.length == card.length){
           alert(`${this._players2} wins the game`)
        }
        else {
            this.drawCards()
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

plyr1Deck = test1.slice(0, 15)

plyr2Deck = test1.slice(15)             //maybe can just push halfdeck into class
            
            alert ("The cards have been dealt. The game begins")

play1.drawCards()


