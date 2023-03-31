class Tamagotchi {
  name: string;
  health: number;
  hunger: number;
  happiness: number;
  is_alive: boolean;
  tick_interval: number;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.happiness = 100;
    this.is_alive = true;
  }
}

  