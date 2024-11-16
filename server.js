const express = require('express');
const path = require('path');
const app = express();

// Middleware untuk file statis
app.use(express.static(path.join(__dirname, 'web')));

// Route untuk halaman profile
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

// Menjalankan server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});