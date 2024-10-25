var bagregar = document.getElementById('agregar');
var brventa = document.getElementById('rventa');
var lista = document.getElementById('lventa')

var data = []; //Inicializamos variable como arreglo
var cant =0; //Variable que nos ayuda y controla los productos que se van agregando

bagregar.addEventListener('click',agregar);//este agregar es el nombre de la funcion
brventa.addEventListener('click',rventa); //este rventa es el nombre de la funcion

function agregar(){
    var productov = parseFloat(document.getElementById('productov').value);
    var cantidadv = parseFloat(document.getElementById('cantidadv').value);
    var preciov = parseFloat(document.getElementById('preciov').value);
    var fechav = document.getElementById('fechav').value;

    var total = preciov*cantidadv;

    
    
    //Agregar elementos al arreglo
    // Formato json creamos un objeto

    data.push(
        {
            "id":cant,
            "productov":productov,
            "cantidadv":cantidadv,
            "preciov":preciov,
            "fechav":fechav,
            "total":total

        }
    );
    var id_row = 'row'+ cant; //Identificar cada fila de la tabla que se va creaando automaticamente y saber que id tiene para realizar modificaciones

    var fila='<tr id="'+id_row+'"><td>'
    +productov+'</td><td>'
    +cantidadv+'</td><td>'
    +preciov+'</td><td>'
    +fechav+'</td><td>'
    +total+'</td><td><a href ="#" class = "btn btn-danger" onclick="eliminar('+cant+')";>Eliminar</a><a href = "#" class = "btn btn-warning" onclick= cantidad('+cant+')";>Cantidad</a></td></tr>';

    //Agregar a tabla sintaxis de jquery
    $("#listav").append(fila);
    $("#productov").val('');
    $("#cantidadv").val('');
    $("#preciov").val('');
    $("#fechav").val('');
    
    $('#productov').focus(); //enfocar caja de texto

    cant++; //Varibale se incrementa a medida que se agrega un producto
    
    sumar(); //Llamo a la funcion sumar

};

function rventa(){

}

//Suma el total de los productos
function sumar(){
    var tot =0; 
    for(x of data){   //Este ciclo lo que hace es que recorrer el arreglo data y guardar la informacion en la variable x
        tot=tot+x.total; //Obtiene el elemento total y lo suma dentro de una variable
    }
    document.getElementById('total').innerHTML='Total '+tot;
}

function eliminar(row){ //row es la fila que va a eliminar
    //Remover la fila de la tabla 
    //utlizando jquery
    $('#row'+row).remove(); //Removemos la fila de tabla html
    var i=0;
    var pos=0;
    for(x of data){ //Recorremos el objeto y guarda la posicion del elemento que se quiere eliminar
        if(x.id==row){ 
            pos=i;
        }
        i++
    }
    data.splice(pos,1); //Esta funcion permite eliminar un elemento a partir de su posicion
    sumar();

};

function cantidad(row){
    var canti =parseFloat(prompt("Nueva cantidad"));
    if (isNaN(canti) || canti <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }
    data[row].cantidadv=canti;
    data[row].total=data[row].cantidadv*data[row].preciov;
    var filaid=document.getElementById("row"+row); //Obtenemos toda la fila
    celda = filaid.getElementsByTagName('td');//Obtenemos todas las celdas
    celda[1].innerHTML=canti;
    celda[4].innerHTML=data[row].total;
    sumar();

};