// root component - child components nested here
// import React from 'react' - in older versions 16-
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'

function App() { // jsx - html style templates (bubble rendert html)
  // const title = 'Welcome to the new blog'
  // const likes = 50 
  // // number, strings and arrays are fine
  // // can't output booleans or objects
  // const link = "http://www.google.com"
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/create"> 
              <Create />
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Home /> */}
          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p>

          <p>{ 10 }</p>
          <p>{ "hello, ninjas" }</p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random() * 10 }</p>

          <a href={ link }>Google site</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
