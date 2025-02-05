import React from 'react'
import { Link } from 'react-router-dom'

function PageHeader({title}) {
  return (
    <header id="page-header">
    <div className="container-xl d-flex  align-items-center justify-content-between">
      <h2>{title}</h2>
      <div className='d-flex gap-3 breadcrumb align-items-center'>
      You are here: 
      <Link className="nav-link" to="/">Home {' >'} </Link>
        <span>{title}</span>
      </div>
    </div>
</header>
  )
}

export default PageHeader