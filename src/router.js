import express from 'express';
import GithubAccess from './services.js';

const gitRouter = express.Router();

gitRouter.get(`/listRepo/`, async (req, res) => {
    try {
        const result = await GithubAccess.getRepositories(req);

        res.status(200).send(result);
    } catch (error) {
        res.status(422).send(error.message);
    }
});

export default gitRouter;
