const app = require('express')();
const port = process.env.PORT || 3000;
// app.set('views', __dirname + '/public/views/');

app.get('/', (req, res) => res.send('index'));

app.get('/signup', (req, res) => res.send('signup'));

app.get('/login', (req, res) => res.send('login'));

app.listen(port, () => console.log(`Application LIVE on localhost:${port}`));