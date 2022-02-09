import '../styles/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

const Skill = (props) => {
    return(
        <div className='skillset'>
            <i className={props.class} style={{background: '#333'}}></i>
            <h5>{props.title}</h5>
        </div>
    );
}

const About = () => {
    return(
        <div className='about'>
            <h1>About</h1>
            <div className='skills'>
                <h3>Skills</h3>
                <div className='sicons'>
                    <Skill class="fa fa-html5 fd" title="HTML5"/> 
                    <Skill class="fa fa-css3 fd" title="CSS3"/>
                    <Skill class="fa fa-github fd" title="GITHUB"/>
                    <Skill class="fa fa-twitter fd" title="DOCKER"/>
                    <Skill class="fa fa-linkedin fd" title="DOCKER"/>
                    <Skill class="fa fa-linkedin fd" title="DOCKER"/>
                    <Skill class="fa fa-linkedin fd" title="DOCKER"/>
                </div>
            </div>
        </div>
    );
}

export default About;