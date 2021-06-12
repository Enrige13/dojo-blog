// sfc + tab 
// import Navbar from './Navbar' -> in parent element
// <Navbar /> or <Navbar></Navbar> -> where the content is
import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}
// inline-style:  style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}
// { <- dynamic value { <- javascript-object } }
export default Navbar;