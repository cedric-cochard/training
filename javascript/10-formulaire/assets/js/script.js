console.log("connecté !");
// je sélectionne et stocke tous les éléments nécessaires 
const form = document.getElementById('formulaire');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

//je détecte la validation du formulaire 
form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log('formulaire envoyé');
  // je récupère les valeurs de chacun des inputs
  const prenomValue = prenom.value.trim();
  console.log('prenom', prenom.value.length);
  const nomValue = nom.value.trim();
  console.log('nom', nom.value);
  const emailValue = email.value.trim();
  console.log('email', email.value);
  const messageValue = message.value.trim();
  console.log('message', message.value);
  // amélioration du l'UX 
  //  tous les messages d'erreurs sont invisibles
  const msgError = document.querySelectorAll('.error');
  msgError.forEach(error=> {
    error.classList.add('insivible');
  });
  // je vérifie les informations de l'utilisateur 
  if(prenomValue.length < 2 || prenomValue.length > 10) {
    console.log('erreur prenom');
    prenom.nextElementSibling.classList.remove('invisible');
  } else if 
    (nomValue.length < 3 || nomValue.length > 15){
      console.log('erreur nom');
      nom.nextElementSibling.classList.remove('invisible');
    } else if (messageValue.length <10 || messageValue > 100) {
      console.log('erreur message');
      message.nextElementSibling.classList.remove('invisible');
    } else {
      console.log('succès');
      const titre = document.getElementById('titre');
      titre.innerText = "Votre message a bien été envoyé !"
      form.remove();
    }

});


