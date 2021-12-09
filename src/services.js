import fetch from 'node-fetch';

const githubApi = {
    getRepos: async (req) => {
        const {name, sort, order, page, per_page} = req.query;

        //per_page is default 30 at github.api
        const params = `?q=${name}+in:name&sort=${sort}&order=${order}&page=${page}&per_page=${per_page}`;

        const baseUrl = `${process.env.BASE_URL}${params}`;

        const fetchedApi = await fetch(baseUrl);
        const body = await fetchedApi.json();

        return body;
    },
};

export default githubApi;
