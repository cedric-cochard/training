// j'initialise le panier
let panier = 0;


//je sélectionne les vignettes
const vignettes = document.querySelectorAll('.small');
console.log(vignettes);
vignettes.forEach((item) => {
  console.log('ce message apparait a chaque item du tableau');
  item.addEventListener('click', function(){
    console.log(item, 'vignette cliquée');
    // j'attribue la nouvelle url à l'image grand format
    let imgSource = item.getAttribute('src');
    fullImg.setAttribute('src', imgSource);
    console.log(imgSource);
  });
});

// je sélectionne l'image grand format 
const fullImg = document.getElementById('full');
console.log(fullImg);

// bouton ajouter 
const btn = document.querySelector('.btn-add');
console.log(btn);
btn.addEventListener('click', function(){
  console.log('bouton cliqué');
  panier = panier + 1;
  console.log(panier);
  // j'affiche le contenu 
  if(panier < 1 ) {
    panierContainer.innerHTML = "Vous avez" + " " + panier + " " + "produit dans votre panier";
  } else {
    panierContainer.innerHTML = "Vous avez" + " " + panier + " " + "produits dans votre panier";
  }
});

// je sélectionne la DIV panier-container 
const panierContainer = document.querySelector('.panier-container');
console.log(panierContainer);
