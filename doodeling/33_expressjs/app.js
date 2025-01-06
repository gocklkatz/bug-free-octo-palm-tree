import express from "express";

const app = express();
const port = 3000;

// Direct match routes

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
});

app.get("/cats", (req, res) => {
  res.send("<h1>Get request to /cats</h1>");
});

app.post("/cats", (req, res) => {
  res.send("<h1>Post request to /cats</h1>");
});

app.get("/dogs", (req, res) => {
  res.send("<h1>Dogs</h1>");
});

// app.get("*", (req, res) => {
//   res.status(404).send("<h1>404 Page Not Found</h1>");
// });

// Path parameters

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(
    `<h1>Welcome to the <span style="color: purple;">${subreddit}</span> subreddit!</h1>`
  );
});

// Query parameters
app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("<h1>Nothing found if nothing searched</h1>");
  } else {
    res.send(`<h1>Search results for: ${q}</h1>`);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
