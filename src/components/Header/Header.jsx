import "./Header.css"
import {NavLink} from "react-router-dom"
const Header = () => {
    return (  
        <div className="header-ui">
            <NavLink to ="/ContactList" className={(navData)=>navData.isActive ? "navlink " : "navlink nonactive"}>مخاطبین</NavLink>
            <NavLink to="/" className={(navData)=>navData.isActive ? "navlink " : "navlink nonactive"}> فرم ایجاد مخاطب</NavLink>

        </div>
    );
}
 
export default Header;