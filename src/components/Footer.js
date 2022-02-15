import '../styles/Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className='logo' />
            <div className='socialsF'>
                <h2>Socials</h2>
                <ul className='ul'>
                    <li>Github</li>
                    <li>LinkedIn</li>
                    <li>Mail</li>
                    <li>Instagram</li>
                </ul>
            </div>
            <div className='pages'>
                <h2>Pages</h2>
                <ul className='ul'>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Projects</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;