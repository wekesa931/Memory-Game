# Memory Game Project

## Table of Contents

### Card shuffling
First, i wrote the function which picks a list of all the cards from the `deck`, sends them to the `shuffle()` function and returns them with a different order. The cards are then appended to the parent element, not as additional child elements but it it the order of arrangement that is changed. This is line **line 23-43 JS**
### Setting the Event Listener

next, Using _Event Delegation_,  I set up a `click` event listener type on the cards. Event delegation is very crucial as it saves up code space by reducing on the number of events and functions. The code becomes;
```
allCards.addEventListener('click',listenToCardEvent);
function listenToCardEvent(event){
   ---
  if(evt.target.nodeName === 'LI'){
        const eachCard=evt.target;
   ---
}
```
The alternative for this code could be;
```
allCards.addEventListener('click',listenToCardEvent);
function listenToCardEvent(){
const x=document.querySelector('.card);
const y=x.firstElementChild;
const z=y.firstElementChild;
function(z);
---
}
```
From the above illustration, It is evident that event delegation is important when working with events. Within this function, I also included the function for starting the timer (**line 58-60**) and the next stem when the card is clicked.
### Opening the Cards
The function `function togglingUnit(eachCard)` does this work by appending the `open` and `show` classes to the clicked elements hence displaying the content.
### Comparison of the cards
Function `function addOpenedCards(eachCard)` appends the clicked element to the `openedCards` array list and the `compareCards` function compares if they are similar. The `moveCounter()` function counts this comparison as one move.
##### Matching Cards
The class `match` is toggled to these elements and they are added to the `completeArray[]` list whise purpose is to identify how many cards have been correctly matched before the end game message is displayed.
##### Non-matching cards
The `hideTheCards()` function is run where the `open` and the `show` classes are removed. These are not added to the `completeArray[]` list.
### Counter
The `function moveCounter()` ensures that every move is couted and registered.
### Star award
This is done by `function removeStars()`.
### Display message module
After all the matches have been achieved, the `displayMessage()` function is run.

## Hosting
[This project has been hosted in github pages](http://www.quora.com/Adam-DAngelo)
