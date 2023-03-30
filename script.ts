
class Tamagotchi {
    name: string;
    health: number;
    hunger: number;
    happiness: number;
    isAlive: boolean;
    hungerInterval: number;
  
    constructor(name: string) {
      this.name = name;
      this.health = 100;
      this.hunger = 0;
      this.happiness = 50;
      this.isAlive = true;
      this.hungerInterval = setInterval(() => {
        this.hunger += 10;
        this.happiness -= 5;
        this.health -= 5;
        this.updateStats();
      }, 10000);
    }
  
    feed() {
      if (this.hunger <= 80) {
        this.hunger += 20;
        this.health += 5;
        this.happiness += 10;
      } else {
        this.health -= 10;
        this.happiness -= 10;
      }
      this.updateStats();
    }
  
    play() {
      if (this.happiness <= 80) {
        this.happiness += 20;
        this.health += 5;
        this.hunger += 10;
      } else {
        this.health -= 10;
        this.hunger -= 10;
      }
      this.updateStats();
    }
  
    clean() {
      this.health += 5;
      this.hunger += 5;
      this.happiness -= 5;
      this.updateStats();
    }
  
    updateStats() {
      if (this.hunger >= 100) {
        this.hunger = 100;
        this.health -= 20;
        this.happiness -= 10;
      }
      if (this.health <= 0) {
        this.isAlive = false;
        this.health = 0;
        this.hunger = 100;
        this.happiness = 0;
        alert(`Oh no! ${this.name} has died.`);
        clearInterval(this.hungerInterval);
        return;
      }
      if (this.happiness <= 0) {
        this.happiness = 0;
        this.health -= 10;
      }
      if (this.health >= 100) {
        this.health = 100;
      }
      if (this.hunger <= 0) {
        this.hunger = 0;
      }
      if (this.happiness >= 100) {
        this.happiness = 100;
      }
        (document.querySelector(".health-bar-fill")! as HTMLElement).style.width = `${this.health}%`;
        (document.querySelector(".hunger-bar-fill")! as HTMLElement).style.width = `${this.hunger}%`;
        (document.querySelector(".happiness-bar-fill")! as HTMLElement).style.width = `${this.happiness}%`;

    }
  }
  
  const tamagotchi = new Tamagotchi("Tamagotchi");
  
  document.querySelector(".feed-button")!.addEventListener("click", function() {
    tamagotchi.feed();
  });
  
  document.querySelector(".play-button")!.addEventListener("click", function() {
    tamagotchi.play();
  });
  
  document.querySelector(".clean-button")!.addEventListener("click", function() {
    tamagotchi.clean();
  });
  

  