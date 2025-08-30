const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests, so frontend can access backend
app.use(bodyParser.json());

// Sample product data (would typically come from a database)
let products = [
  { id: 1, name: 'Gold Necklace', description: 'Elegant 18k gold necklace with diamonds.', price: 999.99, image: 'https://example.com/images/gold-necklace.jpg' },
  { id: 2, name: 'Silver Ring', description: 'Sterling silver ring with sapphire stone.', price: 199.99, image: 'https://example.com/images/silver-ring.jpg' },
  { id: 3, name: 'Diamond Earrings', description: 'Sparkling diamond earrings for special occasions.', price: 499.99, image: 'https://example.com/images/diamond-earrings.jpg' }
];

// Routes

// Get product list
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Add new product (demo, no auth)
app.post('/api/products', (req, res) => {
  const product = req.body;
  product.id = products.length + 1;
  products.push(product);
  res.status(201).json(product);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form submission:', { name, email, message });

  // Here you would typically save to DB or send email
  res.status(200).json({ message: 'Thank you for contacting us!' });
});

// Start server
app.listen(port, () => {
  console.log(`Jewellery backend server running at http://localhost:${port}`);
});
