import { FaHashtag } from "react-icons/fa";
function Footer() {
    return <footer className="footer p-2 bg-red-900 footer-center">
        <div>
            <FaHashtag className="w-10 h-10 mb-0" />
            <div className="align-middle">
                <span className="align-middle">Copyright &copy; 2022 all rights reserved</span>
            </div>

        </div>

    </footer>
}

export default Footer;