const router = require('express').Router();
const { Investor } = require('../models');

router.get('/', async (req, res) => {
    try{
        const investorData = await Investor.findAll({})
        res.status(200).json(investorData)
      }catch(err){
        res.status(500).json(err)
      }
})

router.get('/:id', async (req, res) => {
    try{
        const investorData = await Investor.findByPk(req.params.id, {})
        if(!investorData){
          res.status(404).json({message:'Category id does not exist.'})
          return;
        }
        res.status(200).json(investorData)
      }catch(err){
        res.status(500).json(err)
      }
})

router.post('/', async (req, res) => {
    try{
        const investorData = await Investor.create({
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
        res.status(200).json(investorData)
      }catch(err){
        res.status(400).json(err)
      }
})

router.put('/:id', async (req, res) => {
    try{
        const investorData = Investor.update(
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
        if(!investorData){
          res.status(404).json('Category id does not exist.')
        }
        res.status(200).json(investorData)
      }catch(err){
        res.status(400).json(err)
      }
})

module.exports = router