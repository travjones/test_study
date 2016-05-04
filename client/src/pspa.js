import {shuffle} from './helper';

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
  var appcontainer = document.getElementById("app");
  // TO-DO
  // write template -- use img src attribute to keep track of stim?
  // render randstimpairs
  // data -> freq of selection

}