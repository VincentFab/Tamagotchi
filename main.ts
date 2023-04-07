import "./style.scss";

import { Tamagochi } from "./tamagotchi_class";

const Main = () => {
  const health_bar = document.getElementById("health_bar_value")!;
  const hunger_bar = document.getElementById("food_bar_value")!;
  const happiness_bar = document.getElementById("happiness_bar_value")!;
  const buttonsIncrement = document.getElementsByClassName("btn_style");

  let myTamagochi = new Tamagochi(
    "Totoro",
    100,
    100,
    120,
    10,
    10,
    10,
    health_bar,
    hunger_bar,
    happiness_bar,
    buttonsIncrement
  );

  StartGame(myTamagochi);
};

const StartGame = (myTamagochi: Tamagochi) => {
  //ajouté un bouton pour le heal

  let loop = setInterval(() => {
    let percentHealth = myTamagochi.getHeathPercent();
    let percentHunger = myTamagochi.getHungerPercent();
    let percentHappy = myTamagochi.getHappyPercent();

    if (percentHealth > 50) {
      myTamagochi.setDmgHealth(10);
    } else if (percentHealth <= 50 && percentHealth > 15) {
      myTamagochi.setDmgHealth(6);
    } else if (percentHealth <= 15) {
      myTamagochi.setDmgHealth(2);
    }

    if (percentHunger > 50) {
      myTamagochi.setDmgHunger(10);
    } else if (percentHunger <= 50 && percentHunger > 15) {
      myTamagochi.setDmgHunger(6);
    } else if (percentHealth <= 15) {
      myTamagochi.setDmgHunger(2);
    }

    if (percentHealth > 50) {
      myTamagochi.setDmgHappy(10);
    } else if (percentHappy <= 50 && percentHappy > 15) {
      myTamagochi.setDmgHappy(6);
    } else if (percentHealth <= 15) {
      myTamagochi.setDmgHappy(2);
    }

    myTamagochi.Decrease();

    if (!myTamagochi.getIsAlive()) {
      console.log("YOU LOOSE FUCKING IDIOT");
      clearInterval(loop);
    }
  }, 500);

  return;
};

//permet detre sur que tout le html a bien été chargé avant de faire quoi que ce soit
document.addEventListener("DOMContentLoaded", Main);