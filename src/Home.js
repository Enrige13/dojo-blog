// import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch';

const Home = () => {
    // let name = 'mario' 
    // doesn't change the value - only in console - need hook
    // const [ name, setName ] = useState('mario') // value1 - initial value, value2 (set) - for function
    // const [age, setAge] = useState(25)
    
    // props - const from parent useable in child
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home"> 
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
                    {/* handleDelete={handleDelete} */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" /> }
            {/* konditional templating in react (blogs &&) */}
        </div>
    );
}

// onClick={ handleClick() } -> click is invoked directly onload
/* onClick={() => {
    handleClickAgain('Mario') 
}} -> anonymous function - doesn't start directly*/

export default Home;