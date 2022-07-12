console.log("Hey Kunal");
// var btn = document.querySelectorAll('menu-btn')
// var ulList = document.getElementsByTagName('ul')
var ulList = document.querySelector('ul')

function toggleclass() {
    ulList.classList.toggle(".active");
}
toggleclass();

// btn.addEventListener("click", toggleclass);

// btn.addEventListener('click', ()=>{
//     ul.toggleClass(".active");
// })