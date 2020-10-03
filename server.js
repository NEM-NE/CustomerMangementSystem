const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
    res.send(
        [
            {
              'id': 1,
              'image': "https://placeimg.com/64/64/1",
              'name': "honggildong",
              'birth': "990727",
              'sex': "male",
              'job': "student"
            },
            {
              'id': 2,
              'image': "https://placeimg.com/64/64/2",
              'name': "sungbin",
              'birth': "960914",
              'sex': "male",
              'job': "developer"
            },
            {
              'id': 3,
              'image': "https://placeimg.com/64/64/3",
              'name': "NEMNE",
              'birth': "000927",
              'sex': "female",
              'job': "hacker"
            }
          ]
    );
});

app.listen(port, () => {
    console.log(`Listening on Port! ${port}`);
})

