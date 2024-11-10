const asignarEventos = ()=>{
    let elBotonCalcular = document.getElementById('btnCalcular');
    elBotonCalcular.addEventListener('click', integracion);
}
class Producto{
    constructor(nombre , precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Carrito{
    constructor(productos, valorFinal){
        this.productos = productos;
        this.valorFinal = valorFinal;
    }
    agregarProductos(unProducto){
        this.productos.push(unProducto);
    }
    calcularTotalCompra(){
        let precioParcial = 0;
        for(const producto of this.productos){
            precioParcial = producto.precio * producto.cantidad;
            this.valorFinal = this.valorFinal + precioParcial;
        }
    }
    finalizarCompra(){
        let elTxtValorFinal = document.getElementById('txtValorFinal');
        elTxtValorFinal.innerText = this.valorFinal;
    }

    mostrarDetallesCompra(){
        let mensaje = '';
        let elPrfDetalles = document.getElementById('prfDetalles');
        for (const producto of this.productos){
            if(producto.cantidad > 0){
                mensaje = mensaje + `Producto: ${producto.nombre}, Precio: ${producto.precio} , Cantidad: ${producto.cantidad} <br>`;
            }
        }
        elPrfDetalles.innerHTML = mensaje;
    }

}



let atraparDatos = ()=>{
    let objCarrito = new Carrito([],0);
    let valorLeche = 1000;
    let cantidadLeche = Number(document.getElementById('txtLeche').value); 
    let objLeche = new Producto('Leche', valorLeche, cantidadLeche);
    objCarrito.agregarProductos(objLeche);
    
    let valorPan = 2000;
    let cantidadPan = Number(document.getElementById('txtPan').value);
    let objPan = new Producto('Pan de Molde', valorPan, cantidadPan);
    objCarrito.agregarProductos(objPan);

    let valorQueso = 1200;
    let cantidadQueso = Number(document.getElementById('txtQueso').value);
    let objQueso = new Producto('Queso', valorQueso, cantidadQueso);
    objCarrito.agregarProductos(objQueso);

    let valorMermelada = 890;
    let cantidadMermelada = Number(document.getElementById('txtMermelada').value);
    let objMermelada = new Producto('Mermelada', valorMermelada, cantidadMermelada);
    objCarrito.agregarProductos(objMermelada);

    let valorAzucar = 1300;
    let cantidadAzucar = Number(document.getElementById('txtAzucar').value);
    let objAzucar = new Producto('Azucar', valorAzucar, cantidadAzucar);
    objCarrito.agregarProductos(objAzucar);
    
    objCarrito.calcularTotalCompra();
    objCarrito.finalizarCompra();
    return objCarrito;
}


let integracion = ()=>{
    let elCarritoDeCompras = atraparDatos();
    elCarritoDeCompras.mostrarDetallesCompra();
}