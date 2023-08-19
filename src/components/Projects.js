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
                    {/* <ProjectCard 
                        title="SCAN-Net: The DL Network"
                        desc="Designed a "
                        link="https://github.com/Nirikshak-IndiSafe"
                    /> */}
                    <ProjectCard 
                        title="Nirikshak - The Police App"
                        desc="An Application to track police officers who are deployed to Bandobast Duty using the Location Tracker. It was also linked
                        to an Admin Website which can be used to analyze the realtime situation of the event and manage it"
                        link="https://github.com/Nirikshak-IndiSafe"
                    />
                    <ProjectCard 
                        title="Mess Management System"
                        desc="A comprehensive solution for hostel mess management at the Digital Campus Hackathon. The solution includes two mobile 
                        apps (Hostel Student App and Hostel Admin App) and a website to make the entire process seamless and efficient."
                        link="https://github.com/ACT-SUS"
                    />
                    <ProjectCard 
                        title="GE Customer Support Chatbot"
                        desc="Our team secured the first place in the GE HACK-E-LTH'23 Hackathon by developing a customer support chatbot 
                        using RASA. This project involved incorporating image analysis and integrating the service with WhatsApp."
                        link="https://github.com/utsavk28/GE-Healthcare"
                    />
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
                        title="Real-Time Pose Estimation App"
                        desc="Flutter based app which estimates poses of humans from a live feed in real-time using the PoseNet Model 
                        of Google ML Kit. It compares the pose coordinates to a predefined pose coordinate using the 
                        cosine-distance algorithm."
                        link="https://github.com/chaitravi-ce/PoseNet_App"
                    />
                </Carousel>
            </div>
        </div>
    );
}

export default Projects;