const slidesContainer = document.getElementById("slides-container");
const slidesContainer2 = document.getElementById("slides-container-2");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const prevButton2 = document.getElementById("slide-arrow-prev-2");
const nextButton2 = document.getElementById("slide-arrow-next-2");

nextButton.addEventListener("click", (event)=>{
    const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });

nextButton2.addEventListener("click", (event)=>{
    const slideWidth = slide.clientWidth;
        slidesContainer2.scrollLeft += slideWidth;
});

prevButton2.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer2.scrollLeft -= slideWidth;
  });
