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

// @desc Logout User
// @router GET /auth/logout
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router