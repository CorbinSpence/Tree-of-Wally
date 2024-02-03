const router = require('express').Router();
const { Admin } = require('../models');

router.get('/', async (req, res) => {
    try{
        const adminData = await Admin.findAll({})
        res.status(200).json(adminData)
      }catch(err){
        res.status(500).json(err)
      }
})

router.get('/:id', async (req, res) => {
    try{
        const adminData = await Admin.findByPk(req.params.id, {})
        if(!adminData){
          res.status(404).json({message:'Category id does not exist.'})
          return;
        }
        res.status(200).json(adminData)
      }catch(err){
        res.status(500).json(err)
      }
})

router.post('/', async (req, res) => {
    try{
        const adminData = await Admin.create({
            first_last_name: req.body.first_last_name,
            tagline: req.body.tagline,
            dateofbirth: req.body.dateofbirth,
            country: req.body.country,
            zip: req.body.zip,
            email: req.body.email,
            profession: req.body.profession,
            company: req.body.company,
            links: req.body.links
        })
        res.status(200).json(adminData)
      }catch(err){
        res.status(400).json(err)
      }
})

router.put('/:id', async (req, res) => {
    try{
        const adminData = Admin.update(
            {
              first_last_name: req.body.first_last_name,
              tagline: req.body.tagline,
              dateofbirth: req.body.dateofbirth,
              country: req.body.country,
              zip: req.body.zip,
              email: req.body.email,
              profession: req.body.profession,
              company: req.body.company,
              links: req.body.links
            },
            {where:{id:req.params.id}}
        )
        if(!adminData){
          res.status(404).json('Category id does not exist.')
        }
        res.status(200).json(adminData)
      }catch(err){
        res.status(400).json(err)
      }
})

module.exports = router