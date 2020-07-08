// modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// main set up
const app = express();
app.use(helmet());
app.use(express.json());

const corsOptions = {
    origin: process.env.client
};

app.use(cors(corsOptions));

// database
require('./utils/database')

// routes
const mainApiRouter = require('./routes/mainApiRouter');
const adminApiRouter = require('./routes/adminApiRouter');

app.use('/api/', mainApiRouter);
app.use('/api/admin', adminApiRouter);
app.use('/api/*', (req, res) => {
    res.status(404).json({ message: "page not found" })
})

// Error 
app.use((err, req, res, next) => {
    res.status(500).json({ message: "problems with server" })
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));



