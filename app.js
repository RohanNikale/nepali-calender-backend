const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const app = express();
const path = require('path');
dotenv.config({ path: "./Config/config.env" });
const bodyParser = require("body-parser");
// Increase the JSON request body size limit (e.g., for larger JSON payloads)
app.use(bodyParser.json({ limit: '70mb' }));

// Increase the form data request body size limit (e.g., for larger file uploads)
app.use(bodyParser.urlencoded({ limit: '70mb', extended: true }));
const compression=require('compression')

app.use(compression());

app.use(cors());
// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Default route

// Route imports
app.get('/', (req, res) => {
  res.send('welcome to nepali calender api')
});
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const adminEventRoutes = require("./routes/adminEventRoutes");
const horoScopeRoutes = require("./routes/horoScopeRoutes");
const SuvaSaitsRoutes = require("./routes/suvaSaitsRoutes");
const CategoryRoutes = require("./routes/categoryRoutes");
const menuRoutes = require("./routes/menuRoutes");
const subMenuRoutes = require("./routes/subMenuRoutes");
const businessRoutes = require("./routes/businessRoutes");
const ratingRoutes = require('./routes/ratingRoutes'); 
const advertisementRoutes = require("./routes/advertisementRoutes");
const productRoutes = require("./routes/productRoutes");
const commentRoutes = require("./routes/commentRoutes");
const replayRoutes = require("./routes/replayRoutes");
const CartItem = require("./routes/cartItemRoutes");


app.get('*', (req, res, next) => {
  if (req.url.startsWith('/api')) {
    return next();
  }

  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/event", eventRoutes);

app.use("/api/admin/event", adminEventRoutes);

app.use("/api/suvasaits", SuvaSaitsRoutes);

app.use("/api/horoscope", horoScopeRoutes);

app.use("/api/business", businessRoutes);

app.use('/api/category',CategoryRoutes)

app.use('/api/product',productRoutes)

app.use('/api/advertisement',advertisementRoutes)

app.use('/api/rating',ratingRoutes)

app.use('/api/menu',menuRoutes)

app.use('/api/submenu',subMenuRoutes)

app.use('/api/cart',CartItem)


module.exports = app;
