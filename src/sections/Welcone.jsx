import Button from "../component/Button";
import Nave from "../component/Nave";
import './sections-css/Welcome.css'
export default function Welcome() {
    return (<>
        <div className="welcome" id="Home">
            <Nave/>
            <div className="contint">
                <h1>Welcome To Golden view Dine</h1>
                <p>Explore the authentic vegan dishes with your friends and family</p>
                <Button>Read more</Button>
            </div>
        </div>
    </>);
}
