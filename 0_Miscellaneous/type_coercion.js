// type coersion lecture, efter idag at skrive om type coersion
const total = 34.32;
const price = 12.32;
const newTotal = total+price;

console.log(newTotal);
//brug altid tre lighedstegn hard equality checks
const balanceEquals = total === newTotal;

console.log(balanceEquals);

const cat = {
    key: "value",
    name: "Tom"
}

console.log(cat["name"]);
console.log(cat.name);