import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Particles from "react-particles-js";


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }


toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '250px', background: 'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCAkIBxcJCBMXFxcZGSIZGRkYFxwaHBwaGyEaISMoHBwhLCwwIyYoJyIjJTUkKDoyMjIyJCM6PTo0PCwxNy8BCwsLDw4PHRERHTEpIykxMTMzMzMxMToxMTQ6MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIALABHgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwYBBQcEAv/EAEAQAAIBAwEECAQDBAgHAAAAAAABAgMEEQUGEiExExRBUVNhcZIigZGhByMyQnKCwRUWMzRSYsLSJCVjo7HR8P/EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EAC4RAAICAQIEBAUEAwAAAAAAAAABAgMRITEEElFhEyJBcTKBkbHRBRShwSMzQv/aAAwDAQACEQMRAD8A5v1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhABN1q58SfuY61c+JP3MhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMm62c2duNdqtxluU4vEp4y890V2vH04Fj/qjs9KfV4XkukXBrpaTef3cF0KJyWUZbeMqqlyybz2WcFCMFm1rY3UNOi61v+bTXFuKxNLzhxz6rJWiuUJQeJIurthZHmg8owCSlRqV6qpUYuUm8KMVlt+SLdpmwtepT6bVqipLnuxw5L96T4L7kwrnN4ijm2+upZm8fcpwL7/U7RLtOnp123US/wAdOpj1ikmU3VdOuNKvZWd0viXFNcpRfJryZM6pQ1exzTxNdrxF69HozxgyYKzQAAAAAAAA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) center / cover'}}>Portfolio Project</CardTitle>
                <CardText>
                    This web app developed in react, utlising boostrap, for hosting my CV and portfolio of projects. 
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/gethinjones1/Portfolio.git" target="_blank">GitHub</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{color: 'black'}} name="share"/>
                </CardMenu>
            </Card>
        )
    } else if(this.state.activeTab === 1) {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'white', height: '250px', background: 'url(data:image/png;base64,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) center / cover'}}>TicTac Toe Project</CardTitle>
                <CardText>
                    A TicTac toe game developed in JavaScript.
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/gethinjones1/TicTacToe.git" target="_blank">GitHub</Button>
                    <Button colored href="https://tictactoe12345.netlify.app/" target="_blank">Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{color: 'black'}} name="share"/>
                </CardMenu>
            </Card>
        )
    } else if(this.state.activeTab === 2) {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height: '250px', textAlign: 'top', background: 'url(https://blog.hyperiondev.com/wp-content/uploads/2018/09/Blog-Article-MERN-Stack.jpg) center / cover'}}>MERN Project</CardTitle>
                <CardText>
                    A full stack app developed utilising the Mongo, Express, React and Node stack. Ongoing project to develop a sample management system for a testing laboratory. 
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/gethinjones1/LIMS.git" target="_blank">GitHub</Button>
                    <Button colored href="https://lux-tsi-lims.netlify.app/" target="_blank">Demo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton style={{color: 'black'}} name="share"/>
                </CardMenu>
            </Card>
        )
    }
}

    render() {
        return(
            <>
            <Navbar />
            <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#000000"  
              }
            }
          }
        }}
      />
        <div className="portfolioPages">
            <div className="category-tabs" style={{paddingTop: '4.5em'}}>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>MERN</Tab>
                </Tabs>

                    <Grid className="portfolio-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        </div>
            </>
        )
    }
}

export default Portfolio;
