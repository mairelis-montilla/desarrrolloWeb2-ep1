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
    image: '/recipeThumb-01.jpg',
    rating: 5,
    time: "30 MIN",
    autor: 'Maria'
  },
  {
    title: "Chocolate Cake With Green Tea Cream",
    image:'/recipeThumb-02.jpg',
    rating: 4,
    time: "1 HR 30 MIN",
    autor: 'Maria'
  },
  {
    title: "Thai Yellow Curry Chicken",
    image: '/recipeThumb-03.jpg',
    rating: 5,
    time: "45 MIN",
    autor: 'Maria',
  },
  {
      title: "Recipe 4",
      image: '/recipeThumb-04.jpg',
      rating: 3,
      time: "30 MIN",
      autor: 'Maria'
    },
    {
      title: "Chocolate Cake",
      image: '/recipeThumb-05.jpg',
      rating: 4,
      time: "1 HR 30 MIN",
      autor: 'Maria'
    },
    {
      title: "Thai Yellow Curry Chicken",
      image: '/recipeThumb-06.jpg',
      rating: 5,
      time: "45 MIN",
      autor: 'Maria'
    },
    {
      title: "Mexican Grilled Corn Recipe",
      image: '/recipeThumb-07.jpg',
      rating: 2,
      time: "30 MIN",
      autor: 'Maria'
    },
    {
      title: "Chocolate Cake",
      image: '/recipeThumb-08.jpg',
      rating: 3,
      time: "1 HR 30 MIN",
      autor: 'Maria'
    },
    {
      title: "Thai Yellow Curry Chicken",
      image: '/recipeThumb-09.jpg',
      rating: 5,
      time: "45 MIN",
      autor: 'Maria'
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