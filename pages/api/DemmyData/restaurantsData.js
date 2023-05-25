export const restaurantsData = [
  {
    id: "1",
    name: "Restaurant A",
    image: "https://example/images/restaurant.jpg",
    addresses: [],
    foods: [
      {
        id: "1",
        name: "Pizza Margherita",
        type: "Italian",
        categray: "",
        filters: ["Seasonal", "Dairy", "Lunch", "Savory"],
        image: "https://example.com/images/pizza.jpg",
        stock: 10,
      },
      {
        id: "2",
        name: "Chicken Caesar Salad",
        type: "American",
        categray: "",
        filters: ["Dietary", "Lunch", "Healthy"],
        image: "https://example.com/images/salad.jpg",
        stock: 5,
      },
      {
        id: "3",
        name: "Pumpkin Spice Latte",
        type: "Beverage",
        categray: "",
        filters: ["Seasonal", "Drink", "Sweet"],
        image: "https://example.com/images/latte.jpg",
        stock: 8,
      },
    ],
  },
  {
    id: "2",
    name: "Restaurant B",
    image: "https://example/images/restaurant.jpg",
    addresses: [],
    foods: [
      {
        id: "1",
        name: "Sushi Rolls",
        type: "Japanese",
        categray: "",
        filters: ["Dinner", "Seafood"],
        image: "https://example.com/images/sushi.jpg",
        stock: 15,
      },
      {
        id: "2",
        name: "Vegetable Stir Fry",
        type: "Asian",
        categray: "",
        filters: ["Dietary", "Lunch", "Vegetarian"],
        image: "https://example.com/images/stirfry.jpg",
        stock: 12,
      },
      {
        id: "3",
        name: "Chocolate Brownie",
        type: "Dessert",
        categray: "",
        filters: ["Sweet", "Dessert"],
        image: "https://example.com/images/brownie.jpg",
        stock: 3,
      },
    ],
  },
  {
    id: "3",
    name: "Restaurant C",
    image: "https://example/images/restaurant.jpg",
    addresses: [],
    foods: [
      {
        id: "1",
        name: "Steak",
        type: "American",
        categray: "",
        filters: ["Dinner", "Meat"],
        image: "https://example.com/images/steak.jpg",
        stock: 7,
      },
      {
        id: "2",
        name: "Pasta Alfredo",
        type: "Italian",
        categray: "",
        filters: ["Dinner", "Pasta"],
        image: "https://example.com/images/pasta.jpg",
        stock: 10,
      },
      {
        id: "3",
        name: "Strawberry Cheesecake",
        type: "Dessert",
        categray: "",
        filters: ["Sweet", "Dessert"],
        image: "https://example.com/images/cheesecake.jpg",
        stock: 6,
      },
    ],
  },
];

export const restaurants = [
  {
    id: "1",
    name: "Restaurant A",
    image: "https://example/images/restaurant.jpg",
    addresses: [],
  },
  {
    id: "2",
    name: "Restaurant B",
    image: "https://example/images/restaurant.jpg",
    addresses: [],
  },
  {
    id: "3",
    name: "Restaurant C",
    image: "https://example/images/restaurant.jpg",
    addresses: [],
  },
];

export const products = [
  {
    id: "1",
    restaurantId: "1",
    name: "Pizza Margherita",
    type: "Italian",
    price: "10",
    categories: ["Category A"],
    filters: ["Spring", "Dairy", "Lunch", "Savory"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    description: "description for the food bar",
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },
  {
    id: "2",
    restaurantId: "1",
    name: "Chicken Caesar Salad",
    type: "American",
    price: "30",
    categories: ["Category B"],
    filters: ["Autumn", "Dietary", "Lunch", "Healthy"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },
  {
    id: "3",
    restaurantId: "1",
    name: "Pumpkin Spice Latte",
    type: "Beverage",
    price: "19",
    categories: ["Category B"],
    filters: ["Winter", "Drink", "Sweet"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },

  {
    id: "4",
    restaurantId: "2",
    name: "Sushi Rolls",
    type: "Japanese",
    price: "17",
    categories: ["Category B"],
    filters: ["Dinner", "Seafood"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: false,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },
  {
    id: "5",
    restaurantId: "2",
    name: "Vegetable Stir Fry",
    type: "Asian",
    price: "20",
    categories: ["Category B"],
    filters: ["Dietary", "Lunch", "Vegetarian"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },
  {
    id: "6",
    restaurantId: "2",
    name: "Chocolate Brownie",
    type: "Dessert",
    price: "11",
    categories: ["Category B"],
    filters: ["Sweet", "Dessert"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },

  {
    id: "7",
    restaurantId: "3",
    name: "Steak",
    type: "American",
    price: "13",
    categories: ["Category B"],
    filters: ["Dinner", "Meat"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },
  {
    id: "8",
    restaurantId: "3",
    name: "Pasta Alfredo",
    type: "Italian",
    price: "12",
    categories: ["Category B"],
    filters: ["Dinner", "Pasta"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },
  {
    id: "9",
    restaurantId: "3",
    name: "Strawberry Cheesecake",
    type: "Dessert",
    price: "15",
    categories: ["Category B"],
    filters: ["Sweet", "Dessert"],
    image:
      "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.webp",
    stock: true,
    rating: 2,
    numOfReviews: 1,
    reviews: [
      {
        id: "12",
        userId: "#userId",
        comment: "this is a comment",
        rating: 2,
      },
    ],
  },
];
// const restaurantsData: {
//   name: string;
//   image: string;
//   addresses: any[];
//   foods: {
//       name: string;
//       type: string;
//       categray: string;
//       filters: string[];
//       image: string;
//       stock: number;
//   }[];
// }[]
