import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
    return(
        <div>
            <section class="panel">
                <h2>{props.title}</h2>
                <div class="card__text">
                    <p>{props.desc}</p>
                </div>
                <a class="button" href={props.link}><i class="fa fa-github fc"></i></a>
            </section>
        </div>
    );
}

export default ProjectCard