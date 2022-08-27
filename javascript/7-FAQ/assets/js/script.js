const questions = document.querySelectorAll('.question');
console.log(questions);
// j'accède à un élément précis du tableau questions à savoir la question 2
const deux = questions[1];
console.log(deux);
// fonction standard
questions.forEach(function(item){
  console.log('item');
});
// fonction sous la norme ES6
questions.forEach((item) => {
  console.log('item', item);
  item.addEventListener('click', function(){
    console.log('question cliquée');
    const next = item.nextElementSibling; 
    console.log(next);
    // rendre visible la réponse
    next.classList.toggle('visible');
    // je cible et stocke l'icone de item
    const icone = item.lastElementChild; 
    console.log(icone);
    icone.classList.toggle('fa-chevron-up');
  });
});