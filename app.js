let listaNomeAmigos = [];

function adicionarAmigo(){
    let nomeAmigo = document.querySelector('#amigo').value;
    if (nomeAmigo == '') {
        alert('Porfavor insira um nome para ser adicionado.');
    } else{
        listaNomeAmigos.push(nomeAmigo);
        console.log(listaNomeAmigos);
        atualizarLista();
        document.querySelector('#amigo').value = '';
    }   
}

function atualizarLista(){
    let listaDeSelecionados = document.querySelector('#listaAmigos');
    listaDeSelecionados.innerHTML = '';

    for (let i = 0; i < listaNomeAmigos.length; i++) {
        const itemLista = document.createElement('li'); 
        itemLista.textContent = listaNomeAmigos[i]; 
        listaDeSelecionados.appendChild(itemLista); 
    }
}

function exibirTextoTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortearAmigo() {
    if (listaNomeAmigos.length === 0){
        alert('Porfavor insira um nome para ser adicionado.');
    } else{
        let indiceAleatorio = parseInt(Math.random() * listaNomeAmigos.length);
        let amigoSorteado = listaNomeAmigos[indiceAleatorio];
        exibirTextoTela('h2', `${amigoSorteado} foi sorteado!`);
        listaNomeAmigos.splice(indiceAleatorio, 1);    
        atualizarLista();  
    } 
    
}