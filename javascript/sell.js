var noOfCards = document.querySelectorAll(".pro").length;
for(let i=0; i<noOfCards; ++i) {
    var titleId = document.querySelectorAll(".pro")[i];
    titleId.addEventListener("click", function() {
        var title = this.childNodes[3].childNodes[0].nextElementSibling.innerHTML;
        localStorage.setItem('title', title);
        var price = this.childNodes[3].childNodes[2].nextElementSibling.innerHTML;
        localStorage.setItem('price', price);
        window.location.href = "../html/product.html"
    });
}


// sending data to cart page

// for(let i=0; i<noOfCards; ++i) {
//     let img = document.querySelectorAll(".cart")[i];
//     img.addEventListener("click",function() {
//         let imgUrl = document.querySelectorAll(".pro")[i].childNodes[1].src;
//         let title = document.querySelectorAll(".pro")[i].childNodes[3].childNodes[0].nextElementSibling.innerHTML;
//         let price = document.querySelectorAll(".pro")[i].childNodes[3].childNodes[2].nextElementSibling.innerHTML;
        
//         localStorage.setItem("imgUrl", imgUrl);
//         localStorage.setItem("title", title);
//         localStorage.setItem("price", price);
//     });
// }