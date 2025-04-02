function atv4() {
    let numero = parseInt(prompt("Digite um número:"));

    function ehPrimo(numero) {
        if (numero < 2) return false;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) return false;
        }
        return true;
    }

    alert(numero + (ehPrimo(numero) ? " é primo." : " não é primo."));
}