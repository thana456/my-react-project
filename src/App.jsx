const courseTitle = "Web Development with React"

function App() {
 const studentName = "Sarah"

 const student = {
 name: "Sarah",
 age: 20,
 track: "Software Engineering"
 }

 function sayHello() {
 return `Hello ${studentName}!`
 }

 return (
 <div>
 <h1>My First React Component</h1>

 <p>Student Name: {studentName}</p>

 <p>Course Title: {courseTitle}</p>

 <p>
 Welcome to {courseTitle}, {studentName}!
 </p>

 <label htmlFor="username">
 Enter your name:
 </label>

 <br />

 <input type="text" id="username" />

 <h2>Student Information</h2>

 <p>Name: {student.name}</p>
 <p>Age: {student.age}</p>
 <p>Track: {student.track}</p>

 <p>{sayHello()}</p>
 </div>
 )
}