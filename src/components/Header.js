import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import AutoComplete from './AutoComplete';



const Header = () => {
  return (
  <div className="nav-area">
        <Link to="/" className="logo">
          MyShop
        </Link>
        <AutoComplete />
        <Navbar />
      </div>


  );
};

export default Header;
