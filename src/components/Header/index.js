// Write your JS code here
// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="bg-container">
    <nav className="nav-items">
      <div className="first-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="wave-img"
        />
        <h1>Wave</h1>
      </div>
      <div className="second-item">
        <Link className="nav-link" to="/">
          <h1>Home</h1>
        </Link>

        <h1 className="nav-link">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </h1>

        <h1>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </h1>
      </div>
    </nav>
  </div>
)

export default Header
