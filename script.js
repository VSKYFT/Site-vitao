document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o envio do formulario
    alert("Formulário enviado com sucesso!");
});