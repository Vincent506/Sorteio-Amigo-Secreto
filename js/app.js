 let listaDeNomes = [];
function adicionar(){
    let nomeDigitado = document.getElementById('nome-amigo').value;
    if (listaDeNomes.includes(nomeDigitado)) {
        alert('Não é permitido nomes repitidos')
    }else{
        listaDeNomes.push(nomeDigitado);
       
    }

    let lista = document.getElementById("lista-amigos");
    lista.textContent = listaDeNomes;
     document.getElementById('nome-amigo').value = '';
}

function sortear(){
    // falta desenvolver essa parte
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    listaDeNomes.splice(0,listaDeNomes.length);
    document.getElementById("lista-amigos").textContent = listaDeNomes;
    document.getElementById('lista-sorteio').textContent = listaDeNomes;

}