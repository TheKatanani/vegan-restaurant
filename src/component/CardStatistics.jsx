import './component-css/CardStatistics.css'
export default function CardStatistics(props) {
    return (
        <div className="CardStatistics">
            <img src={props.img} alt=""/>
            <div>
                <h4>{props.num}+</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
