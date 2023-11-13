let inisializeHamburger = 0;
const hamburgerMenu = document.querySelector('#hamburger');
hamburgerMenu.addEventListener('click',function(){
    hamburgerMenu.classList.toggle("hamburger-active");
    if(inisializeHamburger >= 1) {
        hamburgerMenu.classList.toggle("hamburger-non-active");
    }
    inisializeHamburger += 1;
    const navActive = document.querySelector(".nav-active");
    if(hamburgerMenu.classList.contains("hamburger-active")) {
        navActive.classList.toggle("translate-x-[100%]");
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector('.intro').style.filter = "blur(5px)";
    } else {
        navActive.classList.toggle("translate-x-[100%]");
        document.querySelector('.intro').style.filter = "blur(0px)";
        document.querySelector("body").style.overflow = "scroll";
    }
});

var x = window.matchMedia("(max-width: 768px)");
if(x.matches){
    const navList = document.querySelectorAll(".nav-active-content ol li:not(#resume)");
    for(let i = 0; i < navList.length; i++){
        navList[i].addEventListener('click', function(){
        hamburgerMenu.click();
        })
    }
}

var x = window.matchMedia("(min-width: 768px)");
const slideButton = document.querySelector('.slide');
let workButton = document.querySelectorAll('.list-worked button:not(.slide)');
let workButtonTemp = "";
let kontenTemp = "";
let inisializeContent = 0;
for(let i = 0; i < workButton.length; i++){
    workButton[i].addEventListener('click', function(){
        workButton[0].classList.remove('inisialize');
        workButtonTemp.disabled = false
        workButton[i].disabled = true;
        workButtonTemp = workButton[i];

        if(inisializeContent < 1) {
            document.querySelector('.upstatement-content').style.display = "none";
        } else {
            kontenTemp.style.display = "none";
        }
        inisializeContent += 1;
        
        switch(i){
            case 1:
                document.querySelector('.apple-content').style.display = "block";
                kontenTemp = document.querySelector('.apple-content');
                if(x.matches){
                    slideButton.style.transform = 'translateY(45px)';
                } else {
                    slideButton.style.transform = 'translateX(135px)';
                }
                break;
            case 2:
                document.querySelector('.scout-content').style.display = "block";
                kontenTemp = document.querySelector('.scout-content');
                if(x.matches){
                    slideButton.style.transform = 'translateY(90px)';
                } else {
                    slideButton.style.transform = 'translateX(270px)';
                }
                break;
            case 3:
                document.querySelector('.starry-content').style.display = "block";
                kontenTemp = document.querySelector('.starry-content');
                if(x.matches){
                    slideButton.style.transform = 'translateY(135px)';
                } else {
                    slideButton.style.transform = 'translateX(405px)';
                }
                break;
            case 4:
                document.querySelector('.mullenLowe-content').style.display = "block";
                kontenTemp = document.querySelector('.mullenLowe-content');
                if(x.matches){
                    slideButton.style.transform = 'translateY(180px)';
                } else {
                    slideButton.style.transform = 'translateX(540px)';
                }
                break;
            case 0:
                document.querySelector('.upstatement-content').style.display = "block";
                kontenTemp = document.querySelector('.upstatement-content');
                if(x.matches){
                    slideButton.style.transform = 'translateY(0px)';
                } else {
                    slideButton.style.transform = 'translateX(0px)';
                }
                break;
            
        }
        slideButton.style.transitionDuration = '300ms';
    })
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".intro", {
    opacity: 0,
    delay: 0.5,
    duration: 0.3,
    y: 50
})

gsap.from(".icon", {
    opacity: 0,
    delay: 0.5,
    x:-50,
    duration: 0.3,
})

gsap.from(".nav-active-content", {
    opacity: 0,
    delay: 0.5,
    x:50,
    duration: 0.3
})

gsap.from(".sosmed-nav", {
    opacity: 0,
    delay: .5,
    y:50,
    duration: .3
})

gsap.from(".pict-about-me", {
    opacity:0,
    y:75,
    duration: 1,
    scrollTrigger: {
        trigger: ".my-photo",
        start: "top 90%",
        markers: true
    }
})

gsap.from(".title-about-me", {
    opacity:0,
    x:-75,
    duration: 1,
    scrollTrigger: {
        trigger: ".my-photo",
        start: "top 90%",
    }
})

gsap.from(".self-desc", {
    opacity:0,
    y:-75,
    duration: 1,
    scrollTrigger: {
        trigger: ".my-photo",
        start: "top 90%",
    }
})