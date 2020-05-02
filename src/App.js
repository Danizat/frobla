import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, About, Blogs, Contacts, BlogView } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blogs/:id" component={BlogView} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
