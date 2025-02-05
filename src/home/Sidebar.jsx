import React from 'react'
import user from './../assets/images/author-photo.png'
import PopularRecipes from './PopularRecipes'

function Sidebar() {
  return (
              <div className="col-md-4">
              <div className="mb-4">
                <input type="text" className="form-control" placeholder="Search for recipes" />
                <button className="btn btn-success w-100 mt-2">Search</button>
              </div>
              <div className="card">
                <div className="card-body p-4">
                  <div className='d-flex gap-2 align-items-center'>
                    <div className='col-md-6'>
                      <h6 className="card-title">Author</h6>
                      <h4 className="card-subtitle mb-2 text-muted">Sandra Fortin</h4>
                    </div>
                   <img src={user} className="rounded-circle col-md-5" alt="Author" />
                  </div>
                  <h6>Sandra@email.com</h6>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
                </div>
              </div>
              <PopularRecipes />
            </div>
  )
}

export default Sidebar