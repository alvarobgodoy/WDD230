// Lazy loading images:
const images = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
    image.removeAttribute('data-src');
    image.style.filter = 'blur(0em)';
    image.style.transition = 'filter 0.5s';
    };
  };

if('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    images.forEach((img) => {
      observer.observe(img);
    });
  } else {
    images.forEach((img) => {
      loadImages(img);
    });
  }

// Local Storage:
const thisVisit = Date.now();
let message;
let lastVisit = localStorage.getItem('last-visit');

if (lastVisit == null) {
    message = 'Come back later and see how much time passed since your last visit!'
} else {
    let sinceLastVisit = thisVisit - lastVisit;

    let factor = 1000 * 60 * 60 * 24;

    let lastVisitDays = sinceLastVisit / factor;
    lastVisitDays = Math.round(lastVisitDays);
    if (lastVisitDays == 0) {
        message = 'Today was your first visit to our site!';
    } else if (lastVisitDays == 1) {
        message = `It's been ${lastVisitDays} day since your last visit`
    } else {
      message = `It's been ${lastVisitDays} days since your last visit`
    }
}

document.getElementById('lastVisit').textContent = message;
localStorage.setItem("last-visit", thisVisit);

// Footer
let lastModified = document.lastModified;
    
document.getElementById('lastUpdate').textContent = (`Last modification: ${lastModified}`);
let currentYear = document.querySelector('#currentYear');

year = new Date().getFullYear();

currentYear.textContent = year;

// Menu
function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle('open');
  document.getElementById('hamburgerBtn').classList.toggle('open');
}

const btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;