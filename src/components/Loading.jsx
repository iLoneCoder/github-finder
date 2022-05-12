import spinner from "./assets/spinner.gif"
function Loading() {
    return <div>
        <img className="mx-auto" src={spinner} alt="Loading..." />
    </div>
}

export default Loading;