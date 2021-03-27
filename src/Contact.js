import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function Contact() {
    return(
        <>
        <Navbar />
        <div>
            <h1 className="h1">Contact Details</h1>
            <h2>Gethin Jones</h2>
            <h3>07792554</h3>
        </div>
        </>
    );

}

export default Contact;
