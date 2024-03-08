const body = document.querySelector("body"),
    toggle = document.querySelector(".toggle");
const icon = document.querySelector(".salom");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark")
})

toggle.addEventListener("click", () => toggle.classList.toggle("active"));

toggle.addEventListener("click", () => {
    salom.innerHtml.style.display = ("none")
});