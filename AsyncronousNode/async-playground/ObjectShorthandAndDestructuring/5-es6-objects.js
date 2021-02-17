// Object property shorthand

const name = "Andrew";
const uAge = 27;

const user = {
    name,
    age: uAge,
    location: "Philadelphia"
};

console.log(user);

// Object Destructuring

const product = {
    label: "Red Notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
};

const {label:productLabel, stock} = product;
console.log(productLabel);

const transaction = (type, aProduct) => {
    const {label} = aProduct;
    console.log(label);
};
const transactionTwo = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction("order", product);
transactionTwo("order", product);