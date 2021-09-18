$(document).ready(function(){
    var maker = document.querySelector("#marker");
    var items = document.querySelectorAll(".carousel-group nav a");
    function indicator(e){
        marker.style.left = e.offsetLeft + "px";
        marker.style.width = e.offsetWidth + "px";
    }
    items.forEach(link =>{
        link.addEventListener("click",(e) => {
            indicator(e.target);
        })
    })
    items[0].click();
})