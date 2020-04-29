/**
 *  File name     :  SignIn.js
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

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.validate = this.validate.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    handleChange = key => e => {
        this.setState({[key]: e.target.value});
    }

    validate( inputEmail, inputPassword) {
        firebase.auth().signInWithEmailAndPassword(inputEmail, inputPassword).then(this.loginUser).catch(function(error){
            let errorMessage = error.message;
            console.log(errorMessage)
        })
    }

    loginUser(result) {
        this.props.changeLoggedIn(true);
    }

    render() {
        return (
            <Container maxWidth="xs" style = {{ marginTop: "5%", marginRight: "40%"}}>
                <div>
                    <Avatar style = {{marginBottom: "2%",}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        this.validate(this.state.email, this.state.password)
                    }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange = {this.handleChange("email")}
                            value = {this.state.email}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            style = {{marginTop: "5%"}}
                        >
                            Sign In
                        </Button>
                        <div style = {{marginTop: "8%"}}>
                            <Grid>
                                <Grid item>
                                    <Link href ="/signup">Don't have an account? Sign up</Link>
                                </Grid>
                            </Grid>
                        </div>
        
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}