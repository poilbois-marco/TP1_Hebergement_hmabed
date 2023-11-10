    // Initialiser le compteur
    var clickCounter = 0;

    // Fonction pour incrémenter le compteur et mettre à jour l'affichage
    function incrementCounter() {
      clickCounter++;
      document.getElementById('counter').innerText = 'Clics : ' + clickCounter;
      if (clickCounter === 100) {
        launchFireworks();
      }
    }

    function launchFireworks() {
      document.getElementById('fireworks').style.display = 'block';

      // Utilisation d'Anime.js pour créer une animation de feu d'artifice
      anime({
        targets: '#fireworks',
        translateY: [
          { value: -500, duration: 1000 },
          { value: 0, duration: 800 }
        ],
        opacity: [
          { value: 0, duration: 1000 },
          { value: 1, duration: 800 }
        ],
        easing: 'easeInOutQuad',
        complete: function(anim) {
          // Réinitialiser le compteur et masquer le feu d'artifice après l'animation
          clickCounter = 0;
          document.getElementById('counter').innerText = 'Clics : ' + clickCounter;
          document.getElementById('fireworks').style.display = 'none';
        }
      });
    }
    

