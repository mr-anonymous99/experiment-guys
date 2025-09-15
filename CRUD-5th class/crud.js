import express from 'express';


const app = express();
const port = 3000;
app.use(express.json()); // Middleware to parse JSON bodies
//CURD
//C - Create - post
//U - update - put
//R - read - get       
//D - delete - delete

let studentsData = [];
let  nextId = 1;
app.get('/', (req, res) => {
  res.send('Hello express');
});

app.post('/student', (req, res) => {
    const{studentName,studentRollno}= req.body;
    const newstudent = {
        id: nextId++,
        studentName,
        studentRollno
    };
    studentsData.push(newstudent);
    res.send("new student created")



  res.send('student details');    
});

app.put('/all-student/:id', (req, res) => {
    res.send(studentsData)
});
app.put('/student/:id', (req, res) => {
  const student = studentsData.find((student) => student.id === parseInt(req.params.id));
    if (!student) {
         res.send('Student not found');
    }
    const { studentName, studentRollno } = req.body;
    student.studentName = studentName;
    student.studentRollno = studentRollno;
    res.send(student);
});
app.delete('/student/:id', (req, res) => {
  const student = studentsData.find((student) => student.id === parseInt(req.params.id));
    if ( index === -1) {
        return res.send('Student not found');
    }
    studentsData.splice(Index, 1);
    res.send("student data deleted");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}  );