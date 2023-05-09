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
    username:String,
    email: String,
    password: String,
    cpassword: String,
});

const userSchema1 = new mongoose.Schema({
    type:String,
    color:String,
    category: String,
    details: String,
});

const User = mongoose.model('User', userSchema);

const Cart = mongoose.model('Cart',userSchema1);

const app = express();

app.use(cors());
app.use(BodyParser.json());

app.post('/register', async(req, res) => {
    const user = new User();
    user.username = req.body.username;
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

app.post('/cart', async (req, res) => {
    const cart = new Cart;
    cart.type = req.body.type;
    cart.color = req.body.color;
    cart.category = req.body.category;
    cart.details = req.body.detail;
    const doc = await cart.save();
    console.log(doc);
    res.json(doc);
})

app.get('/cart', async(req,res)=> {
    const docs = await Cart.find({});
    res.json(docs);
})

app.listen('5000', () => {
    console.log('active');
})