const express = require('express');
const app = express();
const port = 3000;  
const products = require('./data.json');
const cors = require('cors');

app.use(cors());


app.get('/', (req, res) => {
  res.send('Welcome to Product API');
});



// Get Electronics Items
app.get('/electronics', (req, res) => {
  const electronicsItems = products.filter(
    (item) => item.mainCategory === "Electronics"
  );

  res.json(electronicsItems);
});



// Get Fashion Items
app.get('/fashion', (req, res) => {
  const fashionItems = products.filter(
    (item) => item.mainCategory === "Fashion"
  );

  res.json(fashionItems);
});



// Get Household Items
app.get('/household', (req, res) => {
  const householdItems = products.filter(
    (item) => item.mainCategory === "House"
  );

  res.json(householdItems);
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});