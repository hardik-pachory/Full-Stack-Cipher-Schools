const express = require('express');
const axios = require('axios')
const app = express();
const fetch = require('node-fetch');

app.use(express.json());

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));



const postRouter = require('./routes/posts');
app.use('/', postRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on the port: ${port}`);
})