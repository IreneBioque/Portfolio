import '../styles/layout/_header.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul className='header__ul'>
          <li className='header__ul--li'>
            <a href='#work'>Proyectos</a>
          </li>
          <li className='header__ul--li'>
            <a href='#about'>Sobre mi</a>
          </li>
          <li className='header__ul--li'>
            <a href='#contact'>Contacto</a>
          </li>
          <li className='header__ul--li'>
            <a href='#technologies'>Tecnologías</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
