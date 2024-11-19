// task:
// ----------
const products = [
    {
      id: 101,
      name: "Smartphone",
      price: 699.99,
      category: "Electronics",
      inStock: true,
      ratings: 4.5,
    },
    {
      id: 102,
      name: "Laptop",
      price: 1199.99,
      category: "Computers",
      inStock: false,
      ratings: 4.7,
    },
    {
      id: 103,
      name: "Wireless Headphones",
      price: 199.99,
      category: "Accessories",
      inStock: true,
      ratings: 4.3,
    },
    {
      id: 104,
      name: "Smartwatch",
      price: 149.99,
      category: "Wearables",
      inStock: true,
      ratings: 4.2,
    },
    {
      id: 105,
      name: "Gaming Console",
      price: 499.99,
      category: "Gaming",
      inStock: true,
      ratings: 4.8,
    },
  ];
  
  // 1.Write a function that returns an array of all product names in uppercase.
  
  let task1 = products.map((params) => {
    let x = params.name.toUpperCase();
    return x;
  });
  console.log(task1);
  
  // 2.Write a function that logs each product's name and price to the console.
  
  let task2 = products.forEach((params1) => {
    console.log(`name:${params1.name}, price: ${params1.price}`);
  });
  
  // 3.Write a function that returns an array of products that are in stock.
  
  let task3 = products.filter((params2) => {
    return params2.inStock;
  });
  console.log(task3);
  
  // 4.Write a function that finds the first product with a rating higher than 4.5
  
  let task4 = products.find((params3) => {
    return params3.ratings > 4.5;
  });
  console.log(task4);
  
  // 5.Write a function that returns the index of the first product in the "Gaming"
  
  let task5 = products.findIndex((params4) => {
    return params4.category === "Gaming";
  });
  console.log(task5);
  
  // 6.Write a function that checks if all products are in stock.
  let task6 = products.every((params5) => {
    return params5.inStock;
  });
  console.log(task6);
  
  // 7.Write a function that checks if any product has a price lower than $200.
  let task7 = products.some((params6) => {
    let op = params6.price < 200;
    return op;
  });
  console.log(task7);
  