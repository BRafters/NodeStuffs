const greeter = (name = "User") => {
    console.log(`Hello, ${name}`);
};

greeter("Brennan");
greeter();

let product = [{
    label: "Book",
    stock: 1,
    price: 10.00,
    rating: 5
}];

const transaction = (type, { label, stock, price } = {}) => {
    let text = price !== undefined ? price.toFixed(2) : undefined;
    console.log(type, label, "\nPrice: " + text, "Stock: " + stock);
};

transaction("Order");
transaction("Order", product[0]);