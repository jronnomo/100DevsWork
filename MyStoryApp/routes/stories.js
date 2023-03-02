const { application } = require('express');
const express = require('express')
const router = express.Router()
const partials = require('express-partials')
const {ensureAuth} = require('../middleware/auth')

const Story = require('../models/Story')

//load the express-partials middleware
router.use(partials());

// @desc Show add page
// @router GET /stories/add
  router.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
});

// @desc Process the add form
// @router POST /stories/
router.post('/', ensureAuth, async (req, res) => {
  try{
      req.body.user = req.user.id
      await Story.create(req.body)
      res.redirect('/dashboard')
  } catch(err){
      console.log(err)
      res.render('error/500')
  }
});

// @desc Show all stories
// @router GET /stories/add
//don't need /stories below here because it's already referenced in our app.js routes
router.get('/', ensureAuth, async(req, res) => {
  try{
    const stories = await Story.find({ status: 'public'})
      .populate('user')
      .sort({ createdAt: 'desc'})
      .lean()
    res.render('stories/index', {
      stories,
    })
} catch(err){
    console.log(err)
    res.render('error/500')
}
});

module.exports = router