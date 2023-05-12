'use strict';

const drinkName = document.getElementById('name');
const drinkUrl = document.getElementById('url');
const drinkDetail = document.getElementById('detail');

const addBtn = document.getElementById('add');
const saveBtn = document.getElementById('save');
const closeBtn = document.getElementById('close');

function allClear() {
  drinkName.value = '';
  drinkUrl.value = '';
  drinkDetail.value = '';
}

function toggleDisplay() {
  const modal = document.querySelector('.modal-section');
  allClear();
  modal.classList.toggle('flex-center');
  modal.classList.toggle('none');
}

function makeDrinkType() {
  const types = document.getElementById('types');
  const span = document.createElement('span');

  span.classList.add('type');
  span.innerHTML = `❤️‍🔥 ${drinkName.value}`;

  types.appendChild(span);
}

function makeDrinkInfo() {
  const drinks = document.getElementById('drinks');
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');

  figure.classList.add('drink');
  img.classList.add('img-drink');
  figcaption.classList.add('explain-drink');

  const nameValue = drinkName.value;
  const urlVal = drinkUrl.value;
  const detailVal = drinkDetail.value;

  img.src = urlVal;
  img.alt = nameValue;
  if (detailVal.indexOf(nameValue) !== -1) {
    let start = detailVal.indexOf(nameValue);
    let end = detailVal.indexOf(nameValue) + (nameValue.length + 1);

    let dt = [...detailVal];
    dt.splice(start, 0, '<b>');
    dt.splice(end, 0, '</b>');
    figcaption.innerHTML = dt.join('');
  } else {
    figcaption.innerHTML = detailVal;
  }

  figure.appendChild(img);
  figure.appendChild(figcaption);
  drinks.appendChild(figure);

  makeDrinkType();
  toggleDisplay();
}

addBtn.addEventListener('click', toggleDisplay);
closeBtn.addEventListener('click', toggleDisplay);
saveBtn.addEventListener('click', makeDrinkInfo);
