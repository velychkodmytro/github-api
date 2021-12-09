import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();
const GithubAccess = {
    getRepositories: async (req) => {
        const name = req.query.name;
        const sortBy = req.query.sort;
        const orderBy = req.query.order;

        const repoSearchUrl = `https://api.github.com/search/repositories?q=${name}+in:name&sort=${sortBy}&order=${orderBy}`;

        const fetchedApi = await fetch(repoSearchUrl);
        const body = await fetchedApi.json();
        return {body};
    },
};

export default GithubAccess;
