$(document).ready(function(){
    var makerProductDetails = document.querySelector("#marker_product-details");
    var formItems = document.querySelectorAll(".carousel-group nav a");
    function indicator(e){
        makerProductDetails.style.left = e.offsetLeft + "px";
        makerProductDetails.style.width = e.offsetWidth + "px";
    }
    formItems.forEach(link =>{
        link.addEventListener("click",(e) => {
            indicator(e.target);
        })
    })
    formItems[0].click();
})