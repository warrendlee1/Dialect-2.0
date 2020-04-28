import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Home from './Home';
import About from './About';
import Upload from './Upload';
import Header from './Header';
import Profile from './Profile';
import SignUp from './SignUp';
import SignIn from './SignIn';
import firebase from './firebase';
import { faBoxTissue } from '@fortawesome/free-solid-svg-icons';

 
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
    this.setLoginStatus = this.setLoginStatus.bind(this);

    this.setLoggedIn = this.setLoggedIn.bind(this);
    this.doRedirect = false;
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.setLoggedIn)
    // firebase.auth().signOut();
    // console.log("signed out")
  }

  setLoggedIn(user) {
    console.log("auth state changed: " + !!user)
    this.setState({isLoggedIn: !!user})
  }

  setLoginStatus(value) {
    console.log("set loginstatus: " + value);
    this.doRedirect = value;
  }

  handleRedirect() {
    console.log("doRedirect: " + this.doRedirect)
    if(this.doRedirect) {
      return(<Redirect to="/"/>);
    }
    this.doRedirect = false;
  }

  render() {
    console.log("in render: " + this.state.isLoggedIn)
    return (
      !this.state.isLoggedIn ? 
        <BrowserRouter>
        <div>
            <div>
              <AppBar position="static" color = "primary" >
                  <Toolbar style = {{marginLeft: "20%", marginRight: "20%", justifyContent:"space-between"}}>
                      <div style = {{  textDecoration: "none", color: "inherit", display: "flex", flexDirection: "row", }}>
                          <Typography style = {{fontSize: 28, fontWeight:"bold", fontFamily:"Avenir" }}>
                              Dialect
                          </Typography>
                      </div>
                  </Toolbar>
              </AppBar>
            </div>
            <Switch>
              <Route path="/signin" component={ () => <SignIn changeLoggedIn = {this.setLoginStatus}/>} exact/>
              <Route path="/signup" component={SignUp} exact/>
            </Switch>
        </div>
      </BrowserRouter>
      :
        <BrowserRouter>
        <div>
            <Header/>
            {/* { () => {
                //console.log(this.state.doRedirect)
                console.log("doRedirect: " + this.doRedirect)
                if(this.doRedirect) {
                  return(<Redirect to="/"/>);
                }
                this.doRedirect = false;
                //this.setState({doRedirect: false});
              }
            } */}
            {
              this.handleRedirect()
            }
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/upload" component={Upload} exact/>
                <Route path="/profile" component={Profile} exact/>
            </Switch>

        </div> 
      </BrowserRouter>

    );

    // if (this.state.isLoggedIn === false) {
    //   return (
    //     <BrowserRouter>
    //       <div>
    //           <div>
    //             <AppBar position="static" color = "primary" >
    //                 <Toolbar style = {{marginLeft: "20%", marginRight: "20%", justifyContent:"space-between"}}>
    //                     <div style = {{  textDecoration: "none", color: "inherit", display: "flex", flexDirection: "row", }}>
    //                         <Typography style = {{fontSize: 28, fontWeight:"bold", fontFamily:"Avenir" }}>
    //                             Dialect
    //                         </Typography>
    //                     </div>
    //                 </Toolbar>
    //             </AppBar>
    //           </div>
    //           <Switch>
    //             <Route path="/signin" component={ () => <SignIn changeLoggedIn = {this.setLoginStatus}/>} exact/>
    //             <Route path="/signup" component={SignUp} exact/>
    //           </Switch>
    //       </div>
    //     </BrowserRouter>
    //   )
    // } else {
    //     return (      
    //       <BrowserRouter>
    //       <div>
    //           <Header/>
    //           <Switch>
    //               <Route path="/" component={Home} exact/>
    //               <Route path="/about" component={About} exact/>
    //               <Route path="/upload" component={Upload} exact/>
    //               <Route path="/profile" component={Profile} exact/>
    //            </Switch>
    //       </div> 
    //     </BrowserRouter>
    //   );


  }
}
 
export default App;