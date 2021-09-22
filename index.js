// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sorting Array </h1>`;

let names = ['ajay', 'rita', 'david', 'kylie', 'bob'];

// sort strings in descending order
names.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  }
  return 0;
});
console.log(names);

// sort numbers in descending order
let nums = [100, 10, 55, 541, 930, 1000];

nums.sort((a, b) => {
  return b - a;
});
console.log(nums);
