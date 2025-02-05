import { Link } from "react-router-dom";
import logo from './../assets/images/logo.png'

function MainNav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-xl d-flex py-3 justify-content-between">
        <Link className="logo" id="logo" to="/">
          <img src={logo} alt="" className="img-fluid me-auto" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item nav-item_text">
              <Link className="nav-link" to="/recetas">
                Recetas
              </Link>
            </li>
            <li className="nav-item nav-item_text">
              <Link className="nav-link" to="/tienda">
                Tienda
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
