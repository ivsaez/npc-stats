import LimitedInt from "limited-int";
import { PhysicalProfile } from "./profiles";

const StatsMin = 1;
const StatsMax = 100;

export class PhysicalStats {

  private _vitality: LimitedInt;
  private _magic: LimitedInt;
  private _stamina: LimitedInt;

  private _strength: LimitedInt;
  private _defense: LimitedInt;
  private _dexterity: LimitedInt;
  private _luck: LimitedInt;
  private _velocity: LimitedInt;
  private _agility: LimitedInt;

  constructor(
    totalVitality: number = 2,
    totalMagic: number = 2,
    totalStamina: number = 2,
    strength: number = 1,
    defense: number = 1,
    dexterity: number = 1,
    luck: number = 1,
    velocity: number = 1,
    agility: number = 1){
      this._vitality = new LimitedInt(totalVitality, totalVitality, StatsMin); 
      this._magic = new LimitedInt(totalMagic, totalMagic, StatsMin); 
      this._stamina = new LimitedInt(totalStamina, totalStamina, StatsMin); 

      this._strength = new LimitedInt(strength, StatsMax, StatsMin);
      this._defense = new LimitedInt(defense, StatsMax, StatsMin);
      this._dexterity = new LimitedInt(dexterity, StatsMax, StatsMin);
      this._luck = new LimitedInt(luck, StatsMax, StatsMin);
      this._velocity = new LimitedInt(velocity, StatsMax, StatsMin);
      this._agility = new LimitedInt(agility, StatsMax, StatsMin);
  }
  
  static generateFrom(profile: PhysicalProfile): PhysicalStats{
    return new PhysicalStats(
      profile.vitality,
      profile.magic,
      profile.stamina,
      profile.strength,
      profile.defense,
      profile.dexterity,
      profile.luck,
      profile.velocity,
      profile.agility
    );
  }

  get totalVitality(){
    return this._vitality.max;
  }

  get totalMagic(){
    return this._magic.max;
  }

  get totalStamina(){
    return this._stamina.max;
  }

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
}

export class MentalStats{
  private _brainEnergy: LimitedInt;

  private _audacity: LimitedInt;
  private _intelligence: LimitedInt;
  private _charisma: LimitedInt;
  private _selfsteem: LimitedInt;
  private _humor: LimitedInt;
  private _empathy: LimitedInt;
  private _mean: LimitedInt;

  constructor(
    totalBrainEnergy: number = 2,
    audacity: number = 1,
    intelligence: number = 1,
    charisma: number = 1,
    selfsteem: number = 1,
    humor: number = 1,
    empathy: number = 1,
    mean: number = 1
  ){
    this._brainEnergy = new LimitedInt(totalBrainEnergy, totalBrainEnergy, StatsMin); 

    this._audacity = new LimitedInt(audacity, StatsMax, StatsMin);
    this._intelligence = new LimitedInt(intelligence, StatsMax, StatsMin);
    this._charisma = new LimitedInt(charisma, StatsMax, StatsMin);
    this._selfsteem = new LimitedInt(selfsteem, StatsMax, StatsMin);
    this._humor = new LimitedInt(humor, StatsMax, StatsMin);
    this._empathy = new LimitedInt(empathy, StatsMax, StatsMin);
    this._mean = new LimitedInt(mean, StatsMax, StatsMin);
  }

  get totalBrainEnergy(){
    return this._brainEnergy.max;
  }

  get brainEnergy(){
    return this._brainEnergy;
  }

  get audacity(){
    return this._audacity;
  }

  get intelligence(){
    return this._intelligence;
  }

  get charisma(){
    return this._charisma;
  }

  get selfsteem(){
    return this._selfsteem;
  }

  get humor(){
    return this._humor;
  }

  get empathy(){
    return this._empathy;
  }

  get mean(){
    return this._mean;
  }
}