import express from 'express'

//multer is used to handle multipart/form-data, which is primarily used for uploading files in the form mailny in their form-data in the postman
import multer from 'multer'

const storage=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        // this is used to set the name of the file that is being uploaded
        cb(null,`filename-${file.fieldname} -${Date.now()} -${file.originalname}`)
    }
})

//this disk is used to store the file in the disk and not in the memory


const app=express()
const upload=multer({
    storage,
    limits:{fileSize:102400}
})

// const folder=multer.diskStorage('uploads')
//this makes the data to appear in teh console
app.use(express.urlencoded({extended:true}))

app.use(upload.single('image'))
app.use(express.static('public'))
app.use('/saji',express.static('images'))
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.send("this is what i have done")
})

app.get('/cse',(req,res)=>{
    const name='vinay _sajan'
    // res.render('index',{name})
    // res.sendFile(__dirname+'/public/index.html')
    // res.sendFile(process.cwd() + "/public/index.html");
})


app.get('/cse/:name',(req,res)=>{
    const name=req.params.name 
    console.log(name);
    
    res.send(`hello there ${name}`)
})

app.get('/ece',(req,res)=>{
    const name=req.query.keyword
    // kind alike using to esarch for a particular thing in the DB using kkike this  http://localhost:3000/ece?keyword=vinay this keyword section is used for this 
    res.send(`searching for ${name}`)

})

//this thind i sused to send data from th frontend to backend using th post property of the express 
app.post('/signup',(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    
        res.send('form data submitted')
})
app.listen(3000,()=>{
    console.log('server running to port 3000');
})