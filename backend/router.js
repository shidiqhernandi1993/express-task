const router = require("express").Router();

const products = [
  { name: "laptop", price: 3000 },
  { name: "Computer", price: 5000 },
  { name: "Handphone", price: 7000 },
];

router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Welcome to home page!, for show prduct and post product go to endpoint '/product'.",
  });
});

router.get("/product", (req, res) => {
  res.status(200).json({
    status: 200,
    data: products,
    message: "Your products data!",
  });
});

router.post("/product", (req, res) => {
  const { name, price } = req.body;
  products.push({ name, price });
  res.status(201).json({
    status: 201,
    data: products,
    message: "Your data created!",
  });
});

module.exports = router;
