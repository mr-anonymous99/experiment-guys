import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bodyParser from 'body-parser'
const app=express()

const User={
    username:"admin",
    password:"1234"
}
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(session({
  secret: 'mani ji is bossuu',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge:60000000}
}));

// app.get('/',(req,res)=>{
//     res.send("hello mani shankar")

// })

//for sending the cookies
app.get('/mani',(req,res)=>{
    res.cookie('username','praneeth the blessian',{maxAge:6000})
    res.send("cookies vachayo inspect chesi chudu")
})

//for removing the cookies
app.get('/remove-mani',(req,res)=>{
    res.clearCookie("username");
    res.send("mani cookie is removed (R I P)")
})

//login
// app.get('/login',(req,res)=>{
//     req.session.username="vinay";
//     res.send("session started and cookie set.....")
// })

//logout
// app.get('/logout',(req,res)=>{
//     req.session.destroy();
//     res.send("session destr0yed so logged outen !");
// })

//dashboard
app.get('/dashboard',(req,res)=>{
    if(req.session.usename){
        res.send(`welcome to dashboard ${req.session.username}`);
    }
    else{
        res.send("session expired");
    }
})

//form section
app.get('/',(req,res)=>{
    res.send(`
        <h2>login form</h2>
        <form method="post" action="/login">
        <input name="username" placeholder="enter your username" required /><br/>
        <input name="password" placeholder="enter your password" required />
        <br/>
        <button type="submit">submit</button>
        </form>
        `)
})

//sending data and verifying
app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    if(username===User.username && password===User.password){
        req.session.user=username;
        res.redirect('/profile')
    }
    else{
        res.send(`incorrect pass or username !!! <a href="/" >try again</a>`)
    }
})
app.post('/logout',(req,res)=>{
    req.session.destroy();
    res.send("logged out succesfully <a href="/" >login</a>")
})

//profile route

app.get('/profile',(req,res)=>{
    if (req.session.user) {
        res.send(`welcome ${req.session.user} <br/>
            wanna <a href="/" >logout</a>`)
    }
    else{
        res.send(`access denied .......login<a href="/">again</a>`)
    }
})
app.listen(3000,(req,res)=>{
    console.log('sever running on port 3000');
    
})