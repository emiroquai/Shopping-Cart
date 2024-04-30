import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to RoRoMart!</h1>
      <p>Discover our fake selection of amazing products. Delivered from the interwebs to your heart.</p>
      <Link to="/shop" className="linkButton">Shop Collection</Link>
    </div>
  )
}

export default Home;