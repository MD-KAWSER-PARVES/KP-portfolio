// 1. Sidebar Open and Close Logic
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

sidebarToggle.addEventListener('click', () => sidebar.classList.add('active'));
sidebarClose.addEventListener('click', () => sidebar.classList.remove('active'));

// Close sidebar when clicking a link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => sidebar.classList.remove('active'));
});

// 2. Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
});

// 3. Dynamic Color Theme Switcher Option
const colorPickerBtn = document.getElementById('color-picker-btn');
const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#6f42c1'];
let colorIndex = 0;

colorPickerBtn.addEventListener('click', () => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.documentElement.style.setProperty('--primary-color', colors[colorIndex]);
});



// Floating Animated CTA Button Toggle
const ctaMainBtn = document.getElementById('cta-main-btn');
const ctaOptions = document.getElementById('cta-options');

ctaMainBtn.addEventListener('click', () => {
    ctaOptions.classList.toggle('active');
});
// 5. Scroll to Top Button Visibility & Functionality
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 6. Dynamic Typing Animation
const words = ["Web Developer", "Laravel Enthusiast", "Frontend Designer", "Problem Solver"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.querySelector('.typing-text').textContent += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return;
        }
        timer = setTimeout(loopTyping, 150);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector('.typing-text').textContent = word.join("");
        } else {
            i = (i + 1) % words.length;
            setTimeout(typingEffect, 500);
            return;
        }
        timer = setTimeout(loopDeleting, 100);
    };
    loopDeleting();
}

typingEffect();