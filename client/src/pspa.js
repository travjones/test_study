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
const stimpairs = ["1-2.gif", "1-4.gif", "2-3.gif", "3-1.gif", "3-4.gif", "4-2.gif"];

var randstimpairs = shuffle(stimpairs);

console.log(randstimpairs);

export default function pspa() {
  // setup task skeleton
  var taskHTML = `
  <div class="task-container">
    <div class="container timer" id="timer"></div>
    <div id="sample-container" class="row"></div>
    <div id="button-container" class="row">
      <div class="six columns">
        <button id="btnLeft" class="button-primary" disabled>left</button>
      </div>
      <div class="six columns">
        <button id="btnRight" class="button-primary" disabled>right</button>
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

    if (timer === 2) {
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
    <div class="twelve columns">
      <img src="/stimuli/${ pair }" id="stimpair" class="pspa-stimulus">
    </div>`;

  var sampleContainer = document.getElementById("sample-container");
  sampleContainer.innerHTML = pspaHTML;
  console.log(pair);
}

function leftHandler() {
  var stimpair = document.getElementById("stimpair");
  var imgsrc = stimpair.getAttribute("src");
  var shards = imgsrc.split("/");
  var choice = shards[2][0];
  console.log(choice);
  choices.push(choice);
  nextTrial();
}

function rightHandler() {
  var stimpair = document.getElementById("stimpair");
  var imgsrc = stimpair.getAttribute("src");
  var shards = imgsrc.split("/");
  var choice = shards[2][2];
  console.log(choice);
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