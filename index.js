const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 300;


//Middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("The Server is Available");
});

const users = [{
    name: "Sabana",
    email: "sabana@gmail.com",
    _id: 1,
},
{
    _id: 2,
    name: "Sabnoor",
    email: "sabnoor@gmail.com"
},
{
    _id: 3,
    name: "Babita",
    email: "babita@gmail.com"
},
{
    _id: 4,
    name: "Sakib Khan",
    email: "sakibkhan@gmail.com"
}
];

app.get('/users', (req, res)=> {
    res.send(users)
})


app.listen(port, () => {
    console.log(`This is Port of ${port}`);
})