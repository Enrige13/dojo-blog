import { useState } from 'react'

const Home = () => {
    // let name = 'mario' 
    // doesn't change the value - only in console - need hook
    const [ name, setName ] = useState('mario') // value1 - initial value, value2 (set) - for function
    const [age, setAge] = useState(25)
    
    const handleClick2 = () => {
        setName('luigi')
        setAge(30)
    } 


    const handleClick = (e) => {
        console.log('hello, ninjas', e)
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age} years old</p>
            <button onClick={ handleClick2 }>Click me</button>

            <br></br>
            <br></br>
            <br></br>

            <button onClick={ handleClick }>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
    );
}

// onClick={ handleClick() } -> click is invoked directly onload
/* onClick={() => {
    handleClickAgain('Mario') 
}} -> anonymous function - doesn't start directly*/

export default Home;