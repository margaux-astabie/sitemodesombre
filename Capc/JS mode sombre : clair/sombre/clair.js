// Sélectionne le bouton et le body
const toggleDarkModeButton = document.getElementById("toggle-dark-mode");
const body = document.body;

// Écouteur d'événement pour le clic sur le bouton
toggleDarkModeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode"); // Ajoute/retire la classe .dark-mode

    // Change le texte du bouton selon le mode
    if (body.classList.contains("dark-mode")) {
        toggleDarkModeButton.textContent = "Mode Clair";
    } else {
        toggleDarkModeButton.textContent = "Mode Sombre";
    }
});
