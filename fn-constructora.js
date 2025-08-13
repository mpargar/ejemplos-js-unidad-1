const Carrito = function () {
  this.productos = [];
  this.agregar = function (producto) {
    this.productos.push(producto)
  }
}

const carrito = new Carrito();
console.log(carrito)
carrito.agregar('Compu')
console.log(carrito)

class Carro {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto)
  }
}

const carro = new Carro();
console.log(carro)
carro.agregar('AD')
console.log(carro)
