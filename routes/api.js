const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send({ message: "Hello" })
})

router.use(express.json())
router.post("/", (req, res) => {
  const body = req.body
  console.log(body)
  res.end()
})

module.exports = router

// JS上でリクエストする時
// await fetch("http://site.example:3000/api/", {
//   method: "POST",
//   body: JSON.stringify({ message: "こんにちは" }),
//   headers: { "Content-type": "application/json" }
// })