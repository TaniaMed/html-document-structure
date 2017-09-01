'use strict';

const slides = document.querySelector('.slides');
slides.firstElementChild.classList.add('slide-current');

const sliderNav = document.querySelector('.slider-nav');
const buttons = sliderNav.querySelectorAll('a');

let prevBut;
let nextBut;
let firstBut;
let lastBut;

Array.from(buttons).forEach(function(button) {
    switch(button.getAttribute('data-action')){
        case 'prev': 
            prevBut = button;
        break;
        case 'next': 
            nextBut = button;
        break;
        case 'first': 
            firstBut = button;
        break;
        case 'last': 
            lastBut = button;
        break;
    }
});
function disabledButtons(action1, action2, action3, action4) {
    if (action1) {
        prevBut.classList.add('disabled');
    } else {
        prevBut.classList.remove('disabled');
    }
    if (action2) {
        nextBut.classList.add('disabled');
    } else {
        nextBut.classList.remove('disabled');
    }
    if (action3) {
        firstBut.classList.add('disabled');
    } else {
        firstBut.classList.remove('disabled');
    }
    if (action4) {
        lastBut.classList.add('disabled');
    } else {
        lastBut.classList.remove('disabled');
    }
}

disabledButtons(true, false, true, false);

function clickNav(event) {
    if (!event.target.classList.contains('disabled')) {
        let currentSlide = document.querySelector('.slide-current');
        if (event.target === prevBut) {
            let prevSlide = currentSlide.previousElementSibling;
            prevSlide.classList.add('slide-current');
            if (!prevSlide.previousElementSibling) {
                disabledButtons(true, false, true, false);
            } else {
                disabledButtons(false, false, false, false);
            }
        } 
        if (event.target === nextBut) { 
            let nextSlide = currentSlide.nextElementSibling;
            nextSlide.classList.add('slide-current');
            if (!nextSlide.nextElementSibling) {
                disabledButtons(false, true, false, true);
            } else {
                disabledButtons(false, false, false, false);
            }
        }
        if (event.target === firstBut) { 
            let firstSlide = slides.firstElementChild;
            firstSlide.classList.add('slide-current');
            disabledButtons(true, false, true, false);
        }
        if (event.target === lastBut ) { 
                let lastSlide = slides.lastElementChild;
                lastSlide.classList.add('slide-current');
                disabledButtons(false, true, false, true);
        }
        currentSlide.classList.remove('slide-current');
    }
}

sliderNav.addEventListener('click', clickNav);



