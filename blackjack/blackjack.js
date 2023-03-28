
let firstCard = 2;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";

if(sum<=20){
    message = "Do you want to draw a new card?";
} else if(sum === 21){
    message = "Yoohoo!!You have got blackjack";
    hasBlackJack = true;
} else {
    message = "You're game is over!";
    isAlive = false;
}

console.log(message);


