import sample from './sample'

export default function start() {
  console.log("From start.js!")

  var startHTML = `
    <div class="start-container u-full-width">
      <h1>Instructions -- Read before you hit Start.</h1>
      <p>This project involves two sections. In the first section you will be presented with a series of example websites, one at a time. Each website will be presented on the screen for a fixed duration of 30 seconds. The purpose of this section is to familiarize each participant to the different websites were are interested in getting your feedback on. Following this first section, the second section will then present two websites at a time and, after a short period of time, ask you to choose which of the two websites you prefer. Please note that you can quit the research project at any time and can contact the Primary Investigator (david.j.cox@ufl.edu) or the Research Supervisor (dallery@ufl.edu) with any questions you may have. Click the button below to begin the study. </p>
      <div class="start-btn" id="start-btn"><span>Start<span></div>
    </div>
  `

  var appcontainer = document.getElementById("app");
  appcontainer.innerHTML = startHTML;
  var startBtn = document.getElementById("start-btn");

  startBtn.addEventListener('click', () => {sample();});
}