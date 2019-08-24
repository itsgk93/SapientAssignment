// QuickSort Visualization
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/143-quicksort.html
// https://editor.p5js.org/codingtrain/sketches/vic6Qzo-j
// https://youtu.be/eqo2LxRADhU
export default function sketch(p){
  var values = [65, 45, 20, 10, 35, 85, 60, 90, 100,120,40,33, 5, 102];
  var w = 30;
  
  var states = [-1,-1,-1,-1,-1,-1];
  
  p.setup = function() {
    p.createCanvas(500, 300);
    
    //values = new Array(floor(width / w));
    //for (let i = 0; i < values.length; i++) {
    //  values[i] = random(height);
    //  states[i] = -1;
   // }
    quickSort(values, 0, values.length - 1);
  }
  
  async function quickSort(arr, start, end) {
    if (start >= end) {
      return;
    }
    let index = await partition(arr, start, end);
    states[index] = -1;
  
    await Promise.all([
      quickSort(arr, start, index - 1),
      quickSort(arr, index + 1, end)
    ]);
  }
  
  async function partition(arr, start, end) {
    for (let i = start; i < end; i++) {
      states[i] = 1;
    }
  
    let pivotValue = arr[end];
    let pivotIndex = start;
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(arr, pivotIndex, end);
  
    for (let i = start; i < end; i++) {
      if (i !== pivotIndex) {
        states[i] = -1;
      }
    }
  
    return pivotIndex;
  }
  
  p.draw = function() {
    p.background(' #f5f2d0');
  
    for (let i = 0; i < values.length; i++) {
      p.noStroke();
      if (states[i] === 0) {
        p.fill('#E0777D');
      } else if (states[i] === 1) {
        p.fill('#4f514e');
      } else {
        p.fill('#32CD32');
      }
      p.rect(i * w, p.height -( values[i]*2) - 30, w, values[i]*2);
      p.textSize(20);
      p.text(values, 1, p.height - 1);

    }
  }
  
  async function swap(arr, a, b) {
    await sleep(800);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }}