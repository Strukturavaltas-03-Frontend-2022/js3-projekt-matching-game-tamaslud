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

const cardT = document.querySelectorAll('.card');

const addCardListener = () => {
    for (let i = 0; i < cardT.length; i++) {
        cardT[i].addEventListener("click", () => turncard(i));
    }


};

const turncard = (index) => {
    cardT[index].style.setProperty('transform', 'rotateY(180deg)');
}
addCardListener();
