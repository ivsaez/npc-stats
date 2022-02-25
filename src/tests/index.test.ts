import { PhysicalStats, MentalStats } from "../stats";
import { ProfileFactory, ProfileKind, ProfileLevel } from "../profiles";

describe("PhysicalStats should", () => {
  it("allow set parameters directly in the constructor", () => {
    let stats = new PhysicalStats(500, 400, 300, 20, 25, 30, 35, 40, 45);

    expect(stats.totalVitality).toBe(500);
    expect(stats.totalMagic).toBe(400);
    expect(stats.totalStamina).toBe(300);
    expect(stats.vitality.value).toBe(500);
    expect(stats.magic.value).toBe(400);
    expect(stats.stamina.value).toBe(300);
    expect(stats.strength.value).toBe(20);
    expect(stats.defense.value).toBe(25);
    expect(stats.dexterity.value).toBe(30);
    expect(stats.luck.value).toBe(35);
    expect(stats.velocity.value).toBe(40);
    expect(stats.agility.value).toBe(45);
  });

  it("modify parameters", () => {
    let stats = new PhysicalStats(500, 400, 300, 20, 25, 30, 35, 40, 45);
    stats.vitality.decrease(10);
    stats.magic.decrease(10);
    stats.stamina.decrease(10);
    stats.strength.increase(1);
    stats.luck.maximizeValue();

    expect(stats.totalVitality).toBe(500);
    expect(stats.totalMagic).toBe(400);
    expect(stats.totalStamina).toBe(300);
    expect(stats.vitality.value).toBe(490);
    expect(stats.magic.value).toBe(390);
    expect(stats.stamina.value).toBe(290);
    expect(stats.strength.value).toBe(21);
    expect(stats.defense.value).toBe(25);
    expect(stats.dexterity.value).toBe(30);
    expect(stats.luck.value).toBe(100);
    expect(stats.velocity.value).toBe(40);
    expect(stats.agility.value).toBe(45);
  });

  it("allow set parameters using a profile", () => {
    let profile = ProfileFactory.generate(ProfileKind.Rogue, ProfileLevel.Superb);

    let stats = PhysicalStats.generateFrom(profile);
    
    expect(stats.totalVitality).not.toBe(2);
    expect(stats.totalMagic).not.toBe(2);
    expect(stats.totalStamina).not.toBe(2);
    expect(stats.vitality.value).not.toBe(1);
    expect(stats.magic.value).not.toBe(1);
    expect(stats.stamina.value).not.toBe(1);
    expect(stats.strength.value).not.toBe(1);
    expect(stats.defense.value).not.toBe(1);
    expect(stats.dexterity.value).not.toBe(1);
    expect(stats.luck.value).not.toBe(1);
    expect(stats.velocity.value).not.toBe(1);
    expect(stats.agility.value).not.toBe(1);
  });
});

describe("MentalStats should", () => {
  it("allow set parameters directly in the constructor", () => {
    let stats = new MentalStats(500, 20, 25, 30, 35, 40, 45, 50);

    expect(stats.totalBrainEnergy).toBe(500);
    expect(stats.brainEnergy.value).toBe(500);
    expect(stats.audacity.value).toBe(20);
    expect(stats.intelligence.value).toBe(25);
    expect(stats.charisma.value).toBe(30);
    expect(stats.selfsteem.value).toBe(35);
    expect(stats.humor.value).toBe(40);
    expect(stats.empathy.value).toBe(45);
    expect(stats.mean.value).toBe(50);
  });

  it("modify parameters", () => {
    let stats = new MentalStats(500, 20, 25, 30, 35, 40, 45, 50);
    stats.brainEnergy.decrease(100);
    stats.charisma.increase(5);

    expect(stats.totalBrainEnergy).toBe(500);
    expect(stats.brainEnergy.value).toBe(400);
    expect(stats.audacity.value).toBe(20);
    expect(stats.intelligence.value).toBe(25);
    expect(stats.charisma.value).toBe(35);
    expect(stats.selfsteem.value).toBe(35);
    expect(stats.humor.value).toBe(40);
    expect(stats.empathy.value).toBe(45);
    expect(stats.mean.value).toBe(50);
  });
});