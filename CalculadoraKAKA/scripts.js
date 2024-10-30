function validarNome(nome){
    const nomeEspecifico = 'Kaylane';
    if (nome === nomeEspecifico){
        alert('Nome Válido');
    } else{
        alert('Nome Inválido');
        open('https://img.odcdn.com.br/wp-content/uploads/2024/07/Tela-azul-da-morte-no-Windows-NT-3-via-Wikimedia-Commons-1024x576.png');
        close();
    }
}



document.addEventListener("DOMContentLoaded", function(){
    const nomeUsuario = prompt('Digite seu nome:')
    validarNome(nomeUsuario);
});


function insert(num){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = ''
}

function apagar(){
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length -1);
}

function calcular(){
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado){
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        alert('nada a calcular')
    }
}