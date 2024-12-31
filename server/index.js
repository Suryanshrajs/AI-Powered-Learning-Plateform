const connectDB = require('./config/db');
const express = require('express');
const dotenv = require('dotenv');
const courseRoutes = require('./routes/courseRoutes');
var cors = require('cors');
var cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT;

// CORS Configuration
const corsOptions = {
  origin: "*", // Allow all origins
  credentials: true, // Allow cookies to be sent
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', courseRoutes);

app.listen(port, () => {
  console.log(`Course app listening on port ${port}`);
});
