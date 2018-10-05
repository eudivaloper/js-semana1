const adicionarAluno = document.querySelector("#adicionar-aluno");

adicionarAluno.addEventListener('click', function (event) {
    event.preventDefault();
    if (notasSaoValidas(obtemAluno())) {
        insereAluno(obtemAluno());
        document.getElementById("form-adiciona").reset();
    }
});

function obtemAluno(){
    return obterDadosDoFormulario(document.querySelector("#form-adiciona"));  
}

function notasSaoValidas(aluno) {
    if (!(aluno.notaUmAluno >= 0 && aluno.notaUmAluno <= 10)) {
        document.querySelector("#mensagem-erro").innerHTML = "A nota 1 está incorreta";
        mensagemErro();
        return false;
    }

   if (!(aluno.notaDoisAluno >= 0 && aluno.notaDoisAluno <= 10)) {
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
    const alunoTr = document.createElement("tr");
    alunoTr.innerHTML =   "<td>" + aluno.nomeAluno + "</td>"
                        + "<td>" + aluno.notaUmAluno + "</td>"
                        + "<td>" + aluno.notaDoisAluno + "</td>"
                        + "<td>" + aluno.media + "</td>"
    const tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);   
    alunoReprovado(aluno, alunoTr); 
}

function alunoReprovado(aluno, alunoRow){
    if (aluno.media < 5) {
        alunoRow.classList.add("abaixo-da-media");
    }
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

