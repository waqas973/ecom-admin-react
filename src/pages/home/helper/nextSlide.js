export const nextSlide = (totalImg, slide, setSlide) => {
  if (slide === totalImg - 1) {
    setSlide(0);
  } else if (slide < totalImg) {
    setSlide(slide + 1);
  }
};
