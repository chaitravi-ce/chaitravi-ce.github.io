import '../styles/Projects.css'
import ProjectCard from './ProjectCard';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 1},
    {width: 770, itemsToShow: 2},
    {width: 1200, itemsToShow: 3},
];

const Projects = () => {
    return(
        <div className='projects' id="projects">
            <h1 data-aos="fade-up" data-aos-duration="1000">Projects</h1>
            <div className='projectCards' data-aos="fade-up">
                <Carousel breakPoints={breakPoints} 
                enableAutoPlay autoPlaySpeed={6000}
                > 
                    <ProjectCard 
                        title="Edge Detection Using ML"
                        desc="Implementation of Dense Extreme Inception Network (DexiNed) architeture from scratch using TensorFlow and 
                        Keras. Based on a research paper. Trained on BIPED Dataset for a binary accuracy over 90%."
                        link="https://github.com/chaitravi-ce/Edge-Detection-Using-ML"
                    />
                    <ProjectCard 
                        title="Semantic Segmentation"
                        desc="Implemented various architectures related to Semantic Segmentation such as ResNet50, ResNet101, 
                        VGG16, VGG19, MobileNet, PSPNet and Segnet from scratch using Tensorflow and Keras for various day to day applications."
                        link="https://github.com/chaitravi-ce/Semantic_Segmentation"
                    />
                    <ProjectCard 
                        title="Classification Models"
                        desc="Implemented several classification models for various use-cases such as Emotion Recognition, 
                        Handwritten Character Recognition, Clothing Classifier using Keras and Tensorflow libraries."
                        link="https://github.com/chaitravi-ce/Simple-CNN-Models"
                    />
                    <ProjectCard 
                        title="Image Processing Algorithms"
                        desc="Implemented algorithms from scratch for image manipulations such as rotation, 
                        Kernel Applications such as Blurring and Sharpening, Edge-Detection, Morphological Transformations 
                        and Extraction of Region of Interest (ROI)"
                        link="https://github.com/chaitravi-ce/Image-Processing-Algorithms"
                    />
                    <ProjectCard 
                        title="ESP32-S2 PCB Design"
                        desc="A KiCAD based 4-layer PCB Design of the ESP32-S2 board. It is an open-source ESP32-S2 board with breakout ports 
                        for both USB-A and USB-C type. It also includes Neopixel and LiPo Charging Section"
                        link="https://github.com/dhairyashah1/USBee32-S2"
                    />
                    <ProjectCard 
                        title="Real-Time Pose Estimation App"
                        desc="Flutter based app which estimates poses of humans from a live feed in real-time using the PoseNet Model 
                        of Google ML Kit. It compares the pose coordinates to a predefined pose coordinate using the 
                        cosine-distance algorithm."
                        link="https://github.com/chaitravi-ce/PoseNet_App"
                    />
                    <ProjectCard 
                        title="Share-A-Taxi Pooling App"
                        desc="App created using Flutter and Firebase, connecting passengers travelling to similar destinations. Includes features 
                        such as Chat-Section, Bill Splitter, Fare Calculator, Google Map Location API based data storage."
                        link="https://github.com/chaitravi-ce/Share_A_Taxi"
                    />
                    <ProjectCard 
                        title="Pointer Calculator App"
                        desc="A dual Theme based Pointer Calculator App with elegant UI created using Flutter. It will calculate your CGPA 
                        based on the grades you have recieved in subjects and the credits corresponding to that subject"
                        link="https://github.com/chaitravi-ce/Theme-Switcher-App-Flutter"
                    />
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;