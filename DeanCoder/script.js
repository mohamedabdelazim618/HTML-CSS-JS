// ========== 1. Welcome Alert ==========
window.addEventListener("load", function () {
    alert("👋 Welcome to Dean Coder Website!");
});

// ========== 2. Scroll-to-Top Button ==========
let scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆ Top";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#2980b9";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.borderRadius = "5px";
scrollBtn.style.display = "none";

// Show button on scroll
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// ========== 3. Change Header Color on Scroll ==========
let header = document.querySelector("h1");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.color = "#e67e22";
    } else {
        header.style.color = "#2c3e50";
    }
});

// ========== 4. Fade-in Animation on Scroll ==========
let fadeElems = document.querySelectorAll("section, article, aside, div, table, form");

window.addEventListener("scroll", function () {
    fadeElems.forEach(elem => {
        let position = elem.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            elem.style.opacity = "1";
            elem.style.transform = "translateY(0)";
        }
    });
});

// Apply initial styles for fade effect
fadeElems.forEach(elem => {
    elem.style.opacity = "0";
    elem.style.transform = "translateY(40px)";
    elem.style.transition = "all 0.6s ease-out";
});

// ========== 5. Live Date & Time in Footer ==========
let footer = document.querySelector("footer");
let timeDiv = document.createElement("p");
footer.appendChild(timeDiv);

function updateTime() {
    let now = new Date();
    timeDiv.innerText = "📅 " + now.toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

// ========== 6. Dark Mode Toggle ==========
let darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "🌙 Dark Mode";
document.body.appendChild(darkModeToggle);

darkModeToggle.style.position = "fixed";
darkModeToggle.style.bottom = "80px";
darkModeToggle.style.right = "20px";
darkModeToggle.style.padding = "10px 15px";
darkModeToggle.style.border = "none";
darkModeToggle.style.background = "#2980b9";
darkModeToggle.style.color = "white";
darkModeToggle.style.cursor = "pointer";
darkModeToggle.style.borderRadius = "5px";

darkModeToggle.onclick = function () {
    document.body.classList.toggle("dark-mode");
};

// Add dark mode styles
let style = document.createElement("style");
style.innerHTML = `
    body.dark-mode {
        background-color: #2c3e50;
        color: white;
    }
    body.dark-mode h1 {
        color: #e67e22;
    }
    body.dark-mode #scrollTopBtn {
        background: #e67e22;
    }
`;
document.head.appendChild(style);
