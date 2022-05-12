import { useContext } from "react";
import Loading from "../Loading";
import User from "./User";
import GithubContext from "../../context/Github/GitHub";

function UserResults() {
    const { users, isLoading } = useContext(GithubContext);






    if (isLoading) {
        return <Loading />
    } else {
        return <div className="grid grid-cols-1 gap-3 xl:grid-cols-5 gap-3 lg:grid-cols-4 gap-3 md:grid-cols-3 gap-3 sm:grid-cols-2 gap-3">
            {users.map((user) => {
                return <User key={user.id} user={user} />
            })}
        </div>
    }

}

export default UserResults;