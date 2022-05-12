import { Link } from "react-router-dom";

function User({ user }) {
    return <div className="card card-compact bg-base-100 shadow-xl p-0.2">
        <div className="card-body">
            <div className="flex flex-col">

                <div className="avatar w-10">
                    <img className="rounded-full" src={user.avatar_url} alt="avatar" />
                    <p className="ml-4 mt-2">
                        {user.login}
                    </p>
                </div>

                <div className="mt-2">
                    <Link to={`users/${user.login}`} className="text-xs">visit profile</Link>
                </div>

            </div>

        </div>

    </div>
}

export default User;