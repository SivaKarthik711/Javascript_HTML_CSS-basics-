// counter javascript
let count = 0;
const countheader = document.getElementById("idh1");
const decrease = document.getElementById("DecreaseBtn");
const increase = document.getElementById("IncreaseBtn");
const reset = document.getElementById("ResetBtn" );

decrease.onclick = function(){
    count--;
    countheader.textContent = count;
}

increase.onclick = function(){
    count++;
    countheader.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countheader.textContent = count;
}

