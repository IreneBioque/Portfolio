import '../styles/layout/_header.scss';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='header__ul'>
          <li className='header__ul--li'>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >Proyectos</Link>
          </li>
          <li className='header__ul--li'>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >Sobre mi</Link>
          </li>
          <li className='header__ul--li'>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
