const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controller/register');
const signin = require('./controller/signin');
const profile = require('./controller/profile');
const image = require('./controller/image');


const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '896874',
    database : 'smart-brain'
  }
});

const app = express();
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res)=> {res.send(database.users)});
app.post('/signin', signin.handlesignin(db, bcrypt));
app.post('/register', register.handleregister(db, bcrypt));
app.get('/profile/:id', profile.handleprofile(db));
app.put('/image', image.handleimage(db));
app.post('/imageurl', image.handleApiCall);
app.listen(3000, ()=> {console.log('app is running on port 3000')});
