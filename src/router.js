import express from 'express';
import GithubApi from './services.js';
import caching from './middleware/cache.js';

const gitRouter = express.Router();

gitRouter.get(`/listRepo`, caching, async (req, res) => {
    try {
        const result = await GithubApi.getRepos(req);

        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default gitRouter;
