document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.querySelector(".menu-items");

  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      menuItems.style.display = "flex";
    } else {
      menuItems.style.display = "none";
    }
  });

  // Optional: Close menu when a link is clicked (on small screens)
  const links = document.querySelectorAll(".menu-items a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 480) {
        menuToggle.checked = false;
        menuItems.style.display = "none";
      }
    });
  });
});