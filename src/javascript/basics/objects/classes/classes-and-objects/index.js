export class OptimusPrime {
    constructor(name, faction, power){
        this._name = name;
        this._faction = faction;
        this._power = power;
    }
    greet() {
        return `Hi, I'm ${this._name}`;
    }
}

export class Megatron extends Robot{
    constructor () {
        super('Megatron', FACTIONS.Decepticons),

    }
}

xport class OptimusPrime extends Robot{
    constructor () {
        super('OptimusPrime', FACTIONS.Autobots),
        
    }

export cont FACTIONS = {
    Autobots: 'autobots',
    Decepticons: 'decepticons',
}

let op = new OptimusPrime();
Let mega = new Megatron();

