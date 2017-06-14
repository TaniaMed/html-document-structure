'use strict';

const todoLists = document.getElementsByClassName('todo-list');
Array.from(todoLists).forEach(todoList => {
    const checkbox = todoList.querySelector('input');
    Array.from(checkbox).forEach(chB =>
        chB.onchange = function() {
            if (this.checked) {
                const done = todoLists.getElementByclassName('done');
                let node = input.parentNode;
                node.renove();
                insertAfter(node, done.children);
            } else {
                const undone = todoLists.getElementByclassName('undone');
                let node = input.parentNode;
                node.renove();
                insertAfter(node, undone.children);
            }
        });     
});
