// Loader

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// Typing Animation

const text = "Full Stack Developer & Web Developer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

typing();

// Dark Light Mode

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Back To Top

const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Contact Form Validation

document.getElementById("contactForm")
.addEventListener("submit", function(e){

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if(name === "" || email === ""){
        e.preventDefault();
        alert("Please fill all required fields");
    }
});