const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 300;


//Middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hellow world!!");
});

app.listen(port, () => {
    console.log(`This is Port of ${port}`);
})