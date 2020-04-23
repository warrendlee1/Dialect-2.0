import React from 'react';
import Typography from '@material-ui/core/Typography';
import Dropzone from "react-dropzone";
import Button from '@material-ui/core/Button';



export default class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            files:1,

        }
    }
    render() {
        return ( 
            <div style = {{backgroundColor: "#e8e8e8", height: 903, }}>
                <div style = {{ marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                    <div style = {{  marginTop: "10%",width: "50%", height: "2%", marginLeft: "auto", marginRight: "auto" }}>
                        <Dropzone >
                            {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className:"dropzone"})} style = {{textAlign: "center",
                            padding: 20,
                            border: "4px dashed darkgray",
                            backgroundColor: "none",
                            height: 200,
                            }}>
                                <input {...getInputProps()} />
                                <Typography style = {{color: "darkgray",  fontSize: 28, marginTop: "14%", }}>Upload Files</Typography>
                                <Typography style = {{color: "darkgray", fontSize: 14, marginTop: "1%", }}>.doc, .docx</Typography>
                            </div>
                            )}
                        </Dropzone>
                        <Button href="/" style = {{ marginTop: "5%", paddingLeft: "5%", paddingRight: "5%", color: "white", fontFamily:"Avenir", fontWeight:"bold", backgroundColor: "rgb(56, 69, 166)", marginLeft: "80%", }}>
                            Submit
                        </Button>
                        {/* <p>{this.state.files}</p> */}

                        
                    </div>

                </div>
            </div>

        )
    }
}