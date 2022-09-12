const express = require('express')

const userRouter = require("./src/router/user")
const app = express()
const PORT = process.env.PORT || 80
app.use(express.json())
app.use(userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
})