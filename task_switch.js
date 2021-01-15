"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

// console.log(colors.indexOf("#FFFFFF"));

const refs = {
  body: document.querySelector("body"),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};

let idSetInterval = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const changeColor = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    refs.body.style.backgroundColor = array[randomIntegerFromInterval(0, i)];
  }
};

const onStartChangeColor = () => {
  idSetInterval = setInterval(() => {
    refs.btnStart.removeEventListener("click", onStartChangeColor);
    changeColor(colors);
  }, 1000);
};

const onStopChangeColor = () => {
  clearInterval(idSetInterval);
  refs.btnStart.addEventListener("click", onStartChangeColor);
};

refs.btnStart.addEventListener("click", onStartChangeColor);
refs.btnStop.addEventListener("click", onStopChangeColor);
