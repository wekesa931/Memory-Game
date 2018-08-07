/**
 * I began with the variable declarations
 */
let theTime=0;
let minutes=theTime/60;
let seconds=theTime%60;
let moves=0;
let timerOff=true;
let theClock;
let completeArray=[];
let openedCards=[];
const allCards=document.querySelector('.deck');  
const restartButton=document.querySelector('.restart');

/**
 *@description This function picks the cards as a list and sends them to the shuffle function
 * which shuffles the cards and returns them, appending them to the parent element.
 * Appending them however, does not create a new list of items but rather changes their
 * order in the parent element.
 */

function shuffleUnit(){
    const cardsToBeShuffled= Array.from(document.querySelectorAll('.deck li'));
    const shuffling=shuffle(cardsToBeShuffled);
    for (const cards of shuffling){
        allCards.appendChild(cards);
    }
}
shuffleUnit();

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

/**
 * Here we have the click event listener. whenever a card is clicked, the 
 * following process begins.
 */
allCards.addEventListener('click',listenToCardEvent);

/**
 * @description The function checks whether the card has already been selected or has already
 * been matched and depending on the result of the check, initiates the next process.
 */

function listenToCardEvent(evt){
    if(timerOff){
        setTheTime();
        timerOff=false;
    }
    if(evt.target.nodeName === 'LI'){
        const eachCard=evt.target;
        
        if(!openedCards.includes(eachCard) &&
            !eachCard.classList.contains('match')){
                if(openedCards.length<2){
                    openedCards.push(eachCard);
                    togglingUnit(eachCard);
                    addOpenedCards(eachCard);
                    }    
        }    
    }
}
/**
 * the cards are toggled to open
 *  
 */

function togglingUnit(eachCard){
        eachCard.classList.toggle('open');
        eachCard.classList.toggle('show');    
}

/**
 * 
 * @description This function moves the selected cards to
 * a temporary array for comparison 
 * @argument {the selected card} eachCard
 */

function addOpenedCards(eachCard){
    
    if(openedCards.length===2){
        moveCounter();
        compareCards();
    }
}
/**
 * the cards are comppared here
 */

function compareCards(){
    let x=openedCards[0];
    let y=openedCards[1];
    let xx=x.firstElementChild.className;
    let yy=y.firstElementChild.className;
    if(xx===yy){
        x.classList.toggle('match');
        y.classList.toggle('match');
        clearList();
        completeArray.push(x);
        completeArray.push(y);
        displayMessage();
        } else{
           setTimeout(function(){
            hideTheCards(x.classList);
            hideTheCards(y.classList);
            clearList();
        },777);
        
    }
}
function clearList(){
    openedCards.length=0;
}

/**
 * 
 * Untoggled cards are closed
 */
function hideTheCards(hide){
    hide.toggle('open');
    hide.toggle('show');
}
/**
 * @description this function updates the moves made in the game
 */
function moveCounter(){
    moves++;
    const movePane=document.querySelector('.moves');
    movePane.innerHTML=moves;
      if (moves===13 || moves===17){
        removeStars();
    }
}
/**
 * This function updates the number of stars 
 * according to the moves made in the game
 */
function removeStars(){
    const theStars=document.querySelector('.stars');
    const eachStar=theStars.firstElementChild;
    eachStar.parentNode.removeChild(eachStar);
}
/**
 * @description This function sets the timer
 */
function setTheTime(){
    theClock=setInterval(function(){
        theTime++;
        countdown();
    },1000);
}
/**
 * @description This function starts the countdown
 */
function countdown(){
    let minutes=Math.floor(theTime/60);
    let seconds=theTime%60;
    timerBoard=document.querySelector('.clock');
    if(theTime<10){
        timerBoard.innerHTML=minutes+':0'+seconds;
    }else{
        timerBoard.innerHTML=minutes+':'+seconds;
    }   
}
/**
 * @description This function stops the time
 */
function stopTime(){
    clearInterval(theClock);
}
/**
 * This is the modal of the game
 * the time details, moves made and the stars are updated here
 */
function displayMessage(){
    if(completeArray.length===16){
        stopTime();
        const u=document.querySelector('.winning_tab');
        u.classList.toggle('hide');
        fillTheTimeDetail();
        fillTheMovesDetail();
        fillTheStarDetails();
    }
}
function fillTheTimeDetail(){
    const timeUnit=document.querySelector('.time_taken');
    const a=timeUnit.firstElementChild;
    let minutes=Math.floor(theTime/60);
    let seconds=theTime%60;
    a.innerHTML=minutes+':'+seconds;
}
function fillTheMovesDetail(){
    const moveUnit=document.querySelector('.moves_made');
    const b=moveUnit.firstElementChild;
    b.innerHTML=moves;
}
function fillTheStarDetails(){
    const starUnit=document.querySelector('.stars_number');
    const c=starUnit.firstElementChild;
    if(moves<14){
        c.innerHTML=' 3 STARS!';
    }else if(moves>13 && moves<17){
        c.innerHTML=' 2 STARS!';
    }else{
        c.innerHTML=' 1 STAR!';
    }
}
/**
 * @description This function refreshes the game
 */
restartButton.addEventListener('click',listenToRestartEvent)
function listenToRestartEvent(){
    location.reload();
}