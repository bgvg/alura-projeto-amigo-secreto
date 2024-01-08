let amigos = [];

function adicionar() {
    let nomeInserido = document.getElementById('nome-amigo').value;
    let amigosInseridos = document.getElementById('lista-amigos').textContent;
    if(nomeInserido != ''){
        if(amigos.indexOf(nomeInserido)=== -1){
            amigosInseridos == '' ? document.getElementById('lista-amigos').textContent = nomeInserido : document.getElementById('lista-amigos').textContent = `${amigosInseridos}, ${nomeInserido}`;
            amigos.push(nomeInserido);
            //console.log(amigos)
        }else{
            alert('Dois participantes não podem ser adicionados com o mesmo nome.')
        }
    }else{
        alert("Favor inserir um nome.")
    }
    document.getElementById('nome-amigo').value = '';
    
}

function sortear(){
    if(amigos.length < 4){
        alert('É necessário ter um mínimo de 4 participantes.')
    }else{
        let sorteados = pickRandomPairs(amigos)
        console.log(sorteados)
        let sorteadosText = sorteados.map((x) => x.join(' -> ')).join('<br>');
        document.getElementById('lista-sorteio').innerHTML = sorteadosText;
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').value = '';
}

function pickRandomPairs(arr) {
    const pairs = [];
  
    // Shuffle the array to randomize the order
    arr = arr.slice().sort(() => Math.random() - 0.5);

    for(i=0;i<arr.length;i+=1){
        const pair = i == arr.length-1 ? [arr[i],arr[0]] : [arr[i],arr[i+1]];
        pairs.push(pair)
        //console.log(`i:${i}`)
        //console.log(`Pair:${pair}`)
        //console.log(`Arr:${arr}`)
    }
  
    return pairs;
  }
  