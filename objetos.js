const literal = {
  a: 1,
  b: 2,
  c: {
    d: 3
  },
  f: function () {
    console.log('es una funcion', this.a)
  }
};

/*console.log(literal);*/
/*console.log(literal.a);*/
/*console.log(literal.c.d);*/
//literal.f()

const carrito = {
  productos: [],
  add(producto) {
    this.productos.push(producto)
  }
}

/*console.log(carrito.productos)*/
/*carrito.add('Computadora')*/
/*console.log(carrito.productos)*/

// TODO: Retomar Object Create
/*const PrototipoCarrito = {*/
  /*agregar: function (producto){*/
    /*if(this.productos) {*/
      /*this.productos = [producto]*/
    /*} else {*/
      /*this.productos.push(producto)*/
    /*}*/
  /*}*/
/*}*/

/*const proto = Object.create(PrototipoCarrito)*/
/*proto.agregar('HOLA!')*/
/*console.log(proto)*/
