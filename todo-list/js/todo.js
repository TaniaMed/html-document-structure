'use strict';

const todoLists = document.getElementsByClassName('todo-list');
Array.from(todoLists).forEach(todoList => {
    const checkbox = todoList.querySelector('input');
    Array.from(checkbox).forEach(chB =>
        chB.onchange = function() {
            if (this.checked) {
                const done = todoLists.getElementByclassName('done');
                let node = input.parentNode;
                //node.renove();
                done.appendChild(node); 
                //insertAfter(node, done.children);
            } else {
                const undone = todoLists.getElementByclassName('undone');
                let node = input.parentNode;
                //node.renove();
                undone.appendChild(node); 
                //insertAfter(node, undone.children);
            }
        });     
});
