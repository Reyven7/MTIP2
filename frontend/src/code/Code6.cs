import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>
{
    res.send("Hello World from Docker!");
});

app.get("/random", (req, res) =>
{
const randomNumber = Math.floor(Math.random() * 100) + 1;
res.send(`Random number: ${ randomNumber}`);
});

app.listen(port, () =>
{
    return console.log(`Express is listening at http://localhost:${port}`);
});
