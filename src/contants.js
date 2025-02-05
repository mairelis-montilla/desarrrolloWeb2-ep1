import Recipe1 from './assets/images/recipeThumb-01.jpg'
import Recipe2 from './assets/images/recipeThumb-02.jpg'
import Recipe3 from './assets/images/recipeThumb-03.jpg'
import Recipe4 from './assets/images/recipeThumb-04.jpg'
import Recipe5 from './assets/images/recipeThumb-05.jpg'
import Recipe6 from './assets/images/recipeThumb-06.jpg'
import Recipe7 from './assets/images/recipeThumb-07.jpg'
import Recipe8 from './assets/images/recipeThumb-08.jpg'
import Recipe9 from './assets/images/recipeThumb-09.jpg'

const recipes = [
  {
    title: "Mexican Grilled Corn Recipe",
    image: Recipe1,
    rating: 5,
    time: "30 MIN"
  },
  {
    title: "Chocolate Cake With Green Tea Cream",
    image: Recipe2,
    rating: 4,
    time: "1 HR 30 MIN"
  },
  {
    title: "Thai Yellow Curry Chicken",
    image: Recipe3,
    rating: 5,
    time: "45 MIN"
  },
  {
      title: "Recipe 4",
      image: Recipe4,
      rating: 3,
      time: "30 MIN"
    },
    {
      title: "Chocolate Cake",
      image: Recipe5,
      rating: 4,
      time: "1 HR 30 MIN"
    },
    {
      title: "Thai Yellow Curry Chicken",
      image: Recipe6,
      rating: 5,
      time: "45 MIN"
    },
    {
      title: "Mexican Grilled Corn Recipe",
      image: Recipe7,
      rating: 2,
      time: "30 MIN"
    },
    {
      title: "Chocolate Cake",
      image: Recipe8,
      rating: 3,
      time: "1 HR 30 MIN"
    },
    {
      title: "Thai Yellow Curry Chicken",
      image: Recipe9,
      rating: 5,
      time: "45 MIN"
    },

];

const products = [
  { name: "Cinnamon", category: "Spices", price: 5.99, image: Recipe1 },
  { name: "Black Pepper", category: "Condiments", price: 4.50, image: Recipe2},
  { name: "Turmeric", category: "Spices", price: 6.25, image: Recipe3 },
  { name: "Cumin", category: "Aromatic Spices", price: 3.99, image: Recipe4 },
  { name: "Nutmeg", category: "Spices", price: 7.49, image: Recipe5 },
  { name: "Cloves", category: "Spices", price: 5.75, image: Recipe6 },
  { name: "Paprika", category: "Spices", price: 4.99, image: Recipe7},
  { name: "Ginger", category: "Spices", price: 5.25, image: Recipe8},
  { name: "Star Anise", category: "Spices", price: 6.99, image: Recipe9 }
];

export {recipes, products}