const express = require("express")

const codeRouter = express.Router()

codeRouter.get("/", (req, res) => {
  res.json({message:"you are in code route and hy"})
})

codeRouter.post("/", async (req, res) => {
  const fileName = Date.now()
  const codeInfo = req.body
  await sendToQueue({ ...codeInfo, file_name: fileName })
  res.redirect(`/${id}`)
})

codeRouter.get("/:id", async (req, res) => {
  const id = req.params.id
  const data = await getDataFromRedis(id)
  res.json(data)
})

module.exports = codeRouter
