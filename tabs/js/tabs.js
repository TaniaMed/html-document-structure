'use strict';

const tabs = document.getElementById('tabs');
const tabsContent = document.querySelector('.tabs-content');
const tabsNav = document.querySelector('.tabs-nav'); 

let articles = tabsContent.children;
console.log(tabsContent.children);

articles = Array.from(articles);
articles.forEach(article => {
    let articleName = article.getAttribute('data-tab-title');
    let articleIcon = article.getAttribute('data-tab-icon');
 
    let newArt = tabsNav.firstElementChild.cloneNode(true);
    
    tabsNav.appendChild(newArt);
       
    newArt.firstElementChild.textContent = articleName;
    newArt.firstElementChild.classList.remove('fa');
    newArt.firstElementChild.classList.add(articleIcon);

    article.classList.add('hidden');
});

let fa = tabsNav.querySelector('.fa').parentNode;
fa.parentNode.removeChild(fa);


const navBut = tabsNav.children;
tabsContent.firstElementChild.classList.remove('hidden');
tabsNav.firstElementChild.classList.add('ui-tabs-active');


function selectArticle(tabName) {
  articles.forEach(article => {
    if (!article.classList.contains('hidden')) {
      article.classList.add('hidden');
    }
    if (article.getAttribute('data-tab-title') === tabName) {
      article.classList.remove('hidden');
    }
  });
}

tabsNav.addEventListener('click', function(event) {
  let old = tabsNav.querySelector('.ui-tabs-active');
  old.classList.remove('ui-tabs-active');
  event.target.parentNode.classList.add('ui-tabs-active');
  selectArticle(event.target.innerHTML);
});
