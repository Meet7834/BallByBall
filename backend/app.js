const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRoutes = require('./Routes/userRoutes');
const teamRoutes = require('./Routes/teamRoutes');
const matchRoutes = require('./Routes/matchRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(morgan('tiny'));

app.use('/', userRoutes);
app.use('/', teamRoutes);
app.use('/', matchRoutes);

app.get('/', (req,res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});