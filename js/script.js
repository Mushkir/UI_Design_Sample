// JS for content effects
effects();

function effects() {
  let sr = ScrollReveal({
    origin: "top",
    distance: "65px",
    duration: 2000,
    delay: 450,
  });

  //Intro Contents
  sr.reveal(".heading", { origin: "left" });
  sr.reveal(".intro-para", { origin: "left" });
  sr.reveal(".btn", { origin: "left" });
  sr.reveal(".content-img", { origin: "right" });

  // "What Can You Discover?" Contents

  // First Row
  sr.reveal(".content-heading");
  sr.reveal(".row-heading");
  sr.reveal(".html-icon", { origin: "left" });
  sr.reveal(".css-icon", { origin: "left" });
  sr.reveal(".js-icon");
  sr.reveal(".tailwind-icon", { origin: "right" });
  sr.reveal(".react-icon", { origin: "right" });

  // Second Row
  sr.reveal(".php-icon", { origin: "left" });
  sr.reveal(".nodejs-icon", { origin: "right" });

  // Third Row
  sr.reveal(".mysql-icon", { origin: "left" });
  sr.reveal(".mongoDB-icon", { origin: "right" });

  // Fourth Row
  sr.reveal(".photoshop-icon", { origin: "left" });
  sr.reveal(".illustrator-icon");
  sr.reveal(".figma-icon", { origin: "right" });

  // Browse by Dates - Section, Live Session Coding Section
  sr.reveal(".desc");

  // Browse by Dates - Section, Live Session Coding Video Effect
  sr.reveal(".effect-left", { origin: "left" });
  sr.reveal(".effect-right", { origin: "right" });

  // Footer
  sr.reveal('.location')
  sr.reveal(".address", { origin: "left" });
  sr.reveal(".about-cdn", { origin: "right" });
}

// Toggle Menu
let nav_links = document.querySelectorAll(".nav-links")[0];
nav_links.style.height = "0px";

function showMenu() {
  if (nav_links.style.height === "0px") {
    nav_links.style.height = "200px";
  } else {
    nav_links.style.height = "0px";
  }
}
