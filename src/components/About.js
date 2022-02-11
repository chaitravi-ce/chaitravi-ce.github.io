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
                    <Skill class="fa-solid fa-chart-pie fd" title="Data Science" />
                    <Skill class="fa-solid fa-brain fd" title="Deep Learning" />
                    <Skill class="fa-brands fa-android fd" title="Flutter" />
                    <Skill class="fa-solid fa-fire-flame-curved fd" title="Firebase"/>
                    <Skill class="fa-brands fa-html5 fd" title="HTML5" />
                    <Skill class="fa-brands fa-css3 fd" title="CSS3" />
                    <Skill class="fa-brands fa-sass fd" title="SASS" />
                    <Skill class="fa-brands fa-js-square fd" title="JavaScript" />
                    <Skill class="fa-brands fa-react fd" title="React" />
                    <Skill class="fa-solid fa-database fd" title="SQL Database" />
                    <Skill class="fa-solid fa-leaf fd" title="MongoDB" />
                    <Skill class="fa-brands fa-python fd" title="Python" />
                    <Skill class="fa-solid fa-c fd" title="C-C++" />
                    <Skill class="fa-brands fa-github fd" title="Git-Github" />
                    <Skill class="fa-brands fa-docker fd" title="Docker" />
                    {/* <Skill class="fa-solid fa-clapperboard fd" title="Video Editing" /> */}
                </div>
            </div>
        </div>
    );
}

export default About;