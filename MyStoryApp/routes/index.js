const express = require('express')
const router = express.Router()

// @desc Login/Landing page
// @router GET /
// router.get('/', (req, res) => {
//     // res.render('login');
//     res.render('login', { layout: 'main', body: '<h1><%= "Login Page" %></h1>' });
//     // res.send('login')
//   });

  router.get('/', (req, res) => {
    res.render('login', {
        layout: 'main',
        body: '<h1>Login</h1>'
    });
});


// @desc Dashboard
// @router GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router