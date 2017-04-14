/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function modulos(id){
    var modulos = ["mextrusion","mventas","mcompras","minventario"];
    for (var i=0; i<modulos.length; i++){
        var mod = modulos[i];
        var m = document.getElementById(mod);
        if(m != undefined){
            if(m.style.display == 'inline') m.style.display = 'none';
        }
        
    }
    var Id = 'm'+id.id;
    var opc = document.getElementById(Id);
    if(opc.style.display == 'none' || opc.style.display == '') opc.style.display = 'inline';
    else opc.style.display = 'none';
}



