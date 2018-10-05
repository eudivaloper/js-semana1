//mostrar event listener por último! deixar a função declarada depois, enquanto isso

window.addEventListener('load', function () {
    imprimeTabelaDoHTML();
});

function imprimeTabelaDoHTML(){
    const todosOsAlunos = document.querySelectorAll(".aluno");

    todosOsAlunos.forEach(function(aluno){
        const primeiraNota = aluno.querySelector(".info-notaum").textContent;
        const segundaNota = aluno.querySelector(".info-notadois").textContent;
        let mediaCalculada = calculaMedia(primeiraNota, segundaNota);
        if (mediaCalculada < 5) {
            aluno.classList.add("abaixo-da-media");
        }
        mediaFinal = mediaCalculada.toFixed(2);
        aluno.querySelector(".info-media").textContent = mediaFinal;
    })
}

function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    return (parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2;
}