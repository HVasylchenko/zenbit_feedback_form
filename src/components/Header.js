
import {NavLink} from "react-router-dom";
import "./Header.css";
function Header() {
    return (
      <div>
        <nav >
          <ul >
            {/* <li> <NavLink exact='true' to='/'>About</NavLink></li> */}
            <li> <NavLink to='/about'>About</NavLink></li>
            <li> <NavLink to='/userform'>Userform</NavLink></li>
          </ul>
        </nav>
        
      </div>
    );
  }
  
  export default Header;