require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models'); // Import Sequelize instance from models
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const userRoutes = require('./routes/userRoutes');
const tripRoutes = require('./routes/tripRoutes'); // Import trip routes

=======
require("dotenv").config();
const express = require("express");
const { sequelize } = require("./models"); // Import Sequelize instance from models
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const userRoutes = require("./routes/userRoutes");
>>>>>>> 44f80c9 (save)
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

// Test the database connection function

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

// Start the server

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  // Test the database connection
  await testDatabaseConnection();
});

module.exports = app;
