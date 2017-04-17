/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var app =angular.module("moduloExtrusion",[]);
    app.controller("CtrlExtrusion",function($scope,$http){
       
       $scope.listaRollos = [];
       
        $scope.guardarInfo = function(){
            $scope.listaRollos = listaRollos;
            var mUrl = "http://localhost:8080/ExtrusoraM/webresources/guardarLista";
            var mData = angular.toJson($scope.listaRollos);//la lista con los rollos
            $http.put(mUrl,mData).then(function(response){
                if (response.data)
                {
                 //codigo here
                 console.log(response);
                } 
                else if (response.data.status && response.data.status == $Utils.FAIL)
    	         	{
//                    $Utils.httpFail(response);
                    alert("Alerta");
                }
                else
                {
//                    $Utils.httpError(response);
                    alert("Error");
                }
            },function(response){
        	    
        });
        }
    });

