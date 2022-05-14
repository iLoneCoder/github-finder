import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaUsers, FaUserFriends, FaCodepen, FaBox } from "react-icons/fa";

import GithubContext from "../context/Github/GitHub";
import Loading from "../components/Loading"
import RepoResults from "../components/users/RepoResults";
import { getUser, getRepos } from "../context/Github/GithubActions";
function UserProfile() {
    const { user, isLoading, repos, dispatch } = useContext(GithubContext);
    const { login } = useParams();

    useEffect(() => {
        const getUserData = async () => {
            dispatch({
                type: "SET_LOADING"
            })
            const aUser = await getUser(login);
            const userRepos = await getRepos(login);


            dispatch({
                type: "A_USER",
                payload: aUser
            })

            dispatch({
                type: "GET_REPOS",
                payload: userRepos
            })
        }

        getUserData();

    }, [dispatch, login])

    const { avatar_url,
        bio,
        html_url,
        type,
        name,
        followers,
        following,
        hireable,
        location,
        blog,
        twitter_username,
        public_repos,
        public_gists } = user;

    return <>
        {isLoading ? <Loading /> : <>
            <div className="w-full mx-auto lg:w-10/12 ">
                <div className="mb-4">
                    <Link to="/" className="btn btn-ghost">Back to search</Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
                    <div className="custom-card-image ">
                        <div className="card image-full rounded-lg shadow-xl">
                            <figure>
                                <img src={avatar_url} alt="" />
                            </figure>
                            <div className="card-body justify-end ">
                                <h2 className="card-title mb-0 text-white">{name}</h2>
                                <div className="mt-0 text-white">
                                    <p>{user.login}</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="col-span-2 ml-5">
                        <div className="text-white">
                            <h2 className="card-title text-3xl mb-3">{name}
                                <div className="badge badge-success ml-2 mr-1">{type}</div>
                                {hireable && (
                                    <div className="badge badge-secondary">
                                        Hireable
                                    </div>
                                )}
                            </h2>
                            <p className="mb-6">{bio}</p>
                            <a href={html_url} className="btn btn-outline text-white" target="_blank" rel="noreferrer">Visit GitHub</a>
                        </div>

                        <div className="stats bg-base-100 shadow-sm shadow-md mt-4 lg:stats-horizontal md:stats-vertical sm:stats-vertical" >
                            {location && (
                                <div className="stat ">
                                    <div className="stat-title">location</div>
                                    <div className="stat-value text-[22px] text-white">{location}</div>
                                </div>
                            )}
                            {blog && (
                                <div className="stat">
                                    <div className="stat-title">website</div>
                                    <a className="stat-value text-[22px] text-white" href={`https://${blog}`} target="_blank" rel="noreferrer">{blog}</a>
                                </div>
                            )}

                            {twitter_username && (
                                <div className="stat">
                                    <div className="stat-title">Twitter</div>
                                    <a className="stat-value text-[22px] text-white" href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">{twitter_username}</a>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
                <div className="w-full mx-auto stats shadow-md mt-9 lg:stats-horizontal md:stats-vertical sm:stats-vertical mb-5">
                    <div className="stat ">
                        <div className="stat-figure text-primary">
                            <FaUsers className="text-3xl" />
                        </div>
                        <div className="stat-title">Followers</div>
                        <div className="stat-value">{followers}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaUserFriends className="text-3xl" />
                        </div>
                        <div className="stat-title">Following</div>
                        <div className="stat-value ">{following}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaCodepen className="text-3xl" />
                        </div>
                        <div className="stat-title">Public repos</div>
                        <div className="stat-value">{public_repos}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <FaBox className="text-3xl" />
                        </div>
                        <div className="stat-title">Public gists</div>
                        <div className="stat-value">{public_gists}</div>
                    </div>
                </div>
                <RepoResults repos={repos} />
            </div>
        </>}

    </>
}

export default UserProfile;