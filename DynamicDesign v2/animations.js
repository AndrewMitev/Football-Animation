import anime from './lib/anime.es.js';

let timeline = anime.timeline({
    duration: 9000,
    loop: false,
});

timeline.add({
    targets: '.left',
    keyframes: [
        {left: "-70%"},
        {left: "-10%"},
    ],
    duration: 1000,
    delay: 0,
    easing: 'linear'
});

anime({
    targets: '.right',
    keyframes: [
        {right: "-70%"},
        {right: "-10%"},
    ],
    duration: 1000,
    delay: 0,
    easing: 'linear'
});

timeline.add({
    targets: '.title',
    keyframes: [
        { scale: 20, opacity: 0, filter: "blur(20px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", translateX: "-50%", translateY: "-10%" }
    ],
    duration: 1000,
    direction: "normal",
    easing: 'linear'
  });

  timeline.add({
    targets: '.description',
    keyframes: [
        { opacity: 0, translateX: "-50%", translateY: "-40%" },
        { opacity: 1, translateX: "-50%", translateY: "-30%" }
    ],
    duration: 1000,
    direction: "normal",
    easing: 'linear'
  });

// ------------------ VS -------------------
  const vsDelay = 2500;

  anime({
    targets: '.V',
    keyframes: [
        { opacity: 0, translateX: "-59%", translateY: "-40%" },
        { opacity: 1, translateX: "-49%", translateY: "-50%" }
    ],
    duration: 2000,
    delay: vsDelay,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.S',
    keyframes: [
        { opacity: 0, translateX: "-42%", translateY: "-63%" },
        { opacity: 1, translateX: "-52%", translateY: "-53%" }
    ],
    duration: 2000,
    delay: vsDelay,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.left-big-triangle',
    keyframes: [
        { opacity: 0, translateX: "-37%", translateY: "-35%", skew: "-0.04turn, 6deg"  },
        { opacity: 1, translateX: "-47%", translateY: "-65%", skew: "-0.04turn, 6deg" }
    ],
    duration: 2000,
    delay: vsDelay,
    direction: "normal",
    easing: 'linear'
  });


  anime({
    targets: '.left-small-triangle',
    keyframes: [
        { opacity: 0, translateX: "-36%", translateY: "-30%", skew: "-0.04turn, 6deg"  },
        { opacity: 1, translateX: "-46%", translateY: "-60%", skew: "-0.04turn, 6deg" }
    ],
    duration: 2000,
    delay: vsDelay,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.right-big-triangle',
    keyframes: [
        { opacity: 0, translateX: "-44%", translateY: "-67%", skew: "-18deg"  },
        { opacity: 1, translateX: "-54%", translateY: "-37%", skew: "-18deg" }
    ],
    duration: 2000,
    delay: vsDelay,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.right-small-triangle',
    keyframes: [
        { opacity: 0, translateX: "-45%", translateY: "-73%", skew: "-18deg"  },
        { opacity: 1, translateX: "-55%", translateY: "-43%", skew: "-18deg" }
    ],
    duration: 2000,
    delay: vsDelay,
    direction: "normal",
    easing: 'linear'
  });

  // ------------------ VS  END-------------------

  anime({
    targets: '.first-logo',
    keyframes: [
        { opacity: 0, translateX: "-90%", translateY: "-60%" },
        { opacity: 1, translateX: "-20%", translateY: "-60%" }
    ],
    duration: 2000,
    delay: vsDelay + 500,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.second-logo',
    keyframes: [
        { opacity: 0, translateX: "-10%", translateY: "-60%" },
        { opacity: 1, translateX: "-80%", translateY: "-60%" }
    ],
    duration: 2000,
    delay: vsDelay + 500,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.first-name',
    keyframes: [
        { opacity: 0, translateX: "-18%", translateY: "-100%" },
        { opacity: 1, translateX: "-18%", translateY: "-83%" }
    ],
    duration: 1000,
    delay: vsDelay + 2000,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.second-name',
    keyframes: [
        { opacity: 0, translateX: "-77%", translateY: "-100%" },
        { opacity: 1, translateX: "-77%", translateY: "-83%" }
    ],
    duration: 1000,
    delay: vsDelay + 2000,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.shadow',
    keyframes: [
        { opacity: 0 },
        { opacity: 1 }
    ],
    duration: 1000,
    delay: vsDelay + 2500,
    direction: "normal",
    easing: 'linear'
  });

  // ------------------ END MAIN LOGOS

  timeline.add({
    targets: '.lower-left-logo',
    keyframes: [
        { opacity: 0, translateX: "-8%", translateY: "-2%" },
        { opacity: 1, translateX: "-2%", translateY: "-2%" }
    ],
    duration: 2000,
    delay: 2000,
    direction: "normal",
    easing: 'linear'
  });

  anime({
    targets: '.flexed',
    keyframes: [
        { opacity: 0, translateX: "0%", translateY: "-2%" },
        { opacity: 1, translateX: "-4%", translateY: "-2%" }
    ],
    duration: 1000,
    delay: vsDelay + 2800,
    direction: "normal",
    easing: 'linear'
  });

// ------------------Shadows-

  

  timeline.add({
    targets: '.title-shadow',
    keyframes: [
        { opacity: 0 },
        { opacity: 1 }
    ],
    duration: 1000,
    direction: "normal",
    easing: 'linear'
  });

  timeline.add({
    targets: '.title-shadow',
    keyframes: [
        { scale: "1, 1", translateY: "0px" },
        { scale: "0.6, 0.3", translateY: "0px" },
        { scale: "0.6, 0.3", translateY: "-700px" },
        { scale: "1, 1", translateY: "0px" }
    ],
    duration: 1000,
    direction: "normal",
    easing: 'linear'
  });