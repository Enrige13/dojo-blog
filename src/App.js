// root component - child components nested here
import './App.css';
// import React from 'react' - in older versions 16-
import Navbar from './Navbar'
import Home from './Home'

function App() { // jsx - html style templates (bubble rendert html)
  // const title = 'Welcome to the new blog'
  // const likes = 50 
  // // number, strings and arrays are fine
  // // can't output booleans or objects
  // const link = "http://www.google.com"
  
  return (
    <div className="App">
      <Navbar />
      
      <div className="content">
        <Home />
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>

        <p>{ 10 }</p>
        <p>{ "hello, ninjas" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 10 }</p>

        <a href={ link }>Google site</a> */}
      </div>
    </div>
  );
}

export default App;
