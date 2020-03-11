const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4444;
 
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('what happen'));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true});
mongoose.connection.once('open',() => {
    console.log('db already');
})
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercise', exercisesRouter);
app.use('/user', usersRouter);

app.listen(port, () => console.log(`sever create on ${port}`));