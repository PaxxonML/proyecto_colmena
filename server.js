const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/registerUser', (req, res) => {
    res.send('registerUser.html');
});

app.post('/registerUser', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/loginAdmin', (req, res) => {
    res.send('loginAdmin.html');
});

app.post('/loginAdmin', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/showAlerts', (req, res) => {
    res.send('showAlerts.html');
});

const port = 3000; // You can change this to any available port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
