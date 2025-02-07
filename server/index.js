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
  origin: ["http://localhost:3000", "https://ailearning-management.vercel.app/"],// Specify your client's URL
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

dotenv.config();
connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', courseRoutes);

app.listen(port, () => {
  console.log(`Course app listening on port ${port}`);
});
