const express = require('express');
const mysql = require('mysql2');


const app =  express();

let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'APPFISH',
    password: 'Laurendelrio0905'

});

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/', function(req,res){

    res.render('compra');
});

app.post('/agregar',function(req,res){
    const datos = req.body;

    let producto = datos.idproductoc;
    let cantidad = datos.cantidadc;
    let precio = datos.precioc;
    let fecha = datos.fechac;


    


    let agregar = 'Insert into COMPRA (ID_PRODUCTO,CANTIDAD_C,PRECIOTOTAL_C,FECHA_C) VALUES ("'+producto+'","'+cantidad+'","'+precio+'","'+fecha+'")';

    conexion.query(agregar,function(error){
        if(error){
            throw error;
        }else{
            console.log('Datos almacenados correctamente');
        }
    });

});

app.listen(3000,function(){

    console.log('Servidor creado htpps://localhost:3000');
})