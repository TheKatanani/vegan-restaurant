import './component-css/CardSpecial.css'
export default function CardSpecial(props) {
    return (<div className="CardSpecial">
            <div>
                <img src={props.imgs} alt=""/>
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. </p>
            </div>
    </div>);
}
