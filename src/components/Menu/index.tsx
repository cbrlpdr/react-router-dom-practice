import "./styles.css"
import {Link} from "react-router-dom"

export const Menu = () =>{
    return (<nav className="menu">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about" state={'Hi, I am a state from Menu. No Random Value here.'}>About</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/redirect">Redirect</Link></li>
        </ul>
    </nav>);
}