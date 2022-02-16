import '../styles/Experience.css'
import Grid from '@mui/material/Grid';
import Cards from './Card'
import iit from '../assets/iit.png'
import vin from '../assets/vineyard.png'
import airpix from '../assets/airpix.png'
import magnes from '../assets/magnes.png'
import iitBack from '../assets/iit-back.png'
import osppBack from '../assets/ospp-back.png'
import airpixBack from '../assets/airpix-back.png'
import magnesBack from '../assets/magnes-back.png'

const Experience = () => {
    return(
        <div className="exp" id="experience" >
            <h1 data-aos="fade-up" data-aos-duration="1000">Experience</h1>
            <div data-aos="fade-up" className='grid'>
                <Grid container spacing={4} >
                    <Grid item xs={12} md={3} sm={6}>
                        <Cards 
                            name="IIT Bombay" 
                            position="Research Intern" 
                            description="Analyzed Transfer Learning on Vibrational Dataset for Supervised and Unsupervised Learning using a 
                            memory-aware technique. Implemented Edge deployment of the models."
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
                    <Grid item xs={12} md={3} sm={6}>
                        <Cards 
                            name="AIRPIX" 
                            position="AI/ML Intern" 
                            description="Worked on Detection of various road assets using Video Analytics, AI and Image Processing. Mainly focused 
                            on developing algorithms based on Semantic Segmentation and Object Detection."
                            logo={airpix}
                            img={airpixBack}
                        />
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                        <Cards 
                            name="Magnes Motors" 
                            position="App Development Intern" 
                            description="Developed a Flutter based cross-platform application for EV station which included QR scanning and 
                            communicating to ESP based hardware"
                            logo={magnes}
                            img={magnesBack}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Experience;