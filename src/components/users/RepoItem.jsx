import PropType from "prop-types";
import { FaLink, FaStar, FaInfo, FaEye, FaUtensils } from "react-icons/fa"
function RepoItem({ item }) {
    return <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body">
            <h3 className="card-title mb-2">
                <FaLink />  {item.name}
            </h3>
            <div className="inline">
                <div className="badge badge-accent badge-outline mx-1"><FaEye className="inline" /> <div className="ml-1">{item.watchers_count}</div></div>
                <div className="badge badge-primary badge-outline mx-1"><FaStar className="inline" /> <div className="ml-1">{item.stargazers_count}</div></div>
                <div className="badge badge-secondary badge-outline mx-1"><FaInfo className="inline" /> <div className="ml-1">{item.open_issues}</div></div>
                <div className="badge badge-ghost badge-outline mx-1 text-sky-300"><FaUtensils className="inline" /> <div className="ml-1">{item.forks}</div></div>
            </div>


        </div>

    </div>
}

RepoItem.propTypes = {
    item: PropType.object.isRequired
}

export default RepoItem;