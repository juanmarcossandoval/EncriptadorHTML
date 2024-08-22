let modo = true;

function transmutar() {
    var contenido = document.getElementById('__mensaje').value;
    if (contenido === '') return;
    const desplazar = modo ? 15 : -15;
    modo = !modo;
    let resultado = "";
    const arreglo = Array.from(contenido);
    for (let index = 0; index < arreglo.length; index++) {
        resultado += String.fromCharCode(arreglo[index].charCodeAt(0) + desplazar);
    }
    document.getElementById('__mensaje').value = resultado;
    flipButtons();
}

function reiniciar() {
    document.getElementById('__mensaje').value = '';
    modo = true;
    flipButtons();
}

function flipButtons(){
    var encriptar = document.getElementById('Encriptador');
    var desencriptar = document.getElementById('Desencriptador');
    modo ? encriptar.setAttribute("class","button bgc-blue") : encriptar.setAttribute("class","button bgc-grey");
    !modo ? desencriptar.setAttribute("class","button bgc-green") : desencriptar.setAttribute("class","button bgc-grey");
    modo ? encriptar.disabled = false : encriptar.disabled = true;
    !modo ? desencriptar.disabled = false : desencriptar.disabled = true;
}

flipButtons();