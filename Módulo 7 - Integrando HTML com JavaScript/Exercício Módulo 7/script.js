let num1 = window.document.getElementById('number1')
let num2 = window.document.getElementById('number2')
const form = window.document.getElementById('formVerificar')
const resultadoMensagem = window.document.querySelector(('.res'))

function numeroValido() {   
    //convertendo os valores para números inteiros
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    //verificando conversão
    if (isNaN(n1) || isNaN(n2) || num1.value === '' || num2.value === '') {
        resultadoMensagem.innerHTML = `Por favor, insira valores válidos!`
        return false
    } if (n1 === n2) {
        resultadoMensagem.innerHTML = `Os números são iguais!`
        return false
    } else if (n1 > n2) {
        resultadoMensagem.innerHTML = `O número ${n1} é maior que o número ${n2}!`
    } else {
        resultadoMensagem.innerHTML = `O número ${n2} é maior que o número ${n1}!`
    }
    return true
}

form.addEventListener('submit', function(e){
    e.preventDefault() //previne o recarregamento da página

    // chama a função de validação e exibe a mensagem apropriada
    if(numeroValido()){
        resultadoMensagem.classList.add('success-message')
        resultadoMensagem.classList.remove('error-message')
    } else {
        resultadoMensagem.classList.add('error-message')
        resultadoMensagem.classList.remove('success-message')
    }
    num1.value = ''
    num2.value = ''
    resultadoMensagem.style.display = 'block'
})

