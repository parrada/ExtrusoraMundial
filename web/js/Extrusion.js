// JavaScript Document
var acum = 0,c = 0,fecha,hora,minuto,segundo;
var horai = {},horaf = {};

//se obtiene la hora actual
var rollo = {};
function obtenerHora(){
    var mt = 0,ht = 0;
     fecha = new Date();
     hora = fecha.getHours();
     minuto = fecha.getMinutes();
     segundo = fecha.getSeconds();
     //hora inicial
     if(horai.h == undefined){
        horai.h = hora; 
        horai.m = minuto;
//        horai.s = segundo;
    }
    //hora final
    else{
        horaf.h = hora; 
        horaf.m = minuto;
//        horaf.s = segundo;
    }
    //calculamos el tiempo total
    if(horaf.h != undefined){
        if(rollo == undefined){
            rollo = {};
        }
        if(horai.m < horaf.m){
            //se restan los valores de hora y minutos normalmente
            ht = horaf.h - horai.h;
            mt = horaf.m - horai.m;
            rollo.hora = ht;
            rollo.minuto = mt;
            //reiniciar las variables para el siguiente rollo
            horai = {};
            horaf = {};
            
            return rollo;
        }
        else{
            //se resta una hora a la hora final antes de hacer la resta y se suman 60 seg para la resta de los mins
            var htp = horaf.h - 1;
            var mtp = horaf.m + 60;
            ht = htp - horai.h;
            mt = mtp - horai.m; 
            rollo.hora = ht;
            rollo.minuto = mt;
            //reiniciar las variables para el siguiente rollo
            horai = {};
            horaf = {};
            
            return rollo;
            
            
            
            //
            document.getElementById("finalizar").disabled = 'disabled';
        }
    }
   
}



//para reiniciar el cronometro
function Reini(){
    var min = document.getElementById("Minutos").innerHTML.substring(1,3);
    var seg = document.getElementById("Segundos").innerHTML.substring(1,3);
    document.getElementById("finalizar").disabled = 'disabled';
    if(min > 0 || seg > 0){
        reinicio();
    }
    else{
        inicio();
    }
}

//lee los numero de peso del rollo
function teclado(obj){
	
	var caja = document.getElementById("peso");
	if(caja.value == "" || caja.value == undefined){
		caja.value = obj;	
		acum = obj;
	}
	else{
		acum = acum + obj;	
		caja.value = acum;
		}
	
	
}

//cuenta la cantidad de rollos
function acumulador(){
    document.getElementById("finalizar").disabled = 'disabled';
    if(horaf.h == undefined){
        c++;
    }
    var caja = document.getElementById("cantidad");
    caja.value = c;
    document.getElementById("teclado").style.display = 'inline-block';
    
}

//limpia el text del peso
function borrar(){
	var caja = document.getElementById("peso");
	caja.value="";
}

//crea el objeto con la info del rollo y la agrega a la lista
var rollo = {};
function finalizar(){
    if(rollo == undefined){
        rollo = {};
    }
    var rolo = obtenerHora();
    rollo.hora = rolo.hora;
    rollo.minuto = rolo.minuto;
    rollo.peso = document.getElementById("peso").value;
    rollo.unidad = document.getElementById("cantidad").value;
    agregarListaRollo(rollo);
    var rollo = {};
    document.getElementById("peso").value = "";
    }

//agrega el objeto rollo a la lista
var listaRollos = [];
function agregarListaRollo(Rollo){
    listaRollos.push(Rollo);
    var cd = JSON.stringify(listaRollos);
    cargarCaja(cd);
}
//
function cargarCaja(cadena){
    var cj = document.getElementById("prueba");
    cj.value = cadena;
}

//muestra la info de todos los rollos en la pantalla
function mostrarListaRollos(){
    cargarListaRollos(listaRollos);
    var val = document.getElementById("listaR");
    if(val.style.display == 'inline-block'){
        document.getElementById("listaR").style.display = 'none';
    }
    else{
        if(listaRollos.length > 0 ){
        document.getElementById("listaR").style.display = 'inline-block';
        }
    }
}

//crea los contenedores para cada objeto para que se muestre en pantalla
function cargarListaRollos(listaRollos){
    //borrando 
    for(var i=0;i<listaRollos.length;i++){
        var d = document.getElementById(i);   
        if(d != null || d != undefined){
            d.innerHTML="";
        }
    }
    
    if(listaRollos.length == 0 ){
        alert("no hay ningun rollo por el momento");
    }
    else{
        var cont = 0;
        for(var i = 0; i<listaRollos.length;i++){
            var objn = listaRollos[i];
            //creando los divs
            var div = document.createElement('div');
            div.id = cont;
            var padre = document.getElementById('listaR');
            padre.appendChild(div);
            
            //agregando la info del rollo al div
            var d = document.getElementById(cont);
            var txt = document.createTextNode(objn.unidad+"-  "+"Tiempo: "+objn.hora
                    +" Horas "+objn.minuto+" Minutos"+"     Peso:"+objn.peso);
            d.appendChild(txt);
            cont++;
        }
       
        colocarDiseño(listaRollos);
    }
}

//lee la info del peso del rollo
function peso(){
    rollo.peso = document.getElementById("peso").value;
    if(rollo.peso != ""){
        document.getElementById("finalizar").removeAttribute('disabled');
    }
    
}

//agrega el atributo de class para que los nuevos divs tengan estilo
function colocarDiseño(listaRollos){
    for(var i=0;i<listaRollos.length;i++){
        var d = document.getElementById(i);    
        d.className = "rollo1";
    }
}

