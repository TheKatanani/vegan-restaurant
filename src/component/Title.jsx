import './component-css/Title.css'
export default function Title(props) {
    return (<>
        <div className={`Title `+props.start}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </>);
}
