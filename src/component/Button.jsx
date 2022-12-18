import './component-css/Button.css'
export default function Button({children}) {
    return (
    <button className='main_btn'>
        {children}
    </button>
    );
}
