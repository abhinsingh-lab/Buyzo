import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import { products } from './data/products.js'; 

const app = express();
const port = 5001;


app.use(cors());
app.use(express.json());

// Mock in-memory database for orders
const orders: any[] = [];

// Get all products
app.get('/api/products', (req: Request, res: Response) => {
  // Simple search implementation (intentional inefficient gap for debouncing lesson)
  const query = req.query.q as string;
  const category = req.query.category as string;
  
  let filteredProducts = products;

  if (query) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter(p => 
      p.category === category
    );
  }

  res.json(filteredProducts);
});

// Get product by ID
app.get('/api/products/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Create Order (Intentional gap: No validation or error handling)
app.post('/api/orders', (req: Request, res: Response) => {
  const order = req.body;
  
  // LOGIC GAP: Directly pushing to array without checking fields
  // This will be used to teach Zod/Joi and Middleware later.
  orders.push({
    id: orders.length + 1,
    ...order,
    status: 'Processing', // Default status
    createdAt: new Date().toISOString()
  });

  res.status(201).json({ 
    message: 'Order placed successfully', 
    orderId: orders.length 
  });
});

// Get all orders (Simple endpoint for the Orders page)
app.get('/api/orders', (req: Request, res: Response) => {
  // In a real app, we would filter by user ID from the token
  // For now, return all orders in reverse chronological order
  res.json(orders.reverse());
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
