const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
window.scrollTo({
    top: 0,
    behavior: "smooth",
});

});

document.addEventListener("scroll", function () {
    if(window.scrollY > innerHeight/2) {
        scrollToTopButton.style.visibility = "visible";
    } else {
        scrollToTopButton.style.visibility = "hidden";
    }
});

