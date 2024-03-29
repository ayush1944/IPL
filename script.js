var crs = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dets){
    crs.style.left= dets.x + "px"
    crs.style.top= dets.y + "px"
    blur.style.left= dets.x -250 + "px"
    blur.style.top= dets.y -250 + "px"
})
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crs.style.scale = 3
        crs.style.border = "1px solid #fff"
        crs.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crs.style.scale = 1
        crs.style.border = "0px solid #FFA500"
        crs.style.backgroundColor = "#FFA500"
    })
})

gsap.to("#nav", {
    backgroundColor: "#19398A", 
    height :"110px" ,
    duration : 0.5,
    scrollTrigger:{
        trigger: "#nav", //jisko triger krna h
        scroller: "body", // jiski wajah se triger hoga
        // markers: true  // adjustment h
        start: "top -10%", // when it starts the viewport
        end: "top -11%", // when it leaves the viewport
        scrub: 1 //  loop me trigger hoga iski value true false ya 1 to 5 tk de skte h, sirf true krne pr gnda sa effect aa rha h
    }
});

gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger: {
        trigger:  "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about img,#about-us",{
    y: 50,
    opacity: 0,
    //stagger: 0.6, // animate krke items alg alg uper aayenge
    duration: 1,
    scrollTrigger:  {
        trigger: "#about",
        scroller: "body",
        start:  "top 60%",
        end: "top 55%",
        scrub: 3
    }
})
gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#page4 h1", {
    y: 90,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 65%",
      end: "top 60%",
      scrub: 3,
    },
  });  