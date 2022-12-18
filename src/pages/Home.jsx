import SectionsComp from '../sections/SectionsComp';
import Welcome from '../sections/Welcone';
import ImgAbout from '../images/sectionComp1.png'
import ImgCooking from '../images/Rectangle 34.png'
import './Home.css'
import Special from '../sections/Special';
import Menu from '../sections/Menu';
import Flat from '../sections/Flat';
import Statistics from '../sections/Statistics';
import Reviews from '../sections/Reviews';
import Blogs from '../sections/Blogs';
import Golden from '../sections/Golden';
import Form from '../sections/Form';
import Footer from '../sections/Footer';
export default function Home() {
    return (<>
    <Welcome/>
    <SectionsComp title="About us" description="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"img={ImgAbout}/>
    <Special/>
    <Menu/>
    <Flat/>
    <SectionsComp  title="Cooking ingredients" description="What goes in"img={ImgCooking}/>
    <Statistics/>
    <Reviews/>
    <Blogs/>
    <Golden/>
    <Form/>
    <Footer/>
    </>);
}

