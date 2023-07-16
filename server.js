const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000; // Use the dynamic port from Heroku or fallback to 3000

app.use(express.static(path.join(__dirname, 'dist'))); // Assuming your Vite build output is in the 'dist' folder

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
