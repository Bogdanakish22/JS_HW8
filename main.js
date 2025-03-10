
const array = ["apple", "banana", "cherry", "date"];

let result = "";

for (let i = 0; i < array.length; i++) {
  result += array[i]; 
  if (i < array.length - 1) {
    result += ", "; 
  }
}

console.log(result); 



const arrays = ["apple", "banana", "cherry", "date"];


const results = arrays.join(", ");

console.log(results); 




let cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

cards.splice(2, 1); 

console.log(cards); 




let cardsX = ["Card 1", "Card 2", "Card 3", "Card 4"];


cardsX.splice(cardsX.length, 0, "Card 6");

console.log(cardsX); 



let cardsY = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 6"];

cardsY[3] = "Updated Card 4";

console.log(cardsY); 

