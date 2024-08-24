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
    !modo ? desencriptar.setAttribute("class","button bgc-red") : desencriptar.setAttribute("class","button bgc-grey");
    modo ? encriptar.disabled = false : encriptar.disabled = true;
    !modo ? desencriptar.disabled = false : desencriptar.disabled = true;
}

flipButtons();

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var letters = 'ぁあぃいぅうぇえぉお かがきぎくぐけげこご ざしじすずせぜそぞた だちぢっつづてでとど なにぬねのはばぱひび ぴふぶぷへべぺほぼゐ わゎろれるりらよょゆ ゅやゃもめむみまぽゑ をんゔゕゖゝゞゟ゠ァ アィイゥウズスジシザサ ゴコゲケグクギキガカ オォエェセゼソゾタダ チヂッツヅテデトドナ ニヌネノモメムミマポボ ホペベヘプブフピビヒ パバハャヤュユョヨラリ ルレロヮワヰヱヲンヴヵ ヶヷヸヹヺ・ーヽヾヿ㍐ 々〒〜〃〆';
letters = letters.split('');

var fontSize = 30,
    columns = canvas.width / fontSize;

var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = 'bold 20px Arial';
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

setInterval(draw, 60);

function copyToClipboard() {
    var copyText = document.getElementById('__mensaje');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}