'use strict';
console.log('Ready!');

const button = document.querySelector('.btn')
const listCard = document.querySelector('.contentCard');
const imgDefault = 'assets/images/descarga.png';

const api = `https://raw.githubusercontent.com/Adalab/cards-data/master/`;


const handlerClick = () =>{
  listCard.innerHTML = '';
    let inputSelect = document.querySelector('.check');

      fetch(api+inputSelect.value+'.json')
      .then(response => response.json())
      .then(data => {

    for (let i= 0; i<data.length; i++){
        let number = data[i].pair;
        let img = data[i].image;
        listCard.innerHTML += `<li class="cardLi" id="${number}"><img class="img-cardLi" src="${imgDefault}"></li>`
    }
 });

}

button.addEventListener('click',handlerClick)
