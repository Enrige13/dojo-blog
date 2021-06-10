const Home = () => {

    const handleClick = (e) => {
        console.log('hello, ninjas', e)
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
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