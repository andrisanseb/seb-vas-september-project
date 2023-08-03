import {Link} from "react-router-dom";
import '../styles/Home.css';


const Home = () => {

    return (
        <div className="home">
            <h1>SebVas Project</h1>
            <Link to={'/get-started'} className="cta-button">Get Started! </Link>
        </div>
    );
};

export default Home;