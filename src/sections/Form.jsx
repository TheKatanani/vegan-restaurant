import Button from '../component/Button';
import Container from '../component/Container';
import './sections-css/Form.css'
export default function Form() {
    return (
            <Container>
        <div className="Form">
                <div>
                    <span>
                        <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L15 11L29 1M1 21H29V1H1V21Z" stroke="#A08040" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </span>
                    <p>Subscribe to our Newsletter</p>
                </div>
                <div>
                    <input type="text" placeholder='Your Email id'/>
                    <Button>Subscribe</Button>
                </div>
        </div>
            </Container>
    );
}
