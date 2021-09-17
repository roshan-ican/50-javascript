const sliderContainer = document.querySelector('.slider-container')
const sliderRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const slideHeight = sliderContainer.clientHeight
  if(direction === 'up') {
    activeSlideIndex++
    if(activeSlideIndex > slideLength - 1){
      activeSlideIndex = 0

    }
  }
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
}


console.log(slidesLength)