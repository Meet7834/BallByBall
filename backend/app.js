const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

const userRoutes = require('./api/routes/userRoutes');
const teamRoutes = require('./api/routes/teamRoutes');
const matchRoutes = require('./api/routes/matchRoutes');
const scorecardRoutes = require('./api/routes/scorecardRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/user', userRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/match', matchRoutes);
app.use('/api/scorecard', scorecardRoutes);

app.get('/', (req,res) => {
    res.send("Hello");
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});