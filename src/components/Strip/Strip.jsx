import Card from "../Card/Card";
import "./Strip.scss";

const Strip = ({data}) => {

    const cards = (() => {
        return data.map(({img, title, location}, index) => {
            const props = {
                title,
                location,
                imageSource: img
            };

            return <Card key={index} {...props} />
        })
    })();

    return (<div className="card-strip">
            {
                cards
            }
        </div>);
};

export default Strip;