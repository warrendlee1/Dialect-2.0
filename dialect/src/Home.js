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

const feedData = [
    {
        title: "The Art of War",
        author:"Warren Lee",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://essayspirit.com/wp-content/uploads/2019/07/leadership-style-essay-1-638.jpg",
        comments:
            [
                {
                    commenter: "Bobby Johnson", 
                    content: "What is leadership, blah blah blah blah",
                },
                {
                    commenter: "Sally Brown",
                    content: "I have a question, blah blah blah blah",
                },
                {
                    commenter: "gi joe",
                    content: "I asdf a question, blah blah blah blah",
                }
            ]
    },
    {
        title: "History of World",
        author:"Bobby Jones",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://essayspirit.com/wp-content/uploads/2019/06/History-essay-example.jpg",
    },
    {
        title: "Politics in America",
        author:"Anacan Mangelsdorf",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://i.pinimg.com/originals/03/3c/65/033c65d93b4ba3d93a163596fba5aeee.jpg",
    },
    {
        title: "JavaScript Programming",
        author:"Mina Hanna",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://images.examples.com/wp-content/uploads/2017/05/Advanced-Essay-Writing1.jpg",
    },
    {
        title: "Philosophy of Life",
        author:"Sally Brown",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://image.slidesharecdn.com/successdefinitionessay-110523053505-phpapp01/95/success-definition-essay-1-728.jpg?cb=1306128967",
    },
    {
        title: "World War 2",
        author:"Sammy Dawson",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        file: "https://cdn.thinglink.me/api/image/1008110833252696066/1024/10/scaletowidth",
    },
];

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            fileId: null,
        }
    }
    render() {
        if(this.state.fileId != null) {
            return (
                <div style = {{backgroundColor: "#e8e8e8",  }}>
                    <div style = {{ height: 905, marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                        <div style = {{ width: "65%", height: "96%", marginTop: "1%",}}>
                            <Card style = {{height: "100%", overflowY: 'scroll',   }}>   
                                <FontAwesomeIcon 
                                    onClick = { () => {
                                        this.setState({fileId: null})
                                        }
                                    } 
                                    icon={faChevronLeft} size = "2x" color = "darkgray" weight = "light"
                                    style = {{marginLeft: "3%", marginTop: "3%",
                                    }}
                                />
                                <img src = {feedData[this.state.fileId].file} alt = "file" style = {{width: "97%",}}/>
                            </Card>
                        </div>
                        <div style = {{width: "35%", height: "96%", marginLeft: "1%", marginTop: "1%", }}>
                            <Card style = {{height: "100%", display: "flex",flex: 1,}}>
                                <CardContent style = {{flex: 1, }}>
                                    <Typography color="textSecondary" gutterBottom>Latest Activity</Typography>
                                    <div style = {{ flex: 1, height: "95%", display: "flex", flexDirection: "column", justifyContent: "space-between",}}>
                                        <List> 
                                            {
                                                feedData[this.state.fileId].comments === undefined ?
                                                null
                                                :
                                                 (feedData[this.state.fileId].comments.map((comment) => (
                                                        <div>
                                                            <ListItem alignItems="flex-start">
                                                                <ListItemText
                                                                primary = {comment.commenter}
                                                                secondary={
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
                                        <div style = {{display: "flex", flexDirection: "column", marginLeft: "2%", marginRight: "2%" }}>
                                        

                                            <Button style = {{backgroundColor: "rgb(65, 84, 175)", color: "white"}}>Share</Button>
                                        </div>
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
                            <CardContent style = {{marginLeft:"3%", }}>
                                <Typography color="textSecondary" gutterBottom>Latest</Typography>
                            </CardContent> 
                            {
                                feedData.map((item,index) =>(
                                    <div boxShadow={0} style = {{ marginLeft: "3%", marginBottom: "4%", height: "20%", borderColor: "gray",display:"flex", flexDirection:"row" }}>
                                        <div style = {{ marginLeft: "3%", marginRight: "10%", }}>
                                            <div onClick={ () => {
                                                this.setState({fileId: index})
                                                }
                                                }>
                                                <div style = {{display: 'flex',  flexDirection:'row'}}>
                                                    <Typography style = {{ fontSize: 26, fontWeight: "bold" ,  }}>
                                                        {item.title}
                                                    </Typography>
                                                    <FontAwesomeIcon icon={faFileWord} size = "1x" style = {{marginLeft: "1%",}}/>
                                                </div>                                            
                                            </div>
                                            <Typography style = {{fontStyle:"italic", marginBottom: "2%"}}>
                                                by {item.author}
                                            </Typography>
                                            <Typography style = {{ fontSize: 14,  }}>
                                                {item.description}
                                            </Typography>
                                            <Divider light style = {{marginTop: "4%",}}/>
                                        </div>
                                    </div>
                                ))
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