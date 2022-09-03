'use strict';

const numberOfCards = 10;

const cardsImages = {
    backside : './css/img/card_backside.jpg',
    //
    0: './css/img/ace_of_spades.png',
    1: './css/img/2_of_diamonds.png',
    2: './css/img/3_of_clubs.png',
    3: './css/img/4_of_hearts.png',
    4: './css/img/5_of_spades.png',
    //
    5: './css/img/ace_of_spades.png',
    6: './css/img/2_of_diamonds.png',
    7: './css/img/3_of_clubs.png',
    8: './css/img/4_of_hearts.png',
    9: './css/img/5_of_spades.png',
};

let cardArray = [0,1,2,3,4,5,6,7,8,9];
let turnedCards = [];

const randomizeCards = () => {
    for (let index = 0; index < 50; index++) {
        const a = Math.floor(Math.random() * numberOfCards);
        const b = Math.floor(Math.random() * numberOfCards);
        [cardArray[a], cardArray [b]] = [cardArray[b], cardArray [a]];
    }
};
const cardsToHTML = () => {
    let templateCardBox;
    const boardContainer = document.querySelector('.board');
    
    for (let i = 0; i < 10; i++) {
    const cardPath = cardsImages[cardArray[i]];
    templateCardBox = `
    <div class="card-box">
    <div class="card">
        <div class="card-front">
        <img src="${cardPath}" width="100%" height="100%" alt="">
        </div>
        <div class="card-back">
            <img src="${cardsImages.backside}" width="100%" height="100%" alt="">
            </div>
            </div>`
            boardContainer.innerHTML += (templateCardBox);
        }
};
const addCardListener = () => {
    const allCards = document.querySelectorAll('.card');
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener("click", () => turncard(i));
    }
};
const turncard = (index) => {
    const allCards = document.querySelectorAll('.card');
    turnedCards.push(index);
    checkFinshedGame();
    allCards[index].style.setProperty('transform', 'rotateY(180deg)');
    allCards[index].classList.add('inactive')
    setTimeout(() => {checkLastPair()}, 500);
    
};
const checkFinshedGame = () => {
    turnedCards.length === numberOfCards ? console.log('FINISHED'): {};
    }

const checkLastPair = () => {

    if (turnedCards.length % 2 === 0) {
        const lastPair = turnedCards.slice(-2);
        const isPair = (Math.abs(cardArray[lastPair[0]] - cardArray[lastPair [1]]) === numberOfCards/2);
        console.log(isPair);
        if (!isPair){
            const allCards = document.querySelectorAll('.card');
            for (let index = 0; index < 2; index++) {
                const lastCard = turnedCards.pop();
                allCards[lastCard].style.setProperty('transform', 'rotateY(0deg)');
                allCards[lastCard].classList.remove('inactive')
            }
            
        }
    }

    
}

const allowClick = () => {
    document.querySelector('body').classList.remove('inactive');
}
const banClick = () => {
    document.querySelector('body').classList.add('inactive');
}

const initialize = () => {
    randomizeCards();
    cardsToHTML(); 
    addCardListener();   
};

initialize();
