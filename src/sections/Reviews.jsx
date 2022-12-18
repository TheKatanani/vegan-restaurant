import Img1 from "../images/Ellipse 1.png";
import Img2 from "../images/Ellipse 1 (1).png";
import './sections-css/Reviews.css'
import CardReviews from "../component/CardReviews";
import Title from "../component/Title";
export default function Reviews() {
    return (
        <div className="Reviews">
                <Title title="Reviews" description="words from our food lovers"/>
                <div className="containt">
                <CardReviews img={Img2} stars="4" name="Alex andrina"/>
                <CardReviews img={Img1} stars="5" name="Alex andrina"/>
                <CardReviews img={Img2} stars="3" name="Alex andrina"/>
                </div>
        </div>
    );
}
