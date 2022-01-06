var modal = document.getElementById("textModal");
var btn = document.getElementById("textGen");
btn.addEventListener('click', function() {
    modal.style.display = "block";
})

var shopModal = document.getElementById("shopModal")
var shopBtn = document.getElementById("shopList");
shopBtn.addEventListener('click', function() {
    shopModal.style.display = "block";
})

var span = document.getElementsByClassName("close")[0];
// var span0 = document.getElementByClassName("close")[0];
span.addEventListener('click', function() {
    modal.style.display = "none";
    // shopModal.style.display = "none";
})
// span0.addEventListener('click', function() {
//     // modal.style.display = "none";
//     shopModal.style.display = "none";
// })
window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = "none";
        
    } else if(e.target == shopModal ) {
        shopModal.style.display = "none";
        
    }
})