console.log("connecté !");
const form = document.getElementById('form');
console.log(form);
const todo = document.getElementById('todo');
console.log(todo);

form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('bouton cliqué');
  const todoValue = todo.value;
  console.log('value',todoValue);
  // je créé un élément 
  let item = `
                <div class="item">
                  <p>${todoValue}</p>
                  <button class="btn-delete">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <button class="btn-archive">
                    <i class="fas fa-check-circle"></i>
                  </button>
                </div>
              `
  const listItems = document.querySelector('.list-items');
  console.log(listItems);
  // je place item dans listItems 
  listItems.innerHTML += item;
  // je sélectionne tous les boutons btn-delete existants dean sla page 
  const btnDelete = document.querySelectorAll('.btn-delete');
  console.log('delete',btnDelete);
  btnDelete.forEach(i => {
    console.log('btn-delete');
    i.addEventListener('click', function(){
      console.log('btn-delete cliqué');
      i.parentElement.remove();
    });
  });
  // je sélectionne tous les boutons btn-archive existants dans la page 
  const btnArchive = document.querySelectorAll('.btn-archive');
  console.log(btnArchive);
  btnArchive.forEach(i => {
    console.log('btn-archive');
    i.addEventListener('click', function(){
      // je cible l'élément parent de i 
      const parent = i.parentElement;
      // j'agis sir la div parent (class item)
      parent.classList.toggle('done');
    })
  });
  // réinitialiser le formulaire 
  form.reset();
});