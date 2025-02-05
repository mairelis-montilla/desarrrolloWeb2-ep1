
function Footer() {
    return (
        <section className="bg-dark text-light py-5">
        <div className="container">
          <div className="row">
            {/* About Section */}
            <div className="col-md-3">
              <h5 className="border-bottom pb-2">About</h5>
              <p>Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum vulputate. Pellentesque et ipsum in dui malesuada tempus.</p>
            </div>
  
            {/* Archives Section */}
            <div className="col-md-3">
              <h5 className="border-bottom pb-2">Archives</h5>
              <ul className="list-unstyled">
                <li>&#9656; June 2014</li>
                <li>&#9656; July 2014</li>
                <li>&#9656; August 2014</li>
                <li>&#9656; September 2014</li>
                <li>&#9656; November 2014</li>
              </ul>
            </div>
  
            {/* Recipes Section */}
            <div className="col-md-3">
              <h5 className="border-bottom pb-2">Recipes</h5>
              <ul className="list-unstyled">
                <li>&#9656; Browse Recipes</li>
                <li>&#9656; Recipe Page</li>
                <li>&#9656; Submit Recipe</li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div className="col-md-3">
              <h5 className="border-bottom pb-2">Newsletter</h5>
              <p>Sign up to receive email updates on new product announcements, gift ideas, sales and more.</p>
              <div className="d-flex">
                <input type="email" className="form-control me-2" placeholder="mail@example.com" />
                <button className="btn btn-success">SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Footer