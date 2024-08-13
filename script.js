// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.toggle("dark-mode");
  });
});

// Contact Link Alert
const contactLink = document.getElementById("contactLink");
contactLink.addEventListener("click", (event) => {
  event.preventDefault();
  alert("You are about to send an email to the student.");
  window.location.href = contactLink.href;
});
