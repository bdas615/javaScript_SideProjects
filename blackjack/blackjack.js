
let firstCard = 2;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackJack = false;

if(sum<=20){
    console.log("Do you want to draw a new card?")
} else if(sum === 21){
    console.log("Yoohoo!!You have got blackjack");
    hasBlackJack = true;
} else {
    console.log("You're game is over!");
}



