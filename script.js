const formulario = document.querySelector('#meu-formulario');

function validarFormulario(event) {
    event.preventDefault(); 

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const msg = document.querySelector('#msg').value;

    if (nome === "" || email === "" || msg === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset(); 
    }
}

formulario.addEventListener('submit', validarFormulario);

const btnTema = document.querySelector('#btn-tema');
const body = document.body;

function alternarTema() {
    body.classList.toggle('dark-theme');
    
    // Altera o texto do botão conforme o tema
    if (body.classList.contains('dark-theme')) {
        btnTema.innerText = "Claro";
    } else {
        btnTema.innerText = "Escuro";
    }
}

btnTema.addEventListener('click', alternarTema);

const meusProjetos = [
    {
        titulo: "Projeto 01- Dados dos Atletas",
        descricao: "Recebe informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.",
        link: "https://github.com/Caroline9619/dados-atletas.git"
    },
    {
        titulo: "Projeto 02- Notas dos Atletas",
        descricao: "Recebe o nome e as notas de um atleta, calcular a média e apresentar ao usuário.",
        link: "https://github.com/Caroline9619/notas-atletas.git"
    },
   ];

function renderizarProjetos() {
    const container = document.querySelector('.projetos-container');
    
    container.innerHTML = "";

    meusProjetos.forEach(projeto => {
        const cardHTML = `
            <article class="card-projeto">
                <h3>${projeto.titulo}</h3>
                <p>${projeto.descricao}</p>
                <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
            </article>
        `;
        container.innerHTML += cardHTML;
    });
}

renderizarProjetos();