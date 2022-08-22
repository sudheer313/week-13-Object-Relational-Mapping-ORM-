const router = require('express').Router();
const { response } = require('express');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  try {

    const data = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    const data = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  // Category.create(req.body)
  try{
    const data= await Category.create({
      category_name:req.body.category_name});
    res.status(200).json(data);
      } catch (err){
        response.status(400).json(err);
      }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try{
    const data= await Category.update({category_name:req.body.category_name},
      {
        where:{id:req.body.id}
      }

      );
    res.status(200).json(updateCategory);
      } catch (err){
        response.status(400).json(err);
      }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
