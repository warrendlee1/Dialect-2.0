/**
 *  File name     :  About.js
 *  @author       :  Warren Lee
 *  Date          :  4/23/20
 *  Description   :  EssaySearch
 */

import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class About extends React.Component{
    render() {
        return ( 
            <div style = {{backgroundColor: "#e8e8e8", height: "100%",position: "absolute",left: "0",width: "100%",overflow: "scroll"}}>
                <div style = {{ height: 905, marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                    <div style = {{ width: "100%", height: "60%", marginTop: "1%",}}>
                        <Card style = {{height: "100%", overflowY: 'scroll'}}>
                            <CardContent style = {{marginLeft:"3%", marginTop: "2%", marginRight: "3%", }}>
                                <Typography style = {{fontSize: 24, fontWeight: "bold" , marginBottom: "2%" ,}}>What is Essay Search?</Typography>
                                <Typography style = {{fontSize: 20, marginBottom: "3%",  }}>
                                    Essay Search finds new essays and thought-out ideas, and allows users to respond and view these new perspectives.
                                </Typography>
                                <Typography style = {{fontSize: 24, fontWeight: "bold" , marginBottom: "2%" ,}}>Team</Typography>
                                <Typography style = {{fontSize: 20, }}>
                                   Warren Lee
                                </Typography>
                            </CardContent> 
                        </Card>
                    </div>
                </div>
            </div>

        )
    }
}