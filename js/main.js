function iniciar(){
    var select = document.getElementById("selfab");
    var btnTorneo = document.getElementById('registrar')

    if(select.addEventListener){
        select.addEventListener("change", function(){
            addOptions(marcas[this.options[this.selectedIndex].text],
                document.frmcar.selmod);
        }, false);
    }

    if(btnTorneo.addEventListener){
        btnTorneo.addEventListener("click", inscribir, false);
    }


}

    //ARREGLOS PARA LAS MARCAS

    var marcas = new Array(7);
    marcas["Toyota"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4 Runner", "Hilux"];
    marcas["Nissan"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder", "Patrol", "X-Trail", "Frontier"];
    marcas["Hyundai"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "i30"];
    marcas["Volkswagen"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg", "Saveiro"];
    marcas["Chevrolet"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy", "Avalanche", "Trailblazer"];
    marcas["Honda"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot", "RidgeLine"];
    marcas["Mitsubishi"] = ["Lancer", "Galant", "Eclipse", "Montero", "Nativa", "Outlander", "L200"];
    

    function removeOptions(optionMenu){
        for(i=0; i<optionMenu.options.length; i++){
            optionMenu.options[i] = null;
        }
    }
    
    function addOptions(optionList, optionMenu){
        var i=0;
        removeOptions(optionMenu);
        for(i=0; i<optionList.length; i++){
            optionMenu[i] = new Option(optionList[i], optionList[i]);
        }
    }


function inscribir(){

    if(typeof(Storage)  != 'undefined'){  //Esta parte nos indica si el navegador soporta el objeto storage osea que si tiene disponible es API
    
        console.log(Storage); // con esto vamos observar y entender si nuestro navegador tiene implementado el objeto storage
        
        var automoviles = [];

        //Expresiones regulares para dui, nit y placa
        const duiUser = document.getElementById("dui").value;
        const regex = /^[0-9]{8}-[0-9]{1}$/;
        const nit = document.getElementById("nitUser").value;
        const regexnit = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
        const placa = document.getElementById("placaAuto").value; 
        const regexplaca= /[a-zA-Z]{1}[0-9]{3}-[0-9]{3}/;
        if(regex.test(duiUser)){
            alert("El DUI es correcto");
        }else{
            alert("El DUI no es correcto");
        }
        if(regexnit.test(nit)){
            alert("NIT correcto");
        }else{
            alert("NIT INCORRECTO");
        }
        if(regexplaca.test(placa)){
            alert("PLACA CORRECTA");
        }else{
            alert("PLACA INCORRECTA");
        }
         if(placa.length == 0){
            alert("Debe de llenar todos los campos");
         }else{
            location.reload();

         }
        for(var i = 0; i<10;i++){

            if(i == 0){
                var nombre = document.getElementById("nameUser").value;
                automoviles.push(nombre)
                automoviles[i] = nombre;

            }else if( i == 1){
                var nitUu= document.getElementById("nitUser").value;
                automoviles.push(nitUu)
                automoviles[i] = nitUu;


            }else if( i == 2){
                var duiN = document.getElementById("dui").value;
                automoviles.push(duiN)
                automoviles[i] = duiN;

            }else if(i == 3){
                var marcasa = selfab.options[selfab.selectedIndex].value;
                automoviles.push(marcasa)
                automoviles[i] = marcasa;

            }else if(i == 4){
                var model = selmod.options[selmod.selectedIndex].value;
                automoviles.push(model);
                automoviles[i] = model;

            }else if(i == 5){
                var color = colorCarro.options[colorCarro.selectedIndex].value;
                automoviles.push(color);
                automoviles[i] = color;
                 
            }else if(i == 6){
                var plac = document.getElementById("placaAuto").value;
                automoviles.push(plac);
                automoviles[i] = plac;

            }else if(i == 7){
                var anno =document.getElementById("añoAuto").value;
                automoviles.push(anno);
                automoviles[i] = anno;
                
            }else if(i == 8){
                var fallas = document.getElementById("fallasAutomovil").value;
                automoviles.push(fallas);
                automoviles[i] = fallas;
                
            }else if(i== 9){
                
                //Final de validaciones.

                // crea un nuevo objeto `Date`
                var today = new Date();
 
                // `getDate()` devuelve el día del mes (del 1 al 31)
                var day = today.getDate();

                // `getMonth()` devuelve el mes (de 0 a 11)
                var month = today.getMonth() + 1;

                // `getFullYear()` devuelve el año completo
                var year = today.getFullYear();
                automoviles.push(`${day}/${month}/${year}`);
                automoviles [i] = `${day}/${month}/${year}`;

            }
        }
       

        localStorage.setItem("automovil",JSON.stringify(automoviles));//CON setItem logramos realizar el almacenamiento del arreglo y  con JSON.stringify convertimos a un arreglo 
                                                                // este arreglo por que al momento de enviarlo al navegador el arreglo original se hace un string separado con "," 
                                                                //pero con esto logramos q se manetenga el arreglo


        //puede ir a la parte de aplicaiones en el navegador luego dar click en la categoria q dice almacenamiento de ssesion y lograra ver el almacenamiento

        
        //MOSTRAMOS LO EQUIPOS
        
    }else{
    
        alert("Storage no es compatible en este navegador.");
    
    }


}

function tabla(){

    var autosAlmacenados = JSON.parse(localStorage.getItem("automovil")); //CON .getItem logramos obtener lo almacenado en el navegador y con el JSON.PARSE lo convertimos a un arreglo
    //impresion de los datos
    for( var j = 0; j<10 ; j++){

        if(j == 0){
            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";

        }else if( j == 1){

            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";

        }else if( j == 2){

            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";

        }else if(j == 3){
        
            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";

        }else if(j == 4){

            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";

        }else if(j == 5){

            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";
        
        }else if(j == 6){

         var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";
        
        }else if(j== 7){

            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";
        
        }else if( j == 8){

            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";
        
        }else if( j== 9){

            var result = document.getElementById('celda').innerHTML += "<td>"+ autosAlmacenados[j] +"</td>";
        
        }
    }
}

    

function limpiar(){

    sessionStorage.removeItem("equipo");//con esto realizamos la limpia de datos en el sessionStorage en e lnavegador para poder ingresar otro equipo
   
}

function eliminarLista(){

    var result = document.getElementById('detalles').innerHTML =" ";

}



if(window.addEventListener){
    
    window.addEventListener("load", iniciar, false);
    window.addEventListener("load", tabla, false);
}







