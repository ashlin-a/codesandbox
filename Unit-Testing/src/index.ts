import express from "express"

export const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.post("/reverse", (req,res)=>{
    const str: String = req.body.word
    const reverse = str.split('').reverse().join('')
    res.send({
        reverse
    })
})



