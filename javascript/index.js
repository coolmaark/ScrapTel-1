
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', function() {
        nav.classList.add("active");
    });
}

const close = document.getElementById('close');
if(close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove("active");
    });
}


const parentContainer = document.querySelector('.read-more-container');
parentContainer.addEventListener("click", event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if(!isReadMoreBtn)
        return;
    const currentText = event.target.parentNode.querySelector('.read-more-text');
    currentText.classList.toggle('read-more-text--show');
    current.textContent = current.textContent.includes('Read More') ?
    "Read Less" : "Read More...";
});


