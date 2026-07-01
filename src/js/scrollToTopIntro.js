
const btnIntro=document.getElementById("scrollToTopIntroPage")
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btnIntro.classList.remove("opacity-0");
        btnIntro.classList.add("opacity-40");
        btnIntro.classList.remove("hidden");
    }
    if (window.scrollY < 200) {
        btnIntro.classList.remove("opacity-40");
        btnIntro.classList.add("opacity-0");
        btnIntro.classList.add("hidden");
    }
});

btnIntro.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
