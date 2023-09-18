//h1
var showText = function (target, message, index, interval) {
    if (index < message.length) {
      //$(target).append(message[index++]);
      $(target).text($(target).text() + message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }

  $(function () {
    showText("#msg", "Passe ton code de la route, vite fait, très bien fait !!", 0, 80);
  });


  //header btn
  $(document).ready(function() {
    // Sélectionnez le bouton
    var $button = $('.animated-button');

    // Définissez la largeur finale du bouton
    var finalWidth = 220; // Ajustez la largeur finale selon vos besoins

    // Animez la largeur du bouton
    $button.css('width', finalWidth + 'px');
});



function displayLeft() {
    const left = document.getElementById('left');
    const menu = document.getElementById('menu');
     // left.style.display = 'block';
        left.style.left = '0';
        left.style.transition =  '1s';

  }

  function closeLeft(){
    const left = document.getElementById('left');
    //  left.style.display = 'none';
    left.style.left = '-100%';
    left.style.transition =  '1s';
}




function changeUrl(txt){
    window.location.replace('http://127.0.0.1:8080/#' + txt)
  }


function updateURL() {
    const sections = ['hero', 'red', 'steps', 'play', 'solutions',
    'testimonies', 'register', 'blue']; // Define your section IDs here
    const scrollPosition = window.scrollY;

    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            const sectionTop = rect.top + scrollPosition;
            const sectionBottom = sectionTop + rect.height;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Update the URL fragment
                window.history.replaceState(null, null, `#${section}`);
                break; // Exit the loop once a section is found
            }
        }
    }
}





// Function to detect the URL while scrolling
function detectUrlOnScroll() {
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        // Define a threshold for when "not at the very top" means something
        const threshold = 100; // You can adjust this value as needed
        const logo = document.getElementById('logo');
        const nav = document.getElementById('nav');

        // Check if the scroll position is below the threshold
        if (scrollY > threshold) {
            logo.style.display = 'none';
            nav.style.display = 'none';
        } else{
            logo.style.display = 'block';
                nav.style.display = 'block';
        }


      const currentUrl = window.location.href;
      const link_hero = document.getElementById('link_hero');
      const link_hero_dot = document.getElementById('link_hero_dot');

    const link_red = document.getElementById('link_red');
    const link_red_dot = document.getElementById('link_red_dot');

    const link_steps = document.getElementById('link_steps');
    const link_steps_dot = document.getElementById('link_steps_dot');

    const link_testimonies = document.getElementById('link_testimonies');
    const link_testimonies_dot = document.getElementById('link_testimonies_dot');

      if (currentUrl.includes('/#hero')) {
            link_hero.style.color = '#273250';
            link_hero_dot.style.color = 'red';

            link_red.style.color = 'grey';
            link_red_dot.style.diplay = 'grey';

            link_steps.style.color = 'grey';
            link_steps_dot.style.color = 'grey'

            link_testimonies.style.color = 'grey';
            link_testimonies_dot.style.color = 'grey';


      } else if (currentUrl.includes('/#red')) {
            link_red.style.color = 'white';
            link_red_dot.style.color = 'white'

            link_hero.style.color = 'grey';
            link_hero_dot.style.color = 'grey';

            link_steps.style.color = 'grey';
            link_steps_dot.style.color = 'grey';

            link_testimonies.style.color = 'grey';
            link_testimonies_dot.style.color = 'grey';
    }
     else if (currentUrl.includes('/#steps')) {
        link_steps.style.color = '#273250';
        link_steps_dot.style.color = 'red';

        link_red.style.color = 'grey';
        link_red_dot.style.color = 'grey';

        link_hero.style.color = 'grey';
        link_hero_dot.style.color = 'grey';

        link_testimonies.style.color = 'grey';
        link_testimonies_dot.style.color = 'grey';

    }
    else if (currentUrl.includes('/#play')) {
        link_testimonies.style.color = 'grey';
        link_testimonies_dot.style.color = 'grey';

        link_steps.style.color = 'white';
        link_steps_dot.style.color = 'white';

        link_red.style.color = 'grey';
        link_red_dot.style.color = 'grey';

        link_hero.style.color = 'grey';
        link_hero_dot.style.color = 'grey';
    }
    else if (currentUrl.includes('/#solutions')) {
        link_testimonies.style.color = 'grey';
        link_testimonies_dot.style.color = 'grey';

        link_steps.style.color = '#273250';
        link_steps_dot.style.color = 'red';

        link_red.style.color = 'grey';
        link_red_dot.style.color = 'grey';

        link_hero.style.color = 'grey';
        link_hero_dot.style.color = 'grey';
    }
     else if (currentUrl.includes('/#testimonies')) {
        link_testimonies.style.color = '#273250';
        link_testimonies_dot.style.color = 'red';

        link_steps.style.color = 'grey';
        link_steps_dot.style.color = 'grey';

        link_red.style.color = 'grey';
        link_red_dot.style.color = 'grey';

        link_hero.style.color = 'grey';
        link_hero_dot.style.color = 'grey';
    }

    else if (currentUrl.includes('/#register')) {
        link_testimonies.style.color = 'white';
        link_testimonies_dot.style.color = 'white';

        link_steps.style.color = 'grey';
        link_steps_dot.style.color = 'grey';

        link_red.style.color = 'grey';
        link_red_dot.style.color = 'grey';

        link_hero.style.color = 'grey';
        link_hero_dot.style.color = 'grey';
    }

    else if (currentUrl.includes('/#blue')) {
        link_testimonies.style.color = 'white';
        link_testimonies_dot.style.color = 'white';

        link_steps.style.color = 'grey';
        link_steps_dot.style.color = 'grey';

        link_red.style.color = 'grey';
        link_red_dot.style.color = 'grey';

        link_hero.style.color = 'grey';
        link_hero_dot.style.color = 'grey';
    }

      // Add more conditions as needed based on the URLs you want to detect
    });
  }

// Call the function to start detecting the URL while scrolling
  detectUrlOnScroll();



// Attach the scroll event listener
window.addEventListener('scroll', updateURL);

// Call updateURL initially to set the URL fragment on page load
updateURL();

//displayText();





