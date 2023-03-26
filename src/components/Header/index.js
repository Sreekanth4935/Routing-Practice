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
      <ul className="second-item">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
