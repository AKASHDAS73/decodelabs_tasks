const text = document.getElementById("text");

document.getElementById("changeText").addEventListener("click", () => {
    text.textContent = "JavaScript makes webpages interactive!";
})
document.getElementById("changeColor").addEventListener("click", () => {

    const colors = [
        "red",
        "green",
        "blue",
        "purple",
        "orange"
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    text.style.color = randomColor;
});

document.getElementById("darkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
