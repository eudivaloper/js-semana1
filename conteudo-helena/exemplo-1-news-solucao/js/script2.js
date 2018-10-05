const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener('click', function(event) {
    event.preventDefault();

    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso.");
    resposta.appendChild(respostaMensagem);
    // <span>Email cadastrado com sucesso.</span>
    console.log(input.parentNode);
    // const newsForm = document.querySelector(".news__form");
    const elementoPai = input.parentNode;
    console.log(elementoPai);
    elementoPai.insertBefore(resposta, input);
});

