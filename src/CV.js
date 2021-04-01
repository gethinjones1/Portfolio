import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Grid, Cell } from 'react-mdl';
import Picture from './Me.jpg';
import Education from './education';
import Experience from './experience';
import Social from './Social';

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
                    <h2>Gethin Jones</h2>
                    <Social />
                    <h4 style={{color: 'grey'}}>Aspiring Software Engineer</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <p>A motivated and driven undergraduate student studying Applied Software Engineering via a degree apprenticeship in parallel with full time employment in a UKAS accredited testing laboratory. Looking to secure my first role as a Software developer. I have an analytical and methodical approach to solving problems, which is a part of my day-to-day in my current role as Lead Photometric Engineer at LUX-TSI. My experience is diverse due to my development from administration to systems administration and CRM development to then Technical leadership of the accredited Photometric department. This has led me to develop strong IT skills, with the use of Excel and other MS packages within my role which could be considered advanced, strong technical leadership with enthusiasm for project management and quality assurance in line with QMS requirements. 
                    </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    <h5>Address</h5>
                    <p>46 Heol Miskin, Pontyclun, RCT, CF72 9AJ</p>
                    <h5>Phone</h5>
                    <p>07792554544</p>
                    <h5>Email</h5>
                    <p>gethinjackjones@gmail.com</p>
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
                        schoolDescription={"9 GCSEs A-C & 4 A Levels A-C with a distinction in ICT"}
                    />
                    <hr style={{borderTop: '3px solid #e22947'}}/>

                <h2>Experience</h2>
                <Experience
                    startYear={2017}
                    endYear={'Present'}
                    jobName={"Lead Photometric Engineer"}
                    jobDescription={"Photometric department lead with quality assurance responsiblities for maintaining ISO 17025 accreditation. Responsible for writing technical test plans and procedures. Providing training to Technicians on how to conduct testing and assistance for standards intepretation. Maintenance and upkeep of test automation scripts in MatLab, Python and LabView. Creation of .xlsm files utilising VB macros to automate report writing and minimise human error. Specification and developement of CRM systems which are off-the-shelf. Specification of APIs to slash administration time on CRM data entry. Embedded PHP code to boost efficiency of viewing data."}
                />
                <Experience
                    startYear={2015}
                    endYear={'2017'}
                    jobName={"Various Jobs"}
                    jobDescription={"Waitering at the Vale Resort and Miskin Manor Hotel. Barrista at Marks & Spencers."}
                />
                </Cell>
            </Grid>
        </div>
        </>
    );

}

export default CV;
