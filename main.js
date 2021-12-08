'use strict'

const details = document.body.firstElementChild;
const lorem = details.innerText.toLowerCase();
details.open = false;

let alpha = '';
const aCode = 97;

for (let i = 0; i < 26; i++) {
  alpha += String.fromCharCode(aCode + i);
}

function countLetters(arr) {
  let obj = {};

  for (let i = 0; i < alpha.length; i++) {
    obj[alpha[i]] = 0;
    for (let j = 0; j < arr.length; j++) {
      if (alpha[i] === arr[j]) {
        obj[alpha[i]]++;
      }
    }
  }

  return obj;
}

// function sortStats(stats) {
//   stats = Object.entries(stats);
//   return stats.sort((a, b) => b[1] - a[1]);
// }

var sortStats = stats => Object.entries(stats).sort((a, b) => b[1] - a[1]);

function showTable(pairs) {
  const table = document.createElement('table');
  table.border = 1;
  for (const pair of pairs) {
    const tr = document.createElement('tr');
    for (const value of pair) {
      const td = document.createElement('td');
      td.append(value);
      tr.append(td);
    }
    table.append(tr);
  }

  document.body.appendChild(table);
}

showTable(sortStats(countLetters(lorem)));
