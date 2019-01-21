console.log("test!");

var cards = ['queen','queen','king','king'];
var cardsInPlay=[];

var checkForMatch = function(){
  if (cardsInPlay[0]===cardsInPlay[1]){
    console.log('You found a match!');
  } else{
    console.log('Sorry, try again');
  }
}

var flipCard = function(cardId){
  console.log(`User flipped ${cards[cardId]}`)
  cardsInPlay.push(cards[cardId])
  if (cardsInPlay.length===2){
    checkForMatch();
  }
}


/*
var cardOne=cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped "+ cardsInPlay[0]);

var cardTwo=cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped "+ cardsInPlay[1]);

if (cardsInPlay.length===2){
  if (cardOne===cardTwo){
    alert('You found a match!');
  } else{
    alert('Sorry, try again');
  }
}
*/
