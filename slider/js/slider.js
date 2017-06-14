'use strict';

function ShowFirst(container) {
    const slides = container.getElementsByClassName('slides');
    const  slide = container.getElementsByTagName('li');
    slide[0].classList.add('slide-current');
    const button = container.getElementsByTagName('a');   
    let buttons = Array.from(button);
    buttons[0].classList.add('disabled');
    buttons[2].classList.add('disabled');
}
const sliders = document.getElementsByClassName('slider');
Array.from(sliders).forEach(item => ShowFirst(item));

function nextSlide(container, numButton) {
        const currentSlide = container.parentElement.querySelector('.slide-current');
        currentSlide.classList.remove('slide-current');
        const nextSlide = currentSlide.nextElementSibling; 
        nextSlide.classList.add('slide-current');
    
        const button = container.getElementsByTagName('a');
   
        let buttons = Array.from(button);
        if (!nextSlide.nextElementSibling) {
            buttons[numButton].classList.add('disabled');
            buttons[numButton + 2].classList.add('disabled');
        } 
        if (nextSlide.previousElementSibling) {
            buttons[numButton-1].classList.remove('disabled');  
            buttons[numButton+1].classList.remove('disabled');  
        }
}
function pastSlide(container, numButton) {
        const currentSlide = container.parentElement.querySelector('.slide-current');
        currentSlide.classList.remove('slide-current');
        const nextSlide = currentSlide.previousElementSibling; 
        nextSlide.classList.add('slide-current');
    
        const button = container.getElementsByTagName('a');
   
        let buttons = Array.from(button);
        if (!nextSlide.previousElementSibling) {
            buttons[numButton].classList.add('disabled');
            buttons[numButton + 2].classList.add('disabled');
        } 
        if (nextSlide.nextElementSibling) {
            buttons[numButton+1].classList.remove('disabled');  
            buttons[numButton+3].classList.remove('disabled');  
        }
        
}

function firstSlide(container, numButton) {
        const currentSlide = container.parentElement.querySelector('.slide-current');
        currentSlide.classList.remove('slide-current');
        const slide = container.parentElement.querySelector('.slides');
        const firstSlide = slide.firstElementChild; 
        firstSlide.classList.add('slide-current');
    
        const button = container.getElementsByTagName('a');
   
        let buttons = Array.from(button);
        buttons[numButton].classList.add('disabled');
        buttons[numButton - 2].classList.add('disabled');
        
        buttons[numButton+1].classList.remove('disabled');  
        buttons[numButton-1].classList.remove('disabled');  

}
function lastSlide(container, numButton) {
        const currentSlide = container.parentElement.querySelector('.slide-current');
        currentSlide.classList.remove('slide-current');
        const slide = container.parentElement.querySelector('.slides');
        const firstSlide = slide.lastElementChild; 
        firstSlide.classList.add('slide-current');
    
        const button = container.getElementsByTagName('a');
   
        let buttons = Array.from(button);
        buttons[1].classList.add('disabled');
        buttons[3].classList.add('disabled');
        
        buttons[0].classList.remove('disabled');  
        buttons[2].classList.remove('disabled');  

}

function sliderNav(elem) {
    this.next = function() {
        nextSlide(elem, 1);
    };
    this.prev = function() {
        pastSlide(elem, 0) 
    };
    this.first = function() {
      firstSlide(elem, 2)
    };
    this.last = function() {
      lastSlide(elem, 3);
    };

    let self = this;

    elem.onclick = function(e) {
      let target = e.target;
      let action = target.getAttribute('data-action');
      if (action) {
        self[action]();
      }
    };
}

const sliderN = document.getElementsByClassName('slider-nav');

Array.from(sliderN).forEach(item => new sliderNav(item));