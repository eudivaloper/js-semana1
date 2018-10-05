const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function (event) {
    event.preventDefault();
    if (notasSaoValidas(obtemAluno())) {
        insereAluno(obtemAluno());
    }
});

function obtemAluno(){
    return obterDadosDoFormulario(document.querySelector("#form-adiciona"));  
}

function notasSaoValidas(aluno) {
    if (!(aluno.notaUmAluno > 0 && aluno.notaUmAluno <= 10)) {
        document.querySelector("#mensagem-erro").innerHTML = "A nota 1 está incorreta";
        mensagemErro();
        return false;
    }

   if (!(aluno.notaDoisAluno > 0 && aluno.notaDoisAluno <= 10)) {
        document.querySelector("#mensagem-erro").innerHTML = "A nota 2 está incorreta";
        mensagemErro();
        return false;
    }
    return true;
}

function mensagemErro(){
    setTimeout(function(){ 
        document.querySelector("#mensagem-erro").innerHTML = "";
    }, 3000);
}

function validaAluno(aluno){
    if (validaNotaUm(aluno) && validaNotaDois(aluno)){
        insereAluno(obtemAluno());
    }
}

function insereAluno(aluno){

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
    
}

function obterDadosDoFormulario(formulario) {
const objetoAluno = {
    nomeAluno: formulario.nome.value, 
    notaUmAluno: formulario.notaum.value,
    notaDoisAluno: formulario.notadois.value,
    media: calculaMedia(formulario.notaum.value, formulario.notadois.value)
}
return objetoAluno;
}

