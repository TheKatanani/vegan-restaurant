import './component-css/CardMenu.css'
export default function CardMenu(props) {
    return (<div className="CardMenu">
                <img src={props.img} alt=""/>
            <div>
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <span></span>
            <p>Rs {props.price}</p>
    </div>);
}
