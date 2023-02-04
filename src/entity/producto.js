class Producto {
    constructor(nombre,codigo,iva){
        this.nombre = nombre;
        this.codigo = codigo;
        this.impuesto = iva;
    }
}


class Impuesto{
    constructor(){
        this.drogueria = 0.12
        this.papeleria = 0.16
        this.supermercado = 0.04
    }
}

class TipoProducto {
    constructor(nombre,codigo){
        this.nombre = nombre;
        this.codigo = codigo;
    }
}

export {Producto,
        Impuesto,
        TipoProducto}