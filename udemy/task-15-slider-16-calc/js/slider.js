  let slideIndex = 1;
  let slides = document.querySelectorAll('.slider-item');
  let prev = document.querySelectorAll('.prev');
  let next = document.querySelectorAll('.next');
  let dotsWrap = document.querySelectorAll('.slider-dots');
  let dots = document.querySelectorAll('.dot');

  const showSlide = (n) => {
      (n > slides.length) ? slideIndex = 1: null;
      (n < 1) ? slideIndex = slides.length: null;
      slides.forEach((item) => item.style.display = "none");
      dots.forEach((item) => item.classList.remove("dot-active"));
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("dot-active")
  };
  const plusSlide = (n) => showSlide(slideIndex += n);
  const currentSlide = (n) => showSlide(slideIndex = n);
  const iterateCollection = (item, body) => [].forEach.call(item, body);

  iterateCollection(prev, (el) => el.addEventListener('click', () => {
      plusSlide(-1);
  }));
  iterateCollection(next, (el) => el.addEventListener('click', () => {
      plusSlide(1);
  }));
  iterateCollection(dotsWrap, (el) => el.addEventListener('click', e => {
      if (e.target.classList.contains('dot')) {
          iterateCollection(dots, (el, i) => {
              if (el === e.target) {
                  currentSlide(i + 1);
              }
          });
      }
  }));
  showSlide(slideIndex);