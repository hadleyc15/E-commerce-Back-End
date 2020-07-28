const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({

  })
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findOne({

  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  Tag.create({

  })
});

router.put('/:id', (req, res) => {
  Tag.update({

  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    
  })
});

module.exports = router;
