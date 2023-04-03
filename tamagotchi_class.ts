export class tamagotchi {
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
        this.tick_interval = setInterval(() => {
          this.update_states_all();
        }, 1000);
      }
    update_states_all() {
        if (this.health <= 0, this.happiness <= 0, this.hunger <= 0) {
            this.is_alive = false;
            alert(`Oh no! ${this.name} has died.`);
            clearInterval(this.tick_interval);
            return;
        }
    }
  }  
  class DecrementingBar{
    private element
    private intervalId: number;
    private value: number;
    private maxValue: number;
  
    constructor ( elementId: string, maxValue: number) {
      this.element = document.getElementById(elementId);
      this.maxValue = maxValue;
      this.value = maxValue;
  
      // on attribue le update width
      this.updateWidth();
      console.log('Created a new DecrementingBar');
      // on lance l'interval pour faire baisser la width
      this.intervalId = setInterval(() => {
        this.value--;
        this.updateWidth();
  
        // on arretes l'interval quand il atteint 0
        if (this.value <= 0) {
          clearInterval(this.intervalId);
        }
      }, 1000);
    }
  
    private updateWidth(): void {
      const percent = (this.value / this.maxValue) * 100;
      this.element.style.width = percent + "%";
    }
  }
    const health_bar = document.getElementById("health_bar_value")!;
    const food_bar = document.getElementById("food_bar_value")!;
    const happiness_bar = document.getElementById("happiness_bar_value")!;

    const health_decrementing_bar = new DecrementingBar(health_bar.id, 100);
    const food_decrementing_bar = new DecrementingBar(food_bar.id, 100);
    const happiness_decrementing_bar = new DecrementingBar(happiness_bar.id, 100);

  
  
  