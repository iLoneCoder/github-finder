import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
    return <div className="hero hero-content text-center">
        <div className="max-w-md">
            <h1 className="text-7xl mb-5 font-bold text-white">Oops !</h1>
            <p className="mb-12">hmm... something wrong... </p>
            <Link to="/" className="btn btn-ghost bg-green-900 hover:bg-green-400 hover:text-white"><FaHome className="mr-2" /> Go Home</Link>
        </div>


    </div>
}

export default NotFound;