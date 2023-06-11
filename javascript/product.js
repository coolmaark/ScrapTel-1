
let title = localStorage.getItem('title');
let price = localStorage.getItem('price');
// let mainImgId = localStorage.getItem('main-img-id');

document.getElementById("title").innerHTML = title;
document.getElementById("price").innerHTML = price;

document.getElementById("main-img").setAttribute("src","../images/" + title + ".png");

document.getElementById("p1").setAttribute("src","../images/" + title + "1.png");
document.getElementById("p2").setAttribute("src","../images/" + title + "2.png");
document.getElementById("p3").setAttribute("src","../images/" + title + "3.png");
document.getElementById("p4").setAttribute("src","../images/" + title + "4.png");


let mainImg = document.getElementById('main-img');
let smallImg = document.getElementsByClassName('small-img');


for (let i=0; i<4; ++i) {
    smallImg[i].addEventListener("click", function() {
        [mainImg.src, smallImg[i].src] = [smallImg[i].src, mainImg.src];
    });
}
