import axios from "axios";
//public api
const API_URL = "https://jsonplaceholder.typicode.com/todos/1";
//API call using axios
const response = axios.get(API_URL);
//returns promise
response
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
