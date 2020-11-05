class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
    super(name, card);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target){
        target.resilence -= this.power;
        console.log('target', target. "this", this)
    }
}

class Effects extends Card{
    constructor(name, cost, text, stat, magnitude){
    super(name, card);
        this.text = text;
        this.stat= stat;
        this.magnitude = magnitude; 
    }
    play(target){
        if(target instanceof Unit){
            target[this.stat] += this.magnitude;
        }
        else{
            throw new Error('not an instance of Unit1')
        }
        console.log("target", targetm "this", this)
    }
}

const red_units = new Unit("Red Belt Ninja", 3,3,4);
const black_units = new Unit("Black Belt Ninja", 4,5,4);

const HardAlgorithm = new Effects("Hard Algorithm", 2 "increase target's resilience by 3", "resilience", +3);
const UnhandledPromiseRejection = new Effects("Unhandled Promise Rejection", 2, "reduce target's resilience by 2", "resilience", -2);
const PairProgramming = new Effects("Pair Programming", 3, "increase target's power by 2", +2);

HardAlgorithm.play(red_units);
UnhandledPromiseRejection.play(red_units);
PairProgramming.play(red_units);
red_units.attack(black_units);
