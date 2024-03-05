gsap.from("#navbar",{
    y:-100,
    opacity:0,
    stagger:0.3
})
gsap.to("#navbar",{
    y:-0,
    opacity:1,
    
})
gsap.from("#links a",{
    y:-100,
    opacity:0,
    stagger:0.2,
    delay:.5
})
gsap.to("#links a",{
  
    opacity:1,
    
})
gsap.from("#page1>video",{
    x:-900,
    opacity:0,

    
})
gsap.to("#page1>video",{
    x:0,
    opacity:1,

})

gsap.from("#text h1,#text h3",{
    x:100,
    // stagger:0.5,
    opacity:0
})
gsap.to("#text h1,#text h3",{
    x:0,
    opacity:1
})
