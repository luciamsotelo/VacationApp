const express = require('express');
const { sequelize } = require('./models'); // Import Sequelize instance from models
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Error handling middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Test the database connection function
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  // Test the database connection
  await testDatabaseConnection();
});

module.exports = app;
