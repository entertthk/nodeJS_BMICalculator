const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.post('/', function(req, res) {
    console.log(req.body);
    let weight = Number(req.body.weight);
    let height = Number(req.body.height)/100;
    let result = weight / (height*height);
    

    if (result < 19) {
        res.send(`Your BMI: ${result} </br> Alakaal`);
      } else if (result > 19 && result < 24.9) {
        res.send(`Your BMI: ${result} </br> Normaalkaal`);
      } 
      else if (result > 25 && result < 29.9) {
        res.send(`Your BMI: ${result} </br>Ülekaal`);
      }
      else {
        res.send(`Your BMI: ${result} </br> Rasvumine`);
      }
 });


app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})