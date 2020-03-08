// let ball = document.getElementById("ball");
let particles = document.getElementById("particles");
let btn = document.getElementById("btn");
let supportedFlag = $.keyframe.isSupported();
let ballContainer = document.getElementById("ball-container");
let letters = document.getElementById("letters");

addSpansforParticles();

btn.addEventListener("click", function() {
  //Add or remove class Active to the elements
  particles.classList.toggle("active");
  btn.classList.toggle("active");
  ballContainer.classList.toggle("active");

  //Add keyFramws dinamically
  if (particles.className === "particles active") {
    for (let i = 0; i < 35; i++) {
      let selector = ".particles.active .particle:nth-child(" + (i + 1) + ")";

      playAnimation(selector, i);
      addKeyFrames(i);
    }

    setTimeout(function() {
      letters.classList.add("active");
    }, 1500);
  } else {
    letters.classList.toggle("active", false);
  }
});

function addSpansforParticles() {
  for (let i = 0; i < 35; i++) {
    let particle = document.createElement("span");
    particle.classList.add("particle");

    particles.appendChild(particle);
  }
}

function playAnimation(elementName, num) {
  $(elementName).playKeyframe({
    name: "particle" + num,
    duration: "1.5s",
    delay: num / 40 + "s"
  });
}

function addKeyFrames(num) {
  let left = randomNum();
  let top = randomNum();

  $.keyframe.define([
    {
      name: "particle" + num,
      from: { transform: "scale(1)" },
      to: {
        left: left + "px",
        top: top + "px",
        transform: "scale(0)",
        visibility: "hidden"
      }
    }
  ]);
}

function randomNum() {
  return Math.random(500) * (250 - -250) - 250;
}
