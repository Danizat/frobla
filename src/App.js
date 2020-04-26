import React, { Component } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import {Home,About,Blogs,Contacts} from "./pages";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
       posts: []
    };

  }

componentWillMount() {
	axios.get(`http://localhost:8000/api/blogPosts/`)
	.then(res => {
		 
		this.setState({ posts: res.data });
	})
	.catch(function (error) {
    console.log(error);
  });
}
  
  render() {
    return<div className="App">
      <Router><Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/about">
          <About/> 
          </Route>
          <Route path="/blogs">
          <Blogs/> 
          </Route>
          <Route path="/contacts">
          <Contacts/> 
          </Route>
        </Switch>
      </Router>
      </div>
  }
}

export default App;
