const slidesContainer = document.getElementById("slides-container");
const slidesContainer2 = document.getElementById("slides-container-2");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const prevButton2 = document.getElementById("slide-arrow-prev-2");
const nextButton2 = document.getElementById("slide-arrow-next-2");

let indicator = 0;
var element = document.getElementById("slide-1");

nextButton.addEventListener("click", (event)=>{
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        if(indicator<4){
          indicator+=1 ;
          console.log(indicator);
        }
        element.classList.remove("fill-element");
        var nextEl = element.nextSibling;
        nextEl.classList.add("fill-element");
        // if(indicator==0){
        //   var element = document.getElementById("slide-1");
        //   element.classList.add("fill-element");
        // }
        // else if(indicator=1){
        //   var element = document.getElementById("slide-2");
        //   element.classList.add("fill-element");
        // }
});

prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
    if(indicator>0){
      indicator-=1 ;
      console.log(indicator);
    }
  });

nextButton2.addEventListener("click", (event)=>{
    const slideWidth = slide.clientWidth;
    slidesContainer2.scrollLeft += slideWidth + 117;
    if(indicator<4){
      indicator+=1 ;
      console.log(indicator);
    } 
});

prevButton2.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer2.scrollLeft -= slideWidth;
    if(indicator>0){
      indicator-=1 ;
      console.log(indicator);
    }
  });
