const slidesContainer = document.getElementById("slides-container");
const slidesContainer2 = document.getElementById("slides-container-2");
const slide = document.querySelector(".slide");
const slide2 = document.querySelector(".slide-2");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const prevButton2 = document.getElementById("slide-arrow-prev-2");
const nextButton2 = document.getElementById("slide-arrow-next-2");

let indicator = 0;
var element = document.getElementById("slide-1");

nextButton.addEventListener("click", (event)=>{
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        let circles = document.querySelectorAll(".slider-icon");
        circles.forEach((circle)=>{
          circle.classList.remove("active");
        });
        indicator++;
        console.log(indicator, circles);
        if(indicator>circles.length-1){
          indicator=0;
        }
        circles[indicator].classList.add("active");
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
    let circles = document.querySelectorAll(".slider-icon");
    circles.forEach((circle)=>{
      circle.classList.remove("active");
    });
    indicator--;
    console.log(indicator, circles);
    if(indicator<0){
      indicator=circles.length-1;
    }
    circles[indicator].classList.add("active");
  });

nextButton2.addEventListener("click", (event)=>{
    const slideWidth = slide2.clientWidth;
    slidesContainer2.scrollLeft += slideWidth;
});

prevButton2.addEventListener("click", () => {
    const slideWidth = slide2.clientWidth;
    slidesContainer2.scrollLeft -= slideWidth;
    if(indicator>0){
      indicator-=1 ;
      console.log(indicator);
    }
  });
