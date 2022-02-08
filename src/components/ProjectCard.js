import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
    return(
        <div>
            <section class="panel">
                <h2>Edge Detection Using ML</h2>
                <div class="card__text">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum tenetur vel accusamus. Cumque, iste asperiores. 
                    Perferendis odio magnam nisi, eos provident nobis maxime nostrum nam, ipsum blanditiis quasi saepe aliquid!</p>
                </div>
                <a class="button"><i class="fa fa-github fc"></i></a>
            </section>
        </div>
    );
}

export default ProjectCard