// document.getElementById("count-el").innerText = 0;

let countEL = document.getElementById("count-el");
console.log(countEL)

let saveEL = document.getElementById("save-el")
console.log (saveEL)

let count = 0;

function increment() {
// console.log(count);
count = count + 1;
countEL.innerText = count;
}


function save() {
let countStr = count + " - "
saveEL.textContent += countStr;
countEL.textContent = 0;
count = 0;
return count;
}

function clear() {

}