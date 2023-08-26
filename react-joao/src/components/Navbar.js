import logo from "../images/ironhack-logo.png";
import menu from "../images/menu-burguer.png";

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="img">
                <img
                    src={logo} alt="logo ironhack" className='img01' />
            </div>
            <div className="img">
                <img
                    src={menu} alt="menu ironhack" className='img01' />
            </div>
        </nav>
    );
}

export default Navbar;