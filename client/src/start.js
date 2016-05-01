import task from './task'

export default function start() {
  console.log("From start.js!")

  var startHTML = `
    <div class="start-container">
      <p>Paste instructions here.</p>
      <div class="start-btn" id="start-btn"><span>Start<span></div>
    </div>
  `

  var appcontainer = document.getElementById("app");
  appcontainer.innerHTML = startHTML;
  var startBtn = document.getElementById("start-btn");

  startBtn.addEventListener('click', () => {task();});
}