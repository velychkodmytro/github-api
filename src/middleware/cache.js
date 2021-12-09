let cache = {};

const caching = (req, res, next) => {
    const key = req.url;
    if (cache[key]) {
        res.send(cache[key]);
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            cache[key] = body;
            res.sendResponse(body);
        };
        next();
    }
};

export default caching;
