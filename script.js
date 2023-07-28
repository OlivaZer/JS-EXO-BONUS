
    // Récupérez l'élément du DOM ayant l'id "container" et stockez-le dans la variable "container"
    const container = document.getElementById('container');

     // Initialisez un tableau vide pour stocker les carrés
    const squares = [];
  
    // // Je créer une boucle pour créer une grille de 15x15 carrés à l'intérieur du conteneur

    // La boucle (i) s'exécute 15 fois pour créer les lignes de carrés dans la grille.
    for (let i = 0; i < 15; i++) {
      // La boucle (j) s'exécute 15 fois pour créer les colonnes de carrés dans chaque ligne.
      for (let j = 0; j < 15; j++) {
        // Créez un nouvel élément "div" pour représenter un carré
        const square = document.createElement('div');
        // Ajoutez la classe "square" au carré pour appliquer les styles CSS
        square.classList.add('square');
        // Ajoutez le carré en tant qu'enfant du conteneur pour l'afficher à l'écran
        container.appendChild(square);
        // Ajoutez le carré au tableau "squares" pour une manipulation ultérieure
        squares.push(square);
      }
    }
    
    // Initialisez la couleur actuelle à "blanc"
    let currentColor = 'white';

    // Parcourez chaque carré dans le tableau "squares" pour ajouter des gestionnaires d'événements
    squares.forEach(square => {
      // Lorsqu'un carré est cliqué, changez sa couleur en fonction de la couleur actuelle
      square.addEventListener('click', () => {
        square.style.backgroundColor = currentColor;
      });
      // Lorsqu'un carré est double-cliqué, réinitialisez sa couleur en blanc
      square.addEventListener('dblclick', () => {
        square.style.backgroundColor = 'white';
      });
    });

    // Ajoutez un gestionnaire d'événements pour détecter les touches de clavier enfoncées sur tout le document
    document.addEventListener('keydown', (event) => {

      // Si l'utilisteur appuie sur la flêche du haut de son clavier (ArrowUp), alorsla couleur selectionnée passe en jaune
      if (event.key === 'ArrowUp') {
        currentColor = 'yellow';

      // Sinon, si l'utilisateur appuie sur la flèche du bas de son clavier (ArrowDown) alors couleur selectionnée passe en noir 
      } else if (event.key === 'ArrowDown') {
        currentColor = 'black';
      }
    });
  