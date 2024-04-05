const express = require('express');
const app = express();

app.use(express.json());
app.post('/api/orders', 
(req, res) =>
 { 
const orderDetails = req.body;
  
// Process the order (e.g., save to Firebase Realtime Database)

  res.status(200).json
({ 
message : 'Order received successfully'
 });
});

// Add more routes as needed

app.listen
(3000, () =>
 {
console.log(
'Server is running on port 3000'
);
});