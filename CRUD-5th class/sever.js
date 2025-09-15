import express from 'express';


const app = express();
const port = 3000;
app.use(express.json()); // Middleware to parse JSON bodies
//CURD
//C - Create - post
//u - update - put
//r - read - get       
//d - delete - delete

let studentsData = [];
let  nextId = 1;
app.get('/', (req, res) => {
  res.send('Hello express');
});

app.post('/student', (req, res) => {
  const { studentName, studentRollno } = req.body;
  const newstudent = {
    id: nextId++,
    studentName,
    studentRollno
  };
  studentsData.push(newstudent);
  res.json({ message: "New student created", student: newstudent });
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}  );