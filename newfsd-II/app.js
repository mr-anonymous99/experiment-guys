import express from 'express'

const app = express()

app.use('/cse',(req,res,next)=>{
  console.log('Middleware executed');
  res.on('finish',()=>{
    console.log('cse route finished');
    
  })
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/cse', (req, res) => {
  console.log('middleware executed for /cse');
  res.send('Hello cse')
})
app.get('/sajan', (req, res) => {
  res.send('Hello sajan')
})

app.listen(3000,(res,req)=>{
    console.log('server is running on port 3000');
})