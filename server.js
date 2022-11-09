const { response } = require('express');
const express = require('express');
const app = express();

const PORT = 3004;

//Greetings
app.get('/greeting/:name', (request,response) => {
    response.send(`Hello ${request.params.name} it's so good to see you!`);
});

//Tip Calculator
app.get('/tip/:total/:tipPercentage', (request,response) =>{
    const tip =  request.params.total * request.params.tipPercentage
    // console.log(request)
    response.send(`${tip}`);
});

//Magic 8 Ball
app.get('/magic/:question', (request, response) => {
   const magic = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"
]
const length = magic.length
const randomNum = Math.random()
const randomNum2 = randomNum * length
const randomNum3 = Math.floor(randomNum2)
    response.send(`${magic[randomNum3]}`); 
})



app.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)

})