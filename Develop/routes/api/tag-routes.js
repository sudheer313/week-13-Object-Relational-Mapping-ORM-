const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagdata = await Tag.findAll({
      include: [Product],
    });
    res.status(200).json(tagdata);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
   // be sure to include its associated Product data
   try {
    const data = await Tag.findByPk(req.params.id, {
      include: [Product],
    });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const createData = await Tag.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(createData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  console.log(res, req);
  try {
    const updateData = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updateData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  console.log(res, req);
  try {
    const deleteData = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!deleteData) {
      res.status(404).json({ message: "no location founds" });
      return;
    }
    res.status(200).json(deleteData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
