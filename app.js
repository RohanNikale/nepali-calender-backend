const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: "./Config/config.env" });

const bodyParser = require("body-parser");

const compression=require('compression')

app.use(compression());


// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
  res.json({
    message : "Welcome to the API of nepali calender",
  })
});

// Route imports
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
const path = require('path');
const CartItem = require("./routes/cartItemRoutes");




app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
// Error Middleware

module.exports = app;
