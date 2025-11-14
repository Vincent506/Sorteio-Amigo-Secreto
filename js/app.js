 let listaDeNomes = [];
function adicionar(){
    let nomeDigitado = document.getElementById('nome-amigo').value;
    if (listaDeNomes.includes(nomeDigitado)) {
        alert('Não é permitido nomes repitidos');
    }
    else{
        listaDeNomes.push(nomeDigitado);
    }

    let lista = document.getElementById("lista-amigos");
    lista.textContent = listaDeNomes;
     document.getElementById('nome-amigo').value = '';
}

function sortear(){
    embaralhar(listaDeNomes);
    let sorteio = document.getElementById('lista-sorteio');

    if (listaDeNomes.length < 3) {
        alert('adicione pelo menos 3 pessoas para adicionar o sorteior');
    }else{
        for(let i = 0; i < listaDeNomes.length; i++ ){

        if (i == listaDeNomes.length - 1) {
            
            sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + '--->' + listaDeNomes[0] + '<br>';

        }else{
            
            sorteio.innerHTML = sorteio.innerHTML + listaDeNomes[i] + '--->' + listaDeNomes[i+1] + '<br>';

        }
     }
    }
}

function reiniciar(){
    document.getElementById('nome-amigo').value = '';
    listaDeNomes.splice(0,listaDeNomes.length);
    document.getElementById("lista-amigos").textContent = listaDeNomes;
    document.getElementById('lista-sorteio').textContent = listaDeNomes;

}

function embaralhar(lista){
    
    for(let indice = lista.length; indice; indice--){
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice-1],lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice-1]];
    }

}