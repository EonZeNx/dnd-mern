const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose');

require ('dotenv').config();


// setup server
const app = express();
const port = process.env.PORT || 5000;

// get middleware
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// routes
const ability_scoresRouter = require('./routes/ability_scores');
const featuresRouter = require('./routes/features');

app.use('/ability_scores', ability_scoresRouter);
app.use('/features', featuresRouter);

// start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});