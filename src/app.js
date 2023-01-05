/* eslint-disable */
import "bootstrap";
import "./style.css";
//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  let palo = ["♦", "♥", "♠", "♣"];
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  //Declaracion de arrays
  let randPalo = Math.floor(Math.random() * palo.length);
  let randNumber = Math.floor(Math.random() * number.length);
  //radom
  let upper = document.querySelector(".top");
  let numbers = document.querySelector(".number");
  let lower = document.querySelector(".bottom");
  //obtencion de elementos

  numbers.innerHTML = number[randNumber];

  upper.innerHTML = palo[randPalo];
  upper.style.color =
    palo[randPalo] === "♥" || palo[randPalo] === "♦" ? "red" : "black";

  lower.innerHTML = palo[randPalo];
  lower.style.color =
    palo[randPalo] === "♥" || palo[randPalo] === "♦" ? "red" : "black";
  //manipulacion de elementos
};
