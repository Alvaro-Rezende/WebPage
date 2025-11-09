# 🌐 Desafio - Desenvolvimento Front-End II

Projeto desenvolvido como parte do desafio da disciplina **Desenvolvimento Front-End II**, com o objetivo de criar um site composto por três páginas interligadas, contendo **formulário com validação**, **confirmação dos dados** e **fluxo completo de navegação**.

---

## 📋 Descrição Geral

O website é composto por **três páginas principais**:

1. **index.html** — Página inicial com informações pessoais do aluno e link para o formulário.  
2. **form.html** — Formulário com campos de **nome**, **sobrenome**, **email** e **idade**, incluindo validação.  
3. **confirmation.html** — Página de confirmação dos dados inseridos antes de salvar e retornar ao início.

---

## 🔄 Fluxo do Site

index.html
↓
form.html
↓ (validação dos campos)
confirmation.html
↓ (confirmar → salva dados / editar → volta)
data.json (simulado)
↓
index.html


### Regras de Validação
- **Nome** e **Sobrenome**: não podem ser vazios; 3–50 caracteres.  
- **Email**: deve seguir o padrão válido (verificado por Regex).  
- **Idade**: número inteiro positivo menor que 120.  

---

## 🧠 Funcionalidades

- Validação de formulário com mensagens de erro personalizadas.  
- Exibição dos dados inseridos para confirmação.  
- Opção de **editar** os dados antes de salvar.  
- Simulação de gravação em **data.json** usando `localStorage`.  
- Redirecionamento automático para a página inicial após a confirmação.  

---

## 🧩 Estrutura de Pastas

/meu-site/
│
├── index.html
├── form.html
├── confirmation.html
├── script.js
├── style.css
└── data.json


---

## 💻 Tecnologias Utilizadas

- **HTML5** — Estrutura das páginas  
- **CSS3** — Estilização do layout  
- **JavaScript (ES6)** — Lógica, validação e fluxo do site  
- **LocalStorage** — Simulação de salvamento dos dados  

---

## 🚀 Como Executar o Projeto

Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/desafio-frontend.git

1.Abra a pasta do projeto no seu editor de código.

2.Execute o arquivo index.html no navegador.

3.Siga o fluxo:

4.Clique em Ir para o Formulário

5.Preencha os campos e envie

6.Confira os dados e confirmeAbra a pasta do projeto no seu editor de código.

7.Execute o arquivo index.html no navegador.

8.Siga o fluxo:

9.Clique em Ir para o Formulário

10.Preencha os campos e envie

11.Confira os dados e confirme

