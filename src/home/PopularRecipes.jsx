import React from 'react';
import Recipe1 from './../assets/images/Recipe1.jpg';
import Recipe2 from './../assets/images/Recipe2.jpg';
import Recipe3 from './../assets/images/Recipe3.jpg';
export default function PopularRecipes() {
  const recipes = [
    {
      title: 'Chocolate Cake With Green Tea Cream',
      image: Recipe1,
    },
    {
      title: 'Mexican Grilled Corn Recipe',
      image: Recipe2,
    },
    {
      title: 'Pollo Borracho With Homemade Tortillas',
      image: Recipe3,
    },
  ];


  return (
    <div className="p-4">
      <h4 className="text-lg font-semibold border-b pb-2 mb-4">Popular Recipes</h4>
      <div className="space-y-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="card">
            <img src={recipe.image} alt={recipe.title} className="card-img rounded" />
            <div className="card-img-overlay w-100 h-100">
              <h5 className="card-title text-white h4">{recipe.title}</h5>
              <div className="card-text  text-warning flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className='h5'>★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
