'use strict';

const numberOfCards = 10;

const cardsImages = {
    0: './css/img/ace_of_spades.png',
    1: './css/img/2_of_diamonds.png',
    2: './css/img/3_of_clubs.png',
    3: './css/img/4_of_hearts.png',
    4: './css/img/5_of_spades.png',
    5: './css/img/ace_of_spades.png',
    6: './css/img/2_of_diamonds.png',
    7: './css/img/3_of_clubs.png',
    8: './css/img/4_of_hearts.png',
    9: './css/img/5_of_spades.png',
};

let cardArray = [0,1,2,3,4,5,6,7,8,9];

const randomizeCards = () => {
    for (let index = 0; index < 50; index++) {
        const a = Math.floor(Math.random() * numberOfCards);
        const b = Math.floor(Math.random() * numberOfCards);
        [cardArray[a], cardArray [b]] = [cardArray[b], cardArray [a]];
    }
};

randomizeCards();

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
            <img src="./css/img/card_backside.jpg" width="100%" height="100%" alt="">
        </div>
    </div>`

    boardContainer.innerHTML += (templateCardBox);
}

let countCards = 0;

const allCards = document.querySelectorAll('.card');

const addCardListener = () => {
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener("click", () => turncard(i));
    }


};

const turncard = (index) => {
    countCards +=1;
    if (countCards == 2) {
        undefined;
    } else {
        allCards[index].style.setProperty('transform', 'rotateY(180deg)');
    }


}

const initialize = () => {
    addCardListener();
    
}
initialize();
