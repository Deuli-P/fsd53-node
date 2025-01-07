const u = require("./utils")

// Décomposition
const {priceTTC} = u;

const priceHT = [
    { name : "Apple", priceHT : 1.0, priceTTC : null },
    { name : "Orange", priceHT : 1.2, priceTTC : null },
    { name : "Rasberry", priceHT : 2.5, priceTTC : null },
];

for(const product of priceHT){
product.priceTTC = priceTTC(product.priceHT).toFixed(2)
}

console.log(priceHT);
