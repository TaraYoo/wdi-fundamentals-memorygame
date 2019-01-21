console.log("test!");

var cards = [{rank: 'queen',
              suit: 'hearts',
              cardImage: 'images/queen-of-hearts.png'},
              {rank: 'queen',
              suit: 'diamonds',
              cardImage: 'images/queen-of-diamonds.png'},
              {rank: 'king',
              suit: 'hearts',
              cardImage: 'images/king-of-hearts.png'},
              {rank: 'king',
              suit: 'diamonds',
              cardImage: 'images/king-of-diamonds.png'}];
var cardsInPlay=[];

var checkForMatch = function(){
  if (cardsInPlay[0]===cardsInPlay[1]){
    console.log('You found a match!');
  } else{
    console.log('Sorry, try again');
  }
}

var flipCard = function(cardId){
  console.log(`User flipped ${cards[cardId].rank}`);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImage);
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
