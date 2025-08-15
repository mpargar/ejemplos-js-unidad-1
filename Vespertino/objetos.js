const ejemplo = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
  e: function () {
    console.log("HOLA!");
    console.log(this);
  },
};
//console.log(ejemplo);
//console.log(ejemplo.a);
//ejemplo.e();

const ProtoCarrito = {
  agregar(producto) {
    if (!this.productos) {
      this.productos = [producto];
    } else {
      this.productos.push(producto);
    }
  },
};

const carrito1 = Object.create(ProtoCarrito);
carrito1.agregar('Moto')
//console.log(carrito1)

function Carrito () {
  this.productos = [];
  this.agregar = function (producto) {
    this.productos.push(producto)
  }
}

const carrito2 = new Carrito();
console.log(carrito2)

class CarritoCompras {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto)
  }
}

const carrito3 = new CarritoCompras();
carrito3.agregar('Computadora')
console.log(carrito3)


