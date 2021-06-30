const express = require("express");
const router = express.Router();
const api_helper = require('../middleware/API_helper');

router.get('/', (req, res) => {
    api_helper.make_API_call('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})
router.get('/:id', (req, res) => {
    api_helper.make_API_call(`https://jsonplaceholder.typicode.com/posts/${req.params.id}/comments`)
        .then(response => {
            res.json(response)
        })
        .catch(error => {
            res.send(error)
        })
})



module.exports = router;
