import '../styles/Footer.css'
import HeroCommon from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import About from './About';

const Footer = () => {
    return(
        <div className="footer">
            <div className='logo' />
            <div className='socialsF'>
                <h2 className='foot'>Socials</h2>
                <ul className='ul'>
                    <li><a className='soc' href="https://github.com/chaitravi-ce">Github</a></li>
                    <li><a className='soc' href="https://www.linkedin.com/in/chaitravi-chalke-6b4806190/">LinkedIn</a></li>
                    <li><a className='soc' href="mailto:cnchalke_b19@el.vjti.ac.in">Mail</a></li>
                    <li><a className='soc' href="https://www.instagram.com/chaitravi_ce25/">Instagram</a></li>
                </ul>
            </div>
            <div className='pages'>
                <h2 className='foot'>Pages</h2>
                <ul className='ul'>
                    <li><a className='soc' href="/#home">Home</a></li>
                    <li><a className='soc' href="/#experience">Experience</a></li>
                    <li><a className='soc' href="/#projects">Projects</a></li>
                    <li><a className='soc' href="/#about">About</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;