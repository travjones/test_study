import {shuffle} from './helper';
import pspa from './pspa';

// paths to stimuli gifs
const stimuli = [
  "stimuli/1.gif",
  "stimuli/2.gif",
  "stimuli/3.gif",
  "stimuli/4.gif"];

// randomize stimuli
var stimSet = shuffle(stimuli);

// app container
var appcontainer = document.getElementById("app");

export default function sample() {

  // temp
  pspa();

  // // setup task skeleton
  // var taskHTML = `
  // <div class="task-container">
  //   <div class="u-full-width timer" id="timer"></div>
  //   <div class="task-container u-full-width" id="sample-container"></div>
  // </div>`

  // appcontainer.innerHTML = taskHTML;

  // // elements
  // var timerEl = document.getElementById("timer");
  // var sampleContainer = document.getElementById("sample-container");

  // // timer init
  // var timer = 0;

  // // timer/stimulus presentation logic
  // var sampleTask = setInterval(() => {
  //   timer++;
  //   timerEl.innerHTML = timer;
  //   console.log(timer);

  //   // render first stimulus
  //   renderSample(0);

  //   switch (timer) {
  //     case 15:
  //       renderSample(1);
  //       break;
  //     case 30:
  //       renderSample(2);
  //       break;
  //     case 45:
  //       renderSample(3);
  //       break;
  //     case 60:
  //       console.log("done with sample");
  //       pspa();
  //       clearInterval(sampleTask);
  //       break;
  //   }

  // }, 1000);
}

function renderSample(i) {
  let stim = stimSet[i];
  let stimulus = stim,
  sampleHTML = `
  <div class="task-container u-full-width" id="sample">
    <img src="${ stimulus }">
  </div>
  `;
  var sampleContainer = document.getElementById("sample-container");
  sampleContainer.innerHTML = sampleHTML;
}
