import http from "http";
const hostname = "127.0.0.1";
const port = 3000;
const users = [
  {
    id: "123",
    name: "alex",
    email: "alex@gmail.com",
  },
  {
    id: "456",
    name: "nardi",
    email: "nardi@gmail.com",
  },
  {
    id: "678",
    name: "eyob",
    email: "eyob@gmail.com",
  },
];
//get users
const getUsers = () => JSON.stringify(users);
//add user
const addUser = (user) => {
  users.push(user);
  const response = {
    message:
      Object.keys(user).length > 0
        ? "user added successfully"
        : "no data found",
    user: user,
  };
  return JSON.stringify(response);
};
//update user
const updateUser = (id, data) => {
  const index = users.findIndex((user) => user.id === id);
  if (index) {
    Object.assign(users[index], data);
  }
  const response = {
    message: index ? "upadated successfuli" : "User not found",
    user: users[index],
  };
  return JSON.stringify(response);
};
//delete user
const deleteUser = (id) => {
  let deletedUser = "";
  const user = users.find((user) => user.id === id);

  if (user) {
    const index = users.indexOf(user);
    deletedUser = users.splice(index, 1)[0];
  }
  const response = {
    message:
      Object.keys(deletedUser).length > 0
        ? "user deleted successfully"
        : "User not found",
    user: deletedUser,
  };
  return JSON.stringify(response);
};
const server = http.createServer(async (req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "application/json");
  if (url === "/users") {
    switch (method) {
      case "GET":
        res.statusCode = 200;
        res.end(getUsers());
        break;
      case "POST":
        let body = "";
        res.statusCode = 200;
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          try {
            const parsedData = JSON.parse(body);
            res.end(addUser(parsedData));
            console.log(users);
          } catch (error) {
            console.log(error);
            res.end(JSON.stringify("parsing error"));
          }
        });
    }
  } else if (url.startsWith("/users/")) {
    const id = url.substring("/users/".length);
    switch (method) {
      case "PUT":
        let data = "";
        req.on("data", (chunk) => (data += chunk));
        req.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            res.end(updateUser(id, parsedData));
            console.log(users);
          } catch (err) {
            console.log(err);
            res.end("parsing error");
          }
        });
        break;
      case "DELETE":
        const result = deleteUser(id);
        res.end(result);
        console.log(users);
        break;
    }
  }
});
server.listen(port, () =>
  console.log(`server is running at ${hostname}/${port}`)
);
