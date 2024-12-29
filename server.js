const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('public'));

// Handle form submission
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form Data:', formData);
  // Process form data here (e.g., save to database, send email, etc.)
  res.json({ message: 'Form submitted successfully', data: formData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://antifra-consult.com:${port}`);
});
