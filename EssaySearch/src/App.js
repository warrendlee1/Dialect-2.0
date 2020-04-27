import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 
import Home from './Home';
import About from './About';
import Upload from './Upload';
import Header from './Header';
import Profile from './Profile';
 
class App extends Component {

  render() {
    return (      
       <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/upload" component={Upload} exact/>
                <Route path="/profile" component={Profile} exact/>
                <Route component={Error}/>
            </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;