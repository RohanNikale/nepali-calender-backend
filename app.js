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
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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





app.use("/auth", authRoutes);

app.use("/user", userRoutes);

app.use("/event", eventRoutes);

app.use("/admin/event", adminEventRoutes);

app.use("/suvasaits", SuvaSaitsRoutes);

app.use("/horoscope", horoScopeRoutes);

app.use("/business", businessRoutes);

app.use('/category',CategoryRoutes)

app.use('/product',productRoutes)

app.use('/advertisement',advertisementRoutes)

app.use('/rating',ratingRoutes)

app.use('/menu',menuRoutes)

app.use('/submenu',subMenuRoutes)

app.use('/cart',CartItem)


module.exports = app;
