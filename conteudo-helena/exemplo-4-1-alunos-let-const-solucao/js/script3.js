const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function(event) {
    event.preventDefault();

    const formularioAluno = document.querySelector("#form-adiciona");

    // selecionando os dados do formulário
    const nomeAluno = formularioAluno.nome.value;
    const notaUmAluno = formularioAluno.notaum.value;
    const notaDoisAluno = formularioAluno.notadois.value;

    // criando a linha
    const alunoTr = document.createElement("tr");

    const nomeAlunoTd = document.createElement("td");
    const notaUmAlunoTd = document.createElement("td");
    const notaDoisAlunoTd = document.createElement("td");
    const mediaAlunoTd = document.createElement("td");

    nomeAlunoTd.textContent = nomeAluno;
    notaUmAlunoTd.textContent = notaUmAluno;
    notaDoisAlunoTd.textContent = notaDoisAluno;
    mediaAlunoTd.textContent = calculaMedia(notaUmAluno, notaDoisAluno);
    
    alunoTr.appendChild(nomeAlunoTd);
    alunoTr.appendChild(notaUmAlunoTd);
    alunoTr.appendChild(notaDoisAlunoTd);
    alunoTr.appendChild(mediaAlunoTd);

    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

});