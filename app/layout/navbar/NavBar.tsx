import Logo from "../navbar-parts/Logo";
import NavAction from "../navbar-parts/NavAction";
import NavLinks from "../navbar-parts/NavLinks";

const NavBar = () => {
    return (
        <nav className="flex w-full px-1 items-center justify-between flex-wrap   ml-1 mr-1 bg-white shadow">
            <Logo/>
            <NavLinks/>
            <NavAction/>
        </nav>
    );
};

export default NavBar;
