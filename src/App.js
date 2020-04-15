import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import { Card } from "antd";



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
    return<div className="App"> {this.state.posts.map((post) => {
      return <Card
          title = {post.title}
          style={{ width: 700 }}
        >
      <p>{post.description}</p>
        </Card>
     })}
      </div>
  }
}

export default App;
