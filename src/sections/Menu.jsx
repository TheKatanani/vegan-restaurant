import CardMenu from '../component/CardMenu';
import Title from '../component/Title';
import './sections-css/Menu.css'
//import images
import Img1 from '../images/DirtCandy-0242 (1).png'
import Img2 from '../images/DirtCandy-0242.png'
import Img3 from '../images/hcmp33562_1459402 (1).png'
import Img4 from '../images/hcmp33562_1459402.png'
import Img5 from '../images/hcmp76303_1094626 (1).png'
import Img6 from '../images/hcmp76303_1094626.png'
import Img7 from '../images/unsplash_50KffXbjIOg (1).png'
import Img8 from '../images/unsplash_50KffXbjIOg.png'
import Img9 from '../images/unsplash_sHG1dCUXgPY (1).png'
import Img10 from '../images/unsplash_sHG1dCUXgPY.png'
import Img11 from '../images/unsplash_ThLVnKdeH1k (1).png'
import Img12 from '../images/unsplash_ThLVnKdeH1k.png'
import Container from '../component/Container';
export default function Menu() {
    return (<div className="Menu"id='Menu'>
        <Container>
        <Title title="Straight From Kitchen" description="Our Menu"/>
            <div className="contint">
                <div>
                    <CardMenu img={Img12} title="Lorem ipsum dolor sit amet" price="222" />
                    <CardMenu img={Img7} title="Vivamus sodales augue vita" price="590" />
                    <CardMenu img={Img3} title="Pellentesque semper semper" price="130" />
                    <CardMenu img={Img6} title="Vestibulum est turpis" price="135" />
                    <CardMenu img={Img8} title="Nullam elementum magna" price="200" />
                    <CardMenu img={Img5} title="Phasellus convallis maximus" price="148" />
                </div>
                <div>
                    <CardMenu img={Img2} title="Phasellus convallis maximus" price="148" />
                    <CardMenu img={Img4} title="Vestibulum est turpis" price="135" />
                    <CardMenu img={Img1} title="Vivamus sodales augue vita" price="590" />
                    <CardMenu img={Img10} title="Lorem ipsum dolor sit amet" price="222" />
                    <CardMenu img={Img11} title="Nullam elementum magna" price="200" />
                    <CardMenu img={Img9} title="Pellentesque semper semper" price="130" />
                </div>
            </div>
        </Container>
    </div>);
}
