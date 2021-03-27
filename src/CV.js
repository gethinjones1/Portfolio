import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

function CV() {
    return(
        <>
        <Navbar />
        <div>
            <h1 className="h1">This is my CV!</h1>
        </div>
        </>
    );

}

export default CV;
