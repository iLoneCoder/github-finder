import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
import { FaMinusCircle } from "react-icons/fa";
function Alert() {
    const { alert } = useContext(AlertContext);

    return alert !== null && <div className="flex  mb-1 text-white ">
        {alert.type === "error" && <>
            <FaMinusCircle className="inline mt-1" />
            <p className="align-middle ml-2 ">{alert.msg}</p> 
        </>
        }
    </div>
}

export default Alert