// delete row
$("#tb-remove").on('click', '.btn-delete', function () {
    $(this).closest('tr').remove();
});

// Adding Items in the cart

let imgUrl = localStorage.getItem("imgUrl");
let title = localStorage.getItem("title");
let price = localStorage.getItem("price");

console.log(imgUrl);
console.log(title);
console.log(price);