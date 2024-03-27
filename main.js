function Slideshow(){
    const carslides = document.querySelectorAll('.slide');
    const btnPrev = document.querySelector('.btnPrev')
    const btnNext = document.querySelector('.btnNext')
    const dotSlide = document.querySelector('.dotContainer')
    let currentSlide = 0;

    const activeDot = function(slide){
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        document.querySelector(`.dot[data-slide='${slide}']`).classList.add('active')
    }

    activeDot(currentSlide);

    const changeSlide = function(slides){
        carslides.forEach((slide, index) => (slide.style.transform = `translateX(${100 * (index-slides)}%)`))
    }
    changeSlide(currentSlide)

    btnNext.addEventListener('click', function(){
        currentSlide++;
        if(carslides.length - 1 < currentSlide){
            currentSlide = 0;
        }
        changeSlide(currentSlide)
        activeDot(currentSlide)
    })

    btnPrev.addEventListener('click', function(){
        currentSlide--;
        if (0 >= currentSlide){
            currentSlide = 0;
        }
          changeSlide(currentSlide)
          activeDot(currentSlide) 
        
    })

    dotSlide.addEventListener('click', function(e){
        if(e.target.classList.contains('dot')){
            const slide =   e.target.dataset.slide;
            changeSlide(slide)
            activeDot(slide)
        }
    });
    
};
Slideshow()