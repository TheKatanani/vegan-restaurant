import Img1 from '../images/special1.png'
import Img2 from '../images/special2.png'
import Img3 from '../images/special3.png'
import CardSpecial from '../component/CardSpecial';
import Title from '../component/Title';
import './sections-css/Special.css'
import Container from '../component/Container';
export default function Special() {
    return (<>
        <div className="Special">
            <Container>
            <Title description="What Makes Us Special" title='Special'/>
            <div className="contint">
                <CardSpecial imgs={Img3} title="Fresh food" /> 
                <CardSpecial imgs={Img2} title="skilled Chef" /> 
                <CardSpecial imgs={Img1} title="Exotic dishes" />
            </div>
            </Container>
        </div>
    </>);
}
