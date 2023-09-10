// Locomotic scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


//gsap for animation
gsap.from(".nav",{y:"-50",duration:1.5,ease:"elastic"});
gsap.from("#h1,#h2",{y:"-500%",ease:"power2",delay:0.3});
gsap.from( ".h6",{x:"-650", delay:0.5});
gsap.from(".smallheadings",{x:"300",delay:0.5});
gsap.from(".first_footer",{y:"100",delay:0.7});

//scrollTrigger
gsap.registerPlugin(ScrollTrigger);



gsap.from(".elem1",{x:"-1500",ScrollTrigger:{trigger:".elem1",start:400},duration:0.3,delay:1});
gsap.from(".elem2",{x:"-1500",ScrollTrigger:{trigger:".elem2",start:300},duration:0.3,delay:1.5});
gsap.from(".elem3",{x:"-1500",ScrollTrigger:{trigger:".elem3",start:200},duration:0.3,delay:1.8});



gsap.set(".ball", { xPercent: -50, yPercent: -50 });
const ball = document.querySelector(".ball");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.3;

const xSet = gsap.quickSetter(ball, "x", "px");
const ySet = gsap.quickSetter(ball, "y", "px");

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});

gsap.ticker.add(() => {
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());

  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  xSet(pos.x);
  ySet(pos.y);
});

