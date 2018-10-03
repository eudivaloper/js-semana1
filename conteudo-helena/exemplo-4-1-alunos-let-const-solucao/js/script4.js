const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function (event) {
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");

    const aluno = obterDadosDoFormulario(formularioAluno);

    // antes de criar a linha, verifico se o valor está correto
    if (!validaNota(aluno)) {
        const erro = document.querySelector("#mensagem-erro");
        return erro.innerHTML = "A Nota 1 está incorreta.";
    }

    // criando a linha
    const alunoTr = document.createElement("tr");

    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = aluno.nomeAluno;
    notaUmAlunoTd.textContent = aluno.notaUmAluno;
    notaDoisAlunoTd.textContent = aluno.notaDoisAluno;
    // mediaAlunoTd.textContent = calculaMedia(notaUmAluno, notaDoisAluno);
    mediaAlunoTd.textContent = aluno.media;

    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});

function obterDadosDoFormulario(formulario) {
    const objetoAluno = {
        nomeAluno: formulario.nome.value
        , notaUmAluno: formulario.notaum.value
        , notaDoisAluno: formulario.notadois.value
        , media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
    }
    return objetoAluno;
}

function validaNota(aluno) {
    if (aluno.notaUmAluno > 0 && aluno.notaUmAluno <= 10) {
        return true;
    }
}