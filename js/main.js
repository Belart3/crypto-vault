let creator_slide = document.querySelector(".creators__info");
let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) =>{
    // updating global variables value on move down event
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = creator_slide.scrollLeft;
}

const dragging = (e) => {
    if (isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    creator_slide.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = (e) => {
    isDragStart =  false
}

creator_slide.addEventListener("mousemove", dragging);

creator_slide.addEventListener("mousedown", dragStart);

creator_slide.addEventListener("mouseUp", dragStop);


let menu = document.querySelector(".navbar__hamburger")
let navDrop = document.querySelector(".mobile-nav")

const toggleMenu = () => {
    navDrop.classList.toggle("d-off")
}

menu.addEventListener("click", toggleMenu)

const button = document.getElementById('button');
const icon =  document.getElementById('icon');

button.onclick = () => icon.classList.toggle('close');


