# easymeals

#runn

# Detailed setup instructions

Install my-project with npm

# download easymeals

run following commands

```bash
  cd easymeals
  yarn or yarn install
  yarn dev
```

[githubrepoLink](https://github.com/PARMESHWARPANWAR/easymeals)

[weblink](https://easymeals-six.vercel.app/)

# Code architecture description

# Dummy data (In api folder create dummy data for)

1. restaurants list of restaurant
2. products list of product
   restaurant = { id,name,address}
   product = {id,restaurantId,name,categories,filters,description,image}

map product with restaurant using restaurantId

# filter products (3 levels of filtering)

1. filters
   In product obj. We have list of filters using this we filter product using selectedFilters list
2. Categories
   In product obj. We have list of categories using this we filter product using selectedCategory.
3. Search by Recipe Title
   In product obj. We have name or title of the product using we search keyword in name or title. according that filter product

# login

1. define authentication function in authDemo file in utils folder
2. on registration save user in users list in local storage
3. on login save user details in local storage {if user present in users list in local storage}
4. logout remove user details from local storage
5. using get user details function get user details if user is logged in

# cart list

1. When we click on product. We will get product details also get addCart button. using this button we will add product in cart list
2. We will save cart product in cartItems list in local storage

# wishList

1. When we like a product. It will be added to wish list. wishList will be in local storage like cart list
