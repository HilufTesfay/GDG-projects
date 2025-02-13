import axios from "axios";
import _ from "lodash";
// task 1
//public api
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";
//API call using axios
const response = axios.get(API_URL);
//returns promise
response
  .then((res) => {
    console.log("feched data", res.data);
  })
  .catch((err) => {
    console.log(err);
  });
//task two
const students = [
  {
    name: "alex",
    grade: "A",
    year: 4,
  },
  {
    name: "gere",
    grade: "B+",
    year: 5,
  },
  {
    name: "habrom",
    grade: "A+",
    year: 2,
  },
];
const nameOfStudents = _.map(students, "name");
const fifthYear = _.filter(students, (s) => s.year > 4);
console.log(`all Students: ${nameOfStudents}`);
console.log(`fifth year studens: ${fifthYear}`);
