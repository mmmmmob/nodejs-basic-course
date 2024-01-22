import express from "express";

const app = express();
const port = 8000;

// Install express and config express to expose port 8000.
app.listen(port, () => {
  console.log("Server has started at :", port);
});

// calling to "http://localhost:8000" return "Hello my friends".
app.get("/", (req, res) => {
  res.send("Hello,World!");
});

// calling to "http://localhost:8000/about-us" return "About Us".
app.get("/about-us", (req, res) => {
  res.send("About Us");
});

// return the 401 error with the proper error message when accessing "http://localhost:8000/admin".
app.get("/admin", (req, res) => {
  res.status(401);
  res.send("Cannot Access");
});

// redirect the "http://localhost:8000/home" to "http://localhost:8000/about-us"
app.get("/home", (req, res) => {
  res.redirect("/about-us");
});
