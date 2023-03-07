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

// @desc Show Single Story page
// @router GET /stories/:id
router.get('/:id', ensureAuth, async (req, res) => {
  try{
    let story = await Story.findById(req.params.id)
      .populate('user')
      .lean()
    if(!story){
      return res.render('error/404')
    }
    res.render('stories/show', {
      story
    })
  }
  catch(err){
    console.log(err)
    return res.render('error/404')
  }
});

// @desc Show edit page
// @router GET /stories/add
router.get('/edit/:id', ensureAuth, async (req, res) => {
  try{
    const story = await Story.findOne({
      _id: req.params.id
    }).lean()
    if(!story){
      return res.render('error/404')
    }
    if(story.user != req.user.id){
      res.redirect('/stories')
    }
    else{
      res.render('stories/edit', {
        story
      })
    }
  }
  catch{
    console.log(err)
    return res.render('error/500')
  }
});

// @desc Update story
// @router PUT /stories/:id
router.put('/:id', ensureAuth, async (req, res) => {
  try{
    let story = await Story.findById(req.params.id).lean()
  
    if(!story){
      return res.render('error/404')
    }
  
    if(story.user != req.user.id){
      res.redirect('/stories')
    }
    else{
      //findOneAndUpdate MONGOOSE method
      story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      })
  
    res.redirect('/dashboard')
    }
  }
  catch{
    console.log(err)
    return res.render('error/500')
  }
});

// @desc Delete story
// @router DELETE /stories/:id
router.delete('/:id', ensureAuth, async (req, res) => {
  try{
    await Story.remove({_id: req.params.id})
    res.redirect('/dashboard')
  }
  catch(err){
    console.log(err)
    return res.render('error/500')
  }
});

// @desc User stories
// @router GET /stories/user/:userId
router.get('/user/:userId', ensureAuth, async(req, res) => {
  try{
    const stories = await Story.find({
      user: req.params.userId,
      status: 'public'
    })
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