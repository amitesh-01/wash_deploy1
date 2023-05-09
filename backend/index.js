const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

mongoose.connect('mongodb://127.0.0.1:27017/washUp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
            console.log('db connected');
})
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    cpassword: String,
});

const User = mongoose.model('User', userSchema);

const app = express();

app.use(cors());
app.use(BodyParser.json());

app.post('/register', async(req, res) => {
    const user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.cpassword = req.body.cpassword;
    const doc = await user.save();

    res.json(doc);
})

app.get('/show', async (req,res)=> {
    const docs = await User.find({});
    res.json(docs);
})

app.listen('5000', () => {
    console.log('active');
})