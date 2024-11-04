const button = document.querySelector('.button-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens = [];


function adicionarNovaTarefa() {
    minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false
    })
    input.value = ''

    mostrarTarefas()
}

function mostrarTarefas() {
    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + `
        <li class="tasks ${item.concluida && "done"}">
            <img src="./img/checked.png" alt="checked-tarefa" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
             <img src="./img/trash.png" alt="tarefa lixo" onclick="deletarItem(${posicao})">
        </li>
            `
    })

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}


function concluirTarefa(posicao ){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;
    mostrarTarefas();
    
}


function deletarItem(posicao){
    minhaListaDeItens.splice(posicao, 1);
    mostrarTarefas();
}

function recarregarTarefa(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    
    
    mostrarTarefas()
}

recarregarTarefa();
button.addEventListener('click', adicionarNovaTarefa);