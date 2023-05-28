const faker = require("faker");

// Generate dummy restaurant data
const generateRestaurants = (count) => {
  const restaurants = [];
  for (let i = 1; i <= count; i++) {
    const restaurant = {
      id: i.toString(),
      name: faker.company.companyName(),
      image: faker.image.imageUrl(),
      addresses: [],
    };
    restaurants.push(restaurant);
  }
  return restaurants;
};

// Generate dummy product data
const generateProducts = (count, restaurants) => {
  const products = [];
  for (let i = 1; i <= count; i++) {
    const product = {
      id: i.toString(),
      restaurantId: faker.random.arrayElement(restaurants).id,
      name: faker.commerce.productName(),
      type: faker.random.word(),
      price: faker.commerce.price(),
      categories: [faker.random.word()],
      filters: faker.random.words().split(" "),
      image: faker.image.imageUrl(),
      stock: faker.random.boolean(),
      description: faker.lorem.sentence(),
      reviews: [
        {
          id: faker.random.uuid(),
          userId: faker.random.arrayElement(users).userId,
          comment: faker.lorem.sentence(),
          rating: faker.random.number({ min: 1, max: 5 }),
        },
      ],
    };
    products.push(product);
  }
  return products;
};

// Generate dummy user data
const generateUsers = (count) => {
  const users = [];
  for (let i = 1; i <= count; i++) {
    const user = {
      userId: i.toString(),
      name: faker.name.firstName(),
      image: faker.image.imageUrl(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    users.push(user);
  }
  return users;
};

// Generate dummy data
const restaurants = generateRestaurants(3);
const products = generateProducts(9, restaurants);
const users = generateUsers(5);

// Print the generated data
console.log("Restaurants:", restaurants);
console.log("Products:", products);
console.log("Users:", users);
