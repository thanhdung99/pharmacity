var marker;
var items;
var positionArr = [0,0,0];

$(document).ready(function(){
    for (var i = 0; i <= 2; i++){
        items = document.querySelectorAll(`#products-list-${i+1} nav a`);
        for (let j = 0; j < items.length; j++) {
            const link = items[j];
            link.addEventListener("click", (e) => {
                var num = parseInt(e.target.id.slice(14,15));
                marker = document.querySelector(`#marker-${num}`);
                indicator(e.target);
                setIndex(num-1,j);
                console.log(positionArr);
            })
        }
        items[0].click();
    }
})
function indicator(e) { 
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}
function setIndex(index , position) {
    positionArr[index] = position;
}
function prevIndicator(index) {
    positionArr[index]--;
    if (positionArr[index]< 0) {
        positionArr[index] = 3;
    }
    items = document.querySelectorAll(`#products-list-${index + 1} nav a`);
    items[positionArr[index]].click();
}
function nextIndicator(index) {
    positionArr[index]++;
    if (positionArr[index] >= 4) {
        positionArr[index] = 0;
    }
    items = document.querySelectorAll(`#products-list-${index + 1} nav a`);
    items[positionArr[index]].click();
}
