import { useState, useEffect } from 'react'
import BlogList from './BlogList'

const Home = () => {
    // let name = 'mario' 
    // doesn't change the value - only in console - need hook
    // const [ name, setName ] = useState('mario') // value1 - initial value, value2 (set) - for function
    // const [age, setAge] = useState(25)
    
    // const handleClick2 = () => {
    //     setName('luigi')
    //     setAge(30)
    // } 


    // const handleClick = (e) => {
    //     console.log('hello, ninjas', e)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }

    // props - const from parent useable in child
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => { // runs for every render
        console.log('use effect ran')
        console.log(name)
        // console.log(blogs)
    }, [name]) // empty array, function only runs on the first initial render (once)

    return ( 
        <div className="home"> 
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
            
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs" handleDelete={handleDelete}/> */}

            {/* <p>{ name } is { age} years old</p>
            <button onClick={ handleClick2 }>Click me</button>

            <br></br>
            <br></br>
            <br></br>

            <button onClick={ handleClick }>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
    );
}

// onClick={ handleClick() } -> click is invoked directly onload
/* onClick={() => {
    handleClickAgain('Mario') 
}} -> anonymous function - doesn't start directly*/

export default Home;