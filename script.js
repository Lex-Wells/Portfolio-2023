const heroText = document.getElementById("hero-text")
const heroMeContainer = document.getElementById("hero-me-container")
const about = document.getElementById("about")
const navOptionEl = document.querySelectorAll('.nav-option')
const slidingWrapper = document.querySelector('.slider')
const button = document.getElementById("send-button")
const developerHero = document.getElementById("develper-hero")
developerHero.addEventListener("click",()=>{
    // developerHero.classList.toggle("develper-solid")
    console.log("mmm");
})




heroText.addEventListener('click',()=>{
heroText.classList.toggle("hero-text-hide")
heroMeContainer.classList = "hero-me-container-active"

})

heroMeContainer.addEventListener('click',()=>{
    heroMeContainer.classList = "hero-me-container"
    heroText.classList = "hero-text"
})


navOptionEl.forEach(function(option,index){
    option.addEventListener('click', function(){
        slidingWrapper.style.transform = `translateY(${index * -100}vh)`
        // navOptionEl[1].classList.toggle("testMe:hover","testMe:focus")
     
    })
})

