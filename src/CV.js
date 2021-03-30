import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Grid, Cell } from 'react-mdl';
import Picture from './Me.jpg';
import Education from './education'

function CV() {
    return(
        <>
        <Navbar />
        <div>
            <Grid>
                <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img
                            src={Picture}
                            alt="avatar"
                            style={{height: '200px'}}/>  
                    </div>
                    <h2 style={{paddingTop: '2em' }}>Gethin Jones</h2>
                    <h4 style={{color: 'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <h5>Address</h5>
                    <p>1 Hacker Way Menlo Park, 94025</p>
                    <h5>Phone</h5>
                    <p>123 456-7890</p>
                    <h5>Email</h5>
                    <p>myemail@myemail.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                </Cell>
                <Cell className="CV-right-col" col={8}>
                    <h2>Education</h2>

                    
                    <Education 
                        startYear={2020}
                        endYear={2024}
                        schoolName={"The Open University"}
                        schoolDescription={"BSc Applied Software Engineering"}
                    />

                    <Education 
                        startYear={2010}
                        endYear={2017}
                        schoolName={"Y Pant Comprehensive"}
                        schoolDescription={"GCSEs & A Levels"}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>
                <h2>Exprience</h2>


                </Cell>
            </Grid>
        </div>
        </>
    );

}

export default CV;
