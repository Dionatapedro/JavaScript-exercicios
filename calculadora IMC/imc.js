let calular = document.getElementById('calcular')

function imc() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== '') {
        let ValorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = ''

        if (ValorImc < 18.5){
            classificacao = 'abaixo do peso'
        } else if(ValorImc < 25) {
            classificacao = 'com peso ideal. Parabéns!!!'
        } else if (ValorImc < 30){
            classificacao = 'levemente acima do peso'
        } else if (ValorImc < 35){
            classificacao = 'Obesesidade grau I'
        } else if (ValorImc < 40){
            classificacao = 'Obesidade grau II'
        } else {
            classificacao = 'Obesidade grau III, Cuidado!!!'
        }


        resultado.textContent = `${nome} seu IMC é ${ValorImc} e você está ${classificacao}`;
    } else {
        resultado.textContent = 'Preecha todos os campos!!!'
    }
}


calular.addEventListener ('click', imc);