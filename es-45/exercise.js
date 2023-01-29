
function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}


let phone1 = new Smartphone("Samsung", "Galaxy S23", 1000);

let phone2 = new Smartphone("Apple", "iPhone 14", 1200);

console.log(phone1, "\n", phone2);
