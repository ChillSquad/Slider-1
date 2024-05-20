const upBtn = document.getElementById("up");
const downBtn = document.getElementById("down");
const slide = document.getElementById("slide");
const slideCount = slide.querySelectorAll("div").length;
const bar = document.getElementById("bar");
const wrapper = document.getElementById("wrap");
let activeSlideIndex = 0;

bar.style.top = `-${(slideCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  clickEvent("up");
});

downBtn.addEventListener("click", () => {
  clickEvent("down");
});

function clickEvent(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
    }
  }

  const height = wrapper.clientHeight;
  bar.style.transform = `translateY(${activeSlideIndex * height}px)`;
  slide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
}
