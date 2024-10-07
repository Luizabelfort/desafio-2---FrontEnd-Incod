//puxando para o javascript
let barra = document.querySelector("#barra");

let enviar = document.querySelector('#enviar');

let lista = document.querySelector('#casali');
//////////////////////////////

barra.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter'){
        let tarefas = {
            nome:barra.value,
            id:gerarid(),
        }
       adicionartarefas(tarefas);
    }
});

enviar.addEventListener('click', (evento)=> {

    let tarefas = {
        nome:barra.value,
        id:gerarid(),
    }
    adicionartarefas(tarefas);
})

function gerarid(){
    
    function gerarId() {
        return Date.now(); // usando timestamp como id
    }
}

function adicionartarefas (tarefa){
    if (barra.value.trim() === ''  ){
         alert('digite algo antes de enviar') 
       
    }else {   
        let li = criartagli(tarefa);
        lista.appendChild(li);
        barra.value = '';;
    }
    ;


}


function criartagli(tarefa){
    let li = document.createElement('li');
    li.classList.add('item');
    const textodig = barra.value;
 
    li.innerHTML = `
            <div id="part1">
                   
                    <div id='casacheckbox' >
                        <input type="checkbox" name="" id="checkbox">
                        <span class="textdig">${textodig}</span> 
                    </div>
            </div>
            <div id="part2">                    
            <button class="corrigir-btnbbs  btnbbs" id="corrigir-${tarefa.id}"></button>
            <button class="excluir-btnbbs  btnbbs" id="excluir-${tarefa.id}"></button>
            </div>
        `;
        
        lista.appendChild(li);
        barra.value = '';
}

////////////////////////////////////////////////////////////////////////


lista.addEventListener('click', (evento) => {
    if (evento.target.classList.contains('excluir-btnbbs')) {
        excluirTarefa(evento.target.closest('li'));
    }
    
    
    else if (evento.target.classList.contains('corrigir-btnbbs')){
        corrigirtarefas(evento.target.closest('li'));
    }
     });



    function excluirTarefa(li) {
    li.remove();
}
let textoantigo = li.querySelector('span');

function corrigirtarefas (li){
    let nvinput = document.createElement('input');
    nvinput.type = 'text';
    nvinput.setAttribute('id','nvinput');


    let textoantigo = li.querySelector('span');

    nvinput.value = textoantigo.textContent;

    textoantigo.before(nvinput);

    textoantigo.remove();

    ///
    
    let novoSpan = document.createElement('span');

    nvinput.addEventListener('keypress', (evento) => {
        if (evento.key === 'Enter') {
            if(nvinput.value.trim() === '' ){
                alert('digite algo antes de enviar');
        }else {  
            
            novoSpan.textContent = nvinput.value;
            
            nvinput.before(novoSpan);
            nvinput.remove();
        }
        }
    });
   
  
}
    