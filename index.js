const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000; // Set PORT to the environment variable or fallback to 3000

if (!process.env.PORT && !Number.isInteger(PORT)) {
  console.error('Bước nhảy không tìm thấy biến môi trường PORT, sử dụng 3000.'); // Log error if PORT is not set
}

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse incoming JSON requests

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Chào mừng đến với Công cụ Quản Lý Thời Gian Làm Việc!'); // Send a welcome message
});

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`); // Log server status
});