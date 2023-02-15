const { application } = require('express');
const express = require('express')
const router = express.Router()
const partials = require('express-partials')
const passport = require('passport')

//load the express-partials middleware
router.use(partials());

// @desc Auth with Google
// @router GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))

// @desc Google Auth Callback
// @router GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect:
'/' }), (req, res) => {
    res.redirect('/dashboard')
})

//TODO why do I have to include an error parameter for logout when passport gives a logout method to the request object?
// @desc Logout User
// @router GET /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout((error) => {
        if (error) {return next(error)}
    })
    res.redirect('/')
})

module.exports = router