// Regex de e-mail
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// --- FORM PAGE ---
const form = document.getElementById("userForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = parseInt(document.getElementById("idade").value);

    const error = document.getElementById("error");

    if (nome.length < 3 || nome.length > 50) {
      error.textContent = "Nome deve ter entre 3 e 50 caracteres.";
      return;
    }
    if (sobrenome.length < 3 || sobrenome.length > 50) {
      error.textContent = "Sobrenome deve ter entre 3 e 50 caracteres.";
      return;
    }
    if (!emailRegex.test(email)) {
      error.textContent = "E-mail inválido.";
      return;
    }
    if (isNaN(idade) || idade <= 0 || idade >= 120) {
      error.textContent = "Idade deve ser um número válido (1–119).";
      return;
    }

    // Salvar temporariamente no localStorage
    const dados = { nome, sobrenome, email, idade };
    localStorage.setItem("dadosUsuario", JSON.stringify(dados));

    window.location.href = "confirmation.html";
  });
}

// --- CONFIRMATION PAGE ---
const dadosDiv = document.getElementById("dados");
if (dadosDiv) {
  const dados = JSON.parse(localStorage.getItem("dadosUsuario"));
  if (dados) {
    dadosDiv.innerHTML = `
      <p><strong>Nome:</strong> ${dados.nome}</p>
      <p><strong>Sobrenome:</strong> ${dados.sobrenome}</p>
      <p><strong>Email:</strong> ${dados.email}</p>
      <p><strong>Idade:</strong> ${dados.idade}</p>
    `;
  }

  document.getElementById("editar").addEventListener("click", () => {
    window.location.href = "form.html";
  });

  document.getElementById("confirmar").addEventListener("click", () => {
    // Simulação de salvamento em data.json (localStorage)
    localStorage.setItem("data.json", JSON.stringify(dados));
    alert("Dados salvos com sucesso!");
    localStorage.removeItem("dadosUsuario");
    window.location.href = "index.html";
  });
}
