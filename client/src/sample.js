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
  // timer init
  var timer = 0;

  // render first stimulus
  renderSample(0);
 
  // timer/stimulus presentation logic
  var sampleTask = setInterval(() => {
    timer++;
    console.log(timer);
    
    switch (timer) {
      case 15:
        renderSample(1);
        break;
      case 30:
        renderSample(2);
        break;
      case 45:
        renderSample(3);
        break;
      case 60:
        console.log("done with sample");
        pspa();
        clearInterval(sampleTask);
        break;
    }

  }, 1000);
}

function renderSample(i) {
  let stim = stimSet[i];
  let stimulus = stim,
  taskHTML = `
  <div id="sample-container u-full-width" class="task-container">
    <img src="${ stimulus }">
  </div>
  `;

  appcontainer.innerHTML = taskHTML;
}
