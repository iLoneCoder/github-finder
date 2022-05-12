import { useContext, useState } from "react";
import GithubContext from "../../context/Github/GitHub";
import AlertContext from "../../context/alert/AlertContext";
import Alert from "../Alert";
function UserSearch() {
    const { searchUsers, cleanUsers, users } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);

    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            searchUsers(text);
        } else {
            setAlert("please enter name", "error");
        }

    }

    const handleClick = () => {
        cleanUsers();
        setText("");
    }
    return <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
        <div className="">
            <Alert />
            <form action="" onSubmit={e => handleSubmit(e)}>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" className="input input-border bg-gray-200 w-full text-black" placeholder="Search..." value={text} onChange={handleChange} />
                        <button type="submit" className="btn px-4">GO</button>
                    </div>
                </div>
            </form>

        </div>
        {users.length > 0 &&
            <div className="text-center">
                <div>
                    <button className="btn btn-ghost" onClick={handleClick}>clear</button>
                </div>
            </div>}

    </div>



}

export default UserSearch;