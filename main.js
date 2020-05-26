let sliderImages = document.querySelectorAll('.slide');
let arrowRight = document.getElementById('arrow-right');
let  arrowLeft = document.getElementById('arrow-left');
let current = 0;

// this function will clear all images in the slide
function reset(){
    for (let i = 0; i< sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// initilizes the slider
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';    
}

// show previous image
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block'
    current--;
};

// left arrow click
arrowLeft.addEventListener('click', function(){
    if (current == 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++
};
arrowRight.addEventListener('click', function(){
    if (current === sliderImages.length - 1) {
        current = -1
    }
    slideRight();
});

startSlide()

