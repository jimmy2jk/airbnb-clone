import airbnbLogo from '../images/airbnb-logo.png';

function Navbar() {
    return (
        <nav className='nav'>
            <img src={airbnbLogo} alt='Air Bnb logo' className="nav--logo" />
        </nav>
    )
}

export default Navbar;