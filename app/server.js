const express = require("express")
const codeRouter = require('./router/codeRouter')
const app = express()
app.use("/code",codeRouter)


app.get("/", (req, res) => {
  res.json({ app_name: "rce", version: 0.1, author: "Debananda Nayak" }).status(200)
})

app.listen(3000, () => {
    console.log("App is running on port 3000")
  })