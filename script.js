document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita envio do formulário

    // Verifica se já existe uma mensagem, se sim, remove
    const mensagemExistente = document.querySelector(".mensagem-sucesso");
    if (mensagemExistente) mensagemExistente.remove();

    // Cria o elemento de mensagem
    const mensagem = document.createElement("p");
    mensagem.textContent = "Entraremos em contato em breve.";
    mensagem.className = "mensagem-sucesso";

    // Adiciona a mensagem logo após o formulário
    const form = document.getElementById("contactForm");
    form.appendChild(mensagem);

    // Limpa o formulário e remove a mensagem depois de 5 segundos
    setTimeout(() => {
      mensagem.remove();
      form.reset();
    }, 5000);
  });