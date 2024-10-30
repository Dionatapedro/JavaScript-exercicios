var slide = document.querySelector('.slideshow');
var images = [
    './img/galaxy1.jpg',
    './img/galaxy2.jpeg',
    './img/galaxy3.jpg',
    './img/galaxy4.jpg',
]

var time = 2000;
var count = 0;

function moveSlideShow(){
    slide.src = images[count];

    if(count < images.length -1){
        count++
    } else {
        count = 0;
    }

    setTimeout("moveSlideShow()", time);
}

window.onload = moveSlideShow;