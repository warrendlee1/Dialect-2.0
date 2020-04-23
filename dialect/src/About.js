import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class About extends React.Component{

    render() {
        return ( 
            <div style = {{backgroundColor: "#e8e8e8",}}>
                <div style = {{ height: 905, marginLeft: "21.25%",display:"flex", flexDirection:"row", marginRight:"21.25%",  }}>
                    <div style = {{ width: "100%", height: "60%", marginTop: "1%",}}>
                        <Card style = {{height: "100%", overflowY: 'scroll'}}>
                            <CardContent style = {{marginLeft:"3%", marginTop: "2%", marginRight: "3%", }}>
                                <Typography style = {{fontSize: 24, fontWeight: "bold" , marginBottom: "2%" ,}}>What is Dialect?</Typography>
                                <Typography style = {{fontSize: 20, marginBottom: "3%",  }}>
                                    Dialect is a platform for thinkers to share and discuss their critical thoughts. 
                                    In our society, thought too often is contained within the bounds of one’s environments, or worse, a platform that encourages quick, snappy responses. 
                                    Dialect emphasizes moving away from this paradigm and towards provocative, thought-out responses that push significant ideas forward.
                                </Typography>
                                <Typography style = {{fontSize: 24, fontWeight: "bold" , marginBottom: "2%" ,}}>Team</Typography>
                                <Typography style = {{fontSize: 20, }}>
                                   Anacan M, Warren L, Mina H
                                </Typography>
                            </CardContent> 
                        </Card>
                    </div>
                </div>
            </div>

        )
    }
}