// document.getElementById("count-el").innerText =4;

//stores the count
//listen form click after cick increment count
//change the count in html

let currentPassCount = 0;
let countEL = document.getElementById("count-el");

let saveStr = document.getElementById("save-el");


function increment()
{
    currentPassCount += 1
    console.log(currentPassCount);
     countEL.textContent = currentPassCount;

}

function save()
{
    saveStr.textContent += currentPassCount+ " - " ;
    currentPassCount=0;
    countEL.textContent = currentPassCount;
}


