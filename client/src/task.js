import {shuffle} from './helper';

export default function task() {
  // paths to stimuli gifs
  const stimuli = [
    "stimuli/1.gif",
    "stimuli/2.gif",
    "stimuli/3.gif",
    "stimuli/4.gif"];

  var stimSet = shuffle(stimuli);
  console.log(stimSet);
}