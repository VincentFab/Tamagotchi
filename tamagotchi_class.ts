class Tamagochi{
  //variable recup du constructeur
  name:string;
  health_bar:HTMLElement;
  hunger_bar: HTMLElement;
  happiness_bar: HTMLElement;

  //variable de la class
  health:number = 100;
  hunger:number = 100;
  happiness:number = 100;


  is_alive:boolean = false;

  //variable calculé grace au element du constructeur
  healthGap:number;
  hungerGap:number;
  happinessGap: number;

  constructor(name:string, health_bar:HTMLElement, hunger_bar:HTMLElement,happiness_bar:HTMLElement){
    this.name = name;
    this.health_bar = health_bar;
    this.hunger_bar = hunger_bar;
    this.happiness_bar = happiness_bar;

    this.healthGap = health_bar.offsetWidth / 100;
    this.hungerGap = hunger_bar.offsetWidth / 100;
    this.happinessGap = happiness_bar.offsetWidth / 100; 
    
    this.is_alive = true;
  }

  DecreaseHealth(){
    let result = this.health_bar.offsetWidth - this.healthGap;
    if (this._checkIsLess(result)) this.is_alive = false;
    this.health -= 1;
    console.log("vie-");
    
  }

  IncreaseHealth(){
    let result = this.health_bar.offsetWidth + this.healthGap;
    if (this._checkIsMore(result)) this.health += 0;
    this.health += 1;
    console.log("vie+");
    
  }


  _checkIsLess(number:number){
    if (number <= 0) return true;
    return false;
  }

  _checkIsMore(number:number){
    if (number > 100) return true;
    return false;
    
  }

}


const Main = ()=>{
  const health_bar = document.getElementById("health_bar_value")!;
  const hunger_bar = document.getElementById("food_bar_value")!;
  const happiness_bar = document.getElementById("happiness_bar_value")!;
  
  let MyTamagochi = new Tamagochi("Totoro", health_bar, hunger_bar, happiness_bar);
  
}

const StartGame = (myTamagochi:Tamagochi) =>{
  
  
  //ajouté un bouton pour le heal

  setInterval(() => {
    
    
    myTamagochi.DecreaseHealth();
    
    
    if (!myTamagochi.is_alive) return;
  },1000)
}

//permet detre sur que tout le html a bien été chargé avant de faire quoi que ce soit 
document.addEventListener('DOMContentLoaded', Main);
  
  