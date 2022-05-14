import PropType from "prop-types";
import RepoItem from "./RepoItem";

function RepoResults({ repos }) {
    return <div className="card bg-base-200 shadow-xl p-3">
        <h3 className="text-3xl text-white mb-2">Latest Repositories</h3>
        {repos.map((repo) => {
            return <RepoItem key={repo.id} item={repo}/>
        })}
    </div>
}

RepoResults.propTypes = {
    repos: PropType.array.isRequired
}

export default RepoResults;