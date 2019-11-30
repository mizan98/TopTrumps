//----- arrays for objects to go into -----//
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

let plyr1Deck = []
let plyr2Deck = []
let limbo = []
let player1Hand = []
let player2Hand = []

//---- Variables ----//
let player1 = true

//----- Shuffle function added -----//
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

//----- Game start function -----//

gameLogic = () => {
    if (player1){
        if (player1Hand[0].strength > player2Hand[0].strength) {
            plyr1Deck.push(player1Hand, player2Hand)
        }
        else if (player1Hand[0].strength < player2Hand[0].strength){
            plyr2Deck.push(player1Hand, player2Hand)
        }
        else{
            limbo.push(player1Hand, player2Hand)
        }
    }


}
