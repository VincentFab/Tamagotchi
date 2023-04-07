export class Tamagochi {
  //variable recup du constructeur
  private name: string;
  private health_bar: HTMLElement;
  private hunger_bar: HTMLElement;
  private happiness_bar: HTMLElement;

  //variable de la class
  private baseHealth: number;
  private baseHunger: number;
  private baseHappy: number;

  private health: number;
  private hunger: number;
  private happiness: number;

  private dmgHealth: number;
  private dmgHunger: number;
  private dmgHappy: number;

  private is_alive: boolean = false;

  //variable calculé grace au element du constructeur
  private healthGap: number;
  private hungerGap: number;
  private happinessGap: number;

  private offSetHealthWidthCalcul: number;
  private offSetHungerhWidthCalcul: number;
  private offSetHappyWidthCalcul: number;

  private BaseHealthWidth: number;

  private buttonHealIsActive = true;
  private buttonHungerIsActive = true;
  private buttonHappyIsActive = true;

  private buttonsIncrement: HTMLCollectionOf<Element>;

  constructor(
    name: string,
    health: number,
    hunger: number,
    happy: number,
    dmgHealth: number,
    dmgHunger: number,
    dmgHappy: number,
    health_bar: HTMLElement,
    hunger_bar: HTMLElement,
    happiness_bar: HTMLElement,
    buttonsIncrement: HTMLCollectionOf<Element>
  ) {
    this.name = name;
    this.baseHealth = health;
    this.baseHunger = hunger;
    this.baseHappy = happy;

    this.health = health;
    this.hunger = hunger;
    this.happiness = happy;

    this.dmgHealth = dmgHealth;
    this.dmgHunger = dmgHunger;
    this.dmgHappy = dmgHappy;

    this.health_bar = health_bar;
    this.hunger_bar = hunger_bar;
    this.happiness_bar = happiness_bar;

    this.healthGap = health_bar.offsetWidth / this.health;
    this.hungerGap = hunger_bar.offsetWidth / this.hunger;
    this.happinessGap = happiness_bar.offsetWidth / this.happiness;

    this.offSetHealthWidthCalcul = health_bar.offsetWidth;
    this.offSetHungerhWidthCalcul = hunger_bar.offsetWidth;
    this.offSetHappyWidthCalcul = happiness_bar.offsetWidth;

    this.BaseHealthWidth = health_bar.offsetWidth;

    this.buttonsIncrement = buttonsIncrement;

    this.setEventListener(0);
    this.setEventListener(1);
    this.setEventListener(2);

    this.is_alive = true;

    console.log(`YOUR TAMAGOCHI : ${this.name} IS ALIVE !!!!!!`);
  }

  getIsAlive() {
    return this.is_alive;
  }

  getHeathPercent() {
    return (this.health / this.baseHealth) * 100;
  }
  getHungerPercent() {
    return (this.hunger / this.baseHunger) * 100;
  }
  getHappyPercent() {
    return (this.happiness / this.baseHappy) * 100;
  }

  setDmgHealth(newDmg: number) {
    this.dmgHealth = newDmg;
  }

  setDmgHunger(newDmg: number) {
    this.dmgHunger = newDmg;
  }
  setDmgHappy(newDmg: number) {
    this.dmgHappy = newDmg;
  }

  setEventListener(index: number) {
    switch (index) {
      case 0:
        this.buttonsIncrement[index].addEventListener("click", () =>
          this.IncreaseHealth(10)
        );
        break;
      case 1:
        this.buttonsIncrement[index].addEventListener("click", () =>
          this.IncreaseHunger(10)
        );
        break;
      case 2:
        this.buttonsIncrement[index].addEventListener("click", () =>
          this.IncreaseHappy(10)
        );
        break;
      default:
        console.log("erreur lors de l'ajout des addEventListener");
        break;
    }
  }

  Decrease() {
    let isLessHeal = this.checkIsLess(this.health - this.dmgHealth);
    let isLessHunger = this.checkIsLess(this.hunger - this.dmgHunger);
    let isLessHappy = this.checkIsLess(this.happiness - this.dmgHappy);

    let resultHealth =
      this.offSetHealthWidthCalcul - this.healthGap * this.dmgHealth;
    let resultHunger =
      this.offSetHungerhWidthCalcul - this.hungerGap * this.dmgHunger;
    let resultHappy =
      this.offSetHappyWidthCalcul - this.happinessGap * this.dmgHappy;

    if (!isLessHeal) {
      this.health -= this.dmgHealth;
      this.offSetHealthWidthCalcul = resultHealth;
      this.health_bar.style.width = resultHealth.toString() + "px";
    }
    if (!isLessHunger) {
      this.hunger -= this.dmgHunger;
      this.offSetHungerhWidthCalcul = resultHunger;
      this.hunger_bar.style.width = resultHunger.toString() + "px";
    }

    if (!isLessHappy) {
      this.happiness -= this.dmgHappy;
      this.offSetHappyWidthCalcul = resultHappy;
      this.happiness_bar.style.width = resultHappy.toString() + "px";
    }

    if (isLessHeal) {
      this.health = 0;
      this.offSetHealthWidthCalcul = 0;
      this.health_bar.style.width = "0px";
      this.buttonHealIsActive = false;
    }
    if (isLessHunger) {
      this.hunger = 0;
      this.offSetHungerhWidthCalcul = 0;
      this.hunger_bar.style.width = "0px";
      this.buttonHungerIsActive = false;
    }
    if (isLessHappy) {
      this.happiness = 0;
      this.offSetHappyWidthCalcul = 0;
      this.happiness_bar.style.width = "0px";
      this.buttonHappyIsActive = false;
    }
    if (isLessHeal && isLessHunger && isLessHappy) {
      this.GameOver();
    }

    console.log("------------");
    console.log(
      `health : (${this.health}/${this.baseHealth}) -- (${this.offSetHealthWidthCalcul}/${this.BaseHealthWidth})`
    );
    console.log(
      `Hunger : (${this.hunger}/${this.baseHunger}) -- (${this.offSetHungerhWidthCalcul}/${this.BaseHealthWidth})`
    );
    console.log(
      `Happy : (${this.happiness}/${this.baseHappy}) -- (${this.offSetHappyWidthCalcul}/${this.BaseHealthWidth})`
    );
  }

  //#region Increase

  IncreaseHealth(number: number) {
    if (this.buttonHealIsActive) {
      let result = this.offSetHealthWidthCalcul + this.healthGap * number;

      if (this.checkIsMore(this.health + number, this.baseHealth)) {
        this.health = this.baseHealth;
      } else {
        this.health += number;
        this.offSetHealthWidthCalcul = result;
        this.health_bar.style.width = result.toString() + "px";
      }
    }
  }

  IncreaseHunger(number: number) {
    if (this.buttonHungerIsActive) {
      let result = this.offSetHungerhWidthCalcul + this.hungerGap * number;

      if (this.checkIsMore(this.hunger + number, this.baseHunger)) {
        this.hunger = this.baseHunger;
      } else {
        this.hunger += number;
        this.offSetHungerhWidthCalcul = result;
        this.hunger_bar.style.width = result.toString() + "px";
      }
    }
  }

  IncreaseHappy(number: number) {
    if (this.buttonHappyIsActive) {
      let result = this.offSetHappyWidthCalcul + this.happinessGap * number;

      if (this.checkIsMore(this.happiness + number, this.baseHappy)) {
        this.happiness = this.baseHappy;
      } else {
        this.happiness += number;
        this.offSetHappyWidthCalcul = result;
        this.happiness_bar.style.width = result.toString() + "px";
      }
    }
  }

  //#endregion

  private GameOver() {
    this.buttonHealIsActive = false;
    this.buttonHungerIsActive = false;
    this.buttonHappyIsActive = false;
    this.is_alive = false;
  }

  private checkIsLess(number: number) {
    if (number < 0) {
      return true;
    }
    return false;
  }

  private checkIsMore(number: number, baseNumber: number) {
    if (number > baseNumber) {
      return true;
    }
    return false;
  }
}