/*import { Application } from '@splinetool/runtime';
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/cv1nun-3z7SV32be/scene.splinecode');
*/


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

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    const textContent = "Passe ton code de la route vite, très bien fait !";

    function typeText() {
        textElement.textContent = textContent;
    }

    setTimeout(typeText, 1000); // Démarrer l'animation après un délai d'une seconde
});



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

/*
function doSomethingIfNotAtTop() {
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
  }

  // Call the function when the page is loaded or when needed
//  window.addEventListener('scroll', doSomethingIfNotAtTop);
*/

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
            link_red_dot.style.color = 'grey';

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





