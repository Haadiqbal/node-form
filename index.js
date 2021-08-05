const express = require('express')
const app = express()
const path = require('path');
const port = 3000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded())

const users = [
  {
    name: "name",
    email: "user@email.com",
    password: "password",
    address: "address"
  }
];


app.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(x => x.email === email && x.password === password)
    if (!user) return res.status(404).send({ error: true, msg: "Invalid Email or Password" });
    //  return res.status(200).send(user);
    else if (user) {
      const cookie_eamil = "user@email.com";
      const cookie_password = "password";
      if (cookie_eamil && cookie_password) {
        console.log(cookie_eamil)
        console.log(cookie_password)
      }
      else console.log("no local storage found");
      if (cookie_eamil == user.email && cookie_password == user.password) {
        res.redirect('/dashboard');
      } else return res.status(404).send({ error: true, msg: "Invalid Email or Password" });
    }
    //console.log(user.email);
  } catch (err) {
    return res.status(500).send({ error: true, msg: "Internal Server Error!" })
  }
})

app.use(express.static(path.join(__dirname, 'templates')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/pages/index.html"));
})

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/pages/index.html"));
})

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/pages/dashboard.html"));
})

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/pages/login.html"));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})