import React from 'react';
// import Typography from '@material-ui/core/Typography';
// import Dropzone from "react-dropzone";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import firebase from './firebase';

export default class Upload extends React.Component{
    constructor() {
        super()
        this.state = {
            authorFirstName: null,
            authorLastName: null,
            workTitle: null,
            workDescription: null,
            pdfFile: null,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = key => e => {
        this.setState({[key]: e.target.value});
        console.log(this.state);
    }

    addEssay = e => {
        e.preventDefault();
        const essayData = firebase.firestore();
        essayData.settings({
          timestampsInSnapshots: true
        });
        essayData.collection("essay").add({
            authorFirstName: this.state.authorFirstName,
            authorLastName: this.state.authorLastName,
            description: this.state.workDescription,
            fileContent: this.state.pdfFile,
            title: this.state.workTitle,
        });  
        this.setState({
            authorFirstName: "",
            authorLastName: "",
            workTitle: "",
            workDescription: "",
            pdfFile: "",
        });
    };

    render() {
        return ( 
            <div style = {{backgroundColor: "#e8e8e8", height: "100%",position: "absolute",left: "0",width: "100%",overflow: "scroll"}}>
                <div style = {{ marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                    <Card style = {{marginTop: "1%", width: "100%", height: "2%", marginLeft: "0.5%", marginRight: "0.5%", marginBottom: "5%"  }}>
                        <form 
                            onSubmit = {this.addEssay}
                            style = {{marginRight: "10%", marginLeft: "10%", marginTop: "5%",}}
                        >
                            <div style = {{display: "flex", flexDirection:"row", marginBottom: "3%", widthl:"100%"}}>
                                <TextField 
                                    style = {{width: "50%", marginRight: "3%"}}
                                    id="filled-basic" variant="filled"
                                    label="Author First Name"
                                    onChange = {this.handleChange("authorFirstName")}
                                    value = {this.state.authorFirstName}
                                />
                                <TextField
                                    style = {{width: "50%"}}
                                    id="filled-basic" variant="filled"
                                    label="Author Last Name"
                                    onChange = {this.handleChange("authorLastName")}
                                    value = {this.state.authorLastName}
                                />
                            </div>
                            <div style = {{marginBottom:"3%",}}>
                                <TextField
                                    style = {{width: "100%"}}
                                    id="filled-basic" variant="filled"
                                    label="Title of Work"
                                    onChange = {this.handleChange("workTitle")}
                                    value = {this.state.workTitle}
                                />
                            </div>
                            <div style = {{marginBottom:"3%",}}>
                                <TextField
                                    style = {{width: "100%"}}
                                    id="filled-basic" variant="filled"
                                    label="Add a short description of the essay"
                                    onChange = {this.handleChange("workDescription")}
                                    value = {this.state.workDescription}
                                />
                            </div>
                            <div style = {{}}>
                                <TextField 
                                    style = {{width: "100%", overflowY: 'scroll'}} id="filled-basic" 
                                    multiline variant="filled" 
                                    label = "Copy and paste your essay here" 
                                    onChange = {this.handleChange("pdfFile")}
                                    value = {this.state.pdfFile} 
                                />
                            </div>
                            <Button 
                                type = "submit" 
                                style = {{ marginBottom: "6%", marginTop: "3%", paddingLeft: "5%", paddingRight: "5%", color: "white", fontFamily:"Avenir", fontWeight:"bold", backgroundColor: "rgb(56, 69, 166)",}}
                                >
                                Submit
                            </Button>        
                        </form>                
                    </Card>
                </div>
            </div>

        )
    }
}