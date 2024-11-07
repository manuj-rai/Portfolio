function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
    window.onscroll = function () {
        if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    scrollToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}