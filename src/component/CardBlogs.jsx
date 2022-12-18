import './component-css/CardBlogs.css'
export default function CardBlogs(props) {
    return (<div className="CardBlogs">
                <img src={props.img} alt=""/>
                <div className={props.flap}>
                    <h4>{props.title}</h4>
                    <p>{props.description}</p>
                    <button>Read more</button>
                </div>
            </div>);
}