import { random } from "role-methods";

export abstract class PhysicalProfile{
    protected _vitality: number;
    protected _magic: number;
    protected _stamina: number;

    protected _strength: number;
    protected _defense: number;
    protected _dexterity: number;
    protected _luck: number;
    protected _velocity: number;
    protected _agility: number;

    get vitality(){
        return this._vitality;
    }

    get magic(){
        return this._magic;
    }

    get stamina(){
        return this._stamina;
    }

    get strength(){
        return this._strength;
    }

    get defense(){
        return this._defense;
    }

    get dexterity(){
        return this._dexterity;
    }

    get luck(){
        return this._luck;
    }

    get velocity(){
        return this._velocity;
    }

    get agility(){
        return this._agility;
    }

    protected getEnsuredRandomValue(level: number): number
    {
        let result = random(level);

        let twentyeth = level * 20 / 100;
        if (twentyeth == 0) twentyeth = 1;
        if (result < twentyeth) result = twentyeth;
        
        return result;
    }
}

export enum ProfileKind{
    Peasant,
    Rogue,
    Magician,
    Warrior
}

export enum ProfileLevel
{
    Low = 25,
    Medium = 50,
    High = 75,
    Superb = 100
}

export class RandomProfile extends PhysicalProfile{
    constructor(level: number){
        super();

        this._vitality = this.getEnsuredRandomValue(level);
        this._magic = this.getEnsuredRandomValue(level);
        this._stamina = this.getEnsuredRandomValue(level);

        this._strength = this.getEnsuredRandomValue(level);
        this._defense = this.getEnsuredRandomValue(level);
        this._dexterity = this.getEnsuredRandomValue(level);
        this._luck = this.getEnsuredRandomValue(level);
        this._velocity = this.getEnsuredRandomValue(level);
        this._agility = this.getEnsuredRandomValue(level);
    }
}

export class RogueProfile extends PhysicalProfile{
    constructor(level: number){
        super();

        this._vitality = this.getEnsuredRandomValue(level);
        this._magic = this.getEnsuredRandomValue(level);
        this._stamina = level;

        this._strength = this.getEnsuredRandomValue(level);
        this._defense = this.getEnsuredRandomValue(level);
        this._dexterity = level;
        this._luck = this.getEnsuredRandomValue(level);
        this._velocity = this.getEnsuredRandomValue(level);
        this._agility = level;
    }
}

export class MagicianProfile extends PhysicalProfile{
    constructor(level: number){
        super();

        this._vitality = this.getEnsuredRandomValue(level);
        this._magic = level;
        this._stamina = this.getEnsuredRandomValue(level);

        this._strength = this.getEnsuredRandomValue(level);
        this._defense = this.getEnsuredRandomValue(level);
        this._dexterity = this.getEnsuredRandomValue(level);
        this._luck = level;
        this._velocity = this.getEnsuredRandomValue(level);
        this._agility = this.getEnsuredRandomValue(level);
    }
}

export class WarriorProfile extends PhysicalProfile{
    constructor(level: number){
        super();

        this._vitality = level;
        this._magic = this.getEnsuredRandomValue(level);
        this._stamina = level;

        this._strength = level;
        this._defense = level;
        this._dexterity = this.getEnsuredRandomValue(level);
        this._luck = this.getEnsuredRandomValue(level);
        this._velocity = this.getEnsuredRandomValue(level);
        this._agility = this.getEnsuredRandomValue(level);
    }
}

export class ProfileFactory{
    static generate(kind: ProfileKind, level: ProfileLevel){
        switch (kind)
        {
            case ProfileKind.Peasant:
                return new RandomProfile(level);
            case ProfileKind.Rogue:
                return new RogueProfile(level);
            case ProfileKind.Magician:
                return new MagicianProfile(level);
            case ProfileKind.Warrior:
                return new WarriorProfile(level);
            default:
                return null;
        }
    }
}