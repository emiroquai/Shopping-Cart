import Icon from '@mdi/react';
import { mdiCartHeart } from '@mdi/js';
import { mdiBasketOutline } from '@mdi/js';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";
import PropTypes from 'prop-types';

const Navbar = ({ cart }) => {

  return (
    <header>
      <nav className="navbar">
        <div className="navbarLeft">
          <Link to="home" className="logo">
            <Icon path={mdiCartHeart} size={1.25} />
            <h1>RoRoMart</h1>
          </Link>
          <Link to="shop">
            <h1>Shop</h1>
          </Link>
        </div>
        <div className="navbarRight">
          <Link to="cart" className="cartNav">
            <Icon path={mdiBasketOutline} size={1.25} />
            {cart.length > 0 &&
              <div className="cartCount">
                <p>{cart.length}</p>              
              </div>
            } 
          </Link>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  cart: PropTypes.array.isRequired
};


export default Navbar;