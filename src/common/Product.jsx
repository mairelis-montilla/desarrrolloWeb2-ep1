import React from 'react'

function Product({name, image, price, category}) {
  return (
    <div className='col-md-4'>
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted text-center">{category}</h6>
        <h5 className="card-title text-muted text-center fw-bold">{name}</h5>
        <p className="card-text text-center fw-bold">${price}</p>
      </div>
    </div>
    </div>
  )
}

export default Product