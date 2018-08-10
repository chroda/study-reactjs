const product = {
  name: 'pen black',
  price: 1.90,
  discount: .05
}

function clone(object) {
  return {...object}
}

const newProduct = clone(product);
newProduct.name = 'pen blue';

console.log(product, newProduct);
