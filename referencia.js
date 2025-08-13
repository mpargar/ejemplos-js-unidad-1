const x = {
  a: 1,
  b: 2,
  c:3,
  d: {
    e: 4
  }
}
const y = {...x, d: {...x.d}};

y.d.e = 3
console.log(y)
console.log(x)
