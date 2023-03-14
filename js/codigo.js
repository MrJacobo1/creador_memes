function cambiar(){
    let cambio = document.getElementById('seccion_1');
    let color = document.getElementById('color').value;
    cambio.style.backgroundColor = color;
}
function cambio_imagen(imagen){
        document.getElementById('imagen').src="images/"+imagen+".png";
}
function arriba(){
    let texto = document.getElementById('text_arriba').value;
    document.getElementById('texto_h1').innerText = texto;
}
function abajo(){
    let texto = document.getElementById('text_abajo').value;
    document.getElementById('texto_h2').innerText = texto;
}
function fuente(){
    let texto_1 = document.getElementById('texto_h1');
    let texto_2 = document.getElementById('texto_h2');
    let fuente  = document.getElementById('opcionfuente').value;

    texto_1.style.fontFamily = fuente;
    texto_2.style.fontFamily = fuente;
    console.log(fuente);
}
function cambio_color(){
    let texto_1 = document.getElementById('texto_h1');
    let texto_2 = document.getElementById('texto_h2');
    let color = document.getElementById('colore').value;

    texto_1.style.color = color;
    texto_2.style.color = color;
}
function cambio_tamano(){
    let tamano = document.getElementById('tamano').value;
    let texto_1 = document.getElementById('texto_h1');
    let texto_2 = document.getElementById('texto_h2');

    texto_1.style.fontSize = tamano+"px";
    texto_2.style.fontSize = tamano+"px";

}