import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to node azure CI/CD!");
});

app.get("/about", (req, res) => {
    res.json({
        message: "This is an simple node app",
        developer: "Eileen Wu"
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on ${PORT}`);
});