const { application } = require('express');
const express = require('express')
const router = express.Router()
const partials = require('express-partials')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Story = require('../models/Story')

//load the express-partials middleware
router.use(partials());

// @desc Login/Landing page
// @router GET /
  router.get('/', ensureGuest, (req, res) => {
    res.render('login')
});


// @desc Dashboard
// @router GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try{
    const stories = await Story.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      stories
    })
  }
  catch (err){
    console.log(err)
    res.render('error/500')
  }
})

module.exports = router