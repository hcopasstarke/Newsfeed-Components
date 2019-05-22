// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    this.domElement = domElement;
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.innerText = 'expand';
    this.expandButton.addEventListener('click', () => {
      this.expandArticle('this');
    })
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
  }
}

let articles = document.querySelectorAll('.article');
articles.forEach(article => {
  return new Article(article);
})