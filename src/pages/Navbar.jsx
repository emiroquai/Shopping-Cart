import Icon from '@mdi/react';
import { mdiCartHeart } from '@mdi/js';
import { mdiBasketOutline } from '@mdi/js';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbarLeft">
          <div className="logo">
            <Icon path={mdiCartHeart} size={1.25} />
            <h1>
              RoRoMart
            </h1>
          </div>
          <h2>Store</h2>
        </div>
        <div className="navbarRight">
          <Icon path={mdiBasketOutline} size={1.25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;