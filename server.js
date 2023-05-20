const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.get('/registerUser', (req, res) => {
    const filePath = path.join(__dirname, 'registerUser.html');
    res.sendFile(filePath);
});

app.post('/registerUser', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/loginAdmin', (req, res) => {
    const filePath = path.join(__dirname, 'loginAdmin.html');
    res.sendFile(filePath);
});

app.post('/loginAdmin', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/showAlerts', (req, res) => {
    const filePath = path.join(__dirname, 'showAlerts.html');
    res.sendFile(filePath);
});

const port = 3000; // You can change this to any available port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
