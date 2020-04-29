/**
 *  File name     :  SignUp.js
 *  @author       :  Warren Lee
 *  Date          :  4/29/20
 *  Description   :  EssaySearch
 */

import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import firebase from './firebase';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Dialect
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            userFirstName: null,
            userLastName: null,
            username: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = key => e => {
        this.setState({[key]: e.target.value});
    }

    createUser = e => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        //revert the states to be empty
        this.props.changeLoggedIn(true);
        this.setState({
            email: "",
            password: "",
            userFirstName: "",
            userLastName: "",
            username: "",
        });
    };

    render() {
        return (
            <Container component="main" maxWidth="xs" style = {{marginTop: "5%", marginRight: "40%"}}>
                <div>
                    <Avatar style = {{marginBottom: "2%",}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form noValidate style = {{marginTop: "5%"}} onSubmit = {this.createUser}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                onChange = {this.handleChange("userFirstName")}
                                value = {this.state.userFirstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                onChange = {this.handleChange("userLastName")}
                                value = {this.state.userLastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange = {this.handleChange("email")}
                                value = {this.state.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                onChange = {this.handleChange("username")}
                                value = {this.state.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange = {this.handleChange("password")}
                                value = {this.state.password}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style = {{marginTop: "5%"}}
                            
                            >
                            Sign Up
                        </Button>
                        <Grid container style = {{marginTop: "4%"}}>
                            <Grid item>
                                <Link href="/signin">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
    } 
}