import '../styles/About.css'
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
        <div className='about' id="about">
            <h1 data-aos="fade-up" data-aos-duration="2000">About</h1>
            <div className='skills'>
                <h3 data-aos="fade-up" data-aos-duration="2100">Skills</h3>
                <div className='sicons' data-aos="fade-up">
                    <Skill class="fa-solid fa-chart-pie fd" title="Data Science" />
                    <Skill class="fa-solid fa-brain fd" title="Deep Learning" />
                    <Skill class="fa-brands fa-android fd" title="Flutter" />
                    <Skill class="fa-brands fa-react fd" title="React Native" />
                    <Skill class="fa-solid fa-fire-flame-curved fd" title="Firebase"/>
                    <Skill class="fa-brands fa-html5 fd" title="HTML5" />
                    <Skill class="fa-brands fa-css3 fd" title="CSS3" />
                    <Skill class="fa-brands fa-sass fd" title="SASS" />
                    <Skill class="fa-brands fa-js-square fd" title="JavaScript" />
                    <Skill class="fa-brands fa-react fd" title="React" />
                    <Skill class="fa-brands fa-angular fd" title="Angular" />
                    <Skill class="fa-solid fa-power-off fd" title="Spring Boot" />
                    <Skill class="fa-solid fa-database fd" title="SQL Database" />
                    <Skill class="fa-solid fa-leaf fd" title="MongoDB" />
                    <Skill class="fa-brands fa-python fd" title="Python" />
                    <Skill class="fa-solid fa-c fd" title="C-C++" />
                    <Skill class="fa-brands fa-java fd" title="Java" />
                    <Skill class="fa-brands fa-github fd" title="Git-Github" />
                    <Skill class="fa-brands fa-docker fd" title="Docker" />
                    {/* <Skill class="fa-solid fa-clapperboard fd" title="Video Editing" /> */}
                </div>
            </div>
            <div className='myself'>
                <h3 data-aos="fade-up" data-aos-duration="2100">About Me</h3>
                <p className='info' data-aos="fade-up" >I am Chaitravi Chalke, a software developer currently 
                    working at Citicorp Services as a Technology Analyst. I pursued my Bachelor's 
                    Degree in Electronics Engineering at Veermata Jijabai Technological Institute (VJTI), Mumbai.
                    I am enthusiastic about learning about new technologies and developing solutions to make 
                    our lives easier. Aside from that, I'm curious about the world of arts and culture, 
                    and I'm especially interested in dance and design.
                </p>
                <div className='resume'>
                    <a href="https://drive.google.com/file/d/1FupOomBBNNV5x1E9uHVrlVP6VWdjcfhy/view?usp=sharing/"><button class="noselect">Resume</button></a>
                </div>
            </div>
        </div>
    );
}

export default About;