let ball = document.getElementById("ball");
let particles = document.getElementById("particles");
let btn = document.getElementById("btn");
let supportedFlag = $.keyframe.isSupported();
let ballContainer = document.getElementById("ball-container");

for (let i = 0; i < 35; i++) {
  let particle = document.createElement("span");
  particle.classList.add("particle");

  particles.appendChild(particle);
}

btn.addEventListener("click", function() {
  particles.classList.toggle("active");
  btn.classList.toggle("active");
  ballContainer.classList.toggle("active");

  if (particles.className === "particles active") {
    for (let i = 0; i < 35; i++) {
      let left = Math.random(500) * (250 - -250) - 250;
      let top = Math.random(500) * (250 - -250) - 250;
      let selector = ".particles.active .particle:nth-child(" + (i + 1) + ")";

      $(selector).playKeyframe({
        name: "particle" + i,
        duration: "1.5s",
        delay: i / 40 + "s"
      });

      $.keyframe.define([
        {
          name: "particle" + i,
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
  }
});
