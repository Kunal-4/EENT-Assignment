console.log("Hey Kunal");
var btn = document.querySelectorAll('menu-btn')
var ulList = document.querySelector('ul')

function toggleclass() {
    ulList.classList.toggle(".active");
}


btn.addEventListener("click", toggleclass);
