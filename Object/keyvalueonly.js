//find key and value
const products = {
  name: "Product 1",
  price: 10,
};

for (let i in products) {
  console.log("key" + "-->" + i);
  console.log("value" + "-->" + products[i]);
}
// output-->
// key-->name
// value-->Product 1
// key-->price
// value-->10

// const products = {
//     name: 'Product 1', price: 10

//  }

//  for(let i in products){
//      console.log("key" +"-->"+i)

//  }
//  for(let i in products){

//      console.log("value" +"-->"+products[i])
//  }
//  output-->
//  key-->name
//  key-->price
//  value-->Product 1
//  value-->10
