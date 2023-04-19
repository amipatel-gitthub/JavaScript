const express = require("express")
const LoginModule = require("./Login/login");
const Module1 = require("./Module1/module1");
const Module2 = require("./Module2/module2");
const Module3 = require("./Module3/module3");

const app = express();
app.use(express.json());
app.use("/login", LoginModule);

app.use("/module1", Module1);
app.use("/module2", Module2);
app.use("/module3", Module3);


// app.get('/', (req, res) => res.send('Hello World!'))


app.listen(5251, () => {
    console.log("server listening on port 5251")
})