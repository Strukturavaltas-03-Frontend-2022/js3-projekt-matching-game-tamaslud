'use strict';
/*

let cards = [
    {1:{
        name:'1',
        visible: true,
        selectable : true,
        faceImage : ""
    }},


];
*/
let countCards = 0;

const cardT = document.querySelectorAll('.card');


const addCardListener = () => {
    for (let i = 0; i < cardT.length; i++) {
        cardT[i].addEventListener("click", () => turncard(i));
    }


};

const turncard = (index) => {
    countCards +=1;
    if (countCards == 2) {
        undefined;
    } else {
        cardT[index].style.setProperty('transform', 'rotateY(180deg)');
    }


}

const initialize = () => {
    addCardListener();
    
}
initialize();
