const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Công cụ Quản Lý Thời Gian Làm Việc!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên http://localhost:${PORT}`);
});