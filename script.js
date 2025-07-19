document.addEventListener('DOMContentLoaded', function () {
  // Loader
  window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
  });

  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Typewriter Effect
  const typewriterText = "Amisha Gupta";
  const typewriterElement = document.getElementById('typewriter');
  let i = 0;

  function typeWriter() {
    if (i < typewriterText.length) {
      typewriterElement.innerHTML += typewriterText.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();

  // Dark/Light Mode Toggle
  const body = document.body;

  document.querySelectorAll('#theme-toggle-desktop, #theme-toggle-mobile').forEach(btn => {
    btn.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      btn.innerHTML = body.classList.contains('dark-mode')
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
  });

});
