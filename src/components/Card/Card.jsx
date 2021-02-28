import Location from "../Location/Location";
import "./Card.scss";

const Card = ({title, location, imageSource}) => {
    return (
            <div className="card">
                <div className={"card__image"}>
                    <img src={imageSource} alt="" className="responsiveImage"/>
                </div>
                <div className={"card__content"}>
                    <Location title={title} location={location} />
                </div>
            </div>
            );
}

export default Card;