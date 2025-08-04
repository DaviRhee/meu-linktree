const botaoCopiar = document.querySelector('#btn-copiar-email');

botaoCopiar.addEventListener('click', () => {
    const meuEmail = "davicr99@hotmail.com";
    navigator.clipboard.writeText(meuEmail).then(() => {
        const textoOriginal = botaoCopiar.innerText;
        botaoCopiar.innerText = 'E-mail Copiado!';
        setTimeout(() => {
            botaoCopiar.innerText = textoOriginal;
        }, 2000);

    }).catch(err => {
        console.error('Falha ao copiar o texto: ', err);
    });
});