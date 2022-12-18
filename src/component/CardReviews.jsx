import './component-css/CardReviews.css'
import Star from './Star';
export default function CardReviews(props) {
    return (
        <div className="CardReviews">
                <div className="containt">
                    <img src={props.img} alt=""/>
                    <div>
                        <h4>{props.name}</h4>
                        <p>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </p>
                    </div>
                </div>
                <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reiciendis voluptates? Nulla quod ipsam tenetur. Voluptatem molestiae rerum perspiciatis dolorum? Minima amet ad est corporis iste sequi delectus minus debitis.</q>
        </div>
    );
}
