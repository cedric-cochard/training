console.log("connecté !");
// je sélection et je stocke la DIV posts
const postsContainer = document.querySelector('.posts');
console.log(postsContainer);

const posts = [
{
  titre: "SEO, les bonnes pratiques",
  hashtag: "#SEO",
  extrait:"Les piliers du SEO sont d'ordre de 3 à savoir : la technique, la sémantique et la popularité à cela vient se gréffer l'UX."
},
{
  titre: "UX, les bonnes pratiques",
  hashtag: "#UX",
  extrait:"L'expérience utilisateur rentre en compte dans la prise en compte du classement des sites dans l'indxe de Google."
},
{
  titre: "SEA, les bonnes pratiques",
  hashtag: "#SEA",
  extrait:"Une synergie avec le SEO amène un maximum de performance surs des rêquetes business."
},
];

console.log(posts);

// je passe en revue chaque élément du tableau 
posts.forEach(item =>{
  // console.log('élément',item);
  // création d'une DIV avec template strings
  const article = 
  `
    <div class="post">
      <div class="post-titre"> ${item.titre}<div/>
      <div class="post-hashtag"> ${item.hashtag}<div/>
      <div class="post-extrait"> ${item.extrait}<div/>
    </div>
  `
  console.log('article',article);
  // ajout de l'article dans la DIV dédié postsContainer
  postsContainer.innerHTML += article;
});