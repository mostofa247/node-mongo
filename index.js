const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();


app.use(cors());

app.use(bodyParser.json());
const users = ['mostofa','maimuna', 'ethen', 'susmita'];


app.get('/', (req, res) =>{
    const fruits = {
        product:'adda',
        price: 200,
    }
    res.send(fruits);
})



app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    console.log(req.query.sort);
    const[name] = users[id];
    res.send({id,name});
})

app.post('/addUser',(req,res) => {
    //server
    const user = req.body;
    user.id = 55;
    res.send(user);
})


app.listen(3000, () => console.log('listing port 3000'));