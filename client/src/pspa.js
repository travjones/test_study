import {shuffle} from './helper';

// app container
var appcontainer = document.getElementById("app");


// data object to hold frequency of selection across stimuli
var data = {}

// array to hold src of each selection
var choices = [];

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
  // render first pair
  renderPair(0);
  
  var left = document.getElementById("left");
  left.addEventListener("click", leftHandler);

  var right = document.getElementById("right");
  left.addEventListener("click", leftHandler);

  // timer init
  var timer = 0;

  // timer/stimulus presentation logic
  var pspaTask = setInterval(() => {
    timer++;
    console.log(timer);
    
    switch (timer) {
      case 15:
        renderPair(1);
        break;
      case 30:
        renderPair(2);
        break;
      case 45:
        renderPair(3);
        break;
      case 60:
        renderPair(4);
        break;
      case 75:
        renderPair(5);
        break;
      case 90:
        console.log("done with pspa");
        clearInterval(pspaTask);
        break;
    }

  }, 1000);
  // TO-DO
  // write template -- use img src attribute to keep track of stim?
  // render randstimpairs
  // data -> freq of selection

}

function renderPair(i) {
  let stim = randstimpairs[i];
  let pair = stim,
  taskHTML = `
  <div id="sample-container" class="task-container row">
    <div class="six columns">
      <img src="${ pair[0] }" id="left">
    </div>
    <div class="six columns" id="right">
      <img src="${ pair[1] }">
    </div>
  </div>`;

  appcontainer.innerHTML = taskHTML;
  console.log(pair);
}

function leftHandler() {
  var left = document.getElementById("left");
  var choice = left.getAttribute("src"); 
  choices.push(choice);
}

function rightHandler() {
  var right = document.getElementById("right");
  var choice = right.getAttribute("src");
  choices.push(choice);
}