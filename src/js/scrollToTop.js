const btn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btn.classList.remove("opacity-0");
        btn.classList.add("opacity-40");
        btn.classList.remove("hidden");
    }
    if (window.scrollY < 200) {
        btn.classList.remove("opacity-40");
        btn.classList.add("opacity-0");
        btn.classList.add("hidden");
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

