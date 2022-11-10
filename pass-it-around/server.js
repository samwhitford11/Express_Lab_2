const { response } = require('express');
const express = require('express');
const app = express();

const PORT = 3010;

// Take one Down and Pass it Around

app.get('/:number_of_bottles', (request, response) =>{
    console.log("99 bottles of beer on the wall")
    response.send("99 bottles of beer on the wall")
    <a href=""><button>take one down, pass it around</button></a> 

})

app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)

})