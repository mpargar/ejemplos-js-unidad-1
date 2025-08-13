const x = Symbol('Descripcion de x');

const ES_VALIDO = Symbol('Define si es valido o no bajo xyz');

const response = {
  "valor": 1,
  "esValido": true,
}

response[ES_VALIDO] = 123

console.log(response)
console.log(response[ES_VALIDO])


// Inmutabilidad
const s = 'HOLA MUNDO!!'
s[1] = 'P'
console.log(s[1])
