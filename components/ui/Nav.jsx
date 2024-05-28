import { Link } from 'react-scroll';


const links = [
    {
        path: 'home',
        name: 'Inicio',
        offser: -50
    },
    {
        path: 'menu',
        name: 'Menu',
        offser: -50
    },
    {
        path: 'about',
        name: 'Nosotros',
        offser: -50
    },
    {
        path: 'contact',
        name: 'Contacto',
        offser: -50
    },


]


const Nav = ({ containerStyles, linkStyles }) => {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        key={index}
                        to={link.path}
                        spy={true}
                        smooth={true}
                        offset={link.offset}
                        duration={500}
                        className={`${linkStyles}`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );

};

export default Nav