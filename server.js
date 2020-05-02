const express = require('express');
const connectDB = require('./config/db');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');

const app = express();
const cors = require('cors');

// connect db
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));

// store binary images
app.use(fileUpload());

// cookies
app.use(cookieParser());
app.use(cors());
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));

app.get('/', (req, res) => res.send("Server runnig"));

app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/testimonies'));
app.use('/api', require('./routes/products'));
app.use('/api', require('./routes/orders'));

/** ERROR HANDLING */
app.use(function (req, res, next) {
  const err = new Error('Problemas con el servidor, intentalo de nuevo');
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(400).send({
    error: {
      message: err.message
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));