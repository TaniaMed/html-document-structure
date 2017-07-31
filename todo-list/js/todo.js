'use strict';

const todoList = document.querySelector('.todo-list');
const deeds = todoList.getElementsByTagName('label');
const doneDeed = todoList.querySelector('.done');
const undoneDeed = todoList.querySelector('.undone');

Array
    .from(deeds)
    .forEach(function(deed) {
        deed.addEventListener('click', function() {
            let input = deed.firstElementChild;
            if (input.checked === true) {
                input.checked = false;
                undoneDeed.appendChild(deed); 
            } else {
                input.checked = true;
                doneDeed.appendChild(deed); 
            }
        })
    });

     
   
