    // Initialiser le compteur
    var clickCounter = 0;

    // Fonction pour incrémenter le compteur et mettre à jour l'affichage
    function incrementCounter() {
      clickCounter++;
      document.getElementById('counter').innerText = 'Clics : ' + clickCounter;
    }
