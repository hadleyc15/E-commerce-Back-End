const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: Product
  }).then(dbData => {
    res.json(dbData)
  })
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: Product
  }).then(dbData => {
    res.json(dbData)
  })
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({

  })
});

router.put('/:id', (req, res) => {
  Category.update({

  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({

  })
});

module.exports = router;
