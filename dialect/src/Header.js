import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'




export default function ButtonAppBar() {
    return (
        <div>
            <AppBar position="static" color = "primary" >
                <Toolbar style = {{marginLeft: "20%", marginRight: "20%", justifyContent:"space-between"}}>
                    <a href = "/" style = {{  textDecoration: "none", color: "inherit", }}>
                        <Typography style = {{fontSize: 28, fontWeight:"bold", fontFamily:"Avenir" }}>
                            Dialect
                        </Typography>
                    </a>

                    <div>
                        <Button href="/" color = "inherit" variant = "h5">Home
                        </Button>
                        <Button href="/about" color = "inherit" variant = "h5">About</Button>
                        <Button href="/upload" color = "inherit" variant = "h5">Upload</Button>
                        <Button href="/login" color="inherit"><FontAwesomeIcon icon={faUser} size = "1x" style = {{marginLeft: "1%",}}/></Button>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
}