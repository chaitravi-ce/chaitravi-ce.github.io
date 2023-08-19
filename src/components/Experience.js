import '../styles/Experience.css'
import Grid from '@mui/material/Grid';
import Cards from './Card'
import iit from '../assets/iit.png'
import vin from '../assets/vineyard.png'
import fossi from '../assets/fossi.jpg'
import iitBack from '../assets/iit-back.png'
import osppBack from '../assets/ospp-back.png'
import airpixBack from '../assets/airpix-back.png'
import magnesBack from '../assets/magnes-back.png'
import citi from '../assets/citi.png'

const Experience = () => {
    return (
        <div className="exp" id="experience" >
            <h1 data-aos="fade-up" data-aos-duration="1000">Experience</h1>
            <div data-aos="fade-up" className='grid'>
                <Grid container spacing={3} >
                    {/* <Grid item xs={12} md={3} sm={6}>
                        <Cards
                            name="Citi"
                            position="Technology Analyst"
                            description="Full Time Analyst working for the Global Spread Products Department."
                            logo={citi}
                            img={magnesBack}
                        />
                    </Grid> */}
                    <Grid item xs={12} md={3} sm={6}>
                        <Cards
                            name="GSoC @FOSSI"
                            position="Open Source Developer"
                            description="Integrated a Verilog based RISC-V Core (CV32E40P) into the Makerchip Platform. Developed a visual representation 
                            of the Core which included all the blocks and stages involved in the architecture for enhanced debugging."
                            logo={fossi}
                            img={airpixBack}
                        />
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <Cards
                            name="Citi"
                            position="Tech. Summer Analyst"
                            description="Developed Visual Representation of the company's data to offer valuable Business Insights to clients. Worked with 
                            AngularJS Framework and REST APIs. Written unit tests and performed end-to-end application testing using Jasmine and Karma."
                            logo={citi}
                            img={magnesBack}
                        />
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <Cards
                            name="IIT Bombay"
                            position="Research Intern"
                            description="Analyzed Transfer Learning on Vibrational Dataset for Supervised and Unsupervised Learning using a 
                            memory-aware technique. Implemented Edge deployment of the models. Published a paper in Expert Systems with Applications Journal"
                            logo={iit}
                            img={iitBack}
                        />
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <Cards
                            name="Vineyard-CNCF"
                            position="Open Source Developer"
                            description="Contributed to open source through Open Source Promotion Plan (OSPP) by creating a connection between 
                            Vineyard objects and Machine Learning Frameworks such as TensorFlow, PyTorch, MxNet and Nvidia-DALI"
                            logo={vin}
                            img={osppBack}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Experience;