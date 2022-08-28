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

const cardT = document.querySelector('.cardt');
const cardTFront = document.querySelector('.front');
const cardTBack = document.querySelector('.back');




const addCardListener = () => {
    cardT.addEventListener("click", () => turncard());
};

const turncard = () => {
    cardTFront.style.setProperty('animation-name', 'loader');
    cardTFront.style.setProperty('animation-duration', '1s');
    cardTBack.style.setProperty('animation-name', 'loader2');
    cardTBack.style.setProperty('animation-duration', '1s');
    
}
addCardListener();
