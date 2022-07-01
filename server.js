const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const users = []

app.set('views', __dirname + '/client')
app.use(express.json());

// set up a route

app.get('/', (req, res) => {
    //res.render('test.ejs')
    res.send({ hello: 'Your express backend is connected to react!'})
})

// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)
//         // console.log(salt)
//         // console.log(hashedPassword)
//         const user = { username: req.body.username, password: hashedPassword }
//         users.push(user)
//         res.status(201).send()
//     } catch {
//         res.status(500).send()
//     }
// })

// app.get('/login', (req, res) => {
//     res.render('Login.js')
// })

// app.post('/login', async (req, res) => {
//     const user = users.find(user => user.username = req.body.username)
//     if (user == null) {
//         return res.status(400).send(`can't find user`)
//     }

//     try {
//         if ( await bcrypt.compare(req.body.password, user.password)) {
//             res.send('Success!')
//         } else {
//             res.send('Not Allowed')
//         }
//     } catch {
//         res.status(500).send()
//     }
// })

// app.get('/signup', (req, res) => {
//     res.render('SignUp.js')
// })

// app.post('/signup', async (req, res) => {
//     try {
//         const hashedPassword = await bcrypt.hash(req.body.password, 10) 
//         users.push({
//             id: Date.now().toString(),
//             username: req.body.username,
//             password: hashedPassword,
//         })
//         res.redirect('/login')
//     } catch {
//         res.redirect('/signup')
//     }
//     console.log(users)
// })

app.listen(4000);