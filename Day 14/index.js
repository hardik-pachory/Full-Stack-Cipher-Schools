const http = require('http');
const axios = require('axios')

const hostname = '127.0.0.1';
const port = 3000;

var urli = 'https://pokeapi.co/api/v2/pokemon/'

async function makeGetRequest(ids) {

    let res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + ids);

    let data = res.data;
    console.log(data);
}
for (let i = 1; i <= 10; i++) {
    console.log('running loop ' + i);
    makeGetRequest(i);
}
// async function getPokemon() {
//     let url = 'https://pokeapi.co/api/v2/pokemon/1'
//     try {
//         const response = await axios.get(url);
//         return response;
//     } catch (error) {
//         console.error(error)
//     }
    
// }




// function getPokemon(id) {
//     let url_id = urli + id;
//     console.log(url_id)
//     axios.get(url_id).then((response) => {
//         return response;
//     })
//         .catch((error) => {
//             console.error(error);
//     })
// }




const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(pokemon);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
