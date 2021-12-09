import express from 'express';
import gitRouter from './router.js';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(gitRouter);

app.listen(port, () => {
    console.log('Server is up on port' + ' ' + port);
});
