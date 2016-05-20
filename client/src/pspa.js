import {shuffle} from './helper';
import form from './form';

// app container
var appcontainer = document.getElementById("app");


// data object to hold frequency of selection across stimuli
var data = {}

// array to hold src of each selection
var choices = [];

var trialCounter = 0;

// timer init
var timer = 0;

var makingChoice = false;

// stim pairs
const stimpairs = [
  ["stimuli/1.gif", "stimuli/2.gif"],
  ["stimuli/1.gif", "stimuli/3.gif"],
  ["stimuli/1.gif", "stimuli/4.gif"],
  ["stimuli/2.gif", "stimuli/3.gif"],
  ["stimuli/2.gif", "stimuli/4.gif"],
  ["stimuli/3.gif", "stimuli/4.gif"]
];

var temp = shuffle(stimpairs);
var randstimpairs = [];

for (var i = 0; i < stimpairs.length; i++) {
  var t = shuffle(temp[i]);
  randstimpairs.push(t);
}

console.log(randstimpairs);

export default function pspa() {
  // setup task skeleton
  var taskHTML = `
  <div class="task-container">
    <div class="container timer" id="timer"></div>
    <div id="sample-container" class="row"></div>
    <div id="button-container" class="row">
      <div class="six columns">
        <button id="btnLeft" class="button-primary" disabled>^</button>
      </div>
      <div class="six columns">
        <button id="btnRight" class="button-primary" disabled>^</button>
      </div>
    </div>
  </div>
  `;

  appcontainer.innerHTML = taskHTML;

  // elements
  var timerEl = document.getElementById("timer");
  var sampleContainer = document.getElementById("sample-container");
  var leftBtn = document.getElementById("btnLeft");
  var rightBtn = document.getElementById("btnRight");


  // render first pair
  renderPair(trialCounter);

  var left = document.getElementById("left");
  leftBtn.addEventListener("click", leftHandler);

  var right = document.getElementById("right");
  rightBtn.addEventListener("click", rightHandler);

  // timer
  var timerFunc = setInterval(() => {

    if (timer === 3) {
      makingChoice = true;
      leftBtn.disabled = false;
      rightBtn.disabled = false;
      timerEl.innerHTML = "pick your favorite";
      console.log("yo1!")
    } else {
      timer++;
      timerEl.innerHTML = timer;
      console.log(timer);
    }

  }, 1000);
}

function renderPair(i) {
  let stim = randstimpairs[i];
  let pair = stim,
  pspaHTML = `
    <div class="six columns">
      <img src="${ pair[0] }" id="left" class="pspa-stimulus">
    </div>
    <div class="six columns">
      <img src="${ pair[1] }" id="right" class="pspa-stimulus">
    </div>`;

  var sampleContainer = document.getElementById("sample-container");
  sampleContainer.innerHTML = pspaHTML;
  console.log(pair);
}

function leftHandler() {
  var left = document.getElementById("left");
  var choice = left.getAttribute("src");
  choices.push(choice);
  nextTrial();
}

function rightHandler() {
  var right = document.getElementById("right");
  var choice = right.getAttribute("src");
  choices.push(choice);
  nextTrial();
}

function nextTrial() {
  console.log(choices);
  trialCounter++

  if (trialCounter > 5) {
    postData();
    form();
    return;
  }

  makingChoice = false;
  renderPair(trialCounter);
  timer = 0;
  var leftBtn = document.getElementById("btnLeft");
  var rightBtn = document.getElementById("btnRight");
  leftBtn.disabled = true;
  rightBtn.disabled = true;
}

function postData() {
  console.log("post: " + choices);
}