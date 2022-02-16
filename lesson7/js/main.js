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

  // filter: blur(0em);
  // transition: filter 0.5s;