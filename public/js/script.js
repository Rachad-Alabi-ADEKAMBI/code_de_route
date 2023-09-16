/*import { Application } from '@splinetool/runtime';
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/cv1nun-3z7SV32be/scene.splinecode');
*/


function displayLeft() {
    const left = document.getElementById('left');
    const menu = document.getElementById('menu');
      left.style.display = 'block';
  //  menu.style.z-index = '-99999';
  }

  function closeLeft(){
    const left = document.getElementById('left');
      left.style.display = 'none';
}

function changeUrl(txt){
    window.location.replace('http://127.0.0.1:8080/#' + txt)
  }


function updateURL() {
    const sections = ['hero', 'red', 'steps', 'testimonies']; // Define your section IDs here
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
            link_hero.style.color = 'red';

            link_red.style.color = 'grey';
            link_red_dot.style.color = 'grey';

            link_steps.style.color = 'grey';
            link_steps_dot.style.color = 'grey'

      } else if (currentUrl.includes('/#red')) {
            link_red.style.color = 'white';
            link_red_dot.style.color = 'white'

            link_hero.style.color = 'grey';
            link_hero.style.color = 'grey';

            link_steps.style.color = 'grey';
            link_steps_dot.style.color = 'grey'
    }
     else if (currentUrl.includes('/#steps')) {
        link_steps.style.color = '#273250';
        link_steps_dot.style.color = 'red';

        link_red.style.color = 'grey';
        link_red_dot.style.color = 'grey';

        link_hero.style.color = 'grey';
        link_hero.style.color = 'grey';
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





