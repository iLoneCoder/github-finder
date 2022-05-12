
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";


function Home() {
    // const { users, cleanUsers } = useContext(GithubContext);
    // const handleClick = () => {
    //     cleanUsers();
    // }

    return <>
        <UserSearch />
        <UserResults />

    </>




}

export default Home;