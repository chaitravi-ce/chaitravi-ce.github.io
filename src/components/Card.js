import '../styles/Card.css';

const Cards = (props) => {
    return(
        <div>
            <a href="" className="card">
                <div className="card__image" style={{backgroundImage: `url(${props.img})`}}/>
                <div className="card__overlay">
                    <div className="card__header">
                        <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                        <div className="card__thumb" style={{backgroundImage: `url(${props.logo})`}}/>
                        <div className="card__header-text">
                            <h3 className="card__title">{props.name}</h3>            
                            <span className="card__status">{props.position}</span>
                        </div>
                    </div>
                    <p className="card__description">{props.description}</p>
                </div>
            </a>      
        </div>
    );
}

export default Cards;