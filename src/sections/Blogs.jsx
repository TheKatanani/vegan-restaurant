import Img1 from "../images/Blogs1.png";
import Img2 from "../images/Blogs2.png";
import Img3 from "../images/Blogs3.png";
import './sections-css/Blogs.css'
import Title from "../component/Title";
import CardBlogs from "../component/CardBlogs";
export default function Blogs() {
    return (
        <div className="Blogs">
                <Title title="Blogs" description="words from our food lovers"/>
                <div className="containt">
                <CardBlogs img={Img1} title="Cooking Dining Experience" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin"/>
                <CardBlogs img={Img2} flap="flap" title="Cooking Dining Experience" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin"/>
                <CardBlogs img={Img3} title="Cooking Dining Experience" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin"/>
                </div>
        </div>
    );
}
