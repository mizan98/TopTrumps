class Toptrumps {
    constructor (player){
        this._player = player
        this._card = [
            {name: "pichu",  strength: 40},
            {name: "pikachu", strength: 50},
            {name : "raichu", strength: 60},
            {name : "bulbasaur", strength: 40},
            {name: "ivysaur", strength: 50},
            {name: "venuaur", stength: 60},
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
            {name: "jigglypuff", strength: 80},
            {name: "lickitung", strength: 50},
            {name: "meowth", strength: 40}
        ]
        let test = this._card
        console.log(test.name[1])
    }
    get player(){
        return this._player
    }
    get card (){
        return this._card
    }
    shuffle (){
        for (let i = 0; i < 15 ; i++){
            Math.random[i]
            
        }
    }

}

// let gameStart = new Toptrumps(player)

