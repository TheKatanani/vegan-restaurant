import Img1 from "../images/chef (1) 1.png";
import Img2 from "../images/dish 1.png";
import Img3 from "../images/team 1.png";
import Container from '../component/Container'
import './sections-css/Statistics.css'
import CardStatistics from "../component/CardStatistics";
export default function Statistics() {
    return (
        <div className="Statistics">
            <Container>
                <div className="containt">
                <CardStatistics img={Img2} num="250" description="Delicacy"/>
                <CardStatistics img={Img1} num="10" description="renowed chefs"/>
                <CardStatistics img={Img3} num="30" description="Members"/>
                </div>
            </Container>
        </div>
    );
}
