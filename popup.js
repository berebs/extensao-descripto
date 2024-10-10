document.getElementById('descriptografar').addEventListener('click', function() {
    const frase = document.getElementById('frase').value;
    const numero = parseInt(document.getElementById('numero').value);

    if (!isNaN(numero)) {
        const fraseDescriptografada = descriptografar(frase, numero);
        document.getElementById('resultado').innerText = `Frase descriptografada: ${fraseDescriptografada}`;

        // Copiar automaticamente para o clipboard
        navigator.clipboard.writeText(fraseDescriptografada).then(() => {
            // Mostrar mensagem de sucesso
            document.getElementById('copiedMessage').style.display = 'block';
            setTimeout(() => {
                document.getElementById('copiedMessage').style.display = 'none';
            }, 2000); // Esconde a mensagem após 2 segundos
        }).catch(err => {
            console.error('Erro ao copiar para o clipboard: ', err);
        });
    } else {
        document.getElementById('resultado').innerText = "Por favor, insira um número válido.";
    }
});

function descriptografar(frase, numero) {
    let fraseDescriptografada = "";

    for (let i = 0; i < frase.length; i++) {
        const letra = frase[i];
        if (/[a-zA-Z]/.test(letra)) {
            const codigoBase = letra === letra.toUpperCase() ? 65 : 97;
            const novaLetra = String.fromCharCode((letra.charCodeAt(0) - codigoBase - numero + 26) % 26 + codigoBase);
            fraseDescriptografada += novaLetra;
        } else {
            fraseDescriptografada += letra;
        }
    }

    return fraseDescriptografada;
}
