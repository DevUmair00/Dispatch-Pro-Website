const navDialog = document.getElementById("mobile-menu");

function handleMenu() {
    navDialog.classList.toggle("hidden");
}



//==================================================================     NavBar   =========================================================================================================


var tl = gsap.timeline()

tl.from(".nav-logo",{
    x:-40,
    scale:0.8,
    opacity:0,
    duration:0.5
})

tl.from(".nav-item",{
    x:-20,
    opacity:0,
    duration:0.3,
    stagger:0.1,
    scrub:true
})

gsap.from(".quote-btn",{
    x:-50,
    opacity:0,
    duration:1,
    scrub:true
})


gsap.from(".quote-btn-arrow",{
    x:40,
    opacity:0,
    duration:2,
    scrub:true
})






//==================================================================     Footer   =========================================================================================================




let footerMedia = gsap.matchMedia();

footerMedia.add("(max-width: 767px)", () => {
  
  gsap.from(".footer-item", {
    y: 40,
    opacity: 0,
    duration: 2,
    stagger: 0.2,
    ease: "power2.out",
    
    scrollTrigger: {
      trigger: ".footer-bottom-section",
      start: "top 85%",   // when footer enters screen
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    }
  });
});


footerMedia.add("(min-width: 768px)", () => {
  
  gsap.from(".footer-item", {
    y: 40,
    opacity: 0,
    duration: 6,
    stagger: 0.1,
    ease: "power2.out",
    
    scrollTrigger: {
      trigger: ".footer-bottom-section",
      start: "top 0%",   
      end: "top 5%",
      scrub: 1,
      toggleActions: "play none none reverse",
    }
  });
});




//==================================================================     Hero Section   =========================================================================================================


var herotl = gsap.timeline();


herotl.from(".hero-title", {
  x: -70,
  opacity: 0,
  duration: 0.5    
});

herotl.from(".hero-text", {
  x: 30,
  opacity: 0,
  duration: 0.5,
  ease: "power2.out"
});


herotl.from(".hero-badge", {
  y: -30,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});


herotl.from(".hero-buttons", {
  y: 30,
  opacity: 0,
  duration: 0.5 ,
  ease: "power2.out"
});






//==================================================================     Hero Form   =========================================================================================================



let formInputMedia = gsap.matchMedia();

formInputMedia.add("(min-width: 768px)", () => {

      herotl.from(".form-input", {
        x: 40,
        opacity: 0,
        duration: 0.1,
        ease: "power2.out",
        scrub: 2,
        stagger: 0.1
      });


});


formInputMedia.add("(max-width: 767px)", () => {

      gsap.from(".form-input", {
        x: 40,
        opacity: 0,
        duration: 0.1,
        ease: "power2.out",

        scrollTrigger: {
          trigger: ".hero-form",
          scroller:"body",
          start: "top 50%",
          end: "top 10%",
          scrub: 2,
          stagger: 0.1,
        }
      });

}); 














//==================================================================     Stats Cards   =========================================================================================================
  

let statsCardMedia = gsap.matchMedia();

statsCardMedia.add("(min-width: 768px)", () => {

  gsap.from(".card", {
    x: -80,
    opacity: 0,
    stagger: 0.1,

    scrollTrigger: {
      trigger: ".card-section",
      start: "top 70%",
      end: "top 30%",
      scrub: 1,
    }
  });

});


statsCardMedia.add("(max-width: 767px)", () => {

  gsap.from(".card", {
    x: 80,
    opacity: 0,
    stagger: 0.2,

    scrollTrigger: {
      trigger: ".card-section",
      start: "top 85%",
      end: "top -50%",
      scrub: 1, 
    }
  });

});




//==================================================================     Responsibilities   =========================================================================================================



let responsibleMedia = gsap.matchMedia();

responsibleMedia.add("(min-width: 768px)", () => {

  gsap.from(".responsible-card", {
    y:30,
    opacity: 0,
    stagger: 0.3,
    scale: 0.2,

    scrollTrigger: {
      trigger: ".responsible-cards",
      start: "top 80%",
      end: "top 40%", 
      scrub: 1,
    }
  });

});


responsibleMedia.add("(max-width: 767px)", () => {

  gsap.from(".responsible-card", {
    x: -150,
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".responsible-section",
      start: "top 90%",
      end: "bottom 50%",
      scrub: 2,         
    }
  });


}); 






//=====================================================================     3 Steps     ======================================================================================================



let stepMedia = gsap.matchMedia();

stepMedia.add("(min-width: 768px)", () => {

  gsap.from(".step-card", {
    x: 80,
    opacity: 0,
    scale: 0.85,
    stagger: 0.3,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".step-section",
      start: "top 20%",
      end: "+=1000",
      scrub: 1,
      pin: true,
    }
  });

});


stepMedia.add("(max-width: 767px)", () => {

  gsap.from(".step-card", {
    y: 60,           
    opacity: 0,
    stagger: 0.2,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".step-section",
      start: "top 10%",
      toggleActions: "play none none reverse", 
    }
  });

});




