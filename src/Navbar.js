// sfc + tab 
// import Navbar from './Navbar' -> in parent element
// <Navbar /> or <Navbar></Navbar> -> where the content is
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
}
// inline-style:  style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}
// { <- dynamic value { <- javascript-object } }
export default Navbar;