// Executa após carregar a página
document.addEventListener("DOMContentLoaded", () => {

    let tamanho = 16;

    const aumentar = document.getElementById("increase-font");
    const diminuir = document.getElementById("decrease-font");
    const dark = document.getElementById("dark-mode");

    // Aumentar fonte
    if (aumentar) {
        aumentar.addEventListener("click", () => {
            tamanho += 2;
            document.body.style.fontSize = tamanho + "px";
        });
    }

    // Diminuir fonte
    if (diminuir) {
        diminuir.addEventListener("click", () => {
            if (tamanho > 12) {
                tamanho -= 2;
                document.body.style.fontSize = tamanho + "px";
            }
        });
    }

    // Modo escuro
    if (dark) {
        dark.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

});

// Abrir links externos
function abrir(url) {
    window.open(url, "_blank", "noopener");
}
