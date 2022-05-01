
var form = '<div  class="form_cont"><form method="post" onSubmit="norecarga()">'+
'<table>'+
 '<tr>'+
   '<td><label >Nombre:</label></td>'+
   '<td><input type="text" id="name"></td>'+
 '</tr>'+
 '<tr>'+
   '<td><label >Correo electrónico:</label></td>'+
   '<td><input type="email" id="mail" ></td>'+
 '</tr>'+
 '<tr>'+
   '<td><label >Mensaje:</label></td>'+
   '<td><textarea id="msg" ></textarea></td>'+
 '</tr></table></div>'+
 '<div class="form_cont"><table><tr><td>Seleccione en que rango de edad se encuentra: </td> </tr>'+
 '<tr>'+
 '<td><input type="radio" name="edad" id="menor"  value="Menor de edad"'+
    'checked>'+
    '<label > Menor de edad </label></td>'+
    '</tr>'+
    '<tr>'+
 '<td><input type="radio" id="mayor" name="edad" value="Mayor de edad"'+
    '>'+
    '<label > Mayor de edad </label></td>'+
    '</tr>'+
    '<tr>'+
 '<td><input type="radio" id="tercera"  name="edad" value="Tercera edad"'+
    '>'+
    '<label > Tercera edad </label></td>'+
    '</tr>'+
'</table></div>'+
'<div class="form_cont"><table><tr><td>Seleccione sus Hobbies: </td> </tr>'+
 '<tr>'+
 '<td><input type="checkbox" name="cbox1" id="musica"  value="Escuchar música"'+
    '>'+
    '<label for="cbox1"> Escuchar música </label></td>'+
    '</tr>'+
    '<tr>'+
 '<td><input type="checkbox" id="libros" name="cbox2" value="Leer libros"'+
    '>'+
    '<label for="cbox2"> Leer libros </label></td>'+
    '</tr>'+
    '<tr>'+
 '<td><input type="checkbox" id="museo"  name="cbox3" value="Visitar museos"'+
    '>'+
    '<label for="cbox3"> Visitar museos </label></td>'+
    '</tr>'+
'</table></div><div class="form_cont"> <table><tr><td><button onclick="norecarga()">Enviar formulario</button></td><td><button type="reset">Resetear</button></td></tr> </table>'+
'</form></div>';

var formulario_html = document.querySelector("#formulario");
formulario_html.innerHTML = form;

 
var res = document.querySelector("#respuesta");
var mensaje ="";
function datos (){
    var nombre = document.querySelector("#name").value;
    var mail = document.querySelector("#mail").value;
    var msg = document.querySelector("#msg").value;
    var hobi=" ";
    var hobi2="";
    var hobi3 ="";
    var edad = document.querySelector('input[name="edad"]:checked').value;
    if(document.querySelector('input[name="cbox1"]').checked){
         hobi += document.querySelector('input[name="cbox1"]:checked').value + " ";
    }
     if (document.querySelector('input[name="cbox2"]').checked){
       hobi += document.querySelector('input[name="cbox2"]:checked').value+ " ";
    }
    if (document.querySelector('input[name="cbox3"]').checked){
         hobi += document.querySelector('input[name="cbox3"]:checked').value+ " ";
    }
    mensaje = "<strong>Gracias por llenar el formulario</strong><br><strong>Su nombre es : </strong>"+nombre+"<br><strong> Su email es: </strong>"+mail+"<br><strong>Sugerencia/Mensaje: </strong>"+msg+
    "<br><strong>Rango de edad: </strong>"+edad+"<br> <strong>Sus hobbies son: </strong>"+hobi +" <br>";
    res.innerHTML= mensaje;
}
function norecarga(){
    formulario_html.addEventListener('submit',evt =>{
        evt.preventDefault();
        datos();
    });
}

