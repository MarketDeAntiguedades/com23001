fetch('https://type.fit/api/quotes')
.then(response => response.json())
.then(function(text){
    var temp = '';
    var contador = 0;
    var inst = setInterval(change, 8000);
    function change(){
        document.getElementById('changeText').innerHTML = text[contador].text;
        contador++;
        if (contador >= text.length) {
            contador = 0;
        }
    }});
