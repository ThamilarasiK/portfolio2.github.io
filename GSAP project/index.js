gsap.registerPlugin(ScrollTrigger);

// Pepsi Image Animation
gsap.fromTo(
    "#pepsi-img",
    {
        opacity: 0,
        rotation: 0,
    },
    {
        opacity: 0.9,
        duration: 10,
        rotation: 360,
    }
);

gsap.fromTo(
    ".title",
    {
        opacity: 0,
        x: 100,
    },
    {
        opacity: 1, 
        duration: 10,
        x: 0,
    }
);

gsap.fromTo(
    ".title",
    {
        opacity: 0,
        y: 150,
    },
    {
        opacity: 1, 
        duration: 10,
        y: 0,
        scrollTrigger: {
            trigger: ".title", 
            start: "top bottom",
            end: "bottom top",
            markers: true,
            scrub: true,
        },
    }
);

gsap.fromTo(
    "#merinda",
    {
        opacity: 0,
        rotation: 0,
    },
    {
        opacity: 0.9,
        duration: 10,
        rotation: 3600,
        scrollTrigger: {
            trigger: "#merinda",
            start: "top bottom",
            end: "bottom top",
            markers: true,
            scrub: true,
        },
    }
);
