const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.setHeader("X-Timestamp", Date.now())
  let message = req.query.message
  const lang = req.headers["X-lang"]
  if (message === "") {
    res.status(400)
    if (lang === "en") {
      message = "message is empty"
    } else {
      message = "messageの値が空です。"
    }
  }
  res.send({ message })
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

// const res = await fetch('http://site.exmaple:3000/api?message=', {
//   headers: { "X-Lang": "en" }
// })
// await res.json()