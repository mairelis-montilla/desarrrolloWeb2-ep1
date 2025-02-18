import React from 'react';

const Recipes = ({title = 'Latest Recipes', recipes=[]}) => {
  return (
    <div className="container mt-4">
  
      <h2 className="mb-4">{title}</h2>
      
      <div className="row">
        {recipes.length && recipes.map((recipe, index) => (
          <div className="col-md-4" key={index}>
            <div className="mb-4">
                <div className="card">
                    <img src={`src/assets/images${recipe.image}`} className="card-img-top" alt={recipe.title} />
                    <div className="card-body">
                        <h5 className="card-title">{recipe.title}</h5>
                        <div className="d-flex justify-content-between col">
                        <div className="text-warning">
                      {'★'.repeat(recipe.rating)}{'☆'.repeat(5 - recipe.rating)}
                      </div>
                      
                      <div className='text-dark'>⏳ {recipe.time}</div>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
