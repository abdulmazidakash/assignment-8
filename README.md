<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# GadgetHeaven ✨

**GadgetHeaven** is an e-commerce platform where users can explore, add to cart, and manage their favorite gadgets. This project demonstrates fundamental web development and React skills.

## Live Website Link
https://gadget-heaven-akash.netlify.app/  


## Requirement Document Link
https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf

---

## List of React Fundamental concepts used in the project

- Component-based architecture: Used for structuring UI with reusable components like AddToCard and AddToWishList.
- useState hook: For managing state such as cart items and wishlist.
- useEffect hook: For handling side effects like fetching data and updating the document title.
- Conditional rendering: Displaying Cart or Wishlist based on the active state.
- LocalStorage integration: Managing data persistence for cart and wishlist.

---
## What you have used for handling and managing data (context API/local storage)

I using localStorage to store and retrieve data on the client-side. This is useful for persisting the cart and wishlist data even after the page is refreshed. Specifically:

- Data Persistence: Uses localStorage to save and retrieve cart and wishlist data.
- Cart Management: Adds items to the cart and checks for duplicates before updating localStorage.
- Wishlist Management: Similar to cart management, but also updates the wishlist count via setWishCount if passed.
- User Feedback: Utilizes react-hot-toast for success and error notifications when adding items to the cart or wishlist.
- State Management: React state (setWishCount) is used to update the wishlist count dynamically.

---
## 5 features of your website/project

- Structured Navigation Bar
- Product Categories Sidebar
- Add to Cart and Wishlist Functionality
- Dynamic Product Details Page
- Sorting and Filtering Options

<img src='https://i.ibb.co.com/QMTHVnD/Gadget-Heaven.png' />