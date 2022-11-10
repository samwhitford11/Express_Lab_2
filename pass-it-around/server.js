const { response } = require('express');
const express = require('express');
const app = express();

const PORT = 3010;

// Take one Down and Pass it Around

app.get('/:number_of_bottles', (request, response) =>{
    const numBottles = request.params.number_of_bottles
    const nextBottle = numBottles - 1
    // console.log("99 bottles of beer on the wall")
    response.send(`<a href='/${nextBottle}'><button>take one down, pass it around</button></a> <h1>${numBottles} number of bottle of beer on the wall</h1> `)
    // if(${numBottles} = 0){
    //     response.send(`<a href='/${numBottles}'><button>Start Over</button></a>`)
    // }

    

})

app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)

})