const express = require("express")
const { ipLimit } = require("./middleware/rate.middleware")

const app = express()

app.get("/", (req,res) => {
    res.send("hello")
})

app.use(ipLimit)

app.get('/ip', (req, res) => res.send(request.ip))

app.post("/ip-demo", (req, res) => {
    res.send({ message: "Resource created successfully" });
});


app.listen(4500, () => {
    console.log('server is running')
})