
function myMenuFunction() {
  // ❌ There was a space in "myNavMenu " (extra space)
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    // ✅ Add a space before "responsive" to separate classes
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// DARK MODE TOGGLE
const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Optional: change icon or text
  if (body.classList.contains("dark")) {
    toggleSwitch.innerHTML = `<i class="fa-solid fa-sun"></i>`;
  } else {
    toggleSwitch.innerHTML = `<i class="fa-solid fa-moon"></i>`;
  }
});

// TYPING EFFECT
var typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Developer", "YouTuber :)"],
  loop: true,
  typeSpeed: 80, // ✅ Correct property name (was typespeed)
  backSpeed: 50, // ✅ Correct property name (was backspeed)
  backDelay: 1500, // ✅ Correct property name (was backdelay)
});

// SCROLL REVEAL ANIMATIONS
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social-icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });
sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
  origin: "right", 
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });







