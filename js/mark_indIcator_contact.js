$(document).ready(function(){
    var makerContactPage = document.querySelector("#marker");
    var items = document.querySelectorAll(".carousel-group nav a");
    function indicator(e){
        makerContactPage.style.left = e.offsetLeft + "px";
        makerContactPage.style.width = e.offsetWidth + "px";
    }
    items.forEach(link =>{
        link.addEventListener("click",(e) => {
            indicator(e.target);
        })
    })
    items[0].click();
})