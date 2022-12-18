import Button from "../component/Button";
import Title from "../component/Title";
import Container from '../component/Container'
import './sections-css/SectionsComp.css'
export default function SectionsComp(props) {
    return (<>
        <div className="SectionsComp"id={props.id}>
            <Container>
                <div className="containt">
                    <div>
                    <Title title={props.title} description={props.description} start="start" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.</p>
                    <Button>Read more</Button>
                    </div>
                    <img className={props.active} src={props.img} alt="" />
                </div>
            </Container>
        </div>
    </>);
}
