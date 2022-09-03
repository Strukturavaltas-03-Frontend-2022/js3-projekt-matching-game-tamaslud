'use strict';

const numberOfCards = 10;
const flippingTime = 300; //milliseconds
let newGame; 
let startTime;
let gameTimer;

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
let turnedCards;

const showActualTime = () => {
    const timeValue = (Math.round(Date.now()/1000)-startTime);
    const elapsedMinutes = Math.floor(timeValue / 60);
    const elapsedSeconds = timeValue - (elapsedMinutes * 60)
    const min1 = (Math.floor(elapsedMinutes / 10)).toString();
    const min2 = (elapsedMinutes - (min1 * 10)).toString();
    const sec1 = (Math.floor(elapsedSeconds / 10)).toString();
    const sec2 = (elapsedSeconds - (sec1 * 10)).toString();
    document.querySelector('span.minutes1').innerHTML = min1;
    document.querySelector('span.minutes2').innerHTML = min2;
    document.querySelector('span.seconds1').innerHTML = sec1;
    document.querySelector('span.seconds2').innerHTML = sec2;
};

const randomizeCards = () => {
    for (let index = 0; index < 200; index++) {
        const a = Math.floor(Math.random() * numberOfCards);
        const b = Math.floor(Math.random() * numberOfCards);
        [cardArray[a], cardArray [b]] = [cardArray[b], cardArray [a]];
    }
};
const cardsToHTML = () => {
    let templateCardBox;
    const boardContainer = document.querySelector('.board');
    boardContainer.innerHTML = '';
    
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
        allCards[i].addEventListener("click", () => checkCard(i));
    }
};
const checkCard = (index) => {
    turnedCards.push(index);
    newGame === true ? startTimer() : undefined;
    checkFinshedGame();
    turnCardOn(index);
    setTimeout(() => {allowClick()}, flippingTime);
    turnedCards.length % 2 === 0 ? setTimeout(() => {checkLastPair()}, flippingTime) : {};
    
};

const turnCardOn  = (index) => {
    const allCards = document.querySelectorAll('.card');
    allCards[index].style.setProperty('transform', 'rotateY(180deg)');
    allCards[index].classList.add('inactive');
    banClick();
}
const turnCardOff  = (index) => {
    const allCards = document.querySelectorAll('.card');
    allCards[index].style.setProperty('transform', 'rotateY(0deg)');
    allCards[index].classList.remove('inactive');
    setTimeout(() => {allowClick()}, flippingTime);
    banClick();
}
const startTimer = () => {
    newGame = false;
    startTime = Math.round(Date.now()/1000);
    gameTimer = setInterval(showActualTime, 1000);
}

const checkFinshedGame = () => {
    if (turnedCards.length === numberOfCards) {
        clearInterval(gameTimer);
        setTimeout(() => {initialize()}, 5000)
    }
    }

const checkLastPair = () => {
    const lastPair = turnedCards.slice(-2);
    const isPair = (Math.abs(cardArray[lastPair[0]] - cardArray[lastPair [1]]) === numberOfCards/2);
    console.log(isPair);
    if (!isPair){
        setTimeout(() => {allowClick()}, flippingTime)
        for (let index = 0; index < 2; index++) {
            const lastCard = turnedCards.pop();
            turnCardOff(lastCard);
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
    newGame = true;  
    turnedCards = [];
    document.querySelector('span.minutes1').innerHTML = '0';
    document.querySelector('span.minutes2').innerHTML = '0';
    document.querySelector('span.seconds1').innerHTML = '0';
    document.querySelector('span.seconds2').innerHTML = '0'; 
};

initialize();
