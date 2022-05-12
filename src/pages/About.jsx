import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function About() {
    return <div>
            <h1 className="text-5xl mb-7 text-white">About Page</h1>
            <div className="mb-5">
                <p>This app is called GitHub finder. You can enter any git hub user and retrieve information</p>
                <p>This app was created by udemy tutor for teaching purposes and as a student of this course i replicated</p>
                <p>Hope you like this app and find it useful :-)</p>
            </div>
            <Link to="/" className="btn btn-ghost bg-green-900 hover:bg-green-400 hover:text-white"><FaHome className="mr-2"/> Go Home</Link>
        </div>


    
}

export default About;