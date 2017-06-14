'use strict';

const tabs = document.getElementById('tabs');
const tabsContent = documet.getElementsByClassName('tabs-content');
const tabsNav = documet.getElementsByClassName('tabs-nav'); 

const articles = tabsContent.children;

Array.from(articles).forEach(article => {
    let articlesName = article.getAttribute('data-tab-title');
    let articlesIcon = article.getAttribute('data-tab-icon');
 
    let newArt = tabsNav.firstElementChild.cloneNode(true);
    tabsNav.appendChild(newArt);
    
    newArt.textContent = articlesName;
    newArt.classList.remove('fa');
    newArt.classList.add(articlesIcon);
    tabsNav.getElementsByClassName('fa').parentNode.removeChild(tabsNav.getElementsByClassName('fa'));
});
 
const navBut = tabsNav.children;
navBut.children.classList.add('hidden');
tabsNav.firstElementChild.classList.remove('hidden');
tabsNav.firstElementChild.classList.add('ui-tabs-active');

Array.from(navBut).forEach(newA => {
   newA.addEventListener(click, function() {
       let old = tabsNav.getElementsByClassName('ui-tabs-active');
       old.classList.add('hidden');
       old.classList.remove('ui-tabs-active');
       newA.classList.add('ui-tabs-active');
   });
});
 



var attribute = element.getAttribute(attributeName);