const form = window.document.getElementById('form-deposito');
const nomeBeneficiarioo = document.getElementById('nomeBeneficiario');
let formEValido = false;

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numeroConta');
    const valorDepositoo = document.getElementById('valorDeposito');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiarioo.value}</b> - conta: <b>${numeroContaBeneficiario.value}<b>`;

    formEValido = validaNome(nomeBeneficiarioo.value)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        nomeBeneficiarioo.value = '';
        numeroContaBeneficiario.value = '';
        valorDepositoo.value = '';
    } else {
        nomeBeneficiarioo.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiarioo.addEventListener('keyup', function(e){                   // evento CHANGE -> mudança de campo    evento KEYUP -> alterar campo sem usuário sair do campo (tempo real)
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiarioo.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiarioo.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})  




