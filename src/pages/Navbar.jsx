import Icon from '@mdi/react';
import { mdiCartHeart } from '@mdi/js';
import { mdiBasketOutline } from '@mdi/js';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;