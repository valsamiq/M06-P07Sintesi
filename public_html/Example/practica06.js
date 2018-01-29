/**4.	En index.html crea un botón que al clicar encima pida mediante un “prompt” 2 
 * valores separados por comas. Utilizando el objeto String y sus métodos extrae del valor
 *  introducido los 2 valores y guárdalos en 2 variables de nombre “minimo” y “maximo”. 
 *   Asegúrate que el usuario ha introducido dos valores numéricos 
 *   entre 200 y 800. En caso contrario, vuelve a pedir los datos.
 a.	Utiliza los valores pedios anteriormente para abrir mediante
  el objeto Window de JavaScript una nueva ventana con la web “ventana.html”
   con medidas aleatorias entre el “minimo” y “máximo” de altura y anchura
 */
function pideValores() {
    do {
        var valores = window.prompt("introduce dos valores separados por comas");
        valores = valores.split(",");
        var error = false;
        if (valores.length != 2) {
            error = true;
        }
        if (valores[0] < 200 || valores[0] > 800 || valores[1] < 200 || valores[1] > 800 
                || isNaN(valores[0] ||isNaN(valores[1]))) {
            error = true;
        }
    } while (error);

    /** Utiliza los valores pedios anteriormente para abrir mediante
      el objeto Window de JavaScript una nueva ventana con la web “ventana.html”
       con medidas aleatorias entre el “minimo” y “máximo” de altura y anchura
     * @returns {undefined}
     */
    //Math.floor((Math.random() * 10) + 1);
    var amplada=Math.floor((Math.random() * valores[1]) + valores[0]);
    var altura=Math.floor((Math.random() * valores[1]) + valores[0]);
    
    //window.open ("url.html","Nombre","scrollbars=no,width=200");
    window.open("ventana.html","_blank","width="+amplada
            +",height="+altura);
}
function ventanaNuevaCargada(){
    window.document.getElementById("ventanaNueva")
            .innerHTML="Nueva ventana cargada";
}
function checkNombreUsuario() {
    /**pide mediante un “prompt” el nombre del usuario y guarda el valor introducido en una cookie de nombre “nombre_usuario”. 
     * Finalmente muestra su valor en el HTML.*/
    if (document.cookie === "") {
        var nombre = window.prompt("Introduce un nombre");
        document.cookie = "nombre_usuario=" + nombre;
    }
    document.getElementById("valorCookie").innerHTML = document.cookie;
}

function inicio() {
    var div = document.getElementById("listaPropiedades");
    var html = "<ul>";
    html += "<li>Valor máximo que puede tener un número en JavaScript:" + Number.MAX_VALUE + "</li>";
    html += "<li>Altura total de la pantalla: " + screen.availHeight + "</li>";
    html += "<li>Anchura total de la pantalla</li>";
    html += "<li>Altura de la página web:" + window.innerHeight + "</li>";
    html += "<li>Anchura de la página web</li>";
    html += "<li>URL de la página web: " + location.href + "</li>";
    var url = location.href;   //http://localhost:8081/DAW2_M06_17_18/practia06/practica06.html
    var indexBarra = url.lastIndexOf("/");
    var nombre = url.substr(indexBarra + 1);

    html += "<li>Nombre de la página web con su extensión (index.html): " + nombre + "</li>";
    html += "<li>Un valor aleatorio entre 0 y 200 (utiliza el objeto Math)</li>";
    html += "<li>Sistema operativo del ordenador.</li>";
    html += "</li>";
    div.innerHTML = html;
}

