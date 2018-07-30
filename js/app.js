/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in 
        another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in 
        another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position
        (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
/** this is the processes of clicking the cards. i have used event delegetion */

const allCards=document.querySelector('.deck');  
allCards.addEventListener('click',listenToCardEvent);

function listenToCardEvent(evt){
    if(evt.target.nodeName === 'LI'){
        const eachCard=evt.target;
        if(!openedCards.includes(eachCard) &&
            !alreadyMatchedCards.includes(eachCard)){
            togglingUnit(eachCard);
            addOpenedCards(eachCard);
        }
        
    }
}
function togglingUnit(eachCard){
    eachCard.classList.toggle('open');
    eachCard.classList.toggle('show');
    
}

function addOpenedCards(eachCard){
    openedCards.push(eachCard);
    console.log(openedCards);
    if(openedCards.length===2){
        compareCards();
        openedCards.length=0;
    }
}

let openedCards=[];
let alreadyMatchedCards=[];

function compareCards(){
    let x=openedCards[0];
    let y=openedCards[1];
    let xx=x.firstElementChild.className;
    let yy=y.firstElementChild.className;
    if(xx===yy){
        x.classList.toggle('match');
        y.classList.toggle('match');
        alreadyMatchedCards.push(x);
        alreadyMatchedCards.push(y);
    } else{
        setTimeout(function(){
            hideTheCards(x.classList);
            hideTheCards(y.classList);
        },777);
    }
}
function hideTheCards(hide){
    hide.toggle('open');
    hide.toggle('show');
}