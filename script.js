// Sample products array simulating dynamic content
const products = [
    {
      id: 1,
      name: 'Gold Necklace',
      description: 'Elegant 18k gold necklace with diamonds.',
      price: 999.99,
      image: 'https://example.com/images/gold-necklace.jpg'
    },
    {
      id: 2,
      name: 'Silver Ring',
      description: 'Sterling silver ring with sapphire stone.',
      price: 199.99,
      image: 'https://example.com/images/silver-ring.jpg'
    },
    {
      id: 3,
      name: 'Diamond Earrings',
      description: 'Sparkling diamond earrings for special occasions.',
      price: 499.99,
      image: 'https://example.com/images/diamond-earrings.jpg'
    }
  ];
  // Fetch products from backend API and render
async function fetchAndRenderProducts() {
    try {
      const res = await fetch('http://localhost:3000/api/products');
      const products = await res.json();
  
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
  
      products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p><strong>$${product.price.toFixed(2)}</strong></p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(card);
      });
    } catch (err) {
      console.error('Failed to fetch products', err);
    }
  }
  
  // Contact form submission handler with backend call
  document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
  
    const data = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    };
  
    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
  
      const result = await res.json();
      alert(result.message);
      this.reset();
    } catch (err) {
      alert('Failed to send message.');
    }
  });
  
  // Initial load
  fetchAndRenderProducts();
  
  // Function to render product cards dynamically
  function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p><strong>$${product.price.toFixed(2)}</strong></p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  }
  
  // Mock add to cart function (dynamic interaction)
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    alert(`Added to cart: ${product.name}`);
  }
  
  // Handle contact form submission
  document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset();
  });
  
  // Initial render
  renderProducts();
  