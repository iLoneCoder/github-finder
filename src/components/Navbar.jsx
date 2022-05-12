import PropType from "prop-types";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ title }) {
    return <nav className="navbar bg-black">
        <div className="container mx-auto bg-red">
            <div className="flex-none px-2 mx-2">
                <FaGithub className="inline mr-3 text-3xl align-middle text-white" />
                <Link to="/" className="align-middle text-white font-bold">{title}</Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="flex justify-end flex-wrap">
                   <Link to="/" className="btn btn-sm btn-ghost text-white">HOME</Link>
                   <Link to="/about" className="btn btn-sm btn-ghost text-white">ABOUT</Link>
                </div>

            </div>
        </div>
   </nav>
}

Navbar.defaultProps = {
    title: "Github-finder"
}

Navbar.propTypes = {
    title: PropType.string
}

export default Navbar