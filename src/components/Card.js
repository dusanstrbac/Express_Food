import '../App.css';

const Card = ({source, title, button}) => {
    return (
        <div className="Card">
            <div className="cardImage">
                <img src={source}/>
            </div>
            <div className="cardInfo">
                <h2>{title}</h2>
                <button>{button}</button>
            </div>
        </div>
    );
};

export default Card;
