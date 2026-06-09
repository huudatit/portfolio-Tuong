// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // --- XỬ LÝ MOBILE MENU ---
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("mobile-overlay");
  const openBtn = document.getElementById("menu-open-btn");
  const closeBtn = document.getElementById("menu-close-btn");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  const openMenu = () => {
    mobileMenu.classList.remove("translate-x-full");
    overlay.classList.remove("hidden");
    setTimeout(() => overlay.classList.remove("opacity-0"), 10);
  };

  const closeMenu = () => {
    mobileMenu.classList.add("translate-x-full");
    overlay.classList.add("opacity-0");
    setTimeout(() => overlay.classList.add("hidden"), 300);
  };

  if (openBtn && closeBtn && overlay) {
    openBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // --- XỬ LÝ COPY EMAIL TẠI CONTACT SECTION ---
  window.copyEmail = function () {
    navigator.clipboard
      .writeText("ibutuong@gmail.com")
      .then(() => {
        alert("Đã sao chép địa chỉ email thành công!");
      })
      .catch((err) => {
        console.error("Không thể sao chép email: ", err);
      });
  };
});
