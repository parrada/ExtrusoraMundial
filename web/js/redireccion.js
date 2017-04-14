/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function modulos(id){
    var Id = id;
    var opc = document.getElementById(Id);
    if(opc.style.display == 'none') opc.style.display = 'display-block';
    else opc.style.display = 'none';
}

function limpiarModulos(){
    var modulos = ["extrusion","ventas","compras","inventario"];
    for (var i=0; i<modulos.length; i++){
        var mod = modulos[i];
        var m = document.getElementById(mod);
        if(m.style.display == 'none') m.style.display = 'display-block';
        else m.style.display = 'none';
    }
    
}

