let slides = document.getElementsByClassName("slider-projects");
// let barras = document.getElementsByClassName("slider-box-circle");
let indice = 1;

const avanzaSlide = (n) => {
  showSlide((indice += n));
};
const position = (n) => {
  showSlide((indice = n));
};

setInterval(() => {
  showSlide((indice += 1));
}, 10000);

const showSlide = (n) => {
  let i;
  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < barras.length; i++) {
  //   barras[i].className = barras[i].className.replace("active", "");
  // }
  slides[indice - 1].style.display = "flex";
  // barras[indice - 1].className += " active";
};
showSlide(indice);
