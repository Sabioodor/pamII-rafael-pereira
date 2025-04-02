function atv5(){
    var a = prompt("Escreva uma palavra");
    var b = prompt("Escreva uma letra");

    var quantidade = 0;

    for (i = 0; i < a.length; i++){
        if (a[i] == b) {
            
            quantidade++;
        
        }
    }

    alert('A letra (' + b + ') aparece ' + quantidade + ' vezes na palavra (' + a + ')');

}