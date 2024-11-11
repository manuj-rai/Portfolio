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


// Get the dark mode toggle checkbox and body element
const toggleCheckbox = document.querySelector('.input');
const body = document.body;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Check if the user has previously set a theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggleCheckbox.checked = true; // Set the checkbox to checked
} else {
    body.classList.remove('dark-mode');
    toggleCheckbox.checked = false; // Set the checkbox to unchecked
}

// Toggle dark mode when checkbox is clicked
toggleCheckbox.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    
    // Save the theme preference in localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

