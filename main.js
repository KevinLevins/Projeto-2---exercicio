const form= document.getElementById('form-atividade');
const nomes= [];
const numeros= [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumeroTel = document.getElementById('numeroTel');
    
    nomes.push(inputNome.value);
    numeros.push(parseInt(inputNumeroTel.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumeroTel.value}</td>`;
    linha += '</tr>';
    linhas += linha;


    inputNome.value = '';
    inputNumeroTel.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
