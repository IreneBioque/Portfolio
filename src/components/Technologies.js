import logoGit from '../images/git-blanco.png';
import logoHTML from '../images/html-blanco.png';
import logoJS from '../images/js-blanco.png';
import logoNode from '../images/node-blanco.png';
import logoReact from '../images/react-blanco.png';
import logoSASS from '../images/sass-blanco.png';
import logoSQL from '../images/sql-blanco.png';

const Technologies = () => {
  return (
    <section id='technologies'>
      <h2 className='section__title technologies__title'>Tecnologías</h2>
      <ul className='technologies'>
        <li>
          <img src={logoSASS} alt='SCSS' className='tech_img sass' />
        </li>
        <li>
          <img src={logoHTML} alt='HTML' className='tech_img html' />
        </li>
        <li>
          <img src={logoJS} alt='JS' className='tech_img js' />
        </li>
        <li>
          <img src={logoReact} alt='REACT' className='tech_img react' />
        </li>
        <li>
          <img src={logoGit} alt='GIT' className='tech_img git' />
        </li>
        <li>
          <img src={logoNode} alt='NODE' className='tech_img node' />
        </li>
        <li>
          <img src={logoSQL} alt='SQL' className='tech_img sql' />
        </li>
      </ul>
    </section>
  );
};
export default Technologies;
