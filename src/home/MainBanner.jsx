import { useState } from "react";
import banner01 from './../assets/images/banner01.jpg'
import banner02 from './../assets/images/banner02.jpg'
import banner03 from './../assets/images/banner03.jpg'
import './MainBanner.css'
function MainBanner() {

    const recipes = [{
        image: banner01,
        name: 'Mexican Grilled Corn Recipe',
        desc: '4 Servings | 30 min | By Sandra Fortin'
    },
    {
        image: banner02,
        name: 'Roast Chicken With Lemon Gravy',
        desc: '2 Servings | 60 min | By Pedro Diaz'
    },
    {
        image: banner03,
        name: 'Avocado Melon Salad With Lime Vinaigrette',
        desc: '4 Servings | 20 min | By Sandra Fortin'
    }]
    const [currentRecipe, setCurrentRecipe] = useState(recipes[0])
    return (
        <div className="row">
          <div className="col">
            <div className="card bg-dark text-white w-100">
              <img src={currentRecipe.image} className="card-img" alt={currentRecipe.name} />
              <div className="card-img-overlay w-100 h-100 pt-5">
                <div className="container">
                <h5 className=" card-title banner_title">{currentRecipe.name}</h5>
                <p className="card-text h4 pb-5 car">{currentRecipe.desc}</p>
                <a href="#"  className="banner-button">View Recipe</a>
                </div>
              </div>
            </div>
            <div className="container justify-content-center d-flex">
                {recipes.map((recipe, index) => (<button  className={`banner-option ${currentRecipe.name === recipe.name ? 'banner-option_selected': ''}`} key={index+'recipe'} onClick={()=>{setCurrentRecipe(recipe)}}>{recipe.name}</button>))}
            </div>
          </div>
        </div>
    )
}

export default MainBanner