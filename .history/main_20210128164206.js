const glass = document.getElementById("glass");
const tl = gsap.timeline({
  defaults: { ease: "power2.inOut", duration: 1.5 },
});
tl.from("img", { x: "-10%", opacity: 0 })
  .from(".container", { opacity: 0, delay: 0.5, duration: 1 }, "-=1.5")
  .from(".container", { x: "-20%", backdropFilter: "blur(0px)" })
  .from(".seq", { y: -30, opacity: 0, duration: 0.5 }, "-=0.5");
