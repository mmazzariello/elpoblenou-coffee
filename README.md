
# El Poblenou Coffee

At this online specialty coffee store you will find a curated selection of the world's most complex and dynamic coffees, fresh in season.
Sustainably grown at source and freshly roasted.

# Commands

To install: npm install, To run: npm run dev.

# Minimum Viable Product

Develop an application for an electronic commerce to sell products.

# Stack

- React (Vite)
- Tailwind
- Chakra UI
- DB: Firebase

# User Stories

- 404: As a user, I want to see a descriptive error when I go to a page that doesn't exist
- 500: As a user, I want to see an error page when it goes bankrupt
- ItemList: As a user I want to be able to enter the app, go to the products and see the details.
- ItemDetail: As a user, in the product detail, I want to see the description, photo and price and be able to add the product to the cart.
- As a user, in the cart I want to see a the total price of the product list.
- Checkout: As a user I want to be able to enter my personal data to enable the purchase.
- As a user, when clicking on purchase, I want to get an order that is saved in the DB and that contains the products, the date and the order number.

# Components

- Cart
- Cart Widget
- Item Detail Container
- Item Detail
- Item
- ItemCount
- Item List Container
- Item List
- Navbar
- Purchase Modal

# Context

- Cart Context

# Deploy

- [Link](https://speciality-coffee-9duvfd44t-mmazzariello.vercel.app/)

# Backlog
List of other features outside of the MVPs scope

- Login
- Favourites









# Client / Front-end Routes

| Path         | Component        | Behaviour                  |
| :-----       | :-------         | :------------------------- |
| /            | ItemListContainer| Home Page                  |
| /category/:id| ItemListContainer| Category Page              |
| /item/:id | ItemDetailContainer| Show Item                  |
| /cart       | Cart              | Cart                       |