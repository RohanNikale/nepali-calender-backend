const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config({ path: "./Config/config.env" });

const bodyParser = require("body-parser");

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default route
app.get("/", (req, res) => {
  res.send("Hello, world!");
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
const advertisementRoutes = require("./routes/advertisementRoutes");
const productRoutes = require("./routes/productRoutes");
const commentRoutes = require("./routes/commentRoutes");
const replayRoutes = require("./routes/replayRoutes");
const path = require('path');




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

app.use('/menu',menuRoutes)

app.use('/submenu',subMenuRoutes)

app.use('/comment',commentRoutes)

app.use('/replay',replayRoutes)


// Error Middleware

module.exports = app;
