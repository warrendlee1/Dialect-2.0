/**
 *  File name     :  Home.js
 *  @author       :  Warren Lee
 *  Date          :  4/23/20
 *  Description   :  EssaySearch
 */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from './firebase';

let localData = firebase.firestore();

export default class Home extends React.Component{
    constructor() {
        super()
        this.state = {
            currentFileId: null,
            essayData: null,
            comments: null,
            inputComment: null,
        }
        this.commentBoxChange = this.commentBoxChange.bind(this);
        this.postComment = this.postComment.bind(this); 
        this.getDocData = this.getDocData.bind(this)

        this.feedData = {};
        localData.collection('essay')
        .get()
        .then(this.getDocData);
    }

    getDocData(querySnapShot) {
        let docs = {};
        querySnapShot.forEach(function(doc) {
            docs[doc.id] = {
                authorFirstName: doc.get("authorFirstName"),
                authorLastName: doc.get("authorLastName"),
                description: doc.get("description"),
                fileContent: doc.get("fileContent"),
                title: doc.get("title"),
                comments: doc.get("comments")
            }
        })
        this.feedData = docs;
        this.setState({essayData: this.feedData})
    }

    commentBoxChange(event) {
        this.setState({inputComment: event.target.value});
        console.log(this.state.inputComment);
    }

    // getDocComments
    postComment = e => {
        e.preventDefault();
        const accessEssayData = firebase.firestore();
        accessEssayData.settings({
          timestampsInSnapshots: true
        });
        //access the firebase collections
        accessEssayData.collection("essay").doc(this.state.currentFileId).update(
            {
                comments: firebase.firestore.FieldValue.arrayUnion({commenter: firebase.auth().currentUser.email, content: this.state.inputComment})
            }
        );  
        this.feedData[this.state.currentFileId].comments.push({commenter: firebase.auth().currentUser.email, content: this.state.inputComment})
        this.setState({
            inputComment: "",
            comments: "",
        });
        console.log("STATE COMMENTS: " + this.state.comments)
    };

    render() {
        if(this.state.currentFileId != null) {
            return (
                <div style = {{backgroundColor: "#e8e8e8", height: "100%",position: "absolute",left: "0",width: "100%",overflow: "scroll"}}>
                    <div style = {{ height: 905, marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                        <div style = {{ width: "65%", height: "96%", marginTop: "1%",}}>
                            <Card style = {{height: "100%", overflowY: 'scroll',   }}>   
                                <FontAwesomeIcon 
                                    onClick = { () => {
                                        this.setState({currentFileId: null})
                                        }
                                    } 
                                    icon={faChevronLeft} size = "2x" color = "darkgray" weight = "light"
                                    style = {{marginLeft: "3%", marginTop: "3%",
                                    }}
                                />
                                <div style = {{marginLeft: "8%", marginRight: "8%", overflow:"scroll", marginBottom: "5%"}}>
                                    <Typography style = {{fontWeight:"bold", fontSize: 20, marginBottom: "2%",}}>
                                        {this.state.essayData[this.state.currentFileId].title}
                                    </Typography>
                                    <Typography>
                                        {this.state.essayData[this.state.currentFileId].fileContent}
                                    </Typography>
                                </div>

                            </Card>
                        </div>
                        <div style = {{width: "35%", height: "96%", marginLeft: "1%", marginTop: "1%", }}>
                            <Card style = {{height: "100%", display: "flex",flex: 1,}}>
                                <CardContent style = {{flex: 1, }}>
                                    <Typography color="textSecondary" gutterBottom>Latest Activity</Typography>
                                    <div style = {{ flex: 1, height: "95%", display: "flex", flexDirection: "column", justifyContent: "space-between",}}>
                                        <List style = {{overflowY: 'scroll', marginBottom: "6%",}}> 
                                            {
                                                this.feedData[this.state.currentFileId].comments == null ?
                                                null
                                                :
                                                (this.feedData[this.state.currentFileId].comments.map((comment) => (
                                                        <div>
                                                            <ListItem alignItems="flex-start">
                                                                <ListItemText
                                                                    primary = {comment.commenter}
                                                                    secondary = {
                                                                        <React.Fragment>
                                                                            <Typography
                                                                                component="span"
                                                                                variant="body2"
                                                                                color="textPrimary"
                                                                            >
                                                                            </Typography>
                                                                            {
                                                                                comment.content
                                                                            }
                                                                        </React.Fragment>
                                                                    }
                                                                />
                                                            </ListItem>
                                                            <Divider component="li" style = {{marginLeft: "2%", marginRight: "2%",}}/>
                                                        </div>  
                                                    ))         
                                                )
                                            }
                                        </List>
                                        <form onSubmit={this.postComment} style = {{display:"flex", flexDirection:"column"}}>
                                            <label>
                                                <TextField
                                                    id="standard-textarea"
                                                    label="Comment"
                                                    multiline
                                                    variant="outlined"
                                                    style = {{marginBottom: "3%", width:"100%"}}
                                                    type="text" 
                                                    onChange={this.commentBoxChange}
                                                    value = {this.state.inputComment}
                                                />
                                            </label>
                                            <Button type="submit" variant="contained" color="primary">Share</Button>
                                        </form>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
        return ( 
            <div style = {{backgroundColor: "#e8e8e8",  }}>
                <div style = {{ height: 905, marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                    <div style = {{ width: "65%", height: "96%", marginTop: "1%",}}>
                        <Card style = {{height: "100%", overflowY: 'scroll',   }}>
                            <CardContent style = {{marginLeft:"3%", display: "flex", flexDirection:"row", }}>
                                <form style = {{marginBottom: "3%",marginTop: "3%", display:"flex", flexDirection:"row",}}>
                                    <label>
                                        <input 
                                            type="text" 
                                            placeholder="Search" 
                                            color="textSecondary"
                                            
                                            style = {{
                                                fontSize: "14px",
                                                padding: "5px",
                                                width: "325%",
                                            }}
                                        />
                                    </label>
                                </form>
                            </CardContent> 
                            {
                                this.state.essayData != null ? 
                                    Object.keys(this.state.essayData).map((docID) => (
                                        <div boxShadow={0} style = {{borderRadius: 8, backgroundColor:"#ebebeb", marginRight: "5%", marginLeft: "5%", height: "20%", borderColor: "gray",display:"flex", flexDirection:"row", marginBottom: "3%"}}>
                                            <div style = {{ marginLeft: "3%", marginRight: "10%", width: "100%" }}>
                                                <div onClick={ () => {
                                                        this.setState({currentFileId: docID})
                                                    }
                                                    }>
                                                    <div style = {{display: 'flex',  flexDirection:'row', width: "100%", marginTop: "3%"}}>
                                                        <Typography style = {{ fontSize: 26, fontWeight: "bold" ,  }}>
                                                            {this.state.essayData[docID].title}
                                                        </Typography>
                                                        <FontAwesomeIcon icon={faFileWord} size = "1x" style = {{marginLeft: "1%",}}/>
                                                    </div>                                            
                                                </div>
                                                <Typography style = {{fontStyle:"italic", marginBottom: "2%"}}>
                                                    by {this.state.essayData[docID].authorFirstName + " " + this.state.essayData[docID].authorLastName}
                                                </Typography>
                                                <div style = {{marginBottom: "2%",}}>
                                                    <Typography style = {{ fontSize: 14,  }}>
                                                        {this.state.essayData[docID].description}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>
                                    )) 
                                : 
                                <Typography style = {{ fontSize: 14, marginLeft: "36%" }}>Loading Your Feed</Typography>
                            }
                        </Card>
                    </div>
                    <div style = {{width: "35%", height: "96%", marginLeft: "1%", marginTop: "1%", }}>
                        <Card style = {{height: "100%"}}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Some Content</Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}