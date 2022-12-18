import Button from '../component/Button';
import './sections-css/Flat.css'
import Img from '../images/Untitled_design__1_-removebg-preview 1.png'
import Img2 from '../images/Untitled_design__1_-removebg-preview 2.png'
export default function Flat() {
    return (<div className="Flat">
        <div className="imgs">
        <img src={Img} alt="" />
        <img src={Img2} alt="" />
        </div>
        <div className='containt'>
            <h3>Come join us for a lunch this weekend and enjoy</h3>
            <p>FLAT 10% OFF</p>
            <Button>BookTable</Button>
        </div>
        <div className="imgs">
        <img src={Img} alt="" />
        <img src={Img2} alt="" />
        </div>
    </div>);
}
