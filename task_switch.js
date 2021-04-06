"use strict";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let idSetInterval = null;

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
}

refs.startBtn.addEventListener('click', onChangeBodyColor);
refs.stopBtn.addEventListener('click', onStopChangeBodyColor);

function randomIntegerFromInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function onChangeBodyColor() {
    
idSetInterval = setInterval(() => {
        const i = randomIntegerFromInterval(0, (colors.length - 1));
        refs.body.style.backgroundColor = colors[i];
        refs.startBtn.disabled = true;
    }, 1000);
};

function onStopChangeBodyColor() {
    clearInterval(idSetInterval);
    refs.startBtn.disabled = false;
}



