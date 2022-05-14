const GITHUB_URL = process.env.REACT_APP_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (name) => {

    const params = new URLSearchParams({
        q: name
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            "Authorization": `${GITHUB_TOKEN}`
        }
    })

    const { items } = await response.json();
    // console.log(data);
    return items
}

export const getUser = async (name) => {
    const response = await fetch(`${GITHUB_URL}/users/${name}`, {
        headers: {
            "Authorization": `${GITHUB_TOKEN}`
        }
    })

    const data = await response.json();
    // console.log(data);

    return data;
}

export const getRepos = async (login) => {
    const params = new URLSearchParams({
        sort: "created",
        per_page: "10"
    });


    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
        headers: {
            "Authorization": `${GITHUB_TOKEN}`
        }
    })

    const data = await response.json();

    return data;
}